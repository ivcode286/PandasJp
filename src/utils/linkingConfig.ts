// src/utils/linkingConfig.ts
import {
  getPathFromState as defaultGetPathFromState,
  getStateFromPath as defaultGetStateFromPath,
} from '@react-navigation/native';
import i18n from '../locales/i18n';
import { changeLanguage } from './languageService';

const linking = {
  prefixes: ['http://localhost:8081'],
  config: {
    screens: {
      Home: {
        path: ':lang/Home',
        screens: {
          HomeScreen: 'HomeScreen',
          HiraganaScreen: 'HiraganaScreen',
          KatakanaScreen: 'KatakanaScreen',
          KanaComparisonScreen: 'KanaComparisonScreen',
          PhoneticsScreen: 'PhoneticsScreen',
          N5ConceptsScreen: 'N5ConceptsScreen',
          GrammarConceptsScreen: 'GrammarConceptsScreen',
          GrammarScreen: 'GrammarScreen/:level',
          WordsWithDrawer: 'WordsWithDrawer/:level',
          StoryStack: 'StoryStack',
          ConversationStack: 'ConversationStack',
        },
      },
      Words: ':lang/Words',
      Story: ':lang/Story',
      Settings: ':lang/Settings',
    },
  },
  getPathFromState(state, options) {
    console.log('getPathFromState state:', state);
    let path = defaultGetPathFromState(state, options);
    if (path.startsWith('/')) {
      path = path.slice(1);
    }

    const segments = path.split('/').filter(Boolean);

    // 從導航狀態中提取語言，優先使用 state.params.lang
    let lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN';
    if (state.routes && state.routes[0]?.params) {
      const params = state.routes[0].params as { lang?: string };
      if (params.lang && (params.lang.toUpperCase() === 'ZH-TW' || params.lang.toUpperCase() === 'ZH-CN')) {
        lang = params.lang.toUpperCase();
      }
    }
    console.log('Language used for path:', lang, 'i18n.language:', i18n.language);

    // 過濾掉所有語言代碼，只保留路由部分
    const cleanedSegments = segments.filter(
      seg => seg.toUpperCase() !== 'ZH-TW' && seg.toUpperCase() !== 'ZH-CN' && seg !== 'undefined'
    );

    // 移除重複的路徑段
    const uniqueSegments: string[] = [];
    for (const seg of cleanedSegments) {
      if (uniqueSegments.length === 0 || uniqueSegments[uniqueSegments.length - 1] !== seg) {
        uniqueSegments.push(seg);
      }
    }

    // 如果沒有有效路徑，默認為 Home/HomeScreen
    const finalPath = uniqueSegments.length > 0 ? uniqueSegments.join('/') : 'Home/HomeScreen';
    const generatedPath = `/${lang}/${finalPath}`;
    console.log('Generated path:', generatedPath);
    return generatedPath;
  },
  async getStateFromPath(path, options) {
    console.log('getStateFromPath path:', path);
    const segments = path.split('/').filter(Boolean);
    let lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN';

    if (segments[0]?.toUpperCase() === 'ZH-TW' || segments[0]?.toUpperCase() === 'ZH-CN') {
      const urlLang = segments.shift()!.toLowerCase();
      if (urlLang !== i18n.language) {
        console.log('Syncing language to URL lang:', urlLang);
        await changeLanguage(urlLang as 'zh-TW' | 'zh-CN');
      }
      lang = urlLang.toUpperCase();
    } else {
      console.log('No language in URL, using current lang:', lang);
    }

    const newPath = segments.filter(seg => seg !== 'undefined').join('/') || 'Home/HomeScreen';
    const state = defaultGetPathFromState(newPath, options);

    if (state && state.routes && state.routes[0]) {
      state.routes[0].params = { ...state.routes[0].params, lang: lang.toLowerCase() };
    } else {
      return {
        routes: [
          {
            name: 'Home',
            params: { lang: lang.toLowerCase() },
            state: {
              routes: [{ name: 'HomeScreen' }],
            },
          },
        ],
      };
    }

    console.log('Generated state:', state);
    return state;
  },
};

export default linking;