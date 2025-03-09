import {
  getPathFromState as defaultGetPathFromState,
  getStateFromPath as defaultGetStateFromPath,
  NavigationState,
  PartialState,
} from "@react-navigation/native";
import i18n from "../locales/i18n";
import { changeLanguage } from "./languageService";

const linking = {
  prefixes: ["http://localhost:8081", "https://pandasapps.com"],
  config: {
    screens: {
      Home: {
        path: ":lang/home",
        screens: {
          HomeScreen: "",
          HiraganaScreen: "hiragana",
          KatakanaScreen: "katakana",
          KanaComparisonScreen: "kana-comparison",
          PhoneticsScreen: "phonetics",
          N5ConceptsScreen: "n5-concepts",
          GrammarConceptsScreen: "grammar-concepts",
          GrammarScreen: "grammar/:level",
          WordsWithDrawer: {
            path: "words-with-drawer/:level",
            screens: {
              WordsScreen: "wordsscreen",
            },
          },
          StoryStack: {
            path: "story-stack",
            screens: {
              N5StoryMenu: "",
              N5StoryScreen: "n5storyscreen",
            },
          },
          ConversationStack: {
            path: "conversation-stack",
            screens: {
              N5ConversationMenu: "",
              N5ConversationScreen: "n5conversationscreen",
            },
          },
        },
      },
      Words: {
        path: ":lang/words",
        screens: {
          WordsMenuScreen: "",
          WordsWithDrawer: "words-with-drawer/:level",
        },
      },
      Story: ":lang/story",
      Settings: ":lang/settings",
    },
  },
  getPathFromState(state: NavigationState | PartialState<NavigationState>, options?: any): string {
    let path = defaultGetPathFromState(state, { ...options, ...linking.config });
    if (path.startsWith("/")) {
      path = path.slice(1);
    }

    const segments = path.split("/").filter(Boolean);
    let lang = i18n.language ? i18n.language.toLowerCase() : "zh-cn";

    if (state.routes && state.routes[0]) {
      let params = state.routes[0].params;
      if (state.type === "tab" && typeof state.index === "number" && state.routes[state.index]) {
        params = state.routes[state.index].params;
      }
      if (params?.lang && ["zh-tw", "zh-cn"].includes(params.lang.toLowerCase())) {
        lang = params.lang.toLowerCase();
      }
    }

    const cleanedSegments = segments
      .filter((seg) => seg.toLowerCase() !== "zh-tw" && seg.toLowerCase() !== "zh-cn" && seg !== "undefined")
      .map((seg) => seg.toLowerCase());

    const uniqueSegments = [];
    for (const seg of cleanedSegments) {
      if (uniqueSegments.length === 0 || uniqueSegments[uniqueSegments.length - 1] !== seg) {
        uniqueSegments.push(seg);
      }
    }

    const finalPath = uniqueSegments.length > 0 ? uniqueSegments.join("/") : "home";
    const generatedPath = `/${lang}/${finalPath}`;
    console.log("Generated path:", generatedPath);
    return generatedPath;
  },
  getStateFromPath(path: string, options?: any): PartialState<NavigationState> {
    console.log("getStateFromPath path:", path);
    const [pathWithoutQuery, queryString] = path.split("?");
    const segments = pathWithoutQuery.split("/").filter(Boolean);
    let lang = i18n.language ? i18n.language.toLowerCase() : "zh-cn";

    if (segments[0]?.toLowerCase() === "zh-tw" || segments[0]?.toLowerCase() === "zh-cn") {
      lang = segments.shift()!.toLowerCase();
      if (lang !== i18n.language) {
        console.log("Syncing language to URL lang:", lang);
        changeLanguage(lang as "zh-TW" | "zh-CN").catch((err) =>
          console.error("Failed to change language:", err)
        );
      }
    }

    const newPath = segments.join("/") || "home";
    console.log("newPath:", newPath);

    const homeScreens = linking.config.screens.Home.screens;
    const wordsScreens = linking.config.screens.Words.screens;
    const topLevelRoute = segments[0]?.toLowerCase();
    let state;

    if (topLevelRoute === "home") {
      const subRoute = segments[1]?.toLowerCase() || "";
      const screenName = Object.keys(homeScreens).find(
        (key) => homeScreens[key] === subRoute || (subRoute === "" && homeScreens[key] === "")
      );

      if (screenName) {
        state = {
          routes: [
            {
              name: "Home",
              state: {
                routes: [
                  { name: "HomeScreen" },
                  { name: screenName },
                ],
              },
            },
          ],
        };
      } else if (subRoute === "grammar" && segments[2]) {
        state = {
          routes: [
            {
              name: "Home",
              state: {
                routes: [
                  { name: "HomeScreen" },
                  {
                    name: "GrammarScreen",
                    params: { level: segments[2].toLowerCase() },
                  },
                ],
              },
            },
          ],
        };
      } else if (subRoute === "words-with-drawer" && segments[2]) {
        const wordsSubRoute = segments[3]?.toLowerCase() || "";
        const wordsScreenName = Object.keys(homeScreens.WordsWithDrawer.screens).find(
          (key) => homeScreens.WordsWithDrawer.screens[key] === wordsSubRoute
        );
        state = {
          routes: [
            {
              name: "Home",
              state: {
                routes: [
                  { name: "HomeScreen" },
                  {
                    name: "WordsWithDrawer",
                    params: { level: segments[2].toLowerCase() },
                    ...(wordsScreenName
                      ? {
                          state: {
                            routes: [
                              {
                                name: wordsScreenName,
                                ...(queryString ? { params: { level: decodeURIComponent(queryString.split("=")[1]) } } : {}),
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
      } else if (subRoute === "story-stack") {
        const storySubRoute = segments[2]?.toLowerCase() || "";
        const storyScreenName = Object.keys(homeScreens.StoryStack.screens).find(
          (key) => homeScreens.StoryStack.screens[key] === storySubRoute || (storySubRoute === "" && homeScreens.StoryStack.screens[key] === "")
        );
        state = {
          routes: [
            {
              name: "Home",
              state: {
                routes: [
                  { name: "HomeScreen" },
                  {
                    name: "StoryStack",
                    state: {
                      routes: [
                        {
                          name: storyScreenName || "N5StoryMenu",
                          ...(storySubRoute === "n5storyscreen" && queryString ? { params: { storytitle: decodeURIComponent(queryString.split("=")[1]) } } : {}),
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        };
      } else if (subRoute === "conversation-stack") {
        const convSubRoute = segments[2]?.toLowerCase() || "";
        const convScreenName = Object.keys(homeScreens.ConversationStack.screens).find(
          (key) => homeScreens.ConversationStack.screens[key] === convSubRoute || (convSubRoute === "" && homeScreens.ConversationStack.screens[key] === "")
        );
        state = {
          routes: [
            {
              name: "Home",
              state: {
                routes: [
                  { name: "HomeScreen" },
                  {
                    name: "ConversationStack",
                    state: {
                      routes: [
                        {
                          name: convScreenName || "N5ConversationMenu",
                          ...(convSubRoute === "n5conversationscreen" && queryString ? { params: { conversationtitle: decodeURIComponent(queryString.split("=")[1]) } } : {}),
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
    } else if (topLevelRoute === "words") {
      const subRoute = segments[1]?.toLowerCase() || "";
      const screenName = Object.keys(wordsScreens).find(
        (key) => wordsScreens[key] === subRoute || (subRoute === "" && wordsScreens[key] === "")
      );
      if (screenName) {
        state = {
          routes: [
            {
              name: "Words",
              state: {
                routes: [
                  { name: "WordsMenuScreen" },
                  ...(screenName !== "WordsMenuScreen" ? [{ name: screenName }] : []),
                ],
              },
            },
          ],
        };
      } else if (subRoute === "words-with-drawer" && segments[2]) {
        state = {
          routes: [
            {
              name: "Words",
              state: {
                routes: [
                  { name: "WordsMenuScreen" },
                  {
                    name: "WordsWithDrawer",
                    params: { level: segments[2].toLowerCase() },
                  },
                ],
              },
            },
          ],
        };
      }
    } else if (linking.config.screens[topLevelRoute]) {
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

    console.log("Parsed狀態:", JSON.stringify(state, null, 2));

    const params = {};
    if (queryString && !state?.routes[0]?.state?.routes[1]?.state?.routes[0]?.params) {
      queryString.split("&").forEach(pair => {
        const [key, value] = pair.split("=");
        params[key] = decodeURIComponent(value);
      });
    }

    if (state && state.routes && state.routes[0]) {
      const updatedRoute = {
        ...state.routes[0],
        params: {
          ...state.routes[0].params,
          lang,
          ...params,
        },
      };
      console.log("Returning updated state:", JSON.stringify({ ...state, routes: [updatedRoute, ...state.routes.slice(1)] }, null, 2));
      return {
        ...state,
        routes: [updatedRoute, ...state.routes.slice(1)],
      };
    }

    console.error("Failed to parse state for path:", path);
    return {
      routes: [
        {
          name: "Home",
          params: { lang },
          state: {
            routes: [{ name: "HomeScreen" }],
          },
        },
      ],
    };
  },
};

export default linking;