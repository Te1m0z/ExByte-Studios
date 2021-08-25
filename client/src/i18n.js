import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// english
import commonEN from './locales/en/common.json';
import homeEN from './locales/en/home.json';
import galleryEN from './locales/en/gallery.json';
// russian
import commonRU from './locales/ru/common.json';
import homeRU from './locales/ru/home.json';
import galleryRU from './locales/ru/gallery.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: commonEN,
                home: homeEN,
                gallery: galleryEN
            },
            ru: {
                common: commonRU,
                home: homeRU,
                gallery: galleryRU
            }
        },
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        debug: true,
        initImmediate: false
    });

export default i18n;