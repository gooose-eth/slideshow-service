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
    screenColor: 'light', // dark,light,system // TODO: 나중에 `system`으로 변경하기
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
  // default: <SlideshowTypes.Group>{
  //   name: '기본 슬라이드',
  //   description: '시작의 슬라이드쇼',
  //   slides: [],
  // },

  // TODO: 작업용 데이터를 임시로 넣어둠
  "default": {
    "name": "Welcome",
    "description": "Welcome to slideshow.",
    "slides": [
      {
        "src": "https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Sunset over the mountains of Skye",
        "description": "Published on October 21, 2016"
      },
      {
        "src": "https://images.unsplash.com/photo-1580996378027-23040f16f157?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1580996378027-23040f16f157?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Reflet de la ville sur l'eau Amsterdam",
        "description": "Published on February 6, 2020"
      },
      {
        "src": "https://images.unsplash.com/photo-1618679352407-4bdfed501f8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1618679352407-4bdfed501f8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "The Cubic Houses",
        "description": "Published on April 18, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1506799688517-a81d6bd3df37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1506799688517-a81d6bd3df37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Little green jewel: hummingbird",
        "description": "Published on October 1, 2017"
      },
      {
        "src": "https://images.unsplash.com/photo-1619408506946-a3caaf4e4d35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1619408506946-a3caaf4e4d35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Great Sand Dunes National Park",
        "description": "Published on April 26, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1618423771949-1de4842d5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1618423771949-1de4842d5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Solen Feyissa",
        "description": "Published on April 15, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1616902599633-ebde6959ad85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1616902599633-ebde6959ad85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "奥森人像",
        "description": "Published on March 28, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1538226740644-8c7670181991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1538226740644-8c7670181991?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=70",
        "title": "The numbers mason.",
        "description": "Published on September 29, 2018"
      }
    ]
  },
  "apple": {
    "name": "Apple",
    "description": "Red apple",
    "slides": [
      {
        "src": "https://images.unsplash.com/photo-1618422960849-739830070f39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1618422960849-739830070f39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Icy shore",
        "description": "Published on April 15, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1616022752456-ba38a5b662ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1616022752456-ba38a5b662ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Nubelson Fernandes",
        "description": "Published on March 18, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Jordan Whitt",
        "description": "Published on March 29, 2016"
      },
      {
        "src": "https://images.unsplash.com/photo-1620224027739-3d0e4cc395a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1620224027739-3d0e4cc395a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Sunset to sunrise",
        "description": "Published on May 5, 2021"
      }
    ]
  },
  "banana": {
    "name": "Banana",
    "description": "yellow banana",
    "slides": [
      {
        "src": "https://images.unsplash.com/photo-1620678684394-8fee237fc786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1620678684394-8fee237fc786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Moscow International Business Center",
        "description": "Published on May 11, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1616697256726-b5b7888a7a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1616697256726-b5b7888a7a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Brock Wegner",
        "description": "Published on March 26, 2021"
      }
    ]
  },
  nono: {
    name: 'NONO',
    description: 'no item',
    slides: [],
  },
  "mango": {
    "name": "Mango",
    "description": "green mango",
    "slides": [
      {
        "src": "https://images.unsplash.com/photo-1595518107491-f80eb7f9881e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1595518107491-f80eb7f9881e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Zayapas from the Galapagos Islands, Ecuador",
        "description": "Published on July 24, 2020"
      },
      {
        "src": "https://images.unsplash.com/photo-1619491202102-088c4afb271c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1619491202102-088c4afb271c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Dancing Bettas",
        "description": "Published on April 27, 2021"
      },
      {
        "src": "https://images.unsplash.com/photo-1619857154353-eff1ffd9ffe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=70",
        "thumbnail": "https://images.unsplash.com/photo-1619857154353-eff1ffd9ffe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=70",
        "title": "Pretty lady dressed in sari costume.",
        "description": "Published on May 1, 2021"
      }
    ]
  },

};
