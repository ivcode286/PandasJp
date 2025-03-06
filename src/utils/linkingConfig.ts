// linkingConfig.ts
import {
  getPathFromState as defaultGetPathFromState,
  getStateFromPath as defaultGetStateFromPath,
} from '@react-navigation/native';
import i18n from '../locales/i18n';

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
          GrammarScreen: 'GrammarScreen',
          WordsWithDrawer: 'WordsWithDrawer',
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
    let path = defaultGetPathFromState(state, options);
    if (path.startsWith('/')) {
      path = path.slice(1); // 移除開頭斜線
    }

    const lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN'; // 確保語言有默認值
    const segments = path.split('/').filter(Boolean); // 分割並過濾空段

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
    return `/${lang}/${finalPath}`;
  },
  getStateFromPath(path, options) {
    const segments = path.split('/').filter(Boolean); // 分割並過濾空段
    let lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN'; // 默認語言
    if (segments[0]?.toUpperCase() === 'ZH-TW' || segments[0]?.toUpperCase() === 'ZH-CN') {
      lang = segments.shift()!; // 移除並獲取語言代碼
    }

    const newPath = segments.filter(seg => seg !== 'undefined').join('/') || 'Home/HomeScreen'; // 過濾 undefined
    const state = defaultGetStateFromPath(newPath, options);

    // 確保返回有效的導航狀態
    if (!state) {
      return {
        routes: [
          {
            name: 'Home',
            state: {
              routes: [{ name: 'HomeScreen' }],
            },
          },
        ],
      };
    }
    return state;
  },
};

export default linking;