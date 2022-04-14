<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>{{$title}}</title>
<meta name="author" content="redgoose">
<meta name="keywords" content="slideshow slides photo redgoose photography">
<meta property="og:site_name" content="{{$title}}"/>
<meta property="og:url" content="{{__URL__}}{{$_SERVER['REQUEST_URI'] ?? ''}}"/>
<meta property="og:locale" content="ko_KR">
<meta property="og:type" content="website"/>
<meta property="og:title" content="{{$title ?? '이미지 슬라이드쇼'}}">
<meta property="og:description" content="{{$description ?? '사진이나 이미지들을 슬라이드쇼로 표시합니다.'}}">
<meta property="og:image" content="{{$banner ?? __URL__.'/assets/images/slideshow-banner.png'}}">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="description" content="{{$description ?? '사진이나 이미지들을 슬라이드쇼로 표시합니다.'}}">
<meta name="theme-color" content="currentColor">
<link rel="canonical" href="{{__URL__}}{{$_SERVER['REQUEST_URI']}}"/>
<link rel="shortcut icon" href="{{__ROOT__}}assets/images/favicon.ico"/>
<link rel="icon" type="image/x-icon" href="/assets/images/slideshow-256x256.png">
<link rel="apple-touch-icon" href="/assets/images/slideshow-256x256.png">
<link rel="apple-touch-startup-image" href="/assets/images/slideshow-256x256.png">
<link rel="manifest" href="{{__ROOT__}}manifest.json">
@yield('meta')
