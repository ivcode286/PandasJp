// src/locales/zh-TW/N5ConceptsScreen.ts
const n5ConceptsZhTW = {
    title: "N5 日語基本概念",
    intro: "學習日語 N5 等級的基本語法和概念！",
    sections: {
      sov: {
        title: "1️⃣ 日語的語序（SOV）",
        description: "日語基本語序是 SOV（主詞 + 受詞 + 動詞），動詞總是放在句尾。",
        table: {
          header: ["中文", "英文", "日文"],
          data: [
            {
              chinese: "我吃蘋果。",
              english: "I eat an apple.",
              japanese: "私はりんごを食べます。",
            },
            {
              chinese: "他在公園讀書。",
              english: "He reads a book in the park.",
              japanese: "彼は公園で本を読みます。",
            },
          ],
        },
      },
      particles: {
        title: "2️⃣ 助詞（は、が、を、に、で 等）",
        description: "日語助詞用來標示句子成分，如「は（主題）」、「が（主語）」、「を（受詞）」等。",
        table: {
          header: ["助詞", "用法", "例句", "中文解釋"],
          data: [
            {
              particle: "は (wa)",
              usage: "標示主題",
              example: "私は学生です。",
              meaning: "我是學生。",
            },
            {
              particle: "が (ga)",
              usage: "標示主語（重點）",
              example: "彼が先生です。",
              meaning: "他是老師。",
            },
            {
              particle: "を (wo)",
              usage: "標示受詞",
              example: "りんごを食べます。",
              meaning: "吃蘋果。",
            },
            {
              particle: "に (ni)",
              usage: "方向 / 時間",
              example: "学校に行きます。",
              meaning: "去學校。",
            },
            {
              particle: "で (de)",
              usage: "動作場所",
              example: "公園で遊びます。",
              meaning: "在公園玩。",
            },
          ],
        },
      },
      politePlain: {
        title: "3️⃣ 敬語與語體（です・ます vs. だ・る）",
        description: "日語有敬語體（です・ます）與普通體（だ・る），在正式或非正式場合使用。",
        table: {
          header: ["中文", "敬語體", "普通體"],
          data: [
            {
              chinese: "我是學生。",
              polite: "私は学生です。",
              plain: "俺は学生だ。",
            },
            {
              chinese: "這是書。",
              polite: "これは本です。",
              plain: "これは本だ。",
            },
            {
              chinese: "我吃飯。",
              polite: "ご飯を食べます。",
              plain: "ご飯を食べる。",
            },
          ],
        },
      },
      summary: {
        title: "🌟 總結",
        paragraphs: [
          "📌 日語基本概念",
          "1️⃣ 語序：SOV（主詞 + 受詞 + 動詞）",
          "2️⃣ 助詞：は（主題）、が（主語）、を（受詞）、に（方向/時間）、で（場所）",
          "3️⃣ 敬語 vs. 普通體：です・ます（禮貌） vs. だ・る（隨意）",
          "這些基礎概念對於日語學習超重要，能幫你快速構造基本句子！🚀",
        ],
      },
    },
  };
  
  export default n5ConceptsZhTW;