import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { FALLBACK_LANGUAGE } from './constants/user';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: FALLBACK_LANGUAGE,
    ns: ['common', 'errors', 'help'],
    defaultNS: ['common', 'notify'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: (lngs: string[], namespaces : string) => {
        const ns = namespaces[0]
        const lng = lngs[0];

        if (namespaces === 'help') {
          return `/locales/${lng}/pages/help.json`;
        }

        return `/locales/${lng}/default/${ns}.json`;
      },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;