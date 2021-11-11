<?php
if (!defined('__SLIDESHOW__')) exit();

return [

  // service
  [ 'GET', '', 'index' ],
  [ 'GET', '/', 'index' ],
  [ 'GET', '/about', 'about' ],
  [ 'GET', '/about/', 'about' ],
  [ 'GET', '/watch/[char:address]', 'watch' ],
  [ 'GET', '/watch/[char:address]/', 'watch' ],
  [ 'GET', '/create', 'create' ],
  [ 'GET', '/create/', 'create' ],
  [ 'POST', '/manage/', 'manage' ],
  [ 'POST', '/manage/', 'manage' ],

  // request
  [ 'POST', '/auth', 'post/auth' ],
  [ 'POST', '/auth/', 'post/auth' ],
  [ 'POST', '/create', 'post/create' ],
  [ 'POST', '/create/', 'post/create' ],
  [ 'POST', '/manage/[char:address]', 'post/manage' ],
  [ 'POST', '/manage/[char:address]/', 'post/manage' ],
  [ 'POST', '/delete/[char:address]', 'post/delete' ],
  [ 'POST', '/delete/[char:address]/', 'post/delete' ],

];
