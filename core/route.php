<?php
if (!defined('__SLIDESHOW__')) exit();

return [

  // service
  [ 'GET', '', 'index' ],
  [ 'GET', '/', 'index' ],
  [ 'GET', '/about', 'about' ],
  [ 'GET', '/about/', 'about' ],
  [ 'GET', '/watch/[char:id]', 'watch' ],
  [ 'GET', '/watch/[char:id]/', 'watch' ],
  [ 'GET', '/create', 'create' ],
  [ 'GET', '/create/', 'create' ],
  [ 'POST', '/manage/', 'manage' ],
  [ 'POST', '/manage/', 'manage' ],

  // request
  [ 'POST', '/auth', 'post/auth' ],
  [ 'POST', '/auth/', 'post/auth' ],
  [ 'POST', '/create', 'post/create' ],
  [ 'POST', '/create/', 'post/create' ],
  [ 'POST', '/manage/[char:id]', 'post/manage' ],
  [ 'POST', '/manage/[char:id]/', 'post/manage' ],

];
