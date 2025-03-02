import { WordData } from "../../types/translation";

const n5WordsZhCN: WordData[] = [
  {
    wordId: 1,
    words: "一",
    pron: "ひと(つ)",
    letterOrder: 1,
    letter: "數字",
    type: "數字",
    meaning: { "zh-TW": "一", "zh-CN": "一", "en": "One" },
  },
  {
    wordId: 2,
    words: "二",
    pron: "ふた(つ)",
    letterOrder: 1,
    letter: "數字",
    type: "數字",
    meaning: { "zh-TW": "二", "zh-CN": "二", "en": "Two" },
  },
  {
    wordId: 3,
    words: "三",
    pron: "みっ(つ)",
    letterOrder: 1,
    letter: "數字",
    type: "數字",
    meaning: { "zh-TW": "三", "zh-CN": "三", "en": "Three" },
  },
  // 添加其他單詞，完整轉換 n5_words.json 的內容
];

export default n5WordsZhCN;