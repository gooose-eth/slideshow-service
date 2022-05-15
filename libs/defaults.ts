import type * as SlideshowTypes from '~/store/slideshow.d';

export const preference: SlideshowTypes.Preference = {
  general: {
    hud: true,
    hoverVisibleHud: false,
    clickVisibleHud: false,
    visibleHudContents: {
      menu: true,
      caption: true,
      controller: true,
      paginate: true,
      group: true,
      thumbnail: true,
    },
  },
  slides: {
    initialNumber: 0,
    animationType: 'horizontal', // none,fade,horizontal
    animationSpeed: 500,
    captionAnimationType: 'none', // none,shuffle
    captionAnimationSpeed: 40,
    autoplay: false,
    autoplayDelay: 7000,
    autoplayDirection: true, // next(true), prev(false)
    autoplayPauseOnHover: false,
    loop: true,
    swipe: true,
  },
  style: {
    screenColor: 'system', // dark,light,system
    imageType: 'none', // none,contain,cover
    imageScale: ['75%','75%'], // [ width, height ]
    captionScale: 100, // %
    captionPosition: ['32px','30px'], // [ left, top ]
  },
  keyboard: {
    enabled: true,
  },
};

export const groups = {
  default: <SlideshowTypes.Group>{
    name: '기본 슬라이드',
    description: '시작의 슬라이드쇼',
    slides: [],
  },
};
