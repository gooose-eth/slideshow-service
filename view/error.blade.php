<?php
if(!defined("__SLIDESHOW__")){exit();}

/**
 * error page
 */
?>

@extends('layout')

@section('meta')
@endsection

@section('contents')
<article class="error">
  <div class="error__wrap">
    <figure class="error__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    </figure>
    <header class="error__header">
      <h1>Error</h1>
      <p>Something is wrong. please try again.</p>
    </header>
  </div>
</article>
@endsection

@section('script')
@endsection
