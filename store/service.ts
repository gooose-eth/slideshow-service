import { defineStore } from 'pinia';

interface Service {
  title: string,
}

export const serviceStore = defineStore('service', {
  state(): Service {
    return {
      title: 'Slideshow service',
    };
  },
});
