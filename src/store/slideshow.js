import { defineStore } from 'pinia'
import { ofetch } from 'ofetch'
import { pureObject, shuffleItemsFromArray } from '../libs/util.js'
import { CODE } from '../libs/error.js'
import { checkPreference, checkTree, checkSlideItems } from '../libs/slideshow.js'
import * as defaults from '../libs/defaults.js'
import { getStorage, setStorage } from '../libs/storage.js'
import { serialize } from '../libs/string.js'

/**
 * 슬라이드쇼 설정
 */
export const preferenceStore = defineStore('slideshowPreference', {
  state()
  {
    return pureObject(defaults.preference)
  },
  getters: {
    pure()
    {
      return pureObject({
        general: this.general,
        slides: this.slides,
        style: this.style,
        keyboard: this.keyboard,
      })
    },
  },
  actions: {
    update(src)
    {
      if (!checkPreference(src)) throw new Error('Bad preference data.')
      this.general = src.general
      this.slides = src.slides
      this.style = src.style
      this.keyboard = src.keyboard
    },
    destroy()
    {
      this.general = {}
      this.slides = {}
      this.style = {}
      this.keyboard = {}
    },
  },
})

/**
 * 환경설정에서 저장하기전에 임시로 사용되는 데이터
 */
export const readyPreferenceStore = defineStore('readyPreference', {
  state()
  {
    return {
      tab: 'general',
      general: undefined,
      slides: undefined,
      style: undefined,
      data: undefined,
      keyboard: undefined,
    }
  },
  actions: {
    setup()
    {
      const preference = preferenceStore()
      const data = dataStore()
      this.general = pureObject(preference.general)
      this.slides = pureObject(preference.slides)
      this.style = pureObject(preference.style)
      this.data = pureObject(data.groups)
      this.keyboard = pureObject(preference.keyboard)
    },
    destroy()
    {
      this.tab = 'general'
      this.general = undefined
      this.slides = undefined
      this.style = undefined
      this.data = undefined
      this.keyboard = undefined
    },
    restore(src)
    {
      const { general, slides, style, data, keyboard } = src
      this.general = general
      this.slides = slides
      this.style = style
      this.data = data
      this.keyboard = keyboard
    },
    reset()
    {
      const { general, slides, style, keyboard } = pureObject(defaults.preference)
      this.general = general
      this.slides = slides
      this.style = style
      this.data = pureObject(defaults.groups)
      this.keyboard = keyboard
    },
  },
})

/**
 * 설정유닛을 사용유무
 */
export const usePreferenceStore = defineStore('slideshowUsePreference', {
  state()
  {
    return {
      general: true,
      slides: true,
      style: true,
      data: false,
      keyboard: true,
      information: true,
    }
  },
  actions: {
    destroy()
    {
      this.general = true
      this.slides = true
      this.style = true
      this.data = false
      this.keyboard = true
      this.information = true
    },
  },
})

/**
 * 슬라이드쇼 데이터
 * field: 데이터에 관한 정보들
 * groups: 실질적인 데이터 구조
 */
export const dataStore = defineStore('slideshowData', {
  state()
  {
    return {
      field: {
        srl: NaN,
        title: '',
        description: '',
        regdate: '',
        thumbnail: '',
        admin: false,
      },
      groups: pureObject(defaults.groups),
      selected: [],
    }
  },
  getters: {
    pureGroups()
    {
      return pureObject(this.groups)
    },
    slides()
    {
      return this.selected
    },
    slide()
    {
      const current = currentStore()
      return this.selected[current.activeSlide] || undefined
    },
    existSlide()
    {
      return this.selected?.length > 0
    },
    isAdmin()
    {
      return this.field.admin
    },
  },
  actions: {
    async update(src)
    {
      src = pureObject(src)
      if (!checkTree(src)) throw new Error('Failed check slides')
      const current = currentStore()
      current.loading = true
      this.groups = src
      await this.selectedTree()
      current.loading = false
    },
    resetFields()
    {
      this.field.srl = NaN
      this.field.title = ''
      this.field.description = ''
      this.field.regdate = ''
      this.field.thumbnail = ''
      this.field.admin = false
    },
    destroy()
    {
      this.selected = []
      this.groups = pureObject(defaults.groups)
      this.resetFields()
    },
    async selectedTree()
    {
      const preference = preferenceStore()
      const current = currentStore()
      let slides = this.groups[current.tree]?.slides || undefined
      let newSlides
      if (!slides) return
      try
      {
        if (Array.isArray(slides))
        {
          newSlides = pureObject(slides)
        }
        else
        {
          newSlides = await ofetch(slides, { responseType: 'json' })
        }
        checkSlideItems(newSlides)
        newSlides = newSlides.map((o,k) => ({
          ...o,
          key: k + 1,
        }))
        if (preference.slides.random)
        {
          this.selected = shuffleItemsFromArray(newSlides)
        }
        else
        {
          this.selected = newSlides
        }
      }
      catch (_)
      {
        current.loading = false
        throw new Error(CODE['INVALID-SLIDESHOW-DATA'])
      }
    },
    getSlideIndex(key)
    {
      for (let i=0; i < this.selected.length; i++)
      {
        if (Number(this.selected[i].key) === Number(key)) return i
      }
    },
  },
})

/**
 * 현재 상태에 대한 정보들
 */
export const currentStore = defineStore('slideshowCurrent', {
  state()
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
    }
  },
  getters: {
    label()
    {
      switch (this.mode)
      {
        case 'create': return '만들기'
        case 'edit': return '수정하기'
        default: return ''
      }
    },
    createMode()
    {
      return this.mode === 'create'
    },
    editMode()
    {
      const data = dataStore()
      return this.mode === 'edit' && data.field.srl > 0
    },
    watchMode()
    {
      const data = dataStore()
      return this.mode === 'watch' && data.field.srl > 0
    },
  },
  actions: {
    update(key, value)
    {
      this[key] = value
      const data = dataStore()
      const storage = getStorage(`slide#${data.field.srl}`)
      setStorage(`slide#${data.field.srl}`, {
        ...storage,
        current: {
          ...(storage?.current ? storage.current : {}),
          [key]: value,
        },
      })
    },
    destroy()
    {
      this.mode = ''
      this.tree = 'default'
      this.loading = true
    },
    updateRouteQuery(router, route, value)
    {
      const query = value ? serialize(value, true) : ''
      router.replace(`/watch/${route.params.srl}/${query}`).then()
    }
  },
})

/**
 * 팝업 윈도우가 열려있는지에 대한 값
 */
export const windowsStore = defineStore('slideshowWindows', {
  state()
  {
    return {
      keys: [ 'preference', 'thumbnail', 'group', 'save', 'share' ],
      children: [],
      preference: false,
      thumbnail: false,
      group: false,
      save: false,
      share: false,
    }
  },
  getters: {
    open()
    {
      let open = false
      this.keys.forEach(key => {
        if (this[key]) open = true
      })
      return open
    },
  },
  actions: {
    close()
    {
      this.keys.forEach(key => {
        this[key] = false
      })
    },
    destroy()
    {
      this.children = []
      this.keys.forEach(key => {
        this[key] = false
      })
    },
  },
})

/**
 * 기타 요소들
 */
export const assetsStore = defineStore('slideshowAssets', {
  state()
  {
    return {
      // 데이터 가져오기 예제 URL
      exampleImportUrl: 'https://raw.githubusercontent.com/redgoose-dev/slideshow/main/resource/example/tree.json',
    }
  },
})
