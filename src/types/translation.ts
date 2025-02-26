export interface Section {
  title: string;
  paragraph?: string;
  intro?: string;
  table?: {
    header: string[];
    data: string[][];
  };
  paragraphs?: string[];
  uses?: string[];
  points?: string[];
  items?: string[];
}

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

export interface Translation {
  grammarConcepts: GrammarConceptsTranslation;
  home: HomeTranslation;
  hiragana: HiraganaTranslation; // New
}