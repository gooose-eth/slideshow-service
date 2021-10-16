<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>{{$_ENV['TITLE']}}</title>
<link rel="canonical" href="{{__URL__}}{{$_SERVER['REQUEST_URI']}}"/>
<link rel="shortcut icon" href="{{__ROOT__}}assets/images/favicon.ico"/>
<meta property="og:site_name" content="{{$_ENV['TITLE']}}"/>
<meta property="og:url" content="{{__URL__}}"/>
<meta property="og:locale" content="ko_KR"/>
<meta property="og:type" content="website"/>
@yield('meta')
