// src/locales/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DakuonItem, LongVowelItem, YouonItem, Translation, StoryChapter, StoryLine } from "../types/translation";
import grammarConceptsZhTW from "../locales/zh-TW/GrammarConceptsScreen";
import homeZhTW from "../locales/zh-TW/HomeScreen";
import hiraganaZhTW from "../locales/zh-TW/HiraganaScreen";
import katakanaZhTW from "../locales/zh-TW/KatakanaScreen";
import phoneticsZhTW from "../locales/zh-TW/PhoneticsScreen";
import storyZhTW from "../locales/zh-TW/N5StoryScreen"; // Import zh-TW stories
import grammarConceptsZhCN from "../locales/zh-CN/GrammarConceptsScreen";
import homeZhCN from "../locales/zh-CN/HomeScreen";
import hiraganaZhCN from "../locales/zh-CN/HiraganaScreen";
import katakanaZhCN from "../locales/zh-CN/KatakanaScreen";
import phoneticsZhCN from "../locales/zh-CN/PhoneticsScreen";
import storyZhCN from "../locales/zh-CN/N5StoryScreen"; // Import zh-CN stories

const resources = {
  "zh-TW": {
    grammarConcepts: grammarConceptsZhTW,
    home: homeZhTW,
    hiragana: hiraganaZhTW,
    katakana: katakanaZhTW,
    phonetics: phoneticsZhTW,
    story: storyZhTW, // Add story namespace
  },
  "zh-CN": {
    grammarConcepts: grammarConceptsZhCN,
    home: homeZhCN,
    hiragana: hiraganaZhCN,
    katakana: katakanaZhCN,
    phonetics: phoneticsZhCN,
    story: storyZhCN, // Add story namespace
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-CN",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: false },
  defaultNS: "home",
  ns: ["grammarConcepts", "home", "hiragana", "katakana", "phonetics", "story"], // Add "story"
});

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "home";
    resources: {
      grammarConcepts: Translation["grammarConcepts"];
      home: Translation["home"];
      hiragana: Translation["hiragana"];
      katakana: Translation["katakana"];
      phonetics: Translation["phonetics"];
      story: Translation["story"];
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

    // Katakana namespace
    (key: "table.title", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.intro`, options?: any): string;
    (key: `sections.${string}.uses` | `sections.${string}.points` | `sections.${string}.items`, options: { returnObjects: true }): string[];

    // Phonetics namespace
    (key: "intro", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.description` | `sections.${string}.extra`, options?: any): string;
    (key: `sections.dakuon.data` | `sections.handakuon.data`, options: { returnObjects: true }): DakuonItem[];
    (key: `sections.youon.data`, options: { returnObjects: true }): YouonItem[];
    (key: `sections.chouon.data`, options: { returnObjects: true }): LongVowelItem[];
    (key: `sections.summary.items`, options: { returnObjects: true }): string[];

    // Story namespace
    (key: string, options?: { returnObjects: true }): Translation["story"];
    (key: `${number}.title`, options?: any): string;
    (key: `${number}.imageName`, options?: any): string;
    (key: `${number}.story`, options: { returnObjects: true }): StoryChapter[];
    (key: `${number}.story.${number}.chapter`, options?: any): string;
    (key: `${number}.story.${number}.content`, options: { returnObjects: true }): StoryLine[];
  }
}

export default i18n;