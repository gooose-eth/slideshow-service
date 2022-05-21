import { defineStore } from 'pinia';
import type * as Types from './service.d';

export const serviceStore = defineStore('service', {
  state(): Types.Service
  {
    return {
      title: '슬라이드쇼',
      description: '이미지 슬라이드쇼 서비스',
      url: 'https://slideshow.redgoose.me',
    };
  },
  actions: {
    setup(): void
    {
      if (!process.env) return;
      this.url = process.env.URL;
    },
  },
});

export const introStore = defineStore('service-intro', {
  state()
  {
    return {
      size: 24,
    };
  }
});
