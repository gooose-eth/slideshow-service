<?php
namespace Core;
use Exception, eftec\bladeone\BladeOne;

/**
 * Blade
 * BladeOne interface
 *
 * @property BladeOne blade
 */
class Blade {

  /**
   * construct
   *
   * @param string $path_view
   * @param string $path_cache
   */
  public function __construct(string $path_view, string $path_cache)
  {
    $this->blade = new BladeOne($path_view, $path_cache);
  }

  /**
   * render
   *
   * @param string $view
   * @param object|null $params
   * @throws Exception
   */
  public function render(string $view, object $params=null)
  {
    if (!$view)
    {
      throw new Exception('Not found blade view', 500);
    }
    echo $this->blade->run($view, (array)$params);
  }

}
