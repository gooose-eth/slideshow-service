import { defineStore } from 'pinia';
import { convertPureObject } from '~/libs/object';

interface Preference {
  general?: {
    hud: boolean
    hoverVisibleHud: boolean
    clickVisibleHud: boolean
    visibleHudContents: {
      menu: boolean
      caption: boolean
      controller: boolean
      paginate: boolean
      group: boolean
      thumbnail: boolean
    }
  }
  slides?: {
    initialNumber: number
    animationType: string // none,fade,horizontal
    animationSpeed: number
    captionAnimationType: string // none,shuffle
    captionAnimationSpeed: number
    autoplay: boolean
    autoplayDelay: number
    autoplayDirection: boolean // next(true), prev(false)
    autoplayPauseOnHover: boolean
    loop: boolean
    swipe: boolean
  }
  style?: {
    screenColor: string // dark,light,system
    imageType: string // none,contain,cover
    imageScale: string[] // [ width, height ]
    captionScale: number // %
    captionPosition: string[] // [ left, top ]
  }
  keyboard?: {
    enabled: boolean
  }
}
export const preferenceStore = defineStore('slideshowPreference', {
  state()
  {
    return <Preference>{
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
          thumbnail: false,
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
        screenColor: 'light', // dark,light,system
        imageType: 'none', // none,contain,cover
        imageScale: ['75%','75%'], // [ width, height ]
        captionScale: 100, // %
        captionPosition: ['32px','30px'], // [ left, top ]
      },
      keyboard: {
        enabled: true,
      },
    };
  },
});

interface UsePreference {
  general: boolean
  slides: boolean
  style: boolean
  data: boolean
  keyboard: boolean
  information: boolean
}
export const usePreferenceStore = defineStore('slideshowUsePreference', {
  state()
  {
    return <UsePreference>{
      general: true,
      slides: true,
      style: true,
      data: true,
      keyboard: true,
      information: true,
    };
  },
});

interface Data {
  field: {
    address: string
  }
  groups: object
}
export const dataStore = defineStore('slideshowData', {
  state()
  {
    return <Data>{
      field: {
        address: '',
      },
      groups: {
        default: {
          name: '기본 슬라이드',
          description: '시작의 슬라이드쇼',
          slides: [],
        },
      },
    };
  },
  getters: {},
});

interface Current {
  mode: string
  tree: string
  activeSlide: number
  keyboardEvent: boolean
  autoplay: boolean
}
export const currentStore = defineStore('slideshowCurrent', {
  state()
  {
    return <Current>{
      mode: '', // create,edit,watch
      tree: 'default',
      activeSlide: 0,
      keyboardEvent: true,
      autoplay: false,
    };
  },
  getters: {
    labelMode(): string
    {
      switch (this.mode)
      {
        case 'create': return '만들기';
        case 'edit': return '수정하기';
        default: return '';
      }
    },
    createMode(): boolean
    {
      return this.mode === 'create';
    },
    editMode(): boolean
    {
      const data = dataStore();
      return this.mode === 'edit' && !!data.field?.address;
    },
    watchMode(): boolean
    {
      const data = dataStore();
      return this.mode === 'watch' && !!data.field?.address;
    },
    existSlide(): boolean
    {
      const data = dataStore();
      return data.groups[this.tree].slides?.length > 0;
    },
  },
});

interface Windows {
  preference: boolean
  thumbnail: boolean
  group: boolean
  save: boolean
}
export const windowsStore = defineStore('slideshowWindows', {
  state()
  {
    return <Windows>{
      preference: false,
      thumbnail: false,
      group: false,
      save: false,
    };
  },
});

// 환경설정에서 저장하기전에 임시로 사용되는 데이터
interface ReadyPreference extends Preference {
  tab?: string
  data?: object
}
export const readyPreferenceStore = defineStore('readyPreference', {
  state()
  {
    return <ReadyPreference>{
      tab: 'general',
      general: undefined,
      slides: undefined,
      style: undefined,
      data: undefined,
      keyboard: undefined,
    };
  },
  actions: {
    setup()
    {
      const preference = preferenceStore();
      const data = dataStore();
      this.general = convertPureObject(preference.general);
      this.slides = convertPureObject(preference.slides);
      this.style = convertPureObject(preference.style);
      this.data = convertPureObject(data.groups);
      this.keyboard = convertPureObject(preference.keyboard);
    },
    destroy()
    {
      this.tab = 'general';
      this.general = undefined;
      this.slides = undefined;
      this.style = undefined;
      this.data = undefined;
      this.keyboard = undefined;
    },
  },
});
