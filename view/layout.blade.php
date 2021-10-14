<!doctype html>
<html lang="ko">
<head>
@include('head')
<link rel="stylesheet" href="/assets/dist/main.css">
</head>
<body ontouchstart="">
<main>
  <header class="header">
    <h1 class="header__logo">
      <a href="/">
        <span>
          <picture>
            <source srcset="/assets/main/images/img-logo.webp 1x, /assets/main/images/img-logo@2x.webp 2x" type="image/webp">
            <source srcset="/assets/main/images/img-logo.png 1x, /assets/main/images/img-logo@2x.png 2x" type="image/png">
            <img src="/assets/main/images/img-logo.png" alt="{{$title}}">
          </picture>
        </span>
      </a>
    </h1>
    <nav class="header__nav">
      <ul>
        <li>
          <a href="/create/">Create</a>
        </li>
        <li>
          <a href="#" data-link="manage">Manage</a>
        </li>
        <li>
          <a href="/about/"{!! $target === 'about' ? ' class="active"' : '' !!}>About</a>
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
@yield('script')
<script type="module" crossorigin src="/assets/dist/main.js"></script>
</body>
</html>
