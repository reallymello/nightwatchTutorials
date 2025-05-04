import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: TranslationKeys;
    };
  }
}

interface TranslationKeys {
  switchToDuckDuckGo: string;
  searchPlaceHolder: string;
  images: string;
}
