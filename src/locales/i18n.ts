import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import grammarConceptsZhTW from "../locales/zh-TW/GrammarConceptsScreen";
import homeZhTW from "../locales/zh-TW/HomeScreen";
import hiraganaZhTW from "../locales/zh-TW/HiraganaScreen";
import katakanaZhTW from "../locales/zh-TW/KatakanaScreen"; // New
import grammarConceptsZhCN from "../locales/zh-CN/GrammarConceptsScreen";
import homeZhCN from "../locales/zh-CN/HomeScreen";
import hiraganaZhCN from "../locales/zh-CN/HiraganaScreen";
import katakanaZhCN from "../locales/zh-CN/KatakanaScreen"; // New
import { Translation } from "../types/translation";

const resources = {
  "zh-TW": {
    grammarConcepts: grammarConceptsZhTW,
    home: homeZhTW,
    hiragana: hiraganaZhTW,
    katakana: katakanaZhTW, // New
  },
  "zh-CN": {
    grammarConcepts: grammarConceptsZhCN,
    home: homeZhCN,
    hiragana: hiraganaZhCN,
    katakana: katakanaZhCN, // New
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-CN",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: false },
  defaultNS: "home",
  ns: ["grammarConcepts", "home", "hiragana", "katakana"], // Updated
});

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "home";
    resources: {
      grammarConcepts: Translation["grammarConcepts"];
      home: Translation["home"];
      hiragana: Translation["hiragana"];
      katakana: Translation["katakana"]; // New
    };
    returnObjects: true;
  }

  interface TFunction {
    // GrammarConcepts namespace
    (key: "translation.title" | "translation.intro", options?: any): string;
    (key: `translation.sections.${string}.title` | `translation.sections.${string}.paragraph`, options?: any): string;
    (key: `translation.sections.${string}.table.header`, options: { returnObjects: true }): string[];
    (key: `translation.sections.${string}.table.data`, options: { returnObjects: true }): string[][];
    (key: `translation.sections.${string}.paragraphs`, options: { returnObjects: true }): string[];

    // Home namespace
    (key: "translation.title" | `translation.menu.${string}`, options?: any): string;

    // Hiragana namespace
    (key: "title" | "table.title", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.intro`, options?: any): string;
    (key: `sections.${string}.uses` | `sections.${string}.points` | `sections.${string}.items`, options: { returnObjects: true }): string[];

    // Katakana namespace (new)
    (key: "table.title", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.intro`, options?: any): string;
    (key: `sections.${string}.uses` | `sections.${string}.points` | `sections.${string}.items`, options: { returnObjects: true }): string[];
  }
}

export default i18n;