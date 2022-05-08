import { defineStore } from 'pinia';
import type * as Types from './service.d';

export const serviceStore = defineStore('service', {
  state(): Types.Service
  {
    return {
      title: 'Slideshow service',
      url: '',
    };
  },
  actions: {
    setup(): void
    {
      if (!process.env) return;
      this.title = process.env.SERVICE_NAME;
      this.url = process.env.URL;
    },
  },
});
