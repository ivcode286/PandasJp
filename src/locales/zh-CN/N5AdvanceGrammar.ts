import { GrammarData } from "../../types/translation";

const n5AdvanceGrammarZhCN: GrammarData = {
  chapters: [
    {
      title: { "zh-TW": "📌 進階文法", "zh-CN": "📌 进阶文法", "en": "📌 Advanced Grammar" },
      sections: [
        {
          pattern: { "zh-TW": "50. ～ませんか（要不要一起做～？）", "zh-CN": "50. ～ませんか（要不要一起做～？）", "en": "50. ～ませんか (Would you like to do ~ together?)" },
          meaning: { "zh-TW": "用來邀請對方一起做某事，語氣較為禮貌。", "zh-CN": "用来邀请对方一起做某事，语气较为礼貌。", "en": "Used to invite someone to do something together, with a polite tone." },
          description: { "zh-TW": "📌 句型說明\n動詞ます形去掉「ます」 + ませんか", "zh-CN": "📌 句型说明\n动词ます形去掉「ます」 + ませんか", "en": "📌 Pattern Explanation\nVerb (masu form) without 「ます」 + ませんか" },
          examples: [
            { sentence: { "zh-TW": "🔹いっしょに 映画 (えいが) を見 (み) ませんか？", "zh-CN": "🔹一起去看电影（えいが）吗？", "en": "🔹 Would you like to watch a movie together?" }, translation: { "zh-TW": "要不要一起看電影呢？", "zh-CN": "要不要一起看电影呢？", "en": "Would you like to watch a movie together?" } },
            { sentence: { "zh-TW": "🔹今晩 (こんばん) ご飯 (ごはん) を食 (た) べませんか？", "zh-CN": "🔹今晚（こんばん）一起吃饭（ごはん）吗？", "en": "🔹 Would you like to have dinner tonight?" }, translation: { "zh-TW": "要不要今晚一起吃飯呢？", "zh-CN": "要不要今晚一起吃饭呢？", "en": "Would you like to have dinner tonight?" } },
          ],
        },
        // 其他 sections 依此類推
      ],
    },
    // 其他 chapters 依此類推
  ],
};

export default n5AdvanceGrammarZhCN;