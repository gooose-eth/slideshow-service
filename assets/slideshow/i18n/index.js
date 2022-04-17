import { createI18n } from 'vue-i18n';
import ko from './ko.json';

export default createI18n({
  legacy: false,
  locale: 'ko',
  fallbackLocale: 'ko',
  allowComposition: true,
  messages: {
    ko,
  },
});
