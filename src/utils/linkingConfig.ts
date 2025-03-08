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
        path: ":lang/home", // Keep lowercase "home" as the parent path
        screens: {
          HomeScreen: "", // Default subpath is empty, maps directly to /home
          HiraganaScreen: "hiragana", 
          KatakanaScreen: "katakana", 
          KanaComparisonScreen: "kana-comparison", 
          PhoneticsScreen: "phonetics", 
          N5ConceptsScreen: "n5-concepts", 
          GrammarConceptsScreen: "grammar-concepts",
          GrammarScreen: "grammar/:level", 
          WordsWithDrawer: "words-with-drawer/:level", 
          StoryStack: "story-stack", 
          ConversationStack: "conversation-stack", 
        },
      },
      Words: ":lang/words", 
      Story: ":lang/story", 
      Settings: ":lang/settings", 
    },
  },
  getPathFromState(state: NavigationState | PartialState<NavigationState>, options?: any): string {
    console.log("getPathFromState state:", state);
    let path = defaultGetPathFromState(state, options);
    if (path.startsWith("/")) {
      path = path.slice(1);
    }

    const segments = path.split("/").filter(Boolean);

    // Use i18n.language as the language source, keep lowercase and retain hyphen
    let lang = i18n.language ? i18n.language.toLowerCase() : "zh-cn";

    // Check the language in route parameters
    if (state.routes && state.routes[0]) {
      let params: { lang?: string } | undefined;
      if (state.type === "tab" && typeof state.index === "number" && state.routes[state.index]) {
        params = state.routes[state.index].params as { lang?: string };
      } else {
        params = state.routes[0].params as { lang?: string };
      }

      if (params?.lang && (params.lang.toLowerCase() === "zh-tw" || params.lang.toLowerCase() === "zh-cn")) {
        lang = params.lang.toLowerCase();
      }
    }

    console.log("Language used for path:", lang, "i18n.language:", i18n.language, "State params:", state.routes?.[0]?.params);

    // Filter out language codes and undefined segments, and convert all segments to lowercase
    const cleanedSegments = segments
      .filter((seg) => seg.toLowerCase() !== "zh-tw" && seg.toLowerCase() !== "zh-cn" && seg !== "undefined")
      .map((seg) => seg.toLowerCase());

    // Remove duplicate path segments
    const uniqueSegments: string[] = [];
    for (const seg of cleanedSegments) {
      if (uniqueSegments.length === 0 || uniqueSegments[uniqueSegments.length - 1] !== seg) {
        uniqueSegments.push(seg);
      }
    }

    // If no valid path exists, default to "home" (empty subpath for HomeScreen)
    const finalPath = uniqueSegments.length > 0 ? uniqueSegments.join("/") : "home";
    const generatedPath = `/${lang}/${finalPath}`;
    console.log("Generated path:", generatedPath);
    return generatedPath;
  },
  getStateFromPath(path: string, options?: any): PartialState<NavigationState> {
    console.log("getStateFromPath path:", path);
    const segments = path.split("/").filter(Boolean);
    let lang = i18n.language ? i18n.language.toLowerCase() : "zh-cn";

    if (segments[0]?.toLowerCase() === "zh-tw" || segments[0]?.toLowerCase() === "zh-cn") {
      const urlLang = segments.shift()!.toLowerCase();
      if (urlLang !== i18n.language) {
        console.log("Syncing language to URL lang:", urlLang);
        changeLanguage(urlLang as "zh-TW" | "zh-CN").catch((err) =>
          console.error("Failed to change language:", err)
        );
      }
      lang = urlLang;
    } else {
      console.log("No language in URL, using current lang:", lang);
    }

    const newPath = segments.filter((seg) => seg !== "undefined").join("/") || "home";
    const state = defaultGetStateFromPath(newPath, options);

    if (state && state.routes && state.routes[0]) {
      const updatedRoute = {
        ...state.routes[0],
        params: {
          ...state.routes[0].params,
          lang: lang,
        },
      };
      return {
        ...state,
        routes: [updatedRoute, ...state.routes.slice(1)],
      };
    }

    return {
      routes: [
        {
          name: "Home",
          params: { lang: lang },
          state: {
            routes: [{ name: "HomeScreen" }],
          },
        },
      ],
    };
  },
};

export default linking;