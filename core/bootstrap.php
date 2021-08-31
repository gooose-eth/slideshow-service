<?php
namespace Core;
use Exception, Dotenv\Dotenv, redgoose\Console;

if (!defined('__SLIDESHOW__')) exit();

// load autoload
require __PATH__.'/./vendor/autoload.php';

// set dotenv
try
{
  $dotenv = Dotenv::createImmutable(__PATH__);
  $dotenv->load();
}
catch(Exception $e)
{
  echo 'ERROR: .env error';
  exit;
}

// ini_set
if ($_ENV['DEBUG'] === '1')
{
  error_reporting(E_ALL & ~E_NOTICE);
}

// set values
define('__ROOT__', $_ENV['PATH_RELATIVE']);
define('__URL__', $_ENV['PATH_URL']);
define('__DEBUG__', $_ENV['DEBUG'] === '1');

// set default timezone
if ($_ENV['TIMEZONE'])
{
  date_default_timezone_set($_ENV['TIMEZONE']);
}

// set blade
$blade = new Blade(__PATH__.'/view', __PATH__.'/cache/view');

try
{
  $router = new Router();

  // not found page
  if (!$router->match)
  {
    throw new Exception('Not found page', 404);
  }

  // play route
  $_target = $router->match['target'];
  $_params = (object)$router->match['params'];

  switch($_target)
  {
    case 'index':
      $model = new Model();
      $res = $model->index();
      $blade->render('index', (object)[
        'title' => $_ENV['TITLE'],
        'paginate' => '',
      ]);
      break;

    case 'view':
      break;

    case 'create':
      var_dump('create');
      break;

    case 'manage':
      var_dump('manage');
      break;

    case 'about':
      $blade->render('about', (object)[
        'title' => $_ENV['TITLE']
      ]);
      break;
  }
}
catch(Exception $e)
{
  var_dump('ERROR:', $e);
}
