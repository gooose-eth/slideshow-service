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
  <p>
    slideshow 프로젝트를 이용하여 슬라이드를 만들고 공유할 수 있는 서비스입니다.<br/>
    자신의 슬라이드쇼를 다른 사람들에게 공유하여 볼수있게 도와주는것이 이 서비스의 컨셉이며 자신의 슬라이드 이미지를 등록하고 입맛에 맞게 설정을 편집하고 URL 주소를 만들어 공유할 수 있습니다.
  </p>
  <figure>
    <picture>
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-001.webp 1x, {{__ROOT__}}assets/images/slideshow-screen-001@2x.webp 2x" type="image/webp">
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-001.png 1x, {{__ROOT__}}assets/images/slideshow-screen-001@2x.png 2x" type="image/png">
      <img src="{{__ROOT__}}assets/images/slideshow-screen-001.png" alt="slideshow screen">
    </picture>
  </figure>
  <p>
    사진 슬라이드쇼가 멋진 기능을 가지고 있지만 등록과 조작이 쉽지 않습니다.<br/>
    다음과 같은 과정으로 슬라이드쇼를 만들고 공유하고 즐기는 방법에 대해서 다룰 것이니 필요한대로 사용하세요.
  </p>
  <h2>Usage</h2>
  <p>
    슬라이드쇼를 만들고 수정하고 감상하는 영역까지 활용할 수 있습니다.<br/>
    자세한 사용법은 이제부터 하나씩 다뤄보겠습니다.
  </p>
  <h3>Create</h3>
  <p>
    새로운 슬라이드쇼를 만드려면 메뉴에서 <code>만들기</code>를 선택하면 슬라이드쇼 화면으로 이동합니다.<br/>
    우측 위에 <code>설정</code> 버튼을 누르면 환경설정 창이 나오며 <code>데이터</code> 탭을 선택하면 사진을 등록할 수 있는 폼으로 이동합니다.
  </p>
  <figure>
    <picture>
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-002.webp 1x, {{__ROOT__}}assets/images/slideshow-screen-002@2x.webp 2x" type="image/webp">
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-002.png 1x, {{__ROOT__}}assets/images/slideshow-screen-002@2x.png 2x" type="image/png">
      <img src="{{__ROOT__}}assets/images/slideshow-screen-002.png" alt="screen">
    </picture>
  </figure>
  <p>
    여러개의 그룹을 만들 수 있으며 목록에서 기본적으로 만들어진 <code>default</code> 그룹 영역으로 마우스 포인트를 갖다대면 이미지를 추가하고 그룹을 편집할 수 있는 버튼이 나타납니다.
  </p>
  <figure>
    <picture>
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-003.webp 1x, {{__ROOT__}}assets/images/slideshow-screen-003@2x.webp 2x" type="image/webp">
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-003.png 1x, {{__ROOT__}}assets/images/slideshow-screen-003@2x.png 2x" type="image/png">
      <img src="{{__ROOT__}}assets/images/slideshow-screen-003.png" alt="screen">
    </picture>
  </figure>
  <p>
    안타깝게도 현재로써는 사진을 직접 올릴 수 없고 서버에 올라온 사진 URL주소를 입력해야 합니다.<br/>
    사진주소는 필수로 적어야 하지만 나머지 항목은 필요에 따라 입력하고 <code>추가하기</code>버튼을 누르면 그룹의 목록에서 슬라이드가 추가됩니다.
  </p>
  <figure>
    <picture>
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-004.webp 1x, {{__ROOT__}}assets/images/slideshow-screen-004@2x.webp 2x" type="image/webp">
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-004.png 1x, {{__ROOT__}}assets/images/slideshow-screen-004@2x.png 2x" type="image/png">
      <img src="{{__ROOT__}}assets/images/slideshow-screen-004.png" alt="screen">
    </picture>
  </figure>
  <p>
    슬라이드가 정상적으로 만들어졌으면 이미지와 같이 항목이 추가될것을 확인할 수 있습니다.<br/>
    <br/>
    마지막으로 설정을 적용하려면 환경설정창 오른쪽 위에 체크 버튼을 누르면 설정한 상태를 적용할 수 있습니다. 설정을 변경하고 더이상 고칠게 없으면 <code>우측 위 디스켓 아이콘</code>버튼을 누르면 슬라이드쇼를 만드는 창이 나옵니다.
  </p>
  <h3>Watch</h3>
  <p>
    슬라이드쇼 목록에서 썸네일 아이콘을 누르면 해당 슬라이드쇼를 감상할 수 있습니다. 처음에는 슬라이드쇼를 만들때 기본으로 설정되어 있는 환경에서 감상하지만 환경설정을 이용하여 입맛에 맞게 슬라이드쇼의 환경을 변경할 수 있습니다.<br/>
    변경한 설정은 슬라이드쇼마다 각각 다르게 저장되어 있기 때문에 변경한 환경으로 그대로 유지하면서 이용할 수 있습니다.<br/>
    <br/>
    슬라이드쇼 메뉴에서 <code>공유하기</code>기능을 통하여 현재 감상하고 있는 슬라이드쇼의 주소를 복사하여 다른곳에 공유하는데 활용할 수 있습니다.
  </p>
  <h3>Manage</h3>
  <p>
    먼저 만들어둔 슬라이드쇼를 수정하려할때 메뉴에서 <code>관리하기</code>를 누르면 인증화면이 나옵니다. 인증창에서 슬라이드쇼를 만들때 만들어진 주소와 입력했던 비밀번호를 입력하고 인증합니다.<br/>
    <br/>
    인증에 성공하면 마지막으로 슬라이드쇼를 저장했던 상태에서 계속 편집할 수 있습니다.<br/>
    <br/>
    편집이 끝나면 <code>디스켓 아이콘</code> 버튼을 눌러 슬라이드쇼 업데이트를 완료합니다.
  </p>
  <h3>Delete</h3>
  <p>
    슬라이드쇼를 삭제하려면 <code>슬라이드쇼 편집모드</code>에서 <code>메뉴 > 삭제하기</code> 과정으로 선택하면 한번 더 슬라이드쇼 주소와 비밀번호를 입력하면 삭제합니다.
  </p>
  <figure>
    <picture>
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-005.webp 1x, {{__ROOT__}}assets/images/slideshow-screen-005@2x.webp 2x" type="image/webp">
      <source srcset="{{__ROOT__}}assets/images/slideshow-screen-005.png 1x, {{__ROOT__}}assets/images/slideshow-screen-005@2x.png 2x" type="image/png">
      <img src="{{__ROOT__}}assets/images/slideshow-screen-005.png" alt="screen">
    </picture>
  </figure>
  <p>
    슬라이드쇼를 삭제하면 다시 복구할 수 없는것을 주의해주세요.
  </p>
  <h2>Creator</h2>
  <ul>
    <li>redgoose: <a href="https://redgoose.me" target="_blank">https://redgoose.me</a></li>
    <li>GitHub: <a href="https://github.com/redgoose-dev/slideshow-service" target="_blank">https://github.com/redgoose-dev/slideshow-service</a></li>
  </ul>
</article>
@endsection

@section('script')
<script type="module">
window.Custom = {
  path: '{{__ROOT__}}',
  url: '{{$_ENV['PATH_URL']}}',
};
</script>
@endsection
