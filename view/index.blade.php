<?php
if(!defined("__SLIDESHOW__")){exit();}

/**
 * index page
 */

$arr = [1,2,3,4,5,6];
?>

@extends('layout')

@section('meta')
@endsection

@section('contents')
<article class="index">
  <h1>Slide items</h1>
  <ul class="index__list">
    @foreach($arr as $k=>$item)
    <li class="index-item">
      <a href="#" class="index-item__wrap">
        <figure class="index-item__image">
          @if (true)
          <img
            src="https://goose.redgoose.me/data/upload/original/201904/scripter1937.jpg"
            width="280"
            height="180"
            alt="title">
          @endif
        </figure>
        <div class="index-item__body">
          <h2>Pune</h2>
          <p>ㄴ웋ㄴ ㄴㅇㅎ렌 ㅡㅇ헤ㅡㄴ에 ㄴ으헨으 헨으헨 흐</p>
        </div>
      </a>
    </li>
    @endforeach
  </ul>
  @if ($paginate->mobile && $paginate->desktop)
  <nav class="index__paginate">
    {!! $paginate->mobile !!}
    {!! $paginate->desktop !!}
  </nav>
  @endif
</article>
@endsection

@section('script')
@endsection
