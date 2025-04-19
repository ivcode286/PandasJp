//src/locales/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import grammarConceptsZhTW from '../locales/zh-TW/GrammarConceptsScreen';
import n5ConceptsZhTW from '../locales/zh-TW/N5ConceptsScreen';
import homeZhTW from '../locales/zh-TW/HomeScreen';
import hiraganaZhTW from '../locales/zh-TW/HiraganaScreen';
import katakanaZhTW from '../locales/zh-TW/KatakanaScreen';
import phoneticsZhTW from '../locales/zh-TW/PhoneticsScreen';
import storyZhTW from '../locales/zh-TW/N5StoryScreen';
import n5ChatZhTW from '../locales/zh-TW/N5Chat';
import n5BasicGrammarZhTW from '../locales/zh-TW/N5BasicGrammar';
import n5AdvanceGrammarZhTW from '../locales/zh-TW/N5AdvanceGrammar';
import n5WordsZhTW from '../locales/zh-TW/N5Words';
import n5KanjiWordsZhTW from '../locales/zh-TW/N5KanjiWords';
import n4n3WordsZhTW from '../locales/zh-TW/N3N4Words';
import commonZhTW from '../locales/zh-TW/Common';
import settingsZhTW from '../locales/zh-TW/SettingsScreen';
import appPromptZhTW from './zh-TW/ApplicationPrompt';
import grammarConceptsZhCN from '../locales/zh-CN/GrammarConceptsScreen';
import n5ConceptsZhCN from '../locales/zh-CN/N5ConceptsScreen';
import homeZhCN from '../locales/zh-CN/HomeScreen';
import hiraganaZhCN from '../locales/zh-CN/HiraganaScreen';
import katakanaZhCN from '../locales/zh-CN/KatakanaScreen';
import phoneticsZhCN from '../locales/zh-CN/PhoneticsScreen';
import storyZhCN from '../locales/zh-CN/N5StoryScreen';
import n5BasicGrammarZhCN from '../locales/zh-CN/N5BasicGrammar';
import n5AdvanceGrammarZhCN from '../locales/zh-CN/N5AdvanceGrammar';
import n5WordsZhCN from '../locales/zh-CN/N5Words';
import n5KanjiWordsZhCN from '../locales/zh-CN/N5KanjiWords';
import n4n3WordsZhCN from '../locales/zh-CN/N3N4Words';
import commonZhCN from '../locales/zh-CN/Common';
import settingsZhCN from '../locales/zh-CN/SettingsScreen';
import appPromptZhCN from './zh-CN/ApplicationPrompt';
import n5ChatZhCN from './zh-CN/N5Chat';
import travelChatZhTW from './zh-TW/TravelChat';
import travelChatZhCN from './zh-CN/TravelChat';
import n4GrammarZhTW from './zh-TW/N4BasicGrammar';
import n4GrammarZhCN from './zh-CN/N4BasicGrammar';
import n4AdvanceGrammarZhTW from './zh-TW/n4AdvanceGrammar';
import n4AdvanceGrammarZhCN from './zh-CN/n4AdvanceGrammar';


const resources = {
  'zh-TW': {
    grammarConcepts: grammarConceptsZhTW,
    n5Concepts: n5ConceptsZhTW,
    home: homeZhTW,
    hiragana: hiraganaZhTW,
    katakana: katakanaZhTW,
    phonetics: phoneticsZhTW,
    story: storyZhTW,
    n5chat: n5ChatZhTW, // 統一小寫
    grammar: {
      n5_basic: n5BasicGrammarZhTW,
      n5_advance: n5AdvanceGrammarZhTW,
      n4_basic: n4GrammarZhTW, 
      n4_advance: n4AdvanceGrammarZhTW, 
    },
    words: {
      n5: n5WordsZhTW,
      n5_kanji: n5KanjiWordsZhTW,
      n4n3: n4n3WordsZhTW,
    },
    common: commonZhTW,
    settings: settingsZhTW,
    appPrompt: appPromptZhTW,
    travelchat: travelChatZhTW,
  },
  'zh-CN': {
    grammarConcepts: grammarConceptsZhCN,
    n5Concepts: n5ConceptsZhCN,
    home: homeZhCN,
    hiragana: hiraganaZhCN,
    katakana: katakanaZhCN,
    phonetics: phoneticsZhCN,
    story: storyZhCN,
    n5chat: n5ChatZhCN, // 統一小寫
    grammar: {
      n5_basic: n5BasicGrammarZhCN,
      n5_advance: n5AdvanceGrammarZhCN,
      n4_basic: n4GrammarZhCN,  
      n4_advance: n4AdvanceGrammarZhCN, 
    },
    words: {
      n5: n5WordsZhCN,
      n5_kanji: n5KanjiWordsZhCN,
      n4n3: n4n3WordsZhCN,
    },
    common: commonZhCN,
    settings: settingsZhCN,
    appPrompt: appPromptZhCN,
    travelchat: travelChatZhCN,
  },
};

console.log('n5ChatZhTW resource:', n5ChatZhTW); // 確認資源內容

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
    'n5chat', // all lower case in url for story
    'conversation',
    'grammar',
    'words',
    'common',
    'settings',
    'appPrompt',
    'travelchat', // all lower case in url for story
  ],
  returnObjects: true,
});

i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
});

console.log('Grammar n5_basic (zh-TW):', resources['zh-TW'].grammar.n5_basic);

export default i18n;