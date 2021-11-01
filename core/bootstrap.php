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
    if (preg_match("/^post\//", $_target))
    {
      Token::get($_SERVER['HTTP_AUTHORIZATION'] ?? '');
    }
    switch ($_target)
    {
      case 'post/auth':
        $res = Submit::auth();
        break;
      case 'post/create':
        $res = Submit::create();
        break;
      case 'post/manage':
        $res = Submit::manage();
        break;
    }
    if ($res)
    {
      Util::output((object)[
        'success' => true,
        'data' => $res,
      ]);
      exit;
    }
  }
  catch(Exception $e)
  {
    Util::output((object)[
      'success' => false,
      'message' => $e->getMessage(),
    ]);
    exit;
  }

  // route
  switch($_target)
  {
    case 'index':
      $model = new Model();
      $page = (isset($_GET['page']) && (int)$_GET['page'] > 0) ? (int)$_GET['page'] : 1;
      $size = (int)$_ENV['INDEX_SIZE'];
      $total = $model->count((object)[]);
      $paginate = $model->createPaginate($total, $page, $size);
      $index = $model->index((object)[
        'field' => 'address,title,description,thumbnail,regdate',
        'limit' => [ ($page - 1) * $size, $size ],
        'order' => '`key`',
        'sort' => 'desc',
      ]);
      // create token
      $token = Token::create()->jwt;
      $blade->render('index', (object)[
        'title' => $_ENV['TITLE'],
        'target' => $_target,
        'index' => $index,
        'paginate' => $paginate,
        'token' => $token,
      ]);
      break;
    case 'create':
      $data = (object)[
        'title' => $_ENV['TITLE'],
        'mode' => $_target,
      ];
      // create token
      $data->token = Token::create()->jwt;
      // render view
      $blade->render('slideshow', $data);
      break;
    case 'watch':
    case 'manage':
      $data = (object)[
        'title' => $_ENV['TITLE'],
        'mode' => $_target,
      ];
      // get model data
      if (!isset($_params->id))
      {
        throw new Exception('No slideshow id');
      }
      $data->id = $_params->id;
      $model = new Model();
      $item = $model->item((object)[ 'where' => "`address`='{$_params->id}'" ]);
      // set slideshow data
      Submit::checkSlideshowData($item->slideshow);
      $data->slideshow = urlencode(json_encode($item->slideshow));
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
  try {
    $blade->render('error', (object)[
      'title' => $_ENV['TITLE'],
      'target' => 'error',
    ]);
  } catch (Exception $e) {}
}
