import { defineStore } from 'pinia'

export const accountStore = defineStore('service', {
  state()
  {
    return {
      address: undefined,
      provider: undefined,
      network: undefined,
    }
  },
})
