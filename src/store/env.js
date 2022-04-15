import { defineStore } from 'pinia';

export const serviceStore = defineStore('service', {
  state: () => {
    return {
      title: '',
      description: '',
    }
  },
});
