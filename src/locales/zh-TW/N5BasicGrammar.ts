import { GrammarData } from "../../types/translation";

const n5BasicGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: { "zh-TW": "介紹 & 敘述", "zh-CN": "介绍 & 叙述", "en": "Introduction & Description" },
      sections: [
        {
          pattern: { "zh-TW": "1. 名詞1 + は + 名詞2 + です / ではありません（A 是 B / A 不是 B)", "zh-CN": "1. 名词1 + は + 名词2 + です / ではありません（A 是 B / A 不是 B)", "en": "1. Noun1 + は + Noun2 + です / ではありません (A is B / A is not B)" },
          meaning: { "zh-TW": "", "zh-CN": "", "en": "" },
          description: { "zh-TW": "📌 句型說明 這是日語最基本的句型，表示「A 是 B」或「A 不是 B」。", "zh-CN": "📌 句型说明 这是日语最基本的句型，表示「A 是 B」或「A 不是 B」。", "en": "📌 Pattern Explanation: This is the most basic Japanese sentence pattern, meaning 'A is B' or 'A is not B'." },
          examples: [
            { sentence: { "zh-TW": "🔹 私は学生です。", "zh-CN": "🔹 我是学生。", "en": "🔹 I am a student." }, translation: { "zh-TW": "（我是學生。）", "zh-CN": "（我是学生。）", "en": "(I am a student.)" } },
            { sentence: { "zh-TW": "🔹 これは日本の車です。", "zh-CN": "🔹 这是日本的车。", "en": "🔹 This is a Japanese car." }, translation: { "zh-TW": "（這是日本的車。）", "zh-CN": "（这是日本的车。）", "en": "(This is a Japanese car.)" } },
            { sentence: { "zh-TW": "🔹 彼は先生ではありません。", "zh-CN": "🔹 他不是老师。", "en": "🔹 He is not a teacher." }, translation: { "zh-TW": "（他不是老師。）", "zh-CN": "（他不是老师。）", "en": "(He is not a teacher.)" } },
          ],
        },
        // 其他 sections 依此類推，為了簡潔這裡只展示一個
      ],
    },
    // 其他 chapters 依此類推，請將完整的 n5_basic_grammar.json 內容轉換進來
  ],
};

export default n5BasicGrammarZhTW;