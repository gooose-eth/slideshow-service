import { defineStore } from 'pinia';
import { pureObject } from '~/libs/object';
import { checkPreference, checkTree } from '~/libs/slideshow';
import * as defaults from '~/libs/defaults';
import { getStorage, setStorage } from '~/libs/storage';
import type * as Types from './slideshow.d';

/**
 * 슬라이드쇼 설정
 */
export const preferenceStore = defineStore('slideshowPreference', {
  state(): Types.Preference
  {
    return pureObject(defaults.preference);
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
    },
    destroy(): void
    {
      this.general = {};
      this.slides = {};
      this.style = {};
      this.keyboard = {};
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
  actions: {
    setup(mode: string)
    {
      switch (mode)
      {
        case 'create':
        case 'edit':
          this.general = true;
          this.slides = true;
          this.style = true;
          this.data = true;
          this.keyboard = true;
          this.information = true;
          break;
        case 'watch':
          this.general = true;
          this.slides = true;
          this.style = true;
          this.data = false;
          this.keyboard = true;
          this.information = true;
          break;
      }
    }
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
        title: '',
        description: '',
        regdate: '',
        thumbnail: '',
        public: true,
        token: '',
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
      return this.groups[current.tree]?.slides?.length > 0;
    },
    logined(): boolean
    {
      return !!this.field.token && !!this.field.address;
    },
  },
  actions: {
    update(src): void
    {
      src = pureObject(src);
      if (!checkTree(src)) throw new Error('Failed check slides');
      this.groups = src;
    },
    resetFields(): void
    {
      this.field.address = '';
      this.field.title = '';
      this.field.description = '';
      this.field.regdate = '';
      this.field.thumbnail = '';
      this.field.public = true;
      this.field.token = '';
    },
    destroy(): void
    {
      this.resetFields();
    },
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
      activeSlide: defaults.preference.slides.initialNumber,
      keyboardEvent: defaults.preference.keyboard.enabled,
      autoplay: defaults.preference.slides.autoplay,
      swiped: false,
      loading: true,
      public: false,
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
    update(key: string, value: any): void
    {
      this[key] = value;
      const data = dataStore();
      const storage = getStorage(data.field.address);
      setStorage(data.field.address, {
        ...storage,
        current: {
          ...(storage?.current ? storage.current : {}),
          [key]: value,
        },
      });
    },
    destroy(): void
    {
      this.mode = '';
      this.tree = 'default';
      this.loading = true;
    }
  },
});

/**
 * 팝업 윈도우가 열려있는지에 대한 값
 */
export const windowsStore = defineStore('slideshowWindows', {
  state(): Types.Windows
  {
    return {
      keys: [ 'preference', 'thumbnail', 'group', 'save', 'share' ],
      children: [],
      preference: false,
      thumbnail: false,
      group: false,
      save: false,
      share: false,
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
    },
  },
  actions: {
    close(): void
    {
      this.keys.forEach(key => {
        this[key] = false;
      });
    },
    destroy(): void
    {
      this.children = [];
      this.keys.forEach((key: string) => {
        this[key] = false;
      });
    },
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
