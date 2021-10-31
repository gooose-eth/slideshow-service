<?php
namespace Core;
use Exception;

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
    Util::checkExistValue($_POST, [ 'id', 'password' ]);

    // set model
    $model = new Model();

    return (object)[
      'success' => true,
    ];
  }

  /**
   * create
   *
   * @return object
   * @throws Exception
   */
  static public function create(): ?object
  {
    Util::checkExistValue($_POST, [ 'title', 'description', 'slideshow', 'id', 'password' ]);

    // set model
    $model = new Model();

    // set slideshow data
    $slideshow = json_decode(urldecode($_POST['slideshow']), false);
    self::checkSlideshowData($slideshow);

    // create address
    $address = uniqid();

    // set thumbnail
    $thumbnail = $_POST['thumbnail'] ?? '';
    // TODO: 썸네일 이미지는 따로 이미지 파일로 올려야 하려나..
    // TODO: var_dump(isset($slideshow->tree->{$slideshow->group}[0]));

    // insert item from database
    try
    {
      $model->insert((object)[
        'key' => null,
        'address' => $address,
        'title' => $_POST['title'],
        'description' => $_POST['description'],
        'slideshow' => urlencode(json_encode($slideshow, false)),
        'id' => $_POST['id'],
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
   */
  static public function manage(): ?object
  {
    try
    {
      Util::checkExistValue($_POST, [ 'id', 'password', 'slideshow' ]);
      return (object)[];
    }
    catch(Exception $e)
    {
      return null;
    }
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

}
