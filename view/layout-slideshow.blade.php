<!doctype html>
<html lang="ko" class="slideshow-page">
<head>
@include('head')
</head>
<body ontouchstart="">
<main id="app"></main>
<div id="modal"></div>
@yield('contents')
<noscript>
  <strong>We're sorry but {{$_ENV['TITLE']}} doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
@yield('script')
<script src="/assets/dist/app.js"></script>
</body>
</html>
