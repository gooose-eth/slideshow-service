<?php
if (!defined('__SLIDESHOW__')) exit();

return [

  [ 'GET', '', 'index' ],
  [ 'GET', '/', 'index' ],

  [ 'GET', '/about', 'about' ],
  [ 'GET', '/about/', 'about' ],

  [ 'GET', '/view/[char:name]', 'view' ],
  [ 'GET', '/view/[char:name]/', 'view' ],

  [ 'GET', '/create/[char:name]', 'create' ],
  [ 'GET', '/create/[char:name]/', 'create' ],

  [ 'GET', '/manage/[char:name]', 'manage' ],
  [ 'GET', '/manage/[char:name]/', 'manage' ],

];
