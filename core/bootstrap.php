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
      Token::check($_SERVER['HTTP_AUTHORIZATION'] ?? '');
    }
    switch ($_target)
    {
      case 'post/auth':
        $res = Submit::auth();
        $res = (object)[
          'key' => (int)$res->key,
          'address' => $res->address,
          'id' => $res->id,
        ];
        break;
      case 'post/create':
        $res = Submit::create();
        break;
      case 'post/manage':
        $res = Submit::manage((int)$_params->key);
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
        'title' => '슬라이드쇼 만들기 / '.$_ENV['TITLE'],
        'mode' => $_target,
      ];
      // create token
      $data->token = Token::create()->jwt;
      // render view
      $blade->render('slideshow', $data);
      break;
    case 'watch':
      $data = (object)[ 'mode' => $_target ];
      // get model data
      if (!isset($_params->address))
      {
        throw new Exception('No slideshow address');
      }
      $data->address = $_params->address;
      $model = new Model();
      $item = $model->item((object)[ 'where' => "`address`='$_params->address'" ]);
      // set title
      $data->title = $item->title.' / '.$_ENV['TITLE'];
      // set slideshow data
      Submit::checkSlideshowData($item->slideshow);
      $data->slideshow = urlencode(json_encode($item->slideshow));
      $data->form = urlencode(json_encode((object)[
        'id' => $item->id,
        'address' => $item->address,
      ]));
      // create token
      $data->token = Token::create()->jwt;
      // render view
      $blade->render('slideshow', $data);
      break;
    case 'manage':
      try
      {
        $item = Submit::auth();
        $data = (object)[
          'title' => $_ENV['TITLE'],
          'mode' => $_target,
        ];
        $data->slideshow = urlencode(json_encode($item->slideshow));
        $data->form = urlencode(json_encode((object)[
          'key' => (int)$item->key,
          'id' => $item->id,
          'title' => $item->title,
          'description' => $item->description,
          'thumbnail' => $item->thumbnail,
          'address' => $item->address,
        ]));
        $data->token = Token::create()->jwt;
        // render view
        $blade->render('slideshow', $data);
      }
      catch(Exception $e)
      {
        header("Location: {$_ENV['PATH_URL']}");
        exit;
      }
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
      'code' => (int)$_ENV['DEBUG'] === 1 ? (int)$e->getCode() : 500,
      'message' => (int)$_ENV['DEBUG'] === 1 ? $e->getMessage() : 'Something is wrong. please try again.',
    ]);
  } catch (Exception $e) {}
}
