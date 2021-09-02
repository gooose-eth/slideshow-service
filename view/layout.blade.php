<!doctype html>
<html lang="ko">
<head>
<title>{{$title}}</title>
@include('head')
</head>
<body ontouchstart="">
<main>
  <header class="header">
    <h1 class="header__logo">
      <a href="/">
        <picture>
          <source srcset="/assets/images/img-logo.webp 1x, /assets/images/img-logo@2x.webp 2x" type="image/webp">
          <source srcset="/assets/images/img-logo.png 1x, /assets/images/img-logo@2x.png 2x" type="image/png">
          <img src="/assets/images/img-logo.png" alt="{{$title}}">
        </picture>
      </a>
    </h1>
    <nav class="header__nav">
      <ul>
        <li>
          <a href="#" data-link="create">Create</a>
        </li>
        <li>
          <a href="#" data-link="manage">Manage</a>
        </li>
        <li>
          <a href="/about"{!! $target === 'about' ? ' class="active"' : '' !!} data-link="about">About</a>
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
<script type="module" src="/assets/dist/app.js"></script>
</body>
</html>
