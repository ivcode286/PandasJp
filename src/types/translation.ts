// src/types/translation.ts
export interface Section {
  title: string;
  paragraph?: string;
  intro?: string;
  description?: string;
  extra?: string;
  table?: {
    header: string[];
    data: string[][];
  };
  paragraphs?: string[];
  uses?: string[];
  points?: string[];
  items?: string[];
}

export type DakuonItem = {
  row: string;
  a: string;
  i: string;
  u: string;
  e: string;
  o: string;
};

export type LongVowelItem = {
  type: string;
  mark: string;
  example: string;
};

export type YouonItem = {
  combo: string;
  romaji: string;
  example: string;
};

export interface StoryLine {
  sentence: string;
  translation: string;
}

export interface StoryChapter {
  chapter: string;
  content: StoryLine[];
}

export interface StoryTranslation {
  title: string;
  imageName: string;
  story: StoryChapter[];
}

export interface GrammarExample {
  sentence: string;
  translation: string;
}

export interface GrammarSection {
  pattern: string;
  meaning: string;
  description: string;
  examples: GrammarExample[];
}

export interface GrammarChapter {
  title: string;
  sections: GrammarSection[];
}

export interface GrammarData {
  chapters: GrammarChapter[];
}

export interface WordData {
  wordId: number;
  words: string;
  pron: string;
  letterOrder: number;
  letter: string;
  type: string;
  meaning: string;
}

export interface GrammarConceptsTranslation {
  title: string;
  intro: string;
  sections: { [key: string]: Section };
}

export interface HomeTranslation {
  title: string;
  menu: {
    hiragana: string;
    katakana: string;
    kana_comparison: string;
    phonetics: string;
    words_n5: string;
    kanji_n5: string;
    n5_concepts: string;
    grammar_concepts: string;
    n5_basic_grammar: string;
    n5_advance_grammar: string;
    story: string;
  };
}

export interface HiraganaTranslation {
  title: string;
  table: { title: string };
  sections: { [key: string]: Section };
}

export interface KatakanaTranslation {
  table: { title: string };
  sections: { [key: string]: Section };
}

export interface PhoneticsTranslation {
  intro: string;
  sections: {
    sei: Section;
    dakuon: { title: string; description: string; data: DakuonItem[]; extra: string };
    handakuon: { title: string; description: string; data: DakuonItem[]; extra: string };
    sokuon: Section;
    chouon: { title: string; description: string; data: LongVowelItem[] };
    youon: { title: string; description: string; data: YouonItem[] };
    summary: { title: string; items: string[] };
  };
}

export interface CommonTranslation {
  drawer: {
    N5: string[];
    "N4-N3": string[];
    "N5-KANJI": string[];
  };
}

export interface SettingsTranslation {
  title: string;
  languageSection: string;
  languages: {
    traditionalChinese: string;
    simplifiedChinese: string;
  };
}

export interface AppPromptTranslation {
  title: string;
  message: string;
  download: string;
  open: string;
  cancel: string;
}

export interface Translation {
  grammarConcepts: GrammarConceptsTranslation;
  home: HomeTranslation;
  hiragana: HiraganaTranslation;
  katakana: KatakanaTranslation;
  phonetics: PhoneticsTranslation;
  story: StoryTranslation[];
  grammar: {
    n5_basic: GrammarData;
    n5_advance: GrammarData;
    n4_basic: GrammarData,  
    n4_advance: GrammarData, 
    n3_basic: GrammarData, 
    n3_advance: GrammarData, 
  };
  words: {
    n5: WordData[];
    n5_kanji: WordData[];
    n4n3: WordData[];
  };
  common: CommonTranslation;
  settings: SettingsTranslation;
  appPrompt: AppPromptTranslation; 
}