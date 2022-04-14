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
          <a href="{{__ROOT__}}create/" title="슬라이드쇼 만들기">
            만들기
          </a>
        </li>
        <li>
          <a href="#" data-link="manage" title="슬라이드쇼 관리하기">
            관리하기
          </a>
        </li>
        <li>
          <a href="{{__ROOT__}}about/"{!! $target === 'about' ? ' class="active"' : '' !!} title="슬라이드쇼 서비스에 대하여">
            정보
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
<script type="module">
window.Custom = {
  path: '{{__ROOT__}}',
  url: '{{$_ENV['PATH_URL']}}',
  token: '{{$token ?? ''}}',
};
</script>
@yield('script')
<script type="module" crossorigin src="{{__ROOT__}}assets/dist/main.js"></script>
</body>
</html>
