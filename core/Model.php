<?php
namespace Core;
use Exception, PDO, redgoose\Paginate, redgoose\Console;

/**
 * Model
 */

class Model {

  public PDO $db;

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

  /**
   * disconnect database
   */
  public function disconnect(): void
  {
    unset($this->db);
  }

  /**
   * index
   *
   * @return object
   * @throws Exception
   */
  public function index(): object
  {
    try
    {
      $result = (object)[];

      // set items
      $result->items = [];

      // make pagination
      // TODO: 목록값이 나오면 조정하기
      $result->paginate = $this->createPaginate(320, 12, 6);

      return $result;
    }
    catch(Exception $e)
    {
      throw new Exception($e->getMessage(), $e->getCode());
    }
  }

  /**
   * make pagination
   * 모바일과 데스크탑 네비게이션 엘리먼트를 만들어준다.
   *
   * @param int $total
   * @param int $page
   * @param int $size
   * @param array $params
   * @return object
   */
  private function createPaginate(int $total=0, int $page=1, int $size=10, array $params=[]): object
  {
    $result = (object)[
      'total' => $total,
      'page' => $page,
    ];
    $paginate = new Paginate((object)[
      'total' => $total,
      'page' => $page,
      'size' => $size,
      'params' => $params,
      'scale' => 3,
    ]);
    $result->mobile = $paginate->createElements(['paginate', 'paginate--mobile']);
    $paginate->update((object)[ 'scale' => 10 ]);
    $result->desktop = $paginate->createElements(['paginate', 'paginate--desktop']);
    return $result;
  }

}
