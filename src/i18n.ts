import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { PAGES_ROUTES } from './constants/pages';
import { FALLBACK_LANGUAGE } from './constants/user';

const getLoadPath = (lngs: string[], namespaces: string[]): string => {
  const ns = namespaces[0] ?? 'common';
  const lng = lngs[0] ?? FALLBACK_LANGUAGE;

  return PAGES_ROUTES.includes(ns)
    ? `/locales/${lng}/pages/${ns}.json`
    : `/locales/${lng}/default/${ns}.json`;
};

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
      loadPath: getLoadPath,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(`Ошибка загрузки переводов для ${ns} (${lng}): ${msg}`);
});

export default i18n;
