import i18n from "i18next";
//import path from "path";
import Backend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import XhrBackend from "i18next-xhr-backend";

import {initReactI18next} from "react-i18next";

export const baseUrl = "http://base-url.com";
export const devmode = true;

export const initi18n = () => {
  return (
    i18n
      // load translation using xhr -> see /public/locales
      // learn more: https://github.com/i18next/i18next-xhr-backend
      .use(Backend)
      .use(initReactI18next)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        debug: false,
        backend: {
          backends: devmode ? [XhrBackend] : [LocalStorageBackend, XhrBackend],
          backendOptions: [{loadPath: baseUrl}]
          /*devmode
            ? [{loadPath: path.join(baseUrl, "Translations-Bundle?locale={lng}")}]
            : [{prefix: "i18next_res_", expirationTime: 30 * 60 * 1000}, {loadPath: path.join(baseUrl, "Translations-Bundle?locale={lng}")}]*/
        },
        lng: document.documentElement.lang,
        fallbackLng: false,
        load: "currentOnly", // 'all' --> ['en-US', 'en', 'dev'], 'currentOnly' --> 'en-US', 'languageOnly' --> 'en'
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
          prefix: "{",
          suffix: "}"
        },
        cache: {
          // turn on or off
          enabled: true,
          // prefix for stored languages
          prefix: "i18n_",
          // expiration
          expirationTime: 60 * 60 * 1000
          // language versions
          //versions: {}
        }
      })
  );
};
