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

  // post
  try
  {
    $res = null;
    switch ($_target)
    {
      case 'post/create':
        $res = Submit::create();
        break;
      case 'post/manage':
        $res = Submit::manage();
        break;
    }
    if ($res)
    {
      Util::setHeader('json');
      echo (object)[
        'success' => true,
        'data' => '',
      ];
      exit;
    }
  }
  catch(Exception $e)
  {
    echo (object)[
      'success' => false,
      'message' => $e->getMessage(),
    ];
    exit;
  }

  // route
  switch($_target)
  {
    case 'index':
      $model = new Model();
      $res = $model->index();
      $blade->render('index', (object)[
        'title' => $_ENV['TITLE'],
        'target' => $_target,
        'paginate' => $res->paginate,
      ]);
      break;
    case 'watch':
    case 'create':
    case 'manage':
      $data = (object)[
        'title' => $_ENV['TITLE'],
        'mode' => $_target,
      ];
      // get model data
      if ($_target === 'watch' or $_target === 'manage')
      {
        if (!isset($_params->id))
        {
          throw new Exception('No slideshow id');
        }
        $data->id = $_params->id;
        $model = new Model();
        Console::log($_params->id);
        // TODO: `target=(watch|manage)`라면 모델에 들어있는 데이터를 가져온다.
      }
      // create token
      $data->token = Token::create()->jwt;
      // render view
      $blade->render('slideshow', $data);
      break;
    case 'about':
      $blade->render('about', (object)[
        'title' => $_ENV['TITLE'],
        'target' => $_target,
      ]);
      break;
  }
}
catch(Exception $e)
{
  $blade->render('error', (object)[
    'title' => $_ENV['TITLE'],
    'target' => 'error',
  ]);
}
