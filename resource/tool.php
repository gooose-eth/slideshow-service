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

/**
 * install
 *
 * @throws Exception
 */
function install()
{
  $tableName = 'slideshow';

  try
  {
    $dotenv = Dotenv::createImmutable(__PATH__);
    $dotenv->load();

    // create instance
    $model = new Model();

    // set default timezone
    if ($_ENV['TIMEZONE'])
    {
      date_default_timezone_set($_ENV['TIMEZONE']);
    }

    // confirm
    echo "The delete '$tableName' table. Do you want to proceed? (y/N) ";
    $ask = fgets(STDIN);
    if (trim(strtolower($ask)) !== 'y')
    {
      echo "Canceled install\n";
      exit;
    }

    // delete table
    $model->db->exec("drop table $tableName");

    // create table
    $sql = file_get_contents(__PATH__.'/resource/db.default.sql');
    $qr = $model->db->exec($sql);
    if ($qr) throw new Exception('Failed create table');

    // disconnect database
    $model->disconnect();
  }
  catch (Exception $e)
  {
    echo "ERROR: Failed install. ({$e->getMessage()})\n";
  }
}

// switching action
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
    try
    {
      install();
    }
    catch(Exception $e)
    {
      echo 'ERROR: '.$e->getMessage();
    }
    break;
  default:
    echo "ERROR: no argv. `php tool.php {install}`\n";
    break;
}
