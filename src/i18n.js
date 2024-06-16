import en from "./locales/en.json" with { type: "json" }
import es from "./locales/es.json" with { type: "json" }

export const translateObj = {
  locale: 'en',
  fallbackLocale: 'es',
  messages: {
    en,
    es,
  }
}