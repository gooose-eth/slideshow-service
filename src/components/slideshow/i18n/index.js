import * as vueI18n from 'vue-i18n/index.mjs';
import ko from './ko.json';

export default vueI18n.createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: {
    ko,
  },
});
