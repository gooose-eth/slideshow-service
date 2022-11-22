import { defineStore } from 'pinia'

export const serviceStore = defineStore('service', {
  state()
  {
    const { DEV, VITE_APP_HOST } = import.meta.env
    return {
      dev: DEV,
      url: VITE_APP_HOST,
    }
  },
})

export const adminStore = defineStore('admin', {
  state()
  {
    return {
      isAuth: false,
    }
  },
})

export const indexItemsStore = defineStore('index', {
  state()
  {
    return {
      size: Number(import.meta.env['VITE_INDEX_SIZE']),
    }
  }
})
