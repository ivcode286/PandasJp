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

// Define DakuonItem (for dakuon and handakuon data)
export type DakuonItem = {
  row: string;
  a: string;
  i: string;
  u: string;
  e: string;
  o: string;
};

// Define LongVowelItem (for chouon data)
export type LongVowelItem = {
  type: string;
  mark: string;
  example: string;
};

// Define YouonItem (for youon data)
export type YouonItem = {
  combo: string;
  romaji: string;
  example: string;
};

export interface GrammarConceptsTranslation {
  title: string;
  intro: string;
  sections: {
    [key: string]: Section;
  };
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
  table: {
    title: string;
  };
  sections: {
    [key: string]: Section;
  };
}

export interface KatakanaTranslation {
  table: {
    title: string;
  };
  sections: {
    [key: string]: Section;
  };
}

export interface PhoneticsTranslation {
  intro: string;
  sections: {
    sei: Section;
    dakuon: {
      title: string;
      description: string;
      data: DakuonItem[]; // Use DakuonItem here
      extra: string;
    };
    handakuon: {
      title: string;
      description: string;
      data: DakuonItem[]; // Use DakuonItem here
      extra: string;
    };
    sokuon: Section;
    chouon: {
      title: string;
      description: string;
      data: LongVowelItem[]; // Use LongVowelItem here
    };
    youon: {
      title: string;
      description: string;
      data: YouonItem[]; // Use YouonItem here
    };
    summary: {
      title: string;
      items: string[];
    };
  };
}

export interface Translation {
  grammarConcepts: GrammarConceptsTranslation;
  home: HomeTranslation;
  hiragana: HiraganaTranslation;
  katakana: KatakanaTranslation;
  phonetics: PhoneticsTranslation;
}