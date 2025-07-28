import { ui, defaultLang } from './i18n.mjs';

export function getLangFromUrl(url) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang;
    return defaultLang;
}

export function useTranslations(lang) {
    return function t(key) {
        return key ? ui[lang][key] : ui[defaultLang][key];
    }
}
