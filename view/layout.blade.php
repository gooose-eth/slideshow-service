<!doctype html>
<html lang="ko">
<head>
@include('head')
<link rel="stylesheet" href="{{__ROOT__}}assets/dist/main.css">
</head>
<body ontouchstart="">
<main>
  <header class="header">
    <h1 class="header__logo">
      <a href="{{__ROOT__}}" title="{{$_ENV['TITLE']}}">
        <span>
          <picture>
            <source srcset="{{__ROOT__}}assets/images/img-logo.webp 1x, {{__ROOT__}}assets/images/img-logo@2x.webp 2x" type="image/webp">
            <source srcset="{{__ROOT__}}assets/images/img-logo.png 1x, {{__ROOT__}}assets/images/img-logo@2x.png 2x" type="image/png">
            <img src="{{__ROOT__}}assets/images/img-logo.png" alt="{{$title}}">
          </picture>
        </span>
      </a>
    </h1>
    <nav class="header__nav">
      <ul>
        <li>
          <a href="{{__ROOT__}}create/" target="_blank" title="Create slideshow">
            Create
          </a>
        </li>
        <li>
          <a href="#" data-link="manage" title="Manage slideshow">
            Manage
          </a>
        </li>
        <li>
          <a href="{{__ROOT__}}about/"{!! $target === 'about' ? ' class="active"' : '' !!} title="About slideshow service">
            About
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    @yield('contents')
  </div>
  <footer class="footer">
    <p class="footer__copyright">Copyright {{date('Y')}} redgoose. All right reserved.</p>
  </footer>
</main>
<div id="service"></div>
@yield('script')
<script type="module" crossorigin src="{{__ROOT__}}assets/dist/main.js"></script>
</body>
</html>
