import { GrammarData } from "../../types/translation";

const n5AdvanceGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: "📌 进阶文法",
      sections: [
        {
          pattern: "50. ～ませんか（要不要一起做～？）",
          meaning: "用来邀请对方一起做某事，语气较为礼貌。",
          description: "📌 句型说明\n动词ます形去掉「ます」 + ませんか",
          examples: [
            { 
              sentence: "🔹一起去看电影（えいが）吗？", 
              translation: "要不要一起看电影呢？" 
            },
            { 
              sentence: "🔹今晚（こんばん）一起吃饭（ごはん）吗？", 
              translation: "要不要今晚一起吃饭呢？" 
            },
          ],
        },
        // 其他 sections 依此類推
      ],
    },
    // 其他 chapters 依此類推
  ],
};

export default n5AdvanceGrammarZhTW;