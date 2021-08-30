<?php
namespace Core;
use Exception, PDO, redgoose\Paginate, redgoose\Console;

/**
 * Model
 */

class Model {

  private $connect;
  public $db;

  /**
   * construct
   * connect database
   *
   * @throws Exception
   */
  public function __construct()
  {
    try
    {
      $this->db = new PDO(
        'mysql:dbname='.$_ENV['DB_DATABASE'].';host='.$_ENV['DB_HOST'].';port='.$_ENV['DB_PORT'],
        $_ENV['DB_USERNAME'],
        $_ENV['DB_PASSWORD']
      );
      $this->db->query('set names utf8');
    }
    catch(Exception $e)
    {
      throw new Exception('Failed connect database.');
    }
  }

  public function disconnect()
  {
    $this->db = null;
  }

  public function index()
  {
    return 'index()';
  }

}
