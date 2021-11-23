<?php
if(!defined("__SLIDESHOW__")){exit();}

/**
 * slideshow page
 *
 * @property string $mode watch,create,manage
 * @property string $address
 * @property string $token
 * @property string $slideshow
 * @property string $form
 */
?>

@extends('layout-slideshow')

@section('meta')
@endsection

@section('contents')
<main id="slideshow" class="slideshow-wrap"></main>
<div id="slideshowModal" class="slideshow-wrap"></div>
@endsection

@section('script')
<script type="module">
window.Custom = {
  path: '{{__ROOT__}}',
  url: '{{$_ENV['PATH_URL']}}',
  mode: '{{$mode}}',
  token: '{{$token ?? ''}}',
  address: '{{$address ?? ''}}',
  slideshow: '{{$slideshow ?? ''}}',
  form: '{{$form ?? ''}}',
};
</script>
<script type="module" crossorigin src="{{__ROOT__}}assets/dist/main.js"></script>
@endsection
