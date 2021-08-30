<?php
namespace Core;
use AltoRouter, Exception;

/**
 * Router
 *
 * @property AltoRouter route
 * @property array match
 */
class Router {

  /**
   * @throws Exception
   */
  public function __construct()
  {
    $this->route = new AltoRouter();
    $this->route->setBasePath($_ENV['PATH_RELATIVE']);
    $this->route->addMatchTypes([ 'char' => '[0-9A-Za-z_-]++' ]);
    $this->route->addRoutes($this->map());
    $this->match = $this->route->match();
  }

  /**
   * route map
   *
   * @return array
   */
  private function map(): array
  {
    return require __PATH__.'/./core/route.php';
  }

}
