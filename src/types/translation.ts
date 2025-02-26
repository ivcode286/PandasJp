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
  
  export interface GrammarTranslation {
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
  
  export interface Translation {
    grammar: GrammarTranslation;
    home: HomeTranslation;
  }