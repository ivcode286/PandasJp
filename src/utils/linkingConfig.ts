import {
  getPathFromState as defaultGetPathFromState,
  getStateFromPath as defaultGetStateFromPath,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import i18n from '../locales/i18n';
import { changeLanguage } from './languageService';

const linking = {
  prefixes: ['http://localhost:8081', 'https://pandasapps.com'], // Add both prefixes
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
  getPathFromState(state: NavigationState | PartialState<NavigationState>, options?: any): string {
    console.log('getPathFromState state:', state);
    let path = defaultGetPathFromState(state, options);
    if (path.startsWith('/')) {
      path = path.slice(1);
    }

    const segments = path.split('/').filter(Boolean);

    // Extract language from navigation state, default to i18n.language
    let lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN';
    if (state.routes && state.routes[0]?.params) {
      const params = state.routes[0].params as { lang?: string };
      if (params.lang && (params.lang.toUpperCase() === 'ZH-TW' || params.lang.toUpperCase() === 'ZH-CN')) {
        lang = params.lang.toUpperCase();
      }
    }
    console.log('Language used for path:', lang, 'i18n.language:', i18n.language);

    // Filter out language codes and undefined segments
    const cleanedSegments = segments.filter(
      seg => seg.toUpperCase() !== 'ZH-TW' && seg.toUpperCase() !== 'ZH-CN' && seg !== 'undefined'
    );

    // Remove duplicate path segments
    const uniqueSegments: string[] = [];
    for (const seg of cleanedSegments) {
      if (uniqueSegments.length === 0 || uniqueSegments[uniqueSegments.length - 1] !== seg) {
        uniqueSegments.push(seg);
      }
    }

    // Default to Home/HomeScreen if no valid path
    const finalPath = uniqueSegments.length > 0 ? uniqueSegments.join('/') : 'Home/HomeScreen';
    const generatedPath = `/${lang}/${finalPath}`;
    console.log('Generated path:', generatedPath);
    return generatedPath;
  },
  getStateFromPath(path: string, options?: any): PartialState<NavigationState> {
    console.log('getStateFromPath path:', path);
    const segments = path.split('/').filter(Boolean);
    let lang = i18n.language ? i18n.language.toUpperCase() : 'ZH-CN';

    if (segments[0]?.toUpperCase() === 'ZH-TW' || segments[0]?.toUpperCase() === 'ZH-CN') {
      const urlLang = segments.shift()!.toLowerCase();
      if (urlLang !== i18n.language) {
        console.log('Syncing language to URL lang:', urlLang);
        // Handle language change as a side effect
        changeLanguage(urlLang as 'zh-TW' | 'zh-CN').catch(err =>
          console.error('Failed to change language:', err)
        );
      }
      lang = urlLang.toUpperCase();
    } else {
      console.log('No language in URL, using current lang:', lang);
    }

    const newPath = segments.filter(seg => seg !== 'undefined').join('/') || 'Home/HomeScreen';
    const state = defaultGetStateFromPath(newPath, options);

    if (state && state.routes && state.routes[0]) {
      const updatedRoute = {
        ...state.routes[0],
        params: {
          ...state.routes[0].params,
          lang: lang.toLowerCase(),
        },
      };
      return {
        ...state,
        routes: [updatedRoute, ...state.routes.slice(1)],
      };
    }

    // Fallback state
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
  },
};

export default linking;