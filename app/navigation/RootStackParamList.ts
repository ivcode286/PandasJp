export type RootStackParamList = {
  // 不需參數的畫面
  HiraganaScreen: undefined;
  KatakanaScreen: undefined;
  KanaComparisonScreen: undefined;
  PhoneticsScreen: undefined;
  N5ConceptsScreen: undefined;
  GrammarScreen: undefined;
  ShortReadingN5Screen: undefined;
  N5ConversationScreen: undefined;
  WordsMenuScreen: undefined;

  // 需要帶 { level: string } 的畫面
  WordsWithDrawer: {
    level: string; 
  };
};