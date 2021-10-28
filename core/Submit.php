<?php
namespace Core;
use Exception;

/**
 * Submit
 * 데이터 등록, 수정을 담당한다.
 */
class Submit {

  /**
   * create
   */
  static public function create(): string
  {
    $res = (object)[];
    try
    {
      Util::checkExistValue($_POST, [ 'id', 'password', 'slideshow' ]);
//      $res = (object)[
//        'id' => $_POST['id'],
//        'password' => $_POST['password'],
//        'slideshow' => $_POST['slideshow'] ?? '',
//      ];
      $res = (object)[
        'success' => true,
        'data' => 'sample data',
      ];
    }
    catch (Exception $e)
    {
      $res = (object)[
        'success' => false,
        'message' => $e->getMessage(),
      ];
    }
    finally
    {
      return json_encode($res, JSON_PRETTY_PRINT);
    }
  }

  /**
   * manage
   */
  static public function manage(): string
  {
    $res = (object)[];
    try
    {
      Util::checkExistValue($_POST, [ 'id', 'password', 'slideshow' ]);
    }
    catch(Exception $e)
    {
      $res = (object)[
        'success' => false,
        'message' => $e->getMessage(),
      ];
    }
    finally
    {
      return json_encode($res, JSON_PRETTY_PRINT);
    }
  }

  /**
   * edit
   */
  static public function edit()
  {
    // edit
  }

}
