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

export interface ConversationLine {
  speaker: string;
  japanese: string;
  chinese: string;
}

export interface ConversationTranslation {
  title: string;
  imageName: string;
  scene: string;
  conversation: ConversationLine[];
}

export interface GrammarExample {
  sentence: { "zh-TW": string; "zh-CN": string; en: string };
  translation: { "zh-TW": string; "zh-CN": string; en: string };
}

export interface GrammarSection {
  pattern: { "zh-TW": string; "zh-CN": string; en: string };
  meaning: { "zh-TW": string; "zh-CN": string; en: string };
  description: { "zh-TW": string; "zh-CN": string; en: string };
  examples: GrammarExample[];
}

export interface GrammarChapter {
  title: { "zh-TW": string; "zh-CN": string; en: string };
  sections: GrammarSection[];
}

export interface GrammarData {
  chapters: GrammarChapter[];
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
    conversation: string;
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
}