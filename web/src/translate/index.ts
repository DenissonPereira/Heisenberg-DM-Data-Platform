import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa as traduções diretamente
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';

// Define os recursos de tradução
const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

// Configura e inicializa o i18n
i18n
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    resources, // Adiciona os recursos de tradução
    debug: true, // Habilita o modo debug para desenvolvimento
    lng: 'en', // Define a língua inicial
    fallbackLng: 'en', // Define a língua de fallback
    interpolation: {
      escapeValue: false, // React já faz a sanitização das strings
    },
    react: {
      useSuspense: false, // Desabilita o suspense do React (caso você não queira usá-lo)
    },
  });

export default i18n;
