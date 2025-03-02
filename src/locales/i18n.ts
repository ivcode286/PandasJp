import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DakuonItem, LongVowelItem, YouonItem, Translation, StoryChapter, StoryLine, ConversationLine, ConversationTranslation } from "../types/translation";
import grammarConceptsZhTW from "../locales/zh-TW/GrammarConceptsScreen";
import homeZhTW from "../locales/zh-TW/HomeScreen";
import hiraganaZhTW from "../locales/zh-TW/HiraganaScreen";
import katakanaZhTW from "../locales/zh-TW/KatakanaScreen";
import phoneticsZhTW from "../locales/zh-TW/PhoneticsScreen";
import storyZhTW from "../locales/zh-TW/N5StoryScreen";
import conversationZhTW from "../locales/zh-TW/N5ConversationScreen";
import grammarConceptsZhCN from "../locales/zh-CN/GrammarConceptsScreen";
import homeZhCN from "../locales/zh-CN/HomeScreen";
import hiraganaZhCN from "../locales/zh-CN/HiraganaScreen";
import katakanaZhCN from "../locales/zh-CN/KatakanaScreen";
import phoneticsZhCN from "../locales/zh-CN/PhoneticsScreen";
import storyZhCN from "../locales/zh-CN/N5StoryScreen";
import conversationZhCN from "../locales/zh-CN/N5ConversationScreen";

const resources = {
  "zh-TW": {
    grammarConcepts: grammarConceptsZhTW,
    home: homeZhTW,
    hiragana: hiraganaZhTW,
    katakana: katakanaZhTW,
    phonetics: phoneticsZhTW,
    story: storyZhTW,
    conversation: conversationZhTW,
  },
  "zh-CN": {
    grammarConcepts: grammarConceptsZhCN,
    home: homeZhCN,
    hiragana: hiraganaZhCN,
    katakana: katakanaZhCN,
    phonetics: phoneticsZhCN,
    story: storyZhCN,
    conversation: conversationZhCN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-CN",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: false },
  defaultNS: "home",
  ns: ["grammarConcepts", "home", "hiragana", "katakana", "phonetics", "story", "conversation"],
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
      conversation: Translation["conversation"];
    };
    returnObjects: true;
  }

  interface TFunction {
    (key: "translation.title" | "translation.intro", options?: any): string;
    (key: `translation.sections.${string}.title` | `translation.sections.${string}.paragraph`, options?: any): string;
    (key: `translation.sections.${string}.table.header`, options: { returnObjects: true }): string[];
    (key: `translation.sections.${string}.table.data`, options: { returnObjects: true }): string[][];
    (key: `translation.sections.${string}.paragraphs`, options: { returnObjects: true }): string[];

    (key: "translation.title" | `translation.menu.${string}`, options?: any): string;

    (key: "title" | "table.title", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.intro`, options?: any): string;
    (key: `sections.${string}.uses` | `sections.${string}.points` | `sections.${string}.items`, options: { returnObjects: true }): string[];

    (key: "table.title", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.intro`, options?: any): string;
    (key: `sections.${string}.uses` | `sections.${string}.points` | `sections.${string}.items`, options: { returnObjects: true }): string[];

    (key: "intro", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.description` | `sections.${string}.extra`, options?: any): string;
    (key: `sections.dakuon.data` | `sections.handakuon.data`, options: { returnObjects: true }): DakuonItem[];
    (key: `sections.youon.data`, options: { returnObjects: true }): YouonItem[];
    (key: `sections.chouon.data`, options: { returnObjects: true }): LongVowelItem[];
    (key: `sections.summary.items`, options: { returnObjects: true }): string[];

    (key: string, options?: { returnObjects: true }): any;
    (key: `${number}.title`, options?: any): string;
    (key: `${number}.imageName`, options?: any): string;
    (key: `${number}.story`, options: { returnObjects: true }): StoryChapter[];
    (key: `${number}.story.${number}.chapter`, options?: any): string;
    (key: `${number}.story.${number}.content`, options: { returnObjects: true }): StoryLine[];

    (key: "conversations", options: { returnObjects: true }): ConversationTranslation[];
    (key: `${number}.title`, options?: any): string;
    (key: `${number}.imageName`, options?: any): string;
    (key: `${number}.scene`, options?: any): string;
    (key: `${number}.conversation`, options: { returnObjects: true }): ConversationLine[];
  }
}

export default i18n;