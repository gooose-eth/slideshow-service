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
    <h1>
      <a href="/">
        <picture>
          <source srcset="/assets/images/logo.webp" type="image/webp">
          <img src="/assets/images/logo.png" alt="{{$title}}">
        </picture>
      </a>
    </h1>
    <nav>
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
