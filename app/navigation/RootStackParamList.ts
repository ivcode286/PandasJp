export type HomeStackParamList = {
  HomeScreen: { lang?: 'zh-TW' | 'zh-CN' };
};

export type RootStackParamList = {
  Home: { screen: keyof HomeStackParamList; params?: { lang: 'zh-TW' | 'zh-CN' } };
  HomeScreen: undefined; // If HomeScreen is still accessible directly
  HiraganaScreen: undefined;
  KatakanaScreen: undefined;
  KanaComparisonScreen: undefined;
  PhoneticsScreen: undefined;
  N5ConceptsScreen: undefined;
  GrammarConceptsScreen: undefined; // 新增：用來呈現 N5 日語基礎文法概念的畫面
  GrammarScreen: { level: string }; 
  WordsMenuScreen: undefined;
  StoryStack: { screen: 'N5StoryMenu'; params: { namespace: string } };
  ConversationStack: undefined; 

  // 需要帶 { level: string } 的畫面
  WordsWithDrawer: {
    level: string; 
  };

  Settings: { lang?: "zh-TW" | "zh-CN" }; // Add this line
  PrivacyPolicy: undefined;
};
