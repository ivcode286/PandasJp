import { GrammarData } from "../../types/translation";

const n5BasicGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: "介紹 & 敘述",
      sections: [
        {
          pattern: "1. 名詞1 + は + 名詞2 + です / ではありません（A 是 B / A 不是 B)",
          meaning: "表示 A 是 B 或 A 不是 B",
          description: "📌 句型說明：這是日語最基本的句型，表示「A 是 B」或「A 不是 B」。\n使用場景：用於介紹或描述人或物的身份、性質。",
          examples: [
            {
              sentence: "🔹 私は学生です。",
              translation: "我是學生。",
              analysis: "",
            },
            {
              sentence: "🔹 これは日本の車です。",
              translation: "這是日本的車。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は先生ではありません。",
              translation: "他不是老師。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "2. 名詞1 + は + 名詞2 + だ / ではない（A 是 B / A 不是 B，簡體形)",
          meaning: "簡體形表示 A 是 B 或 A 不是 B",
          description: "📌 句型說明：這是「です / ではありません」的簡體形，適用於口語或日常對話。\n使用場景：較隨意的場合，表達身份或性質。",
          examples: [
            {
              sentence: "🔹 あれは日本語の教科書だ。",
              translation: "那是日語教科書。",
              analysis: "",
            },
            {
              sentence: "🔹 これは俺のスマホだ。",
              translation: "這是我的手機。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は先生ではない。",
              translation: "他不是老師。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "3. 名詞1 + も + 名詞2 + です / ではありません（A 也是 B / A 也不是 B)",
          meaning: "表示 A 也是 B 或 A 也不是 B",
          description: "📌 句型說明：「も」表示「也」，用來表示前後兩件事情相同。\n使用場景：強調相似性或一致性。",
          examples: [
            {
              sentence: "🔹 私は学生です。田中さんも学生です。",
              translation: "我是學生。田中也是學生。",
              analysis: "",
            },
            {
              sentence: "🔹 それは猫ではありません。それも猫ではありません。",
              translation: "那不是貓。那個也不是貓。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "4. 名詞 + の + 名詞（A 的 B)",
          meaning: "表示 A 擁有 B 或 B 屬於 A",
          description: "📌 句型說明：「の」表示名詞與名詞的關係，用來表示所有、分類、出處等。\n使用場景：描述所有權、隸屬或特性。",
          examples: [
            {
              sentence: "🔹 これは私の本です。",
              translation: "這是我的書。",
              analysis: "",
            },
            {
              sentence: "🔹 それは子供のおもちゃです。",
              translation: "那是小孩的玩具。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は東京大学の学生です。",
              translation: "他是東京大學的學生。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "存在 & 擁有",
      sections: [
        {
          pattern: "5. 名詞＋が＋あります / います（有 / 在)",
          meaning: "表示某物存在或某人擁有某物",
          description: "📌 句型說明：\n- あります：用於無生命的東西（物品、植物、場所等）。\n- います：用於有生命的東西（人、動物）。\n使用場景：描述存在或擁有。",
          examples: [
            {
              sentence: "🔹 机の上に本があります。",
              translation: "桌上有一本書。",
              analysis: "",
            },
            {
              sentence: "🔹 公園に猫がいます。",
              translation: "公園裡有貓。",
              analysis: "",
            },
            {
              sentence: "🔹 私は車があります。",
              translation: "我有車。",
              analysis: "",
            },
            {
              sentence: "🔹 田中さんには妹がいます。",
              translation: "田中有個妹妹。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "6. 場所＋に＋名詞＋が＋あります / います（在某地有某物 / 某人)",
          meaning: "表示某地有某物或某人",
          description: "📌 句型說明：用來表達「某個地方有某個人或物品」。\n使用場景：描述特定地點的存在。",
          examples: [
            {
              sentence: "🔹 学校に図書館があります。",
              translation: "學校裡有圖書館。",
              analysis: "",
            },
            {
              sentence: "🔹 部屋にテレビがあります。",
              translation: "房間裡有電視。",
              analysis: "",
            },
            {
              sentence: "🔹 会社に田中さんがいます。",
              translation: "公司裡有田中先生。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "7. 名詞1 は 名詞2 の ところに あります / います（A 在 B 的某個位置)",
          meaning: "表示 A 在 B 的某個位置",
          description: "📌 句型說明：用來表達「A 在 B 的某個位置」。\n使用場景：精確描述位置。",
          examples: [
            {
              sentence: "🔹 本は机の上のところにあります。",
              translation: "書在桌子的上方。",
              analysis: "",
            },
            {
              sentence: "🔹 田中さんは会議室の中にいます。",
              translation: "田中先生在會議室裡。",
              analysis: "",
            },
            {
              sentence: "🔹 車は家の前のところにあります。",
              translation: "車在家的前面。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "動作 & 狀態",
      sections: [
        {
          pattern: "8. 名詞 / 場所＋を＋動詞（動作對象 / 動作範圍)",
          meaning: "表示動作的對象或範圍",
          description: "📌 句型說明：「を」表示動作的對象或影響範圍。\n使用場景：描述動作作用於某物或某地。",
          examples: [
            {
              sentence: "🔹 本を読みます。",
              translation: "讀書。",
              analysis: "",
            },
            {
              sentence: "🔹 ご飯を食べます。",
              translation: "吃飯。",
              analysis: "",
            },
            {
              sentence: "🔹 公園を散歩します。",
              translation: "在公園散步。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "9. 名詞 / 場所＋で＋動詞（在哪裡做某事)",
          meaning: "表示動作發生的地點",
          description: "📌 句型說明：「で」表示動作發生的場所。\n使用場景：描述動作地點。",
          examples: [
            {
              sentence: "🔹 学校で勉強します。",
              translation: "在學校學習。",
              analysis: "",
            },
            {
              sentence: "🔹 レストランで食事します。",
              translation: "在餐廳吃飯。",
              analysis: "",
            },
            {
              sentence: "🔹 公園で遊びます。",
              translation: "在公園玩。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "10. 名詞＋を＋します（做某事)",
          meaning: "將名詞動詞化表示做某事",
          description: "📌 句型說明：「を」用於與「する」搭配的名詞動詞化。\n使用場景：描述特定活動。",
          examples: [
            {
              sentence: "🔹 サッカーをします。",
              translation: "踢足球。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題をします。",
              translation: "做作業。",
              analysis: "",
            },
            {
              sentence: "🔹 会議をします。",
              translation: "開會。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "11. 名詞＋が＋好きです / 嫌いです（喜歡 / 討厭某物)",
          meaning: "表示喜歡或討厭某物",
          description: "📌 句型說明：「好きです」表示喜歡某物，而「嫌いです」表示討厭某物。\n使用場景：表達個人喜好。",
          examples: [
            {
              sentence: "🔹 私は日本の映画が好きです。",
              translation: "我喜歡日本電影。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は野菜が嫌いです。",
              translation: "他討厭蔬菜。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "12. 名詞＋が＋欲しいです（想要某物)",
          meaning: "表示想要某物",
          description: "📌 句型說明：「欲しいです」表示想要某物（只用於第一人稱）。\n使用場景：表達個人需求。",
          examples: [
            {
              sentence: "🔹 新しいスマホが欲しいです。",
              translation: "我想要新的手機。",
              analysis: "",
            },
            {
              sentence: "🔹 彼女は車が欲しいです。",
              translation: "她想要車。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "13. 名詞＋が＋分かります（懂 / 明白某事)",
          meaning: "表示理解或明白某事",
          description: "📌 句型說明：「分かります」表示理解、明白某件事。\n使用場景：表達知識或理解能力。",
          examples: [
            {
              sentence: "🔹 日本語が分かります。",
              translation: "我懂日語。",
              analysis: "",
            },
            {
              sentence: "🔹 数学が分かりません。",
              translation: "我不懂數學。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は英語がよく分かります。",
              translation: "他很懂英語。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "形容詞",
      sections: [
        {
          pattern: "14. い形容詞＋です / くないです（形容詞肯定 / 否定)",
          meaning: "表示い形容詞的肯定或否定",
          description: "📌 句型說明：\n- い形容詞的基本變化方式。\n- 肯定句：「～です」\n- 否定句：「～くないです」\n使用場景：描述事物性質。",
          examples: [
            {
              sentence: "🔹 この本はおもしろいです。",
              translation: "這本書很有趣。",
              analysis: "",
            },
            {
              sentence: "🔹 この映画はおもしろくないです。",
              translation: "這部電影不好看。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "15. な形容詞＋です / ではありません（形容詞肯定 / 否定)",
          meaning: "表示な形容詞的肯定或否定",
          description: "📌 句型說明：\n- な形容詞的基本變化方式。\n- 肯定句：「～です」\n- 否定句：「～ではありません」\n使用場景：描述狀態或特性。",
          examples: [
            {
              sentence: "🔹 彼は元気です。",
              translation: "他很有精神。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は元気ではありません。",
              translation: "他沒精神。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "16. い形容詞＋くて / な形容詞＋で（形容詞連接)",
          meaning: "連接多個形容詞",
          description: "📌 句型說明：\n- い形容詞：「～くて」\n- な形容詞：「～で」\n使用場景：描述多種性質。",
          examples: [
            {
              sentence: "🔹 このレストランは安くておいしいです。",
              translation: "這家餐廳又便宜又好吃。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は親切で優しいです。",
              translation: "他很親切又溫柔。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "17. い形容詞＋く＋なります / な形容詞＋に＋なります（變成某種狀態)",
          meaning: "表示變成某種狀態",
          description: "📌 句型說明：\n- い形容詞：「～くなります」\n- な形容詞：「～になります」\n使用場景：描述狀態變化。",
          examples: [
            {
              sentence: "🔹 天気が寒くなります。",
              translation: "天氣變冷了。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は医者になります。",
              translation: "他成為醫生了。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "動詞",
      sections: [
        {
          pattern: "18. 動詞（ます形）（動詞的敬體形)",
          meaning: "表示動詞的禮貌形式",
          description: "📌 句型說明：「ます形」用於正式場合，表示禮貌。\n使用場景：正式或禮貌對話。",
          examples: [
            {
              sentence: "🔹 毎朝、新聞を読みます。",
              translation: "每天早上讀報紙。",
              analysis: "",
            },
            {
              sentence: "🔹 学校へ行きます。",
              translation: "去學校。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "19. 動詞（ません）（動詞否定形)",
          meaning: "表示不做某事",
          description: "📌 句型說明：「ません」是「ます」形的否定，表示「不做～」。\n使用場景：禮貌地表達否定。",
          examples: [
            {
              sentence: "🔹 肉を食べません。",
              translation: "不吃肉。",
              analysis: "",
            },
            {
              sentence: "🔹 毎日運動しません。",
              translation: "每天不運動。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "20. 動詞（ました）（動詞過去式)",
          meaning: "表示過去完成的動作",
          description: "📌 句型說明：「ました」是「ます形」的過去式。\n使用場景：描述過去事件。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ました。",
              translation: "昨天看了電影。",
              analysis: "",
            },
            {
              sentence: "🔹 朝ごはんを食べました。",
              translation: "吃了早餐。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "21. 動詞（ませんでした）（動詞過去否定)",
          meaning: "表示過去未做的動作",
          description: "📌 句型說明：「ませんでした」是「ます形」的過去否定形。\n使用場景：描述過去未發生的事件。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ませんでした。",
              translation: "昨天沒有看電影。",
              analysis: "",
            },
            {
              sentence: "🔹 朝ごはんを食べませんでした。",
              translation: "沒有吃早餐。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "22. 動詞（て形）＋ください（請做～)",
          meaning: "請求對方做某事",
          description: "📌 句型說明：「て形＋ください」用來請求對方做某事，是較有禮貌的請求表達。\n使用場景：禮貌請求。",
          examples: [
            {
              sentence: "🔹 この本を読んでください。",
              translation: "請讀這本書。",
              analysis: "",
            },
            {
              sentence: "🔹 ここに名前を書いてください。",
              translation: "請在這裡寫上名字。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "23. 動詞（て形）＋もいいです（可以做～)",
          meaning: "允許做某事",
          description: "📌 句型說明：「てもいいです」表示允許某行為，意思是可以做某事。\n使用場景：給予或詢問許可。",
          examples: [
            {
              sentence: "🔹 ここで写真を撮ってもいいです。",
              translation: "可以在這裡拍照。",
              analysis: "",
            },
            {
              sentence: "🔹 この部屋に入ってもいいですか？",
              translation: "可以進這個房間嗎？",
              analysis: "",
            },
          ],
        },
        {
          pattern: "24. 動詞（て形）＋はいけません（不可以做～)",
          meaning: "禁止做某事",
          description: "📌 句型說明：「てはいけません」表示禁止某行為。\n使用場景：表達禁令。",
          examples: [
            {
              sentence: "🔹 ここでタバコを吸ってはいけません。",
              translation: "不能在這裡抽菸。",
              analysis: "",
            },
            {
              sentence: "🔹 先生の話を聞かなくてはいけません。",
              translation: "一定要聽老師的話。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "25. 動詞（て形）＋いる（正在進行的動作 / 狀態)",
          meaning: "表示動作進行或狀態持續",
          description: "📌 句型說明：「ている」表示動作正在進行或狀態持續。\n使用場景：描述當前狀態或進行中的動作。",
          examples: [
            {
              sentence: "🔹 今、勉強しています。",
              translation: "現在正在學習。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は日本に住んでいます。",
              translation: "他住在日本。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "26. 動詞（た形）＋ことがある（曾經做過某事)",
          meaning: "表示曾經的經驗",
          description: "📌 句型說明：「た形＋ことがある」表示曾經做過某事的經驗。\n使用場景：分享過去經歷。",
          examples: [
            {
              sentence: "🔹 日本へ行ったことがあります。",
              translation: "曾經去過日本。",
              analysis: "",
            },
            {
              sentence: "🔹 その映画を見たことがあります。",
              translation: "看過那部電影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "27. 動詞（ない形）＋でください（請不要做～)",
          meaning: "請求對方不要做某事",
          description: "📌 句型說明：「ない形＋でください」表示請求對方不要做某事。\n使用場景：禮貌地表達禁止。",
          examples: [
            {
              sentence: "🔹 ここで遊ばないでください。",
              translation: "請不要在這裡玩。",
              analysis: "",
            },
            {
              sentence: "🔹 写真を撮らないでください。",
              translation: "請不要拍照。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "28. 動詞（辭書形）＋ことができます（能夠做某事)",
          meaning: "表示有能力做某事",
          description: "📌 句型說明：「ことができます」表示具備某種能力或可以做某事。\n使用場景：表達能力。",
          examples: [
            {
              sentence: "🔹 日本語を話すことができます。",
              translation: "會說日語。",
              analysis: "",
            },
            {
              sentence: "🔹 車を運転することができます。",
              translation: "會開車。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "29. 動詞（ます形）＋たいです（想做某事)",
          meaning: "表示想做某事",
          description: "📌 句型說明：「たいです」表示想做某事，只適用於第一人稱。\n使用場景：表達個人意願。",
          examples: [
            {
              sentence: "🔹 日本へ行きたいです。",
              translation: "想去日本。",
              analysis: "",
            },
            {
              sentence: "🔹 お寿司を食べたいです。",
              translation: "想吃壽司。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "30. 動詞（ます形）＋に行きます（去做某事)",
          meaning: "表示去某地做某事",
          description: "📌 句型說明：「に行きます」表示去某地進行某動作。\n使用場景：描述目的性移動。",
          examples: [
            {
              sentence: "🔹 コンビニへ買い物に行きます。",
              translation: "去便利店買東西。",
              analysis: "",
            },
            {
              sentence: "🔹 図書館へ勉強しに行きます。",
              translation: "去圖書館學習。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "時間 & 順序",
      sections: [
        {
          pattern: "31. 時間＋に＋動詞（在某時候做某事)",
          meaning: "表示在特定時間做某事",
          description: "📌 句型說明：表示在特定的時間點執行某動作。\n使用場景：描述時間點。",
          examples: [
            {
              sentence: "🔹 朝7時に起きます。",
              translation: "早上7點起床。",
              analysis: "",
            },
            {
              sentence: "🔹 10時に会議があります。",
              translation: "10點有會議。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "32. 名詞＋の＋前に / 後で（在～之前 / 之後)",
          meaning: "表示某動作的前後時間",
          description: "📌 句型說明：表示某動作發生的時間點是在另一個動作的前或後。\n使用場景：描述時間順序。",
          examples: [
            {
              sentence: "🔹 食事の前に手を洗います。",
              translation: "吃飯前洗手。",
              analysis: "",
            },
            {
              sentence: "🔹 授業の後で図書館へ行きます。",
              translation: "下課後去圖書館。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "33. 動詞（た形）＋後で（做完～之後)",
          meaning: "表示某動作完成後的另一動作",
          description: "📌 句型說明：「た形＋後で」表示在某個動作完成之後，進行另一個動作。\n使用場景：描述動作順序。",
          examples: [
            {
              sentence: "🔹 宿題をした後でテレビを見ます。",
              translation: "做完作業後看電視。",
              analysis: "",
            },
            {
              sentence: "🔹 ご飯を食べた後で散歩します。",
              translation: "吃飯後散步。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "34. 名詞＋の＋時 / 動詞（辭書形・た形）＋時（～的時候)",
          meaning: "表示某時間點的事件",
          description: "📌 句型說明：「時」表示某個時間點發生的事情。\n使用場景：描述特定時刻。",
          examples: [
            {
              sentence: "🔹 子供の時、日本に住んでいました。",
              translation: "小時候住在日本。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事が終わった時、雨が降っていました。",
              translation: "工作結束時正在下雨。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "35. 動詞（て形）＋から（做完 A 之後再做 B)",
          meaning: "表示先後動作順序",
          description: "📌 句型說明：表示先做完 A，再進行 B。\n使用場景：描述動作連續性。",
          examples: [
            {
              sentence: "🔹 宿題をしてからテレビを見ます。",
              translation: "先做作業，再看電視。",
              analysis: "",
            },
            {
              sentence: "🔹 朝ごはんを食べてから学校へ行きます。",
              translation: "吃完早餐後去學校。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "可能 & 推測",
      sections: [
        {
          pattern: "36. 動詞（辭書形 / ない形）＋かもしれません（可能～ / 也許～)",
          meaning: "表示不確定的可能性",
          description: "📌 句型說明：「かもしれません」表示對某件事不確定，但認為有可能發生。\n使用場景：推測未來事件。",
          examples: [
            {
              sentence: "🔹 明日は雨が降るかもしれません。",
              translation: "明天可能會下雨。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は来ないかもしれません。",
              translation: "他可能不會來。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "37. 動詞（辭書形 / ない形）＋でしょう（應該～吧)",
          meaning: "表示對未來的推測",
          description: "📌 句型說明：「でしょう」表示對未來或事實的推測。\n使用場景：表達有把握的猜測。",
          examples: [
            {
              sentence: "🔹 明日は晴れるでしょう。",
              translation: "明天應該會晴天。",
              analysis: "",
            },
            {
              sentence: "🔹 彼はまだ会社にいるでしょう。",
              translation: "他應該還在公司。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "38. い形容詞（普通形）＋でしょう（應該～吧)",
          meaning: "表示對い形容詞的推測",
          description: "📌 句型說明：用於形容詞的推測。\n使用場景：猜測事物性質。",
          examples: [
            {
              sentence: "🔹 この映画は面白いでしょう。",
              translation: "這部電影應該很有趣吧。",
              analysis: "",
            },
            {
              sentence: "🔹 今日は寒いでしょう。",
              translation: "今天應該很冷吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "39. な形容詞（普通形）＋でしょう（應該～吧)",
          meaning: "表示對な形容詞的推測",
          description: "📌 句型說明：用於な形容詞的推測。\n使用場景：猜測狀態或特性。",
          examples: [
            {
              sentence: "🔹 彼は有名でしょう。",
              translation: "他應該很有名吧。",
              analysis: "",
            },
            {
              sentence: "🔹 その計画は大丈夫でしょう。",
              translation: "那個計劃應該沒問題吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "40. 名詞＋でしょう（應該是～吧)",
          meaning: "表示對名詞的推測",
          description: "📌 句型說明：用於對名詞的推測。\n使用場景：猜測身份或類別。",
          examples: [
            {
              sentence: "🔹 彼は先生でしょう。",
              translation: "他應該是老師吧。",
              analysis: "",
            },
            {
              sentence: "🔹 あの人は日本人でしょう。",
              translation: "那個人應該是日本人吧。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "原因 & 目的",
      sections: [
        {
          pattern: "41. ～から、～（因為～，所以～)",
          meaning: "表示原因和結果",
          description: "📌 句型說明：「から」用來說明原因或理由，通常用於個人觀點或主觀理由。\n使用場景：解釋原因。",
          examples: [
            {
              sentence: "🔹 寒いから、コートを着ます。",
              translation: "因為冷，所以穿外套。",
              analysis: "",
            },
            {
              sentence: "🔹 今日は忙しいから、行けません。",
              translation: "因為今天很忙，所以不能去。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "42. ～ので、～（因為～，所以～)",
          meaning: "表示客觀原因和結果",
          description: "📌 句型說明：「ので」與「から」相似，但更委婉、客觀，用於禮貌的說明理由。\n使用場景：正式場合解釋。",
          examples: [
            {
              sentence: "🔹 雨が降ったので、試合は中止になりました。",
              translation: "因為下雨，所以比賽取消了。",
              analysis: "",
            },
            {
              sentence: "🔹 風邪をひいたので、休みます。",
              translation: "因為感冒了，所以請假。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "43. 動詞（ます形）＋に行く / 来る / 帰る（去 / 來 / 回去做某事)",
          meaning: "表示去某地進行某動作",
          description: "📌 句型說明：「に行く / 来る / 帰る」表示前往某地進行某動作。\n使用場景：描述目的性移動。",
          examples: [
            {
              sentence: "🔹 映画を見に行きます。",
              translation: "去看電影。",
              analysis: "",
            },
            {
              sentence: "🔹 先生に会いに来ました。",
              translation: "來看老師。",
              analysis: "",
            },
            {
              sentence: "🔹 日本へ勉強しに行きます。",
              translation: "去日本學習。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "比較",
      sections: [
        {
          pattern: "44. 名詞1＋より＋名詞2＋のほうが～（B 比 A 更～)",
          meaning: "表示 B 比 A 更具某特質",
          description: "📌 句型說明：「より」表示比較對象，「のほうが」表示更傾向於某一方。\n使用場景：比較兩個事物。",
          examples: [
            {
              sentence: "🔹 日本語より英語のほうが簡単です。",
              translation: "英語比日語簡單。",
              analysis: "",
            },
            {
              sentence: "🔹 バスより電車のほうが速いです。",
              translation: "電車比公車快。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "45. 名詞＋がいちばん～（最～的是～)",
          meaning: "表示某物是最具某特質的",
          description: "📌 句型說明：「いちばん」用來表達最高程度，即「最～」。\n使用場景：表達最高級。",
          examples: [
            {
              sentence: "🔹 私は寿司がいちばん好きです。",
              translation: "我最喜歡壽司。",
              analysis: "",
            },
            {
              sentence: "🔹 この店のケーキがいちばん美味しいです。",
              translation: "這家店的蛋糕最好吃。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "假設",
      sections: [
        {
          pattern: "46. 動詞（た形）＋ら、～（如果～的話)",
          meaning: "表示假設條件",
          description: "📌 句型說明：「たら」用來表達假設條件，類似於「如果～，就～」。\n使用場景：假設未來或可能情況。",
          examples: [
            {
              sentence: "🔹 雨が降ったら、試合は中止します。",
              translation: "如果下雨，比賽就取消。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事が終わったら、飲みに行きましょう。",
              translation: "工作結束後，一起去喝一杯吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "47. い形容詞（かった形）＋ら、～（如果～的話)",
          meaning: "表示い形容詞的假設條件",
          description: "📌 句型說明：「い形容詞」的「たら」形變化，表示如果某種情況發生。\n使用場景：假設性質或狀態。",
          examples: [
            {
              sentence: "🔹 この料理が美味しかったら、また食べたいです。",
              translation: "如果這道菜好吃，我想再吃。",
              analysis: "",
            },
            {
              sentence: "🔹 天気がよかったら、散歩しましょう。",
              translation: "如果天氣好，就去散步吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "48. な形容詞（だった形）＋ら、～（如果～的話)",
          meaning: "表示な形容詞的假設條件",
          description: "📌 句型說明：「な形容詞」的「たら」形變化，表示假設條件。\n使用場景：假設狀態或特性。",
          examples: [
            {
              sentence: "🔹 暇だったら、一緒に映画を見ませんか？",
              translation: "如果有空，要不要一起看電影？",
              analysis: "",
            },
            {
              sentence: "🔹 元気だったら、旅行に行きましょう。",
              translation: "如果健康，就去旅行吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "49. 名詞（だった形）＋ら、～（如果～的話)",
          meaning: "表示名詞的假設條件",
          description: "📌 句型說明：「名詞」的「たら」形變化，表示假設條件。\n使用場景：假設身份或情況。",
          examples: [
            {
              sentence: "🔹 明日が休みだったら、遊びに行きます。",
              translation: "如果明天放假，就去玩。",
              analysis: "",
            },
            {
              sentence: "🔹 彼が社長だったら、会社はもっとよくなるでしょう。",
              translation: "如果他是社長，公司應該會變得更好吧。",
              analysis: "",
            },
          ],
        },
      ],
    },
  ],
};

export default n5BasicGrammarZhTW;