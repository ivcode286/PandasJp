import { GrammarData } from "../../types/translation";

const n5BasicGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: "介紹 & 敘述",
      sections: [
        {
          pattern: "1. 名詞1 + は + 名詞2 + です / ではありません（A 是 B / A 不是 B)",
          meaning: "",
          description: "📌 句型說明 這是日語最基本的句型，表示「A 是 B」或「A 不是 B」。",
          examples: [
            { 
              sentence: "🔹 私は学生です。", 
              translation: "（我是學生。）" 
            },
            { 
              sentence: "🔹 これは日本の車です。", 
              translation: "（這是日本的車。）" 
            },
            { 
              sentence: "🔹 彼は先生ではありません。", 
              translation: "（他不是老師。）" 
            },
          ],
        },
        // 其他 sections 依此類推，為了簡潔這裡只展示一個
      ],
    },
    // 其他 chapters 依此類推，請將完整的 n5_basic_grammar.json 內容轉換進來
  ],
};

export default n5BasicGrammarZhTW;