// src/config/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import grammarConceptsZhTW from "../locales/zh-TW/GrammarConecptsScreen"; // 注意檔案名稱
import homeZhTW from "../locales/zh-TW/HomeScreen";
import grammarConceptsZhCN from "../locales/zh-CN/GrammarConecptsScreen";
import homeZhCN from "../locales/zh-CN/HomeScreen";
import { Translation } from "../types/translation";

const resources = {
  "zh-TW": {
    grammarConcepts: grammarConceptsZhTW,
    home: homeZhTW,
  },
  "zh-CN": {
    grammarConcepts: grammarConceptsZhCN,
    home: homeZhCN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-CN",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: false },
  defaultNS: "home",
  ns: ["grammarConcepts", "home"],
});

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "home";
    resources: {
      grammarConcepts: Translation["grammar"];
      home: Translation["home"];
    };
    returnObjects: true;
  }

  interface TFunction {
    // 為 grammarConcepts 命名空間定義返回類型
    (key: "translation.title" | "translation.intro", options?: any): string;
    (key: `translation.sections.${string}.title` | `translation.sections.${string}.paragraph`, options?: any): string;
    (key: `translation.sections.${string}.table.header`, options: { returnObjects: true }): string[];
    (key: `translation.sections.${string}.table.data`, options: { returnObjects: true }): string[][];
    (key: `translation.sections.${string}.paragraphs`, options: { returnObjects: true }): string[];

    // 為 home 命名空間定義返回類型
    (key: "translation.title" | `translation.menu.${string}`, options?: any): string;
  }
}

export default i18n;