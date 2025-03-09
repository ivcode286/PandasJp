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
              translation: "（我是學生。）",
            },
            {
              sentence: "🔹 これは日本の車です。",
              translation: "（這是日本的車。）",
            },
            {
              sentence: "🔹 彼は先生ではありません。",
              translation: "（他不是老師。）",
            },
          ],
        },
        {
          pattern: "2. 名詞1 + は + 名詞2 + だ / ではない（A 是 B / A 不是 B，簡體形)",
          meaning: "",
          description: "📌 句型說明 這是「です / ではありません」的簡體形，適用於 口語或日常對話。",
          examples: [
            {
              sentence: "🔹 あれは日本語の教科書だ。",
              translation: "（那是日語教科書。）",
            },
            {
              sentence: "🔹 これは俺のスマホだ。",
              translation: "（這是我的手機。）",
            },
            {
              sentence: "🔹 彼は先生ではない。",
              translation: "（他不是老師。）",
            },
          ],
        },
        {
          pattern: "3. 名詞1 + も + 名詞2 + です / ではありません（A 也是 B / A 也不是 B)",
          meaning: "",
          description: "📌 句型說明 「も」表示「也」，用來 表示前後兩件事情相同。",
          examples: [
            {
              sentence: "🔹 私は学生です。田中さんも学生です。",
              translation: "（我是學生。田中也是學生。）",
            },
            {
              sentence: "🔹 それは猫ではありません。それも猫ではありません。",
              translation: "（那不是貓。那個也不是貓。）",
            },
          ],
        },
        {
          pattern: "4. 名詞 + の + 名詞（A 的 B)",
          meaning: "",
          description: "📌 句型說明 「の」表示 名詞與名詞的關係，用來表示 所有、分類、出處 等。",
          examples: [
            {
              sentence: "🔹 これは私の本です。",
              translation: "（這是我的書。）",
            },
            {
              sentence: "🔹 それは子供のおもちゃです。",
              translation: "（那是小孩的玩具。）",
            },
            {
              sentence: "🔹 彼は東京大学の学生です。",
              translation: "（他是東京大學的學生。）",
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
          meaning: "",
          description: "📌 句型說明\nあります：用於 無生命的東西（物品、植物、場所等）。\nいます：用於 有生命的東西（人、動物）。",
          examples: [
            {
              sentence: "🔹 机の上に本があります。",
              translation: "（桌上有一本書。）",
            },
            {
              sentence: "🔹 公園に猫がいます。",
              translation: "（公園裡有貓。）",
            },
            {
              sentence: "🔹 私は車があります。",
              translation: "（我有車。）",
            },
            {
              sentence: "🔹 田中さんには妹がいます。",
              translation: "（田中有個妹妹。）",
            },
          ],
        },
        {
          pattern: "6. 場所＋に＋名詞＋が＋あります / います（在某地有某物 / 某人)",
          meaning: "",
          description: "📌 句型說明 用來表達「某個地方有某個人或物品」。",
          examples: [
            {
              sentence: "🔹 学校に図書館があります。",
              translation: "（學校裡有圖書館。）",
            },
            {
              sentence: "🔹 部屋にテレビがあります。",
              translation: "（房間裡有電視。）",
            },
            {
              sentence: "🔹 会社に田中さんがいます。",
              translation: "（公司裡有田中先生。）",
            },
          ],
        },
        {
          pattern: "7. 名詞1 は 名詞2 の ところに あります / います（A 在 B 的某個位置)",
          meaning: "",
          description: "📌 句型說明 用來表達「A 在 B 的某個位置」。",
          examples: [
            {
              sentence: "🔹 本は机の上のところにあります。",
              translation: "（書在桌子的上方。）",
            },
            {
              sentence: "🔹 田中さんは会議室の中にいます。",
              translation: "（田中先生在會議室裡。）",
            },
            {
              sentence: "🔹 車は家の前のところにあります。",
              translation: "（車在家的前面。）",
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
          meaning: "",
          description: "📌 句型說明 「を」表示 動作的對象或影響範圍。",
          examples: [
            {
              sentence: "🔹 本を読みます。",
              translation: "（讀書。）",
            },
            {
              sentence: "🔹 ご飯を食べます。",
              translation: "（吃飯。）",
            },
            {
              sentence: "🔹 公園を散歩します。",
              translation: "（在公園散步。）",
            },
          ],
        },
        {
          pattern: "9. 名詞 / 場所＋で＋動詞（在哪裡做某事)",
          meaning: "",
          description: "📌 句型說明 「で」表示 動作發生的場所。",
          examples: [
            {
              sentence: "🔹 学校で勉強します。",
              translation: "（在學校學習。）",
            },
            {
              sentence: "🔹 レストランで食事します。",
              translation: "（在餐廳吃飯。）",
            },
            {
              sentence: "🔹 公園で遊びます。",
              translation: "（在公園玩。）",
            },
          ],
        },
        {
          pattern: "10. 名詞＋を＋します（做某事)",
          meaning: "",
          description: "📌 句型說明 「を」用於 與「する」搭配的名詞動詞化。",
          examples: [
            {
              sentence: "🔹 サッカーをします。",
              translation: "（踢足球。）",
            },
            {
              sentence: "🔹 宿題をします。",
              translation: "（做作業。）",
            },
            {
              sentence: "🔹 会議をします。",
              translation: "（開會。）",
            },
          ],
        },
        {
          pattern: "11. 名詞＋が＋好きです / 嫌いです（喜歡 / 討厭某物)",
          meaning: "",
          description: "📌 句型說明 「好きです」表示 喜歡某物，而「嫌いです」表示 討厭某物。",
          examples: [
            {
              sentence: "🔹 私は日本の映画が好きです。",
              translation: "（我喜歡日本電影。）",
            },
            {
              sentence: "🔹 彼は野菜が嫌いです。",
              translation: "（他討厭蔬菜。）",
            },
          ],
        },
        {
          pattern: "12. 名詞＋が＋欲しいです（想要某物)",
          meaning: "",
          description: "📌 句型說明 「欲しいです」表示 想要某物（只用於第一人稱）。",
          examples: [
            {
              sentence: "🔹 新しいスマホが欲しいです。",
              translation: "（我想要新的手機。）",
            },
            {
              sentence: "🔹 彼女は車が欲しいです。",
              translation: "（她想要車。）",
            },
          ],
        },
        {
          pattern: "13. 名詞＋が＋分かります（懂 / 明白某事)",
          meaning: "",
          description: "📌 句型說明 「分かります」表示 理解、明白某件事。",
          examples: [
            {
              sentence: "🔹 日本語が分かります。",
              translation: "（我懂日語。）",
            },
            {
              sentence: "🔹 数学が分かりません。",
              translation: "（我不懂數學。）",
            },
            {
              sentence: "🔹 彼は英語がよく分かります。",
              translation: "（他很懂英語。）",
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
          meaning: "",
          description: "📌 句型說明\nい形容詞的基本變化方式。\n肯定句：「～です」\n否定句：「～くないです」",
          examples: [
            {
              sentence: "🔹 この本はおもしろいです。",
              translation: "（這本書很有趣。）",
            },
            {
              sentence: "🔹 この映画はおもしろくないです。",
              translation: "（這部電影不好看。）",
            },
          ],
        },
        {
          pattern: "15. な形容詞＋です / ではありません（形容詞肯定 / 否定)",
          meaning: "",
          description: "📌 句型說明\nな形容詞的基本變化方式。\n肯定句：「～です」\n否定句：「～ではありません」",
          examples: [
            {
              sentence: "🔹 彼は元気です。",
              translation: "（他很有精神。）",
            },
            {
              sentence: "🔹 彼は元気ではありません。",
              translation: "（他沒精神。）",
            },
          ],
        },
        {
          pattern: "16. い形容詞＋くて / な形容詞＋で（形容詞連接)",
          meaning: "",
          description: "📌 句型說明\nい形容詞：「～くて」\nな形容詞：「～で」",
          examples: [
            {
              sentence: "🔹 このレストランは安くておいしいです。",
              translation: "（這家餐廳又便宜又好吃。）",
            },
            {
              sentence: "🔹 彼は親切で優しいです。",
              translation: "（他很親切又溫柔。）",
            },
          ],
        },
        {
          pattern: "17. い形容詞＋く＋なります / な形容詞＋に＋なります（變成某種狀態)",
          meaning: "",
          description: "📌 句型說明\nい形容詞：「～くなります」\nな形容詞：「～になります」",
          examples: [
            {
              sentence: "🔹 天気が寒くなります。",
              translation: "（天氣變冷了。）",
            },
            {
              sentence: "🔹 彼は医者になります。",
              translation: "（他成為醫生了。）",
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
          meaning: "",
          description: "📌 句型說明 「ます形」用於正式場合，表示禮貌。",
          examples: [
            {
              sentence: "🔹 毎朝、新聞を読みます。",
              translation: "（每天早上讀報紙。）",
            },
            {
              sentence: "🔹 学校へ行きます。",
              translation: "（去學校。）",
            },
          ],
        },
        {
          pattern: "19. 動詞（ません）（動詞否定形)",
          meaning: "",
          description: "📌 句型說明 「ません」是「ます」形的否定，表示「不做～」。",
          examples: [
            {
              sentence: "🔹 肉を食べません。",
              translation: "（不吃肉。）",
            },
            {
              sentence: "🔹 毎日運動しません。",
              translation: "（每天不運動。）",
            },
          ],
        },
        {
          pattern: "20. 動詞（ました）（動詞過去式)",
          meaning: "",
          description: "📌 句型說明 「ました」是「ます形」的過去式。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ました。",
              translation: "（昨天看了電影。）",
            },
            {
              sentence: "🔹 朝ごはんを食べました。",
              translation: "（吃了早餐。）",
            },
          ],
        },
        {
          pattern: "21. 動詞（ませんでした）（動詞過去否定)",
          meaning: "",
          description: "📌 句型說明 「ませんでした」是「ます形」的過去否定形。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ませんでした。",
              translation: "（昨天沒有看電影。）",
            },
            {
              sentence: "🔹 朝ごはんを食べませんでした。",
              translation: "（沒有吃早餐。）",
            },
          ],
        },
        {
          pattern: "22. 動詞（て形）＋ください（請做～)",
          meaning: "",
          description: "📌 句型說明 「て形＋ください」用來 請求對方做某事，是 較有禮貌的請求表達。",
          examples: [
            {
              sentence: "🔹 この本を読んでください。",
              translation: "（請讀這本書。）",
            },
            {
              sentence: "🔹 ここに名前を書いてください。",
              translation: "（請在這裡寫上名字。）",
            },
          ],
        },
        {
          pattern: "23. 動詞（て形）＋もいいです（可以做～)",
          meaning: "",
          description: "📌 句型說明 「てもいいです」表示 允許某行為，意思是 可以做某事。",
          examples: [
            {
              sentence: "🔹 ここで写真を撮ってもいいです。",
              translation: "（可以在這裡拍照。）",
            },
            {
              sentence: "🔹 この部屋に入ってもいいですか？",
              translation: "（可以進這個房間嗎？）",
            },
          ],
        },
        {
          pattern: "24. 動詞（て形）＋はいけません（不可以做～)",
          meaning: "",
          description: "📌 句型說明 「てはいけません」表示 禁止某行為。",
          examples: [
            {
              sentence: "🔹 ここでタバコを吸ってはいけません。",
              translation: "（不能在這裡抽菸。）",
            },
            {
              sentence: "🔹 先生の話を聞かなくてはいけません。",
              translation: "（一定要聽老師的話。）",
            },
          ],
        },
        {
          pattern: "25. 動詞（て形）＋いる（正在進行的動作 / 狀態)",
          meaning: "",
          description: "📌 句型說明 「ている」表示 動作正在進行 或 狀態持續。",
          examples: [
            {
              sentence: "🔹 今、勉強しています。",
              translation: "（現在正在學習。）",
            },
            {
              sentence: "🔹 彼は日本に住んでいます。",
              translation: "（他住在日本。）",
            },
          ],
        },
        {
          pattern: "26. 動詞（た形）＋ことがある（曾經做過某事)",
          meaning: "",
          description: "📌 句型說明 「た形＋ことがある」表示 曾經做過某事的經驗。",
          examples: [
            {
              sentence: "🔹 日本へ行ったことがあります。",
              translation: "（曾經去過日本。）",
            },
            {
              sentence: "🔹 その映画を見たことがあります。",
              translation: "（看過那部電影。）",
            },
          ],
        },
        {
          pattern: "27. 動詞（ない形）＋でください（請不要做～)",
          meaning: "",
          description: "📌 句型說明 「ない形＋でください」表示 請求對方不要做某事。",
          examples: [
            {
              sentence: "🔹 ここで遊ばないでください。",
              translation: "（請不要在這裡玩。）",
            },
            {
              sentence: "🔹 写真を撮らないでください。",
              translation: "（請不要拍照。）",
            },
          ],
        },
        {
          pattern: "28. 動詞（辭書形）＋ことができます（能夠做某事)",
          meaning: "",
          description: "📌 句型說明 「ことができます」表示 具備某種能力或可以做某事。",
          examples: [
            {
              sentence: "🔹 日本語を話すことができます。",
              translation: "（會說日語。）",
            },
            {
              sentence: "🔹 車を運転することができます。",
              translation: "（會開車。）",
            },
          ],
        },
        {
          pattern: "29. 動詞（ます形）＋たいです（想做某事)",
          meaning: "",
          description: "📌 句型說明 「たいです」表示 想做某事，只適用於第一人稱。",
          examples: [
            {
              sentence: "🔹 日本へ行きたいです。",
              translation: "（想去日本。）",
            },
            {
              sentence: "🔹 お寿司を食べたいです。",
              translation: "（想吃壽司。）",
            },
          ],
        },
        {
          pattern: "30. 動詞（ます形）＋に行きます（去做某事)",
          meaning: "",
          description: "📌 句型說明 「に行きます」表示 去某地進行某動作。",
          examples: [
            {
              sentence: "🔹 コンビニへ買い物に行きます。",
              translation: "（去便利店買東西。）",
            },
            {
              sentence: "🔹 図書館へ勉強しに行きます。",
              translation: "（去圖書館學習。）",
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
          meaning: "",
          description: "📌 句型說明 表示 在特定的時間點執行某動作。",
          examples: [
            {
              sentence: "🔹 朝7時に起きます。",
              translation: "（早上7點起床。）",
            },
            {
              sentence: "🔹 10時に会議があります。",
              translation: "（10點有會議。）",
            },
          ],
        },
        {
          pattern: "32. 名詞＋の＋前に / 後で（在～之前 / 之後)",
          meaning: "",
          description: "📌 句型說明 表示 某動作發生的時間點是在另一個動作的前或後。",
          examples: [
            {
              sentence: "🔹 食事の前に手を洗います。",
              translation: "（吃飯前洗手。）",
            },
            {
              sentence: "🔹 授業の後で図書館へ行きます。",
              translation: "（下課後去圖書館。）",
            },
          ],
        },
        {
          pattern: "33. 動詞（た形）＋後で（做完～之後)",
          meaning: "",
          description: "📌 句型說明 「た形＋後で」表示 在某個動作完成之後，進行另一個動作。",
          examples: [
            {
              sentence: "🔹 宿題をした後でテレビを見ます。",
              translation: "（做完作業後看電視。）",
            },
            {
              sentence: "🔹 ご飯を食べた後で散歩します。",
              translation: "（吃飯後散步。）",
            },
          ],
        },
        {
          pattern: "34. 名詞＋の＋時 / 動詞（辭書形・た形）＋時（～的時候)",
          meaning: "",
          description: "📌 句型說明 「時」表示 某個時間點發生的事情。",
          examples: [
            {
              sentence: "🔹 子供の時、日本に住んでいました。",
              translation: "（小時候住在日本。）",
            },
            {
              sentence: "🔹 仕事が終わった時、雨が降っていました。",
              translation: "（工作結束時正在下雨。）",
            },
          ],
        },
        {
          pattern: "35. 動詞（て形）＋から（做完 A 之後再做 B)",
          meaning: "",
          description: "📌 句型說明 表示 先做完 A，再進行 B。",
          examples: [
            {
              sentence: "🔹 宿題をしてからテレビを見ます。",
              translation: "（先做作業，再看電視。）",
            },
            {
              sentence: "🔹 朝ごはんを食べてから学校へ行きます。",
              translation: "（吃完早餐後去學校。）",
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
          meaning: "",
          description: "📌 句型說明 「かもしれません」表示 對某件事不確定，但認為有可能發生。",
          examples: [
            {
              sentence: "🔹 明日は雨が降るかもしれません。",
              translation: "（明天可能會下雨。）",
            },
            {
              sentence: "🔹 彼は来ないかもしれません。",
              translation: "（他可能不會來。）",
            },
          ],
        },
        {
          pattern: "37. 動詞（辭書形 / ない形）＋でしょう（應該～吧)",
          meaning: "",
          description: "📌 句型說明 「でしょう」表示 對未來或事實的推測。",
          examples: [
            {
              sentence: "🔹 明日は晴れるでしょう。",
              translation: "（明天應該會晴天。）",
            },
            {
              sentence: "🔹 彼はまだ会社にいるでしょう。",
              translation: "（他應該還在公司。）",
            },
          ],
        },
        {
          pattern: "38. い形容詞（普通形）＋でしょう（應該～吧)",
          meaning: "",
          description: "📌 句型說明 用於 形容詞的推測。",
          examples: [
            {
              sentence: "🔹 この映画は面白いでしょう。",
              translation: "（這部電影應該很有趣吧。）",
            },
            {
              sentence: "🔹 今日は寒いでしょう。",
              translation: "（今天應該很冷吧。）",
            },
          ],
        },
        {
          pattern: "39. な形容詞（普通形）＋でしょう（應該～吧)",
          meaning: "",
          description: "📌 句型說明 用於 な形容詞的推測。",
          examples: [
            {
              sentence: "🔹 彼は有名でしょう。",
              translation: "（他應該很有名吧。）",
            },
            {
              sentence: "🔹 その計画は大丈夫でしょう。",
              translation: "（那個計劃應該沒問題吧。）",
            },
          ],
        },
        {
          pattern: "40. 名詞＋でしょう（應該是～吧)",
          meaning: "",
          description: "📌 句型說明 用於 對名詞的推測。",
          examples: [
            {
              sentence: "🔹 彼は先生でしょう。",
              translation: "（他應該是老師吧。）",
            },
            {
              sentence: "🔹 あの人は日本人でしょう。",
              translation: "（那個人應該是日本人吧。）",
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
          meaning: "",
          description: "📌 句型說明 「から」用來 說明原因或理由，通常用於 個人觀點或主觀理由。",
          examples: [
            {
              sentence: "🔹 寒いから、コートを着ます。",
              translation: "（因為冷，所以穿外套。）",
            },
            {
              sentence: "🔹 今日は忙しいから、行けません。",
              translation: "（因為今天很忙，所以不能去。）",
            },
          ],
        },
        {
          pattern: "42. ～ので、～（因為～，所以～)",
          meaning: "",
          description: "📌 句型說明 「ので」與「から」相似，但更 委婉、客觀，用於禮貌的說明理由。",
          examples: [
            {
              sentence: "🔹 雨が降ったので、試合は中止になりました。",
              translation: "（因為下雨，所以比賽取消了。）",
            },
            {
              sentence: "🔹 風邪をひいたので、休みます。",
              translation: "（因為感冒了，所以請假。）",
            },
          ],
        },
        {
          pattern: "43. 動詞（ます形）＋に行く / 来る / 帰る（去 / 來 / 回去做某事)",
          meaning: "",
          description: "📌 句型說明 「に行く / 来る / 帰る」表示 前往某地進行某動作。",
          examples: [
            {
              sentence: "🔹 映画を見に行きます。",
              translation: "（去看電影。）",
            },
            {
              sentence: "🔹 先生に会いに来ました。",
              translation: "（來看老師。）",
            },
            {
              sentence: "🔹 日本へ勉強しに行きます。",
              translation: "（去日本學習。）",
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
          meaning: "",
          description: "📌 句型說明 「より」表示 比較對象，「のほうが」表示 更傾向於某一方。",
          examples: [
            {
              sentence: "🔹 日本語より英語のほうが簡単です。",
              translation: "（英語比日語簡單。）",
            },
            {
              sentence: "🔹 バスより電車のほうが速いです。",
              translation: "（電車比公車快。）",
            },
          ],
        },
        {
          pattern: "45. 名詞＋がいちばん～（最～的是～)",
          meaning: "",
          description: "📌 句型說明 「いちばん」用來表達 最高程度，即「最～」。",
          examples: [
            {
              sentence: "🔹 私は寿司がいちばん好きです。",
              translation: "（我最喜歡壽司。）",
            },
            {
              sentence: "🔹 この店のケーキがいちばん美味しいです。",
              translation: "（這家店的蛋糕最好吃。）",
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
          meaning: "",
          description: "📌 句型說明 「たら」用來表達 假設條件，類似於「如果～，就～」。",
          examples: [
            {
              sentence: "🔹 雨が降ったら、試合は中止します。",
              translation: "（如果下雨，比賽就取消。）",
            },
            {
              sentence: "🔹 仕事が終わったら、飲みに行きましょう。",
              translation: "（工作結束後，一起去喝一杯吧。）",
            },
          ],
        },
        {
          pattern: "47. い形容詞（かった形）＋ら、～（如果～的話)",
          meaning: "",
          description: "📌 句型說明 「い形容詞」的「たら」形變化，表示 如果某種情況發生。",
          examples: [
            {
              sentence: "🔹 この料理が美味しかったら、また食べたいです。",
              translation: "（如果這道菜好吃的话，我想再吃。）",
            },
            {
              sentence: "🔹 天気がよかったら、散歩しましょう。",
              translation: "（如果天氣好的話，就去散步吧。）",
            },
          ],
        },
        {
          pattern: "48. な形容詞（だった形）＋ら、～（如果～的話)",
          meaning: "",
          description: "📌 句型說明 「な形容詞」的「たら」形變化，表示 假設條件。",
          examples: [
            {
              sentence: "🔹 暇だったら、一緒に映画を見ませんか？",
              translation: "（如果有空的話，要不要一起看電影？）",
            },
            {
              sentence: "🔹 元気だったら、旅行に行きましょう。",
              translation: "（如果健康的話，就去旅行吧。）",
            },
          ],
        },
        {
          pattern: "49. 名詞（だった形）＋ら、～（如果～的話)",
          meaning: "",
          description: "📌 句型說明 「名詞」的「たら」形變化，表示 假設條件。",
          examples: [
            {
              sentence: "🔹 明日が休みだったら、遊びに行きます。",
              translation: "（如果明天放假的話，就去玩。）",
            },
            {
              sentence: "🔹 彼が社長だったら、会社はもっとよくなるでしょう。",
              translation: "（如果他是社長，公司應該會變得更好吧。）",
            },
          ],
        },
      ],
    },
  ],
};

export default n5BasicGrammarZhTW;