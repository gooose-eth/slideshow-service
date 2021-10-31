<?php
namespace Core;
use Exception, redgoose\Paginate, redgoose\Console;

/**
 * Application Util
 */
class Util {

  /**
   * set header
   *
   * @param string $mode
   */
  static public function setHeader($mode = ''): void
  {
    switch ($mode)
    {
      case 'text':
        header('Content-Type: text/plain; charset=utf-8');
        break;
      case 'json':
        header('Content-Type: json/application; charset=utf-8');
        break;
      default:
        header('Content-Type: text/html; charset=utf-8');
        break;
    }
  }

  /**
   * error
   *
   * @param Exception $error
   * @param Blade $blade
   */
  static public function error(Exception $error, Blade $blade)
  {
    //
  }

  /**
   * get page number
   *
   * @return int
   */
  static public function getPage(): int
  {
    return (isset($_GET['page']) && (int)$_GET['page'] > 1) ? (int)$_GET['page'] : 1;
  }

  /**
   * convert date
   *
   * @param string $date
   * @return string
   */
  static public function convertDate(string $date="00000000000000"): string
  {
    $result = '';
    $o = substr($date, 0, 8);
    $result .= substr($o, 0, 4)."-";
    $result .= substr($o, 4, 2)."-";
    $result .= substr($o, 6, 8);
    return $result;
  }

  /**
   * check exist value
   * 배열속에 필수값이 들어있는지 확인
   *
   * @param array|object|null $target 확인할 배열
   * @param array|null $required 키값이 들어있는 배열
   * @throws Exception
   */
  public static function checkExistValue($target=null, $required=null)
  {
    if (!isset($target)) throw new Exception('No value `$target`');
    if ($required)
    {
      $target = (array)$target;
      foreach ($required as $k=>$v)
      {
        if (!array_key_exists($v, $target) || !$target[$v])
        {
          throw new Exception('Can not find `'.$v.'`.', 204);
        }
      }
    }
  }

  /**
   * output
   *
   * @param {object} $src
   */
  public static function output($src): void
  {
    self::setHeader('json');
    echo json_encode($src, JSON_PRETTY_PRINT);
  }

  /**
   * create password
   *
   * @param string $str
   * @return string
   */
  public static function createPassword(string $str=''): string
  {
    return password_hash($str, PASSWORD_DEFAULT);
  }

  /**
   * verify password
   *
   * @param string $pw1
   * @param string $pw2
   * @throws Exception
   */
  public static function verifyPassword($pw1, $pw2)
  {
    if (!password_verify($pw1, $pw2))
    {
      throw new Exception('Error verify password');
    }
  }

}
