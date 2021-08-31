<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>{{$title}}</title>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
@include('head')
<link rel="stylesheet" href="/assets/dist/style.css">
</head>
<body ontouchstart="">
<main>
  <header class="header">
    <h1 class="header__logo">
      <a href="/">
        <picture>
          <source
            srcset="/assets/images/img-logo.webp 1x, /assets/images/img-logo@2x.webp 2x"
            type="image/webp">
          <source
            srcset="/assets/images/img-logo.png 1x, /assets/images/img-logo@2x.png 2x"
            type="image/png">
          <img src="/assets/images/img-logo.png" alt="{{$title}}">
        </picture>
      </a>
    </h1>
    <nav class="header__nav">
      <a href="/create">Create</a>
      <a href="/manage">Manage</a>
      <a href="/about">About</a>
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
<script src="/assets/dist/app.js"></script>
</body>
</html>
