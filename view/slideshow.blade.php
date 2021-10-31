<?php
if(!defined("__SLIDESHOW__")){exit();}

/**
 * slideshow page
 *
 * @property string $mode watch,create,manage
 * @property string $id
 * @property string $token
 * @property string $slideshow
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
<script>
window.Custom = {
  path: '{{__ROOT__}}',
  url: '{{$_ENV['PATH_URL']}}',
  mode: '{{$mode}}',
  token: '{{$token ?? ''}}',
  id: '{{$id ?? ''}}',
  slideshow: '{{$slideshow ?? ''}}',
};
</script>
@endsection
