import dayjs from 'dayjs';
import { locales } from '../generated/dayjs-locales-data';
const warn = (language) => console.warn(`Cannot load dayjs locale file for "${language}"`);
const resolveLanguage = (languageInput) => {
    if (locales[languageInput]) {
        return languageInput;
    }
    if (languageInput.includes('-')) {
        const regionlessLanguage = languageInput.split('-')[0];
        if (locales[regionlessLanguage]) {
            return regionlessLanguage;
        }
    }
    return languageInput;
};
export function loadDayjsLocale(languageInput) {
    const language = resolveLanguage(languageInput);
    if (!locales[language]) {
        warn(language);
        return;
    }
    try {
        locales[language]().then(() => dayjs.locale(language));
    }
    catch (error) {
        warn(language);
    }
}
