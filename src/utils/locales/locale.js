import store from "@/store";
import ru from '@/utils/locales/ru.json'
import en from '@/utils/locales/en.json'

const locales = {
    'ru-RU': ru,
    'en-EN': en,
}

export function translate(key) {
    return locales[store.getters.locale][key];
}
