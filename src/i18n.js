import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

////previous configurations
// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,

//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json'
//     }
//   });

i18n.use(LanguageDetector).use(initReactI18next).use(Backend);

var options;
switch (process.env.NODE_ENV) {
  case 'development':
    options = {
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      caches: ['localStorage', 'cookie'],
      react: {
        wait: true,
      },
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json',
      },
    };
    break;
  case 'production':
    options = {
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      caches: ['localStorage', 'cookie'],
      react: {
        wait: true,
      },
      backend: {
        loadPath: 'locales/{{lng}}/{{ns}}.json',
      },
    };
    break;
  default:
}

i18n.init(options);

export default i18n;
