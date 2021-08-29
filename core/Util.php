<?php
namespace Core;
use Exception, redgoose\Paginate, redgoose\Console;

/**
 * AppUtil
 */

class Util {

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


}
