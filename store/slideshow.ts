import { defineStore } from 'pinia';
import { pureObject } from '~/libs/object';
import { checkPreference, checkTree } from '~/libs/slideshow';
import * as defaults from '~/libs/defaults';
import type * as Types from './slideshow.d';

/**
 * 슬라이드쇼 설정
 */
export const preferenceStore = defineStore('slideshowPreference', {
  state()
  {
    return <Types.Preference>pureObject(defaults.preference);
  },
  getters: {
    pure(): object
    {
      return pureObject({
        general: this.general,
        slides: this.slides,
        style: this.style,
        keyboard: this.keyboard,
      });
    },
  },
  actions: {
    update(src: Types.Preference): void
    {
      if (!checkPreference(src)) throw new Error('Bad preference data.');
      this.general = src.general;
      this.slides = src.slides
      this.style = src.style;
      this.keyboard = src.keyboard;
    }
  },
});

/**
 * 환경설정에서 저장하기전에 임시로 사용되는 데이터
 */
export const readyPreferenceStore = defineStore('readyPreference', {
  state(): Types.ReadyPreference
  {
    return {
      tab: 'general',
      general: undefined,
      slides: undefined,
      style: undefined,
      data: undefined,
      keyboard: undefined,
    };
  },
  actions: {
    setup(): void
    {
      const preference = preferenceStore();
      const data = dataStore();
      this.general = pureObject(preference.general);
      this.slides = pureObject(preference.slides);
      this.style = pureObject(preference.style);
      this.data = pureObject(data.groups);
      this.keyboard = pureObject(preference.keyboard);
    },
    destroy(): void
    {
      this.tab = 'general';
      this.general = undefined;
      this.slides = undefined;
      this.style = undefined;
      this.data = undefined;
      this.keyboard = undefined;
    },
    restore(src: Types.ReadyPreference): void
    {
      const { general, slides, style, data, keyboard } = src;
      this.general = general;
      this.slides = slides;
      this.style = style;
      this.data = data;
      this.keyboard = keyboard;
    },
    reset(): void
    {
      const { general, slides, style, keyboard } = <Types.Preference>pureObject(defaults.preference);
      this.general = general;
      this.slides = slides;
      this.style = style;
      this.data = pureObject(defaults.groups);
      this.keyboard = keyboard;
    }
  },
});

/**
 * 설정유닛을 사용유무
 */
export const usePreferenceStore = defineStore('slideshowUsePreference', {
  state(): Types.UsePreference
  {
    return {
      general: true,
      slides: true,
      style: true,
      data: true,
      keyboard: true,
      information: true,
    };
  },
});

/**
 * 슬라이드쇼 데이터
 * field: 데이터에 관한 정보들
 * groups: 실질적인 데이터 구조
 */
export const dataStore = defineStore('slideshowData', {
  state(): Types.Data
  {
    return {
      field: {
        address: '',
        // TODO: 수정모드를 고려해서 항목을 더 추가할 예정이다.
      },
      groups: pureObject(defaults.groups),
    };
  },
  getters: {
    pureGroups(): object
    {
      return pureObject(this.groups);
    },
    slides(): Types.Slide[]
    {
      const current = currentStore();
      return this.groups[current.tree].slides;
    },
    slide(): Types.Slide
    {
      const current = currentStore();
      return this.groups[current.tree].slides[current.activeSlide];
    },
    existSlide(): boolean
    {
      const current = currentStore();
      return this.groups[current.tree].slides?.length > 0;
    },
  },
  actions: {
    update(src): void
    {
      src = pureObject(src);
      if (!checkTree(src)) throw new Error('Failed check slides');
      this.groups = src;
    }
  },
});

/**
 * 현재 상태에 대한 정보들
 */
export const currentStore = defineStore('slideshowCurrent', {
  state(): Types.Current
  {
    return {
      mode: '', // create,edit,watch
      tree: 'default',
      activeSlide: 0,
      keyboardEvent: true,
      autoplay: false,
      swiped: false,
    };
  },
  getters: {
    label(): string
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
  },
  actions: {
    setup(type: string, params?: any): void
    {
      switch (type)
      {
        case 'create':
          this.mode = 'create';
          this.tree = 'default';
          this.activeSlide = 0;
          this.keyboardEvent = true;
          this.autoplay = false;
          break;
        case 'watch':
        case 'edit':
          this.mode = params.mode;
          this.tree = params.tree;
          this.activeSlide = params.activeSlide;
          this.keyboardEvent = params.keyboardEvent;
          this.autoplay = params.autoplay;
          break;
      }
    },
  },
});

/**
 * 팝업 윈도우가 열려있는지에 대한 값
 */
export const windowsStore = defineStore('slideshowWindows', {
  state(): Types.Windows
  {
    return {
      keys: [ 'preference', 'thumbnail', 'group', 'save' ],
      preference: false,
      thumbnail: false,
      group: false,
      save: false,
    };
  },
  getters: {
    open(): boolean
    {
      let open = false;
      this.keys.forEach(key => {
        if (this[key]) open = true;
      });
      return open;
    }
  },
});

/**
 * 기타 요소들
 */
export const assetsStore = defineStore('slideshowAssets', {
  state(): Types.Assets
  {
    return {
      // 데이터 가져오기 예제 URL
      exampleImportUrl: 'https://raw.githubusercontent.com/redgoose-dev/slideshow/main/resource/example/tree.json',
    };
  },
});
