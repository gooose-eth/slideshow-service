<?php
namespace Core;
use Exception, redgoose\Paginate, redgoose\Console;

/**
 * Model
 */

class Model {

  private $connect;

  /**
   * construct
   *
   * @throws Exception
   */
  public function __construct()
  {
    try
    {
      //
    }
    catch(Exception $e)
    {
      throw new Exception('Failed connect database.');
    }
  }

  public function index()
  {
    return 'index()';
  }

}
