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

// ready session
Util::readySession();

// set blade
$blade = new Blade(__PATH__.'/view', __PATH__.'/cache');

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
        ];
        Util::saveSession($res->address, $res->key);
        break;
      case 'post/create':
        $res = Submit::create();
        break;
      case 'post/manage':
        $res = Submit::manage($_params->address);
        break;
      case 'post/delete':
        $res = Submit::delete($_params->address);
        break;
      case 'post/logout':
        Util::removeSession($_params->address);
        $res = (object)[];
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
      $where = 'visible=1';
      $total = $model->count((object)[ 'where' => $where ]);
      $paginate = $model->createPaginate($total, $page, $size);
      $index = $model->index((object)[
        'field' => 'address,title,description,thumbnail,visible,regdate',
        'where' => $where,
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
      if ((int)$item->visible === 1 || Util::checkSession($data->address))
      {
        // set meta data
        $data->title = $item->title;
        $data->description = $item->description;
        if (isset($item->thumbnail)) $data->banner = $item->thumbnail;
        // set slideshow data
        Submit::checkSlideshowData($item->slideshow);
        $data->slideshow = rawurlencode(json_encode($item->slideshow));
        $data->form = rawurlencode(json_encode((object)[
          'address' => $item->address,
          'visible' => (int)$item->visible === 1,
        ]));
        // update hit
        if (!Util::checkCookie('slideshow-hit-'.$data->address))
        {
          $model->edit([ 'hit=' . ((int)$item->hit + 1) ], '`key`='.$item->key);
          Util::setCookie('slideshow-hit-'.$data->address, '1', 7);
        }
      }
      else
      {
        // set meta data
        $data->title = '슬라이드쇼 인증하기';
        $data->description = '이 슬라이드쇼를 보려면 인증해야 합니다.';
        $data->slideshow = null;
        $data->form = null;
      }
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
        $data->slideshow = rawurlencode(json_encode($item->slideshow));
        $data->form = rawurlencode(json_encode((object)[
          'key' => (int)$item->key,
          'title' => $item->title,
          'description' => $item->description,
          'thumbnail' => $item->thumbnail,
          'address' => $item->address,
          'visible' => (int)$item->visible === 1,
        ]));
        $data->token = Token::create()->jwt;
        // render view
        $blade->render('slideshow', $data);
      }
      catch(Exception $e)
      {
        header("Location: {$_ENV['PATH_URL']}/");
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
