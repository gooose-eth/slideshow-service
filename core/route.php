<?php
if (!defined('__SLIDESHOW__')) exit();

return [

  [ 'GET', '', 'index' ],
  [ 'GET', '/', 'index' ],

  [ 'GET', '/about', 'about' ],
  [ 'GET', '/about/', 'about' ],

  [ 'GET', '/watch/[char:id]', 'watch' ],
  [ 'GET', '/watch/[char:id]/', 'watch' ],

  [ 'GET', '/create', 'create' ],
  [ 'GET', '/create/', 'create' ],

  [ 'GET', '/manage/[char:id]', 'manage' ],
  [ 'GET', '/manage/[char:id]/', 'manage' ],

];
