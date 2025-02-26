// src/config/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zhTW from "../locales/zh-TW";
import zhCN from "../locales/zh-CN";


// src/types/translation.ts
export interface Section {
  title: string;
  paragraph?: string;
  table?: {
    header: string[];
    data: string[][];
  };
  paragraphs?: string[];
}

export interface Translation {
  title: string;
  intro: string;
  sections: {
    [key: string]: Section;
  };
}



const resources = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-CN",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: false },
});

// 告訴 i18next 使用我們的 Translation 介面
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: Translation;
    };
  }
}

export default i18n;