import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "zh-TW": {
    translation: {
      title: "📌 從零開始學初級日語 N5",
      menu: {
        hiragana: "平假名",
        katakana: "片假名",
        kana_comparison: "平假和片假對比",
        phonetics: "基本發音規則 & 長音、促音、拗音",
        words_n5: "N5 常用單字",
        kanji_n5: "N5 常見漢字",
        n5_concepts: "日語的基本概念",
        grammar_concepts: "N5 日語基礎文法概念",
        n5_basic_grammar: "最常用 49 個 N5 句型（核心課程）",
        n5_advance_grammar: "進階文法",
        conversation: "N5日常對話",
        story: "N5短篇故事",
      },
    },
  },
  "zh-CN": {
    translation: {
      title: "📌 从零开始学初级日语 N5",
      menu: {
        hiragana: "平假名",
        katakana: "片假名",
        kana_comparison: "平假和片假对比",
        phonetics: "基本发音规则 & 长音、促音、拗音",
        words_n5: "N5 常用单词",
        kanji_n5: "N5 常见汉字",
        n5_concepts: "日语的基本概念",
        grammar_concepts: "N5 日语基础语法概念",
        n5_basic_grammar: "最常用 49 个 N5 句型（核心课程）",
        n5_advance_grammar: "进阶语法",
        conversation: "N5 日常对话",
        story: "N5 短篇故事",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-CN", // 預設語言
  fallbackLng: "zh-TW", // 如果找不到語言，則使用繁體中文
  interpolation: { escapeValue: false },
});

export default i18n;
