import { defineStore } from 'pinia';

interface Service {
  title: string,
  url: string,
}
export const serviceStore = defineStore('service', {
  state(): Service
  {
    return {
      title: 'Slideshow service',
      // TODO: 값 연계하기
      url: 'http://localhost:3000',
    };
  },
});
