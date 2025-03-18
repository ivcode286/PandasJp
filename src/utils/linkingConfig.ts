import {
  getPathFromState as defaultGetPathFromState,
  getStateFromPath as defaultGetStateFromPath,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import i18n from '../locales/i18n';
import { changeLanguage } from './languageService';

interface RouteParams {
  lang?: string;
  level?: string;
  storyId?: string;
  conversationId?: string;
  namespace?: string;
  [key: string]: any;
}

interface ScreenConfig {
  path: string;
  screens?: { [key: string]: string | ScreenConfig };
}

interface HomeScreensConfig {
  HomeScreen: string;
  HiraganaScreen: string;
  KatakanaScreen: string;
  KanaComparisonScreen: string;
  PhoneticsScreen: string;
  N5ConceptsScreen: string;
  GrammarConceptsScreen: string;
  GrammarScreen: string;
  WordsWithDrawer: ScreenConfig;
  StoryStack: ScreenConfig;
  ConversationStack: ScreenConfig;
}

interface WordsScreensConfig {
  WordsMenuScreen: string;
  WordsWithDrawer: string;
}

interface StoryScreensConfig {
  N5StoryMenu: string;
  N5StoryScreen: string;
}

interface LinkingConfig {
  Home: ScreenConfig & { screens: HomeScreensConfig };
  Words: ScreenConfig & { screens: WordsScreensConfig };
  Story: ScreenConfig & { screens: StoryScreensConfig };
  Settings: string;
}

const linking = {
  prefixes: ['http://localhost:8081', 'https://pandasapps.com'],
  config: {
    screens: {
      Home: {
        path: ':lang/home',
        screens: {
          HomeScreen: '',
          HiraganaScreen: 'hiragana',
          KatakanaScreen: 'katakana',
          KanaComparisonScreen: 'kana-comparison',
          PhoneticsScreen: 'phonetics',
          N5ConceptsScreen: 'n5-concepts',
          GrammarConceptsScreen: 'grammar-concepts',
          GrammarScreen: 'grammar/:level',
          WordsWithDrawer: {
            path: 'words-with-drawer/:level',
            screens: {
              WordsScreen: 'wordsscreen',
            },
          },
          StoryStack: {
            path: 'story-stack',
            screens: {
              N5StoryMenu: '',
              N5StoryScreen: 'n5storyscreen/:storyId',
            },
          },
          ConversationStack: {
            path: 'conversation-stack',
            screens: {
              N5ConversationMenu: '',
              N5ConversationScreen: 'n5conversationscreen',
            },
          },
        },
      },
      Words: {
        path: ':lang/words',
        screens: {
          WordsMenuScreen: '',
          WordsWithDrawer: 'words-with-drawer/:level',
        },
      },
      Story: {
        path: ':lang/story',
        screens: {
          N5StoryMenu: '',
          N5StoryScreen: 'n5storyscreen/:storyId',
        },
      },
      Settings: ':lang/settings',
    } as LinkingConfig,
  },
  getPathFromState(state: NavigationState | PartialState<NavigationState>, options?: any): string {
    let path = defaultGetPathFromState(state, { ...options, ...linking.config });
    if (path.startsWith('/')) {
      path = path.slice(1);
    }

    const segments = path.split('/').filter(Boolean);
    let lang = i18n.language ? i18n.language.toLowerCase() : 'zh-cn';

    if (state.routes && state.routes[0]) {
      let params: RouteParams | undefined = state.routes[0].params as RouteParams;
      if (state.type === 'tab' && typeof state.index === 'number' && state.routes[state.index]) {
        params = state.routes[state.index].params as RouteParams;
      }
      if (params?.lang && ['zh-tw', 'zh-cn'].includes(params.lang.toLowerCase())) {
        lang = params.lang.toLowerCase();
      }
      if (params?.storyId || params?.namespace) {
        const nestedRoute = state.routes[0].state?.routes[1]?.state?.routes[0];
        if (nestedRoute?.name === 'N5StoryScreen') {
          path = `${segments[0]}/story-stack/n5storyscreen/${params.storyId}`;
          if (params.namespace) {
            path += `?namespace=${encodeURIComponent(params.namespace)}`;
          }
        } else {
          let query = '';
          if (params.storyId) query += `storyId=${encodeURIComponent(params.storyId)}`;
          if (params.namespace) query += `${query ? '&' : ''}namespace=${encodeURIComponent(params.namespace)}`;
          if (query) path += `?${query}`;
        }
      }
    }

    const cleanedSegments = segments
      .filter((seg) => seg.toLowerCase() !== 'zh-tw' && seg.toLowerCase() !== 'zh-cn' && seg !== 'undefined')
      .map((seg) => seg.toLowerCase());

    const uniqueSegments: string[] = [];
    for (const seg of cleanedSegments) {
      if (uniqueSegments.length === 0 || uniqueSegments[uniqueSegments.length - 1] !== seg) {
        uniqueSegments.push(seg);
      }
    }

    const finalPath = uniqueSegments.length > 0 ? uniqueSegments.join('/') : 'home';
    const generatedPath = `/${lang}/${finalPath}`;
    console.log('Generated path:', generatedPath);
    return generatedPath;
  },
  getStateFromPath(path: string, options?: any): PartialState<NavigationState> {
    console.log('getStateFromPath path:', path);
    const [pathWithoutQuery, queryString] = path.split('?');
    const segments = pathWithoutQuery.split('/').filter(Boolean);
    let lang = i18n.language ? i18n.language.toLowerCase() : 'zh-cn';

    if (segments[0]?.toLowerCase() === 'zh-tw' || segments[0]?.toLowerCase() === 'zh-cn') {
      lang = segments.shift()!.toLowerCase();
      if (lang !== i18n.language) {
        console.log('Syncing language to URL lang:', lang);
        changeLanguage(lang as 'zh-TW' | 'zh-CN').catch((err) =>
          console.error('Failed to change language:', err)
        );
      }
    }

    const newPath = segments.join('/') || 'home';
    console.log('newPath:', newPath);

    const screens = linking.config.screens;
    const homeScreens = screens.Home.screens;
    const wordsScreens = screens.Words.screens;
    const storyScreens = screens.Story.screens;
    const topLevelRoute = segments[0]?.toLowerCase();
    let state;

    const parseQueryParams = (query: string | undefined): { [key: string]: string } => {
      const params: { [key: string]: string } = {};
      if (query) {
        query.split('&').forEach((pair) => {
          const [key, value] = pair.split('=');
          if (key && value) {
            params[key] = decodeURIComponent(value);
          }
        });
      }
      return params;
    };

    if (topLevelRoute === 'home') {
      const subRoute = segments[1]?.toLowerCase() || '';
      const screenName = Object.keys(homeScreens).find((key) => {
        const value = homeScreens[key as keyof HomeScreensConfig];
        return typeof value === 'string' && (value === subRoute || (subRoute === '' && value === ''));
      });

      if (screenName) {
        state = {
          routes: [
            {
              name: 'Home',
              state: {
                routes: [{ name: 'HomeScreen' }, { name: screenName }],
              },
            },
          ],
        };
      } else if (subRoute === 'grammar' && segments[2]) {
        state = {
          routes: [
            {
              name: 'Home',
              state: {
                routes: [
                  { name: 'HomeScreen' },
                  { name: 'GrammarScreen', params: { level: segments[2].toLowerCase() } },
                ],
              },
            },
          ],
        };
      } else if (subRoute === 'words-with-drawer' && segments[2]) {
        const wordsSubRoute = segments[3]?.toLowerCase() || '';
        const wordsScreenName = Object.keys(homeScreens.WordsWithDrawer.screens || {}).find(
          (key) => homeScreens.WordsWithDrawer.screens![key] === wordsSubRoute
        );
        state = {
          routes: [
            {
              name: 'Home',
              state: {
                routes: [
                  { name: 'HomeScreen' },
                  {
                    name: 'WordsWithDrawer',
                    params: { level: segments[2].toLowerCase() },
                    ...(wordsScreenName
                      ? {
                          state: {
                            routes: [
                              {
                                name: wordsScreenName,
                                ...(queryString ? { params: parseQueryParams(queryString) } : {}),
                              },
                            ],
                          },
                        }
                      : {}),
                  },
                ],
              },
            },
          ],
        };
      } else if (subRoute === 'story-stack') {
        const storySubRoute = segments[2]?.toLowerCase() || '';
        const queryParams = parseQueryParams(queryString);
        const storyIdFromPath = segments[3];
        if (storySubRoute === 'n5storyscreen') {
          state = {
            routes: [
              {
                name: 'Home',
                state: {
                  routes: [
                    { name: 'HomeScreen' },
                    {
                      name: 'StoryStack',
                      state: {
                        routes: [
                          {
                            name: 'N5StoryScreen',
                            params: {
                              storyId: storyIdFromPath || queryParams.storyId,
                              namespace: queryParams.namespace,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          };
        } else {
          state = {
            routes: [
              {
                name: 'Home',
                state: {
                  routes: [
                    { name: 'HomeScreen' },
                    {
                      name: 'StoryStack',
                      state: {
                        routes: [
                          {
                            name: 'N5StoryMenu',
                            ...(Object.keys(queryParams).length > 0 ? { params: queryParams } : {}),
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          };
        }
      } else if (subRoute === 'conversation-stack') {
        const convSubRoute = segments[2]?.toLowerCase() || '';
        const convScreenName = Object.keys(homeScreens.ConversationStack.screens || {}).find(
          (key) =>
            homeScreens.ConversationStack.screens![key] === convSubRoute ||
            (convSubRoute === '' && homeScreens.ConversationStack.screens![key] === '')
        );
        const queryParams = parseQueryParams(queryString);
        state = {
          routes: [
            {
              name: 'Home',
              state: {
                routes: [
                  { name: 'HomeScreen' },
                  {
                    name: 'ConversationStack',
                    state: {
                      routes: [
                        {
                          name: convScreenName || 'N5ConversationMenu',
                          ...(convSubRoute === 'n5conversationscreen' && Object.keys(queryParams).length > 0
                            ? { params: queryParams }
                            : {}),
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        };
      }
    } else if (topLevelRoute === 'words') {
      const subRoute = segments[1]?.toLowerCase() || '';
      const screenName = Object.keys(wordsScreens).find((key) => {
        const value = wordsScreens[key as keyof WordsScreensConfig];
        return typeof value === 'string' && (value === subRoute || (subRoute === '' && value === ''));
      });
      if (screenName) {
        state = {
          routes: [
            {
              name: 'Words',
              state: {
                routes: [{ name: 'WordsMenuScreen' }, ...(screenName !== 'WordsMenuScreen' ? [{ name: screenName }] : [])],
              },
            },
          ],
        };
      } else if (subRoute === 'words-with-drawer' && segments[2]) {
        const queryParams = parseQueryParams(queryString);
        state = {
          routes: [
            {
              name: 'Words',
              state: {
                routes: [
                  { name: 'WordsMenuScreen' },
                  { name: 'WordsWithDrawer', params: { level: segments[2].toLowerCase(), ...queryParams } },
                ],
              },
            },
          ],
        };
      }
    } else if (topLevelRoute === 'story') {
      const subRoute = segments[1]?.toLowerCase() || '';
      const queryParams = parseQueryParams(queryString);
      const storyIdFromPath = segments[2];
      if (subRoute === 'n5storyscreen') {
        state = {
          routes: [
            {
              name: 'Story',
              state: {
                routes: [
                  {
                    name: 'N5StoryScreen',
                    params: {
                      storyId: storyIdFromPath || queryParams.storyId,
                      namespace: queryParams.namespace,
                    },
                  },
                ],
              },
            },
          ],
        };
      } else {
        state = {
          routes: [
            {
              name: 'Story',
              state: {
                routes: [
                  {
                    name: 'N5StoryMenu',
                    ...(Object.keys(queryParams).length > 0 ? { params: queryParams } : {}),
                  },
                ],
              },
            },
          ],
        };
      }
    } else if (topLevelRoute && linking.config.screens[topLevelRoute as keyof LinkingConfig]) {
      state = {
        routes: [
          {
            name: topLevelRoute.charAt(0).toUpperCase() + topLevelRoute.slice(1),
          },
        ],
      };
    }

    if (!state) {
      state = defaultGetStateFromPath(newPath, { ...options, ...linking.config });
    }

    console.log('Parsed state:', JSON.stringify(state, null, 2));

    const params = parseQueryParams(queryString);
    if (state && state.routes && state.routes[0]) {
      const updatedRoute = {
        ...state.routes[0],
        params: {
          ...state.routes[0].params,
          lang,
          ...params,
        },
      };
      console.log('Returning updated state:', JSON.stringify({ ...state, routes: [updatedRoute, ...state.routes.slice(1)] }, null, 2));
      return {
        ...state,
        routes: [updatedRoute, ...state.routes.slice(1)],
      };
    }

    console.error('Failed to parse state for path:', path);
    return {
      routes: [
        {
          name: 'Home',
          params: { lang },
          state: {
            routes: [{ name: 'HomeScreen' }],
          },
        },
      ],
    };
  },
};

export default linking;

