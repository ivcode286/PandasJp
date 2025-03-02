// src/locales/zh-CN/N5ConceptsScreen.ts
const n5ConceptsZhCN = {
  title: "N5 日语基本概念",
  intro: "学习日语 N5 级别的基本语法和概念！",
  sections: {
    sov: {
      title: "1️⃣ 日语的语序（SOV）",
      description: "日语基本语序是 SOV（主词 + 受词 + 动词），动词总是放在句尾。",
      table: {
        header: ["中文", "英文", "日文"],
        data: [
          {
            chinese: "我吃苹果。",
            english: "I eat an apple.",
            japanese: "私はりんごを食べます。",
          },
          {
            chinese: "他在公园读书。",
            english: "He reads a book in the park.",
            japanese: "彼は公園で本を読みます。",
          },
        ],
      },
    },
    particles: {
      title: "2️⃣ 助词（は、が、を、に、で 等）",
      description: "日语助词用来标示句子成分，如「は（主题）」、「が（主语）」、「を（受词）」等。",
      table: {
        header: ["助词", "用法", "例句", "中文解释"],
        data: [
          {
            particle: "は (wa)",
            usage: "标示主题",
            example: "私は学生です。",
            meaning: "我是学生。",
          },
          {
            particle: "が (ga)",
            usage: "标示主语（重点）",
            example: "彼が先生です。",
            meaning: "他是老师。",
          },
          {
            particle: "を (wo)",
            usage: "标示受词",
            example: "りんごを食べます。",
            meaning: "吃苹果。",
          },
          {
            particle: "に (ni)",
            usage: "方向 / 时间",
            example: "学校に行きます。",
            meaning: "去学校。",
          },
          {
            particle: "で (de)",
            usage: "动作场所",
            example: "公園で遊びます。",
            meaning: "在公园玩。",
          },
        ],
      },
    },
    politePlain: {
      title: "3️⃣ 敬语与语体（です・ます vs. だ・る）",
      description: "日语有敬语体（です・ます）与普通体（だ・る），在正式或非正式场合使用。",
      table: {
        header: ["中文", "敬语体", "普通体"],
        data: [
          {
            chinese: "我是学生。",
            polite: "私は学生です。",
            plain: "俺は学生だ。",
          },
          {
            chinese: "这是书。",
            polite: "これは本です。",
            plain: "これは本だ。",
          },
          {
            chinese: "我吃饭。",
            polite: "ご飯を食べます。",
            plain: "ご飯を食べる。",
          },
        ],
      },
    },
    summary: {
      title: "🌟 总结",
      paragraphs: [
        "📌 日语基本概念",
        "1️⃣ 语序：SOV（主词 + 受词 + 动词）",
        "2️⃣ 助词：は（主题）、が（主语）、を（受词）、に（方向/时间）、で（场所）",
        "3️⃣ 敬语 vs. 普通体：です・ます（礼貌） vs. だ・る（随意）",
        "这些基础概念对于日语学习超重要，能帮你快速构造基本句子！🚀",
      ],
    },
  },
};

export default n5ConceptsZhCN;