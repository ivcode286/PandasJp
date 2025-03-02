// src/locales/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DakuonItem, LongVowelItem, YouonItem, StoryChapter, StoryLine, ConversationLine, ConversationTranslation, WordData, GrammarConceptsTranslation, GrammarData, HiraganaTranslation, HomeTranslation, KatakanaTranslation, PhoneticsTranslation, StoryTranslation } from "../types/translation";
import grammarConceptsZhTW from "../locales/zh-TW/GrammarConceptsScreen";
import homeZhTW from "../locales/zh-TW/HomeScreen";
import hiraganaZhTW from "../locales/zh-TW/HiraganaScreen";
import katakanaZhTW from "../locales/zh-TW/KatakanaScreen";
import phoneticsZhTW from "../locales/zh-TW/PhoneticsScreen";
import storyZhTW from "../locales/zh-TW/N5StoryScreen";
import conversationZhTW from "../locales/zh-TW/N5ConversationScreen";
import n5BasicGrammarZhTW from "../locales/zh-TW/N5BasicGrammar";
import n5AdvanceGrammarZhTW from "../locales/zh-TW/N5AdvanceGrammar";
import n5WordsZhTW from "../locales/zh-TW/N5Words";
import n5KanjiWordsZhTW from "../locales/zh-TW/N5KanjiWords";
import n3n4WordsZhTW from "../locales/zh-TW/N3N4Words";
import grammarConceptsZhCN from "../locales/zh-CN/GrammarConceptsScreen";
import homeZhCN from "../locales/zh-CN/HomeScreen";
import hiraganaZhCN from "../locales/zh-CN/HiraganaScreen";
import katakanaZhCN from "../locales/zh-CN/KatakanaScreen";
import phoneticsZhCN from "../locales/zh-CN/PhoneticsScreen";
import storyZhCN from "../locales/zh-CN/N5StoryScreen";
import conversationZhCN from "../locales/zh-CN/N5ConversationScreen";
import n5BasicGrammarZhCN from "../locales/zh-CN/N5BasicGrammar";
import n5AdvanceGrammarZhCN from "../locales/zh-CN/N5AdvanceGrammar";
import n5WordsZhCN from "../locales/zh-CN/N5Words";
import n5KanjiWordsZhCN from "../locales/zh-CN/N5KanjiWords";
import n3n4WordsZhCN from "../locales/zh-CN/N3N4Words";
import n5ConceptsZhTW from "../locales/zh-TW/N5ConceptsScreen"; // New import
import n5ConceptsZhCN from "../locales/zh-CN/N5ConceptsScreen"; // New import

const resources = {
  "zh-TW": {
    grammarConcepts: grammarConceptsZhTW,
    home: homeZhTW,
    hiragana: hiraganaZhTW,
    katakana: katakanaZhTW,
    phonetics: phoneticsZhTW,
    story: storyZhTW,
    conversation: conversationZhTW,
    grammar: {
      n5_basic: n5BasicGrammarZhTW,
      n5_advance: n5AdvanceGrammarZhTW,
    },
    words: {
      n5: n5WordsZhTW,
      n5_kanji: n5KanjiWordsZhTW,
      n3n4: n3n4WordsZhTW,
    },
    n5Concepts: n5ConceptsZhTW, // New namespace
  },
  "zh-CN": {
    grammarConcepts: grammarConceptsZhCN,
    home: homeZhCN,
    hiragana: hiraganaZhCN,
    katakana: katakanaZhCN,
    phonetics: phoneticsZhCN,
    story: storyZhCN,
    conversation: conversationZhCN,
    grammar: {
      n5_basic: n5BasicGrammarZhCN,
      n5_advance: n5AdvanceGrammarZhCN,
    },
    words: {
      n5: n5WordsZhCN,
      n5_kanji: n5KanjiWordsZhCN,
      n3n4: n3n4WordsZhCN,
    },
    n5Concepts: n5ConceptsZhCN, // New namespace
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-CN",
  fallbackLng: "zh-TW",
  interpolation: { escapeValue: false },
  defaultNS: "home",
  ns: ["grammarConcepts", "home", "hiragana", "katakana", "phonetics", "story", "conversation", "grammar", "words", "n5Concepts"], // Add n5Concepts
});

// Type augmentation remains largely the same, just ensure `n5Concepts` is included
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
      grammar: Translation["grammar"];
      words: Translation["words"];
      n5Concepts: Translation["n5Concepts"]; // Add this
    };
    returnObjects: true;
  }

  interface TFunction {
    // Existing declarations remain unchanged
    // Add specific keys for N5ConceptsScreen
    (key: "title" | "intro", ns: "n5Concepts", options?: any): string;
    (key: `sections.${string}.title` | `sections.${string}.description`, ns: "n5Concepts", options?: any): string;
    (key: `sections.${string}.table.header`, ns: "n5Concepts", options: { returnObjects: true }): string[];
    (key: `sections.${string}.table.data`, ns: "n5Concepts", options: { returnObjects: true }): any[];
    (key: `sections.summary.paragraphs`, ns: "n5Concepts", options: { returnObjects: true }): string[];
  }
}

export default i18n;

// Existing interfaces remain unchanged, add N5ConceptsTranslation
export interface N5ConceptsTranslation {
  title: string;
  intro: string;
  sections: {
    sov: {
      title: string;
      description: string;
      table: {
        header: string[];
        data: { chinese: string; english: string; japanese: string }[];
      };
    };
    particles: {
      title: string;
      description: string;
      table: {
        header: string[];
        data: { particle: string; usage: string; example: string; meaning: string }[];
      };
    };
    politePlain: {
      title: string;
      description: string;
      table: {
        header: string[];
        data: { chinese: string; polite: string; plain: string }[];
      };
    };
    summary: {
      title: string;
      paragraphs: string[];
    };
  };
}

// Update Translation interface
export interface Translation {
  grammarConcepts: GrammarConceptsTranslation;
  home: HomeTranslation;
  hiragana: HiraganaTranslation;
  katakana: KatakanaTranslation;
  phonetics: PhoneticsTranslation;
  story: StoryTranslation[];
  conversation: { conversations: ConversationTranslation[] };
  grammar: {
    n5_basic: GrammarData;
    n5_advance: GrammarData;
  };
  words: {
    n5: WordData[];
    n5_kanji: WordData[];
    n3n4: WordData[];
  };
  n5Concepts: N5ConceptsTranslation; // Add this
}

// Existing interfaces (Section, DakuonItem, etc.) remain unchanged