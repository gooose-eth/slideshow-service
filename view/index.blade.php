<?php
if(!defined("__SLIDESHOW__")){exit();}

/**
 * index page
 *
 * @property array $index
 * @property object $paginate
 */
?>

@extends('layout')

@section('meta')
@endsection

@section('contents')
<article class="index">
  <h1>Slide items</h1>
  @if(count($index) > 0)
  <ul class="index__list">
    @foreach($index as $k=>$item)
    <li class="index-item">
      <a href="{{__ROOT__}}watch/{{$item->address}}/" target="_blank" class="index-item__wrap">
        <figure class="index-item__image">
          @if (isset($item->thumbnail) && $item->thumbnail)
          <img
            src="{{$item->thumbnail}}"
            width="280"
            height="180"
            alt="{{$item->title}}"
            onerror="this.src='{{__ROOT__}}assets/images/img-thumbnail-error.jpg'">
          @else
          <i>{!! Core\EmptyIcon::random() !!}</i>
          @endif
        </figure>
        <div class="index-item__body">
          <p class="index-item__date">{{explode(' ', $item->regdate)[0]}}</p>
          <h2 class="index-item__title">{{$item->title}}</h2>
          <p class="index-item__description">{{$item->description}}</p>
        </div>
      </a>
    </li>
    @endforeach
  </ul>
  @else
  <div class="index-empty">
    <div class="index-empty__wrap">
      <i>{!! Core\EmptyIcon::random() !!}</i>
      <h2>없어욧!</h2>
    </div>
  </div>
  @endif
  @if ($paginate->mobile && $paginate->desktop)
  <nav class="index__paginate">
    <div>
      {!! $paginate->mobile !!}
      {!! $paginate->desktop !!}
    </div>
  </nav>
  @endif
</article>
@endsection

@section('script')
<script>
window.Custom = {};
</script>
@endsection
