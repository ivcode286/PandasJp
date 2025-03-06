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
      path = path.slice(1); // 移除開頭斜線
    }

    const segments = path.split('/').filter(Boolean); // 分割並過濾空段

    // 從導航狀態中提取語言（如果有的話）
    let lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN'; // 默認語言
    if (state.routes && state.routes[0]?.params) {
      const params = state.routes[0].params as { lang?: string };
      if (params.lang && (params.lang.toUpperCase() === 'ZH-TW' || params.lang.toUpperCase() === 'ZH-CN')) {
        lang = params.lang.toUpperCase(); // 使用導航狀態中的語言
      }
    }

    // 過濾掉無效段（包括 undefined 和語言代碼重複）
    const cleanedSegments = segments.filter(
      seg => seg && seg !== 'undefined' && seg.toUpperCase() !== lang
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
    console.log('Generated path:', `/${lang}/${finalPath}`);
    return `/${lang}/${finalPath}`;
  },
  async getStateFromPath(path, options) {
    console.log('getStateFromPath path:', path);
    const segments = path.split('/').filter(Boolean); // 分割並過濾空段
    let lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN'; // 當前語言

    // 檢查 URL 中的語言代碼並同步更新
    if (segments[0]?.toUpperCase() === 'ZH-TW' || segments[0]?.toUpperCase() === 'ZH-CN') {
      const newLang = segments.shift()!.toLowerCase(); // 提取語言代碼並轉為小寫（如 zh-tw）
      if (newLang !== i18n.language) {
        // 如果 URL 中的語言與當前語言不同，更新語言
        await changeLanguage(newLang as 'zh-TW' | 'zh-CN');
      }
      lang = newLang.toUpperCase();
    }

    const newPath = segments.filter(seg => seg !== 'undefined').join('/') || 'Home/HomeScreen'; // 過濾 undefined
    const state = defaultGetStateFromPath(newPath, options);

    // 在狀態中添加語言參數
    if (state && state.routes && state.routes[0]) {
      state.routes[0].params = { ...state.routes[0].params, lang: lang.toLowerCase() };
    }

    // 確保返回有效的導航狀態
    if (!state) {
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