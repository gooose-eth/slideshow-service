<!doctype html>
<html lang="ko" class="slideshow-page">
<head>
@include('head')
<link rel="stylesheet" href="{{__ROOT__}}assets/dist/main.css">
</head>
<body ontouchstart="">
@yield('contents')
<div id="service"></div>
<noscript>
  <strong>We're sorry but {{$_ENV['TITLE']}} doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
@yield('script')
<script type="module" crossorigin src="{{__ROOT__}}assets/dist/main.js"></script>
</body>
</html>
