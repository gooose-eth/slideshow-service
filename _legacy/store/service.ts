import { defineStore } from 'pinia';
import type * as Types from './service.d';

export const serviceStore = defineStore('service', {
  state(): Types.Service
  {
    return {
      title: '',
      description: '',
      url: '',
    };
  },
  actions: {
    setup(): void
    {
      const config = <any>useRuntimeConfig().public;
      const { SERVICE_NAME, SERVICE_DESCRIPTION, SERVICE_URL } = config;
      this.title = SERVICE_NAME;
      this.description = SERVICE_DESCRIPTION;
      this.url = SERVICE_URL;
    },
  },
});
