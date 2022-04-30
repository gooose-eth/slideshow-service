<?php
namespace Core;
use Exception, Dotenv\Dotenv;

// check environment
if (php_sapi_name() !== 'cli')
{
  echo 'Can not run in browser.';
  exit;
}

// load autoload
require __DIR__.'/../vendor/autoload.php';

// set static values
define('__SLIDESHOW__', true);
define('__PATH__', realpath(__DIR__.'/../'));
define('__TABLE_NAME__', 'slideshow');

/**
 * load ENV
 */
function loadEnv(): void
{
  $dotenv = Dotenv::createImmutable(__PATH__);
  $dotenv->load();
}

/**
 * install
 *
 * @throws Exception
 */
function install()
{
  try
  {
    // setup
    loadEnv();
    $model = new Model();

    // set default timezone
    if ($_ENV['TIMEZONE'])
    {
      date_default_timezone_set($_ENV['TIMEZONE']);
    }

    // confirm
    echo "The delete '".__TABLE_NAME__."' table. Do you want to proceed? (y/N) ";
    $ask = fgets(STDIN);
    if (trim(strtolower($ask)) !== 'y')
    {
      echo "Canceled install\n";
      exit;
    }

    // delete table
    try
    {
      $model->db->exec("drop table ".__TABLE_NAME__);
    }
    catch (Exception $e)
    {}

    // create table
    $sql = file_get_contents(__PATH__.'/resource/db.default.sql');
    $qr = $model->db->exec($sql);
    if ($qr) throw new Exception('Failed create table');

    // disconnect database
    $model->disconnect();

    // print message
    echo "[SUCCESS] Complete install";
  }
  catch (Exception $e)
  {
    echo "[ERROR] Failed install. ({$e->getMessage()})\n";
  }
}

/**
 * change password
 *
 * @param string $address
 * @param string $inputPassword
 * @throws Exception
 */
function changePassword($address, $inputPassword)
{
  try
  {
    // check id,password
    if (!$address) throw new Exception('Please input address');
    if (!$inputPassword) throw new Exception('Please input password');

    // setup
    loadEnv();
    $model = new Model();

    // make password
    $password = Util::createPassword($inputPassword);

    // update database
    $model->edit([ "`password`='$password'" ], "`address`='$address'");

    // disconnect database
    $model->disconnect();

    // print output
    echo "[SUCCESS] Complete change password.";
  }
  catch(Exception $e)
  {
    echo '[ERROR] '.$e->getMessage();
  }
}

/**
 * delete item
 *
 * @param string $keyName
 * @param string $key
 * @throws Exception
 */
function deleteItem($keyName, $key)
{
  try
  {
    // check value
    if (!$keyName) throw new Exception('Please input keyName.');
    if (!$key) throw new Exception('Please input key.');

    // setup
    loadEnv();
    $model = new Model();
    $where = '';

    // set where
    switch ($keyName)
    {
      case 'key':
        $where = "`key`=".(int)$key;
        break;
      case 'address':
        $where = "`$keyName`='$key'";
        break;
    }

    // update database
    $model->delete($where);

    // disconnect database
    $model->disconnect();

    // print output
    echo "[SUCCESS] Complete remove item. ($keyName=$key)";
  }
  catch (Exception $e)
  {
    echo '[ERROR] '.$e->getMessage();
  }
}

/**
 * delete all
 *
 * @throws Exception
 */
function deleteAll(): void
{
  try
  {
    // setup
    loadEnv();
    $model = new Model();

    // confirm
    echo "Are you sure you want to delete all your items? (y/N) ";
    $ask = fgets(STDIN);
    if (trim(strtolower($ask)) !== 'y')
    {
      echo "[CANCELED] Canceled delete all items\n";
      exit;
    }

    // run database action
    $model->deleteAll();

    // disconnect database
    $model->disconnect();

    // print output
    echo "[SUCCESS] Complete delete all items.";
  }
  catch (Exception $e)
  {
    echo '[ERROR] '.$e->getMessage();
  }
}

/**
 * delete item
 *
 * @throws Exception
 */
function clearData()
{
  try
  {
    // setup
    loadEnv();
    $model = new Model();

    // confirm
    echo "Are you sure you want to delete all your data? (y/N) ";
    $ask = fgets(STDIN);
    if (trim(strtolower($ask)) !== 'y')
    {
      echo "[CANCELED] Canceled clear\n";
      exit;
    }

    // run database action
    $model->clear();

    // disconnect database
    $model->disconnect();

    // print output
    echo "[SUCCESS] Complete clear data.";
  }
  catch (Exception $e)
  {
    echo '[ERROR] '.$e->getMessage();
  }
}

try
{
  // switching action
  $argv[1] = $argv[1] ?? '';
  switch ($argv[1])
  {
    case 'ready':
      if (file_exists(__PATH__.'/.env'))
      {
        $message = "Exist `.env` file\n";
      }
      else
      {
        // copy .env file
        if (!copy(__PATH__.'/resource/.env.example', __PATH__.'/.env'))
        {
          $message = "Can't copy the `.env` file.\n";
        }
        else
        {
          $message = "Success make `.env` file.\n";
        }
      }
      echo $message;
      break;
    case 'install':
      install();
      break;
    case 'change-password':
      changePassword($argv[2] ?? null, $argv[3] ?? null);
      break;
    case 'delete-item':
      deleteItem($argv[2] ?? null, $argv[3] ?? null);
      break;
    case 'delete-all':
      deleteAll();
      break;
    case 'clear':
      clearData();
      break;
    default:
      echo "ERROR: no argv. `php tool.php {install}`\n";
      break;
  }
}
catch (Exception $e)
{
  echo "ERROR: {$e->getMessage()}\n";
}
