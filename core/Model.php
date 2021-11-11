<?php
namespace Core;
use Exception, PDO, redgoose\Paginate, redgoose\Console;

/**
 * Model
 */

class Model {

  public PDO $db;
  private string $table = 'slideshow';

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
   * run query
   *
   * @param string $query
   * @throws Exception
   */
  public function action($query)
  {
    if (!$this->db->query($query))
    {
      throw new Exception('Failed database action `'.$query.'`');
    }
  }

  /**
   * query maker
   *
   * @param object|null $op
   * @return string|null
   */
  private function query($op=null): ?string
  {
    if (!isset($op->act)) return null;

    // filtering where
    if (isset($op->where))
    {
      $op->where = preg_replace("/^ and/", "", $op->where);
      $op->where = trim($op->where);
    }

    $str = $op->act;
    $str .= (isset($op->field)) ? ' '.$op->field : ' *';
    $str .= ' from '.$this->table;
    $str .= (isset($op->where) && $op->where) ? ' where '.$op->where : '';
    $str .= (isset($op->order) && $op->order) ? ' order by '.$op->order : '';
    $str .= (isset($op->order) && isset($op->sort) && $op->order && $op->sort) ? ' ' . ((isset($op->sort) && $op->sort === 'asc') ? 'asc' : 'desc') : '';

    if (isset($op->limit) && $op->limit)
    {
      if (is_array($op->limit))
      {
        if (count($op->limit) > 0)
        {
          $str .= ' limit ' . implode(',', $op->limit);
        }
      }
      else
      {
        $str .= ' limit ' . $op->limit;
      }
    }

    return $str;
  }

  /**
   * index
   *
   * @param object $op
   * @return array
   * @throws Exception
   */
  public function index($op): array
  {
    $op->act = 'select';
    $op->field = $op->field ?? '*';
    $query = $this->query($op);
    $qry = $this->db->query($query);
    if ($qry)
    {
      $result = $qry->fetchAll(PDO::FETCH_CLASS);
      foreach ($result as $k=>$v)
      {
        if (isset($v->slideshow))
        {
           $result[$k]->slideshow = json_decode(urldecode($v->slideshow));
        }
        if (isset($v->password))
        {
          unset($result[$k]->password);
        }
      }
    }
    return $result ?? [];
  }

  /**
   * count
   *
   * @param object $op
   * @return int
   */
  public function count($op): int
  {
    try
    {
      $op->act = 'select';
      $op->field = 'count(*)';
      if (isset($options->where)) $op->where = $options->where;
      $query = self::query($op);
      $result = $this->db->prepare($query);
      $result->execute();
      return (int)$result->fetchColumn();
    }
    catch(Exception $e)
    {
      return 0;
    }
  }

  /**
   * get item
   *
   * @param object
   * @param bool
   * @return object
   * @throws Exception
   */
  public function item($op, $usePassword = false): object
  {
    $op->act = 'select';
    $op->field = $op->field ?? '*';
    $query = $this->query($op);
    $qry = $this->db->query($query);
    $item = $qry ? (object)$qry->fetch(PDO::FETCH_ASSOC) : (object)[];
    if (!isset($item->key)) throw new Exception('No item');
    if (isset($item->slideshow))
    {
      $item->slideshow = json_decode(urldecode($item->slideshow), false);
    }
    if (!$usePassword) unset($item->password);
    return $item;
  }

  /**
   * insert item
   *
   * @param object $op
   * @throws Exception
   */
  public function insert($op)
  {
    if (!isset($op)) throw new Exception('No options');

    // set query
    $query = 'insert into `'.$this->table.'` ';

    // set keys
    $str = '';
    foreach ($op as $k=>$v)
    {
      $str .= ',`'.$k.'`';
    }
    $str = preg_replace("/^,/", "", $str);
    $query .= '('.$str.') values ';

    // set values
    $str = '';
    foreach ($op as $k=>$v)
    {
      $v = (!is_null($v)) ? '\''.$v.'\'' : 'null';
      $str .= ','.$v;
    }
    $str = preg_replace("/^,/", "", $str);
    $query .= '('.$str.')';

    // action
    $this->action($query);
  }

  /**
   * edit item
   *
   * @param array $op
   * @param string $where
   * @throws Exception
   */
  public function edit($op, $where)
  {
    if (!(isset($op) && isset($where))) throw new Exception('No options');

    // make query
    $query_data = '';
    foreach ($op as $k=>$v) $query_data .= ($v) ? ','.$v : '';
    $query_data = preg_replace("/^,/", '', $query_data);
    if (!$query_data) throw new Exception('No options');
    $query = 'update `'.$this->table.'` set ';
    $query .= $query_data;
    $query .= ' where ' . $where;

    // action
    $this->action($query);
  }

  /**
   * delete item
   *
   * @param string $where
   * @throws Exception
   */
  public function delete($where)
  {
    if (!isset($where)) throw new Exception('No where');

    // check exist item
    $cnt = $this->count((object)[ 'where' => $where ]);
    if ($cnt <= 0) throw new Exception('No item in table.');

    // update database
    $query = "delete from {$this->table} where $where";
    $this->action($query);
  }

  /**
   * delete all items
   *
   * @throws Exception
   */
  public function deleteAll(): void
  {
    $this->action("delete from $this->table");
  }

  /**
   * clear data
   *
   * @throws Exception
   */
  public function clear(): void
  {
    $this->action("truncate $this->table");
  }

  /**
   * get last key
   *
   * @return int
   */
  public function getLastKey(): int
  {
    return (int)$this->db->lastInsertId();
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
  public function createPaginate(int $total=0, int $page=1, int $size=10, array $params=[]): object
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
