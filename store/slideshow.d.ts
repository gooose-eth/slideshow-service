export interface Preference {
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

export interface ReadyPreference extends Preference {
  tab?: string
  data?: object
}

export interface UsePreference {
  general: boolean
  slides: boolean
  style: boolean
  data: boolean
  keyboard: boolean
  information: boolean
}

export interface Data {
  field: {
    address: string
  }
  groups: object
}

export interface Current {
  mode: string
  tree: string
  activeSlide: number
  keyboardEvent: boolean
  autoplay: boolean
  swiped: boolean
  loading: boolean
}

export interface Windows {
  keys: string[]
  preference: boolean
  thumbnail: boolean
  group: boolean
  save: boolean
}

export interface Assets {
  exampleImportUrl: string
}

export interface Group {
  name: string
  descriotion?: string
  slides?: Slide[]
}

export interface Slide {
  src: string
  title?: string
  description?: string
  thumbnail?: string
}
