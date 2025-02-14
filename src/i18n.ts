import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    load: 'currentOnly',
    supportedLngs: ['en', 'ru'],
    ns: ['common', 'errors', 'store', 'home'],
    defaultNS: ['common', 'notify'],
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: (lngs, namespaces) => {
        const ns = namespaces[0];
        const lng = lngs[0];

        if (ns === 'help' || ns === 'store' || ns === 'home') {
          return `/locales/${lng}/pages/${ns}.json`;
        }

        return `/locales/${lng}/default/${ns}.json`;
      },
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
