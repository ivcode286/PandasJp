export type RootStackParamList = {
  // 不需參數的畫面
  HomeScreen: undefined; // 添加這一行
  HiraganaScreen: undefined;
  KatakanaScreen: undefined;
  KanaComparisonScreen: undefined;
  PhoneticsScreen: undefined;
  N5ConceptsScreen: undefined;
  GrammarConceptsScreen: undefined; // 新增：用來呈現 N5 日語基礎文法概念的畫面
  GrammarScreen: { level: string }; 
  WordsMenuScreen: undefined;
  StoryStack: undefined; 
  ConversationStack: undefined; 

  // 需要帶 { level: string } 的畫面
  WordsWithDrawer: {
    level: string; 
  };
};
