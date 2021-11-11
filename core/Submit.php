<?php
namespace Core;
use Exception;
use redgoose\Console;

/**
 * Submit
 * 데이터 등록, 수정을 담당한다.
 */
class Submit {

  /**
   * auth
   *
   * @return object
   * @throws Exception
   */
  static public function auth(): ?object
  {
    Util::checkExistValue($_POST, [ 'address', 'password' ]);
    $model = new Model();
    $item = $model->item((object)[ 'where' => "`address`='{$_POST['address']}'" ], true);
    Util::verifyPassword($_POST['password'], $item->password);
    unset($item->password);
    return $item;
  }

  /**
   * create
   *
   * @return object
   * @throws Exception
   */
  static public function create(): ?object
  {
    Util::checkExistValue($_POST, [ 'title', 'description', 'slideshow', 'password' ]);

    // set model
    $model = new Model();

    // set slideshow data
    $slideshow = json_decode(urldecode($_POST['slideshow']), false);
    self::checkSlideshowData($slideshow);

    // create address
    $address = uniqid();

    // set thumbnail
    $thumbnail = $_POST['thumbnail'] ?? '';

    // check exist item
    $cnt = $model->count((object)[ 'where' => "`address`='$address'" ]);
    if ($cnt > 0)
    {
      throw new Exception('Exist slideshow item.');
    }

    // insert item from database
    try
    {
      $model->insert((object)[
        'key' => null,
        'address' => $address,
        'title' => $_POST['title'],
        'description' => $_POST['description'],
        'slideshow' => urlencode(json_encode($slideshow, false)),
        'password' => Util::createPassword($_POST['password']),
        'regdate' => date('Y-m-d H:i:s'),
        'update' => date('Y-m-d H:i:s'),
        'thumbnail' => $thumbnail,
      ]);
    }
    catch (Exception $e)
    {
      throw new Exception((int)$_ENV['DEBUG'] === 1 ? $e->getMessage() : 'Failed to insert item from database.');
    }

    // get item
    $key = $model->getLastKey();
    $item = $model->item((object)[ 'where' => "`key`={$key}" ]);
    unset($item->password);
    return $item;
  }

  /**
   * manage
   *
   * @param string $address
   * @return object
   * @throws Exception
   */
  static public function manage($address): ?object
  {
    if (count($_POST) <= 0) throw new Exception('no post data');

    // set model
    $model = new Model();

    // set data
    $data = [];
    if (isset($_POST['title']) && $_POST['title'])
    {
      $data[] = "title='{$_POST['title']}'";
    }
    if (isset($_POST['description']) && $_POST['description'])
    {
      $data[] = "description='{$_POST['description']}'";
    }
    if (isset($_POST['slideshow']) && $_POST['slideshow'])
    {
      $data[] = "slideshow='{$_POST['slideshow']}'";
    }
    if (isset($_POST['thumbnail']) && $_POST['thumbnail'])
    {
      $data[] = "thumbnail='{$_POST['thumbnail']}'";
    }
    if (isset($_POST['password']) && $_POST['password'])
    {
      $data[] = "password='".Util::createPassword($_POST['password'])."'";
    }

    // edit item from database
    $model->edit($data, "`address`='$address'");

    // return
    return $model->item((object)[ 'where' => "`address`='$address'" ]);
  }

  /**
   * check slideshow data
   *
   * @param object $src
   * @throws Exception
   */
  static public function checkSlideshowData($src): void
  {
    try
    {
      if (!isset($src->group)) throw new Exception();
      if (!isset($src->tree)) throw new Exception();
      if (!isset($src->preference)) throw new Exception();
    }
    catch(Exception $e)
    {
      throw new Exception('Invalid slideshow.');
    }
  }

  /**
   * delete
   *
   * @param string $address
   * @return bool
   * @throws Exception
   */
  static public function delete($address): ?bool
  {
    Util::checkExistValue($_POST, [ 'password' ]);

    // set model
    $model = new Model();

    // get item
    $item = $model->item((object)[
      'field' => '`key`,password',
      'where' => "`address`='$address'",
    ], true);

    // check password
    Util::verifyPassword($_POST['password'], $item->password);

    // delete item
    $model->delete("`address`='$address'");

    // output
    return true;
  }

}
