<?php
if(!defined("__SLIDESHOW__")){exit();}

/**
 * slideshow page
 *
 * @property string $mode watch,create,manage
 * @property string $id
 */
?>

@extends('layout-slideshow')

@section('meta')
@endsection

@section('script')
<script>
window.Custom = {
  mode: '{{$mode}}',
  id: '{{$id}}' || undefined,
};
console.log(window.Custom)
</script>
@endsection
