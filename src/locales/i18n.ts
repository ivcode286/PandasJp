// src/locales/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import grammarConceptsZhTW from '../locales/zh-TW/GrammarConceptsScreen';
import n5ConceptsZhTW from '../locales/zh-TW/N5ConceptsScreen';
import homeZhTW from '../locales/zh-TW/HomeScreen';
import hiraganaZhTW from '../locales/zh-TW/HiraganaScreen';
import katakanaZhTW from '../locales/zh-TW/KatakanaScreen';
import phoneticsZhTW from '../locales/zh-TW/PhoneticsScreen';
import storyZhTW from '../locales/zh-TW/N5StoryScreen';
import conversationZhTW from '../locales/zh-TW/N5ConversationScreen';
import n5BasicGrammarZhTW from '../locales/zh-TW/N5BasicGrammar';
import n5AdvanceGrammarZhTW from '../locales/zh-TW/N5AdvanceGrammar';
import n5WordsZhTW from '../locales/zh-TW/N5Words';
import n5KanjiWordsZhTW from '../locales/zh-TW/N5KanjiWords';
import n3n4WordsZhTW from '../locales/zh-TW/N3N4Words';
import commonZhTW from '../locales/zh-TW/Common';
import settingsZhTW from '../locales/zh-TW/SettingsScreen';
import appPromptZhTW from '../locales/zh-TW/AppPrompt';   //rename AppPrompt
import grammarConceptsZhCN from '../locales/zh-CN/GrammarConceptsScreen';
import n5ConceptsZhCN from '../locales/zh-CN/N5ConceptsScreen';
import homeZhCN from '../locales/zh-CN/HomeScreen';
import hiraganaZhCN from '../locales/zh-CN/HiraganaScreen';
import katakanaZhCN from '../locales/zh-CN/KatakanaScreen';
import phoneticsZhCN from '../locales/zh-CN/PhoneticsScreen';
import storyZhCN from '../locales/zh-CN/N5StoryScreen';
import conversationZhCN from '../locales/zh-CN/N5ConversationScreen';
import n5BasicGrammarZhCN from '../locales/zh-CN/N5BasicGrammar';
import n5AdvanceGrammarZhCN from '../locales/zh-CN/N5AdvanceGrammar';
import n5WordsZhCN from '../locales/zh-CN/N5Words';
import n5KanjiWordsZhCN from '../locales/zh-CN/N5KanjiWords';
import n3n4WordsZhCN from '../locales/zh-CN/N3N4Words';
import commonZhCN from '../locales/zh-CN/Common';
import settingsZhCN from '../locales/zh-CN/SettingsScreen';
import appPromptZhCN from '../locales/zh-CN/AppPrompt';

const resources = {
  'zh-TW': {
    grammarConcepts: grammarConceptsZhTW,
    n5Concepts: n5ConceptsZhTW,
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
    common: commonZhTW,
    settings: settingsZhTW,
    appPrompt: appPromptZhTW, // 添加 appPrompt 命名空間
  },
  'zh-CN': {
    grammarConcepts: grammarConceptsZhCN,
    n5Concepts: n5ConceptsZhCN,
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
    common: commonZhCN,
    settings: settingsZhCN,
    appPrompt: appPromptZhCN, // 添加 appPrompt 命名空間
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh-TW',
  fallbackLng: 'zh-TW',
  interpolation: { escapeValue: false },
  defaultNS: 'home',
  ns: [
    'grammarConcepts',
    'n5Concepts',
    'home',
    'hiragana',
    'katakana',
    'phonetics',
    'story',
    'conversation',
    'grammar',
    'words',
    'common',
    'settings',
    'appPrompt', // 添加 appPrompt 到命名空間列表
  ],
  returnObjects: true, // 全局啟用 returnObjects
});

i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
});

export default i18n;