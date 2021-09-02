<?php
if (!defined('__SLIDESHOW__')) exit();

return [

  [ 'GET', '', 'index' ],
  [ 'GET', '/', 'index' ],

  [ 'GET', '/about', 'about' ],
  [ 'GET', '/about/', 'about' ],

  [ 'GET', '/watch/[char:name]', 'watch' ],
  [ 'GET', '/watch/[char:name]/', 'watch' ],

  [ 'GET', '/create', 'create' ],
  [ 'GET', '/create/', 'create' ],

  [ 'GET', '/manage/[char:name]', 'manage' ],
  [ 'GET', '/manage/[char:name]/', 'manage' ],

];
