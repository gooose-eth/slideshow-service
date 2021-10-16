<?php
if(!defined("__SLIDESHOW__")){exit();}

/**
 * index page
 */
?>

@extends('layout')

@section('meta')
@endsection

@section('contents')
<article class="about">
  <h1 class="about__title">
    Slideshow service
  </h1>
  <div class="about__description">
    <p>
      slideshow 프로젝트를 이용하여 슬라이드를 만들고 공유할 수 있는 서비스입니다.<br/>
      자신의 슬라이드쇼를 다른 사람들에게 공유하여 볼수있게 도와주는것이 이 서비스의 컨셉이며 자신의 슬라이드 이미지를 등록하고 입맛에 맞게 설정을 편집하고 URL 주소를 만듭니다.
    </p>
    <p>
      TODO: 좀 더 작성할 예정..
    </p>
  </div>
  <figure class="about__screen">
    <picture>
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen.webp 1x, {{__ROOT__}}assets/images/slideshow-screen@2x.webp 2x" type="image/webp">
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen.png 1x, {{__ROOT__}}assets/images/slideshow-screen@2x.png 2x" type="image/png">
      <img src="{{__ROOT__}}assets/images/slideshow-screen.png" alt="screen">
    </picture>
  </figure>
</article>
@endsection

@section('script')
@endsection
