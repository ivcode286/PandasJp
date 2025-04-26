import { GrammarData } from "../../types/translation";

const n5AdvanceGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: "📌 進階文法",
      sections: [
        {
          pattern: "50. ～ませんか（要不要一起做～？）",
          meaning: "用來邀請對方一起做某事，語氣較為禮貌。",
          description: "📌 句型說明\n動詞ます形去掉「ます」 + ませんか",
          examples: [
            {
              sentence: "🔹いっしょに 映画 (えいが) を見 (み) ませんか？",
              translation: "要不要一起看電影呢？",
              analysis: ""
            },
            {
              sentence: "🔹今晩 (こんばん) ご飯 (ごはん) を食 (た) べませんか？",
              translation: "要不要今晚一起吃飯呢？",
              analysis: ""
            },
          ],
        },
        {
          pattern: "51. ～ましょう / ～ましょうか（一起做～吧 / 要不要幫你～？）",
          meaning: "用來提議一起做某事，語氣較積極。",
          description:
            "📌 句型說明\n動詞ます形去掉「ます」 + ましょう（邀請）\n動詞ます形去掉「ます」 + ましょうか（要不要幫你～？）",
          examples: [
            {
              sentence: "🔹いっしょに 行 (い) きましょう！",
              translation: "一起去吧！",
              analysis: ""
            },
            {
              sentence: "🔹荷物 (にもつ) を 持 (も) ちましょうか？",
              translation: "要不要幫你拿行李呢？",
              analysis: ""
            },
          ],
        },
        {
          pattern: "52. ～てもいいです（可以做～）",
          meaning: "用來表示允許某行為，可以做某事。",
          description: "📌 句型說明\n動詞て形 + もいいです",
          examples: [
            {
              sentence: "🔹ここで 写真 (しゃしん) を撮 (と) ってもいいですか？",
              translation: "在這裡拍照可以嗎？",
              analysis: ""
            },
            {
              sentence: "🔹この本を 読 (よ) んでもいいです。",
              translation: "這本書可以看。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "53. ～てはいけません（不可以做～）",
          meaning: "表示禁止或規則，不能做某事。",
          description: "📌 句型說明\n動詞て形 + はいけません",
          examples: [
            {
              sentence: "🔹ここで タバコを吸 (す) ってはいけません。",
              translation: "這裡不可以抽菸。",
              analysis: ""
            },
            {
              sentence: "🔹夜 (よる) に 大 (おお) きい声 (こえ) で話 (はな) してはいけません。",
              translation: "晚上不可以大聲說話。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "54. ～なくてもいいです（不做～也可以）",
          meaning: "表示不做某事也沒關係，沒有義務。",
          description: "📌 句型說明\n動詞ない形 + なくてもいいです",
          examples: [
            {
              sentence: "🔹宿題 (しゅくだい) は 書 (か) かなくてもいいです。",
              translation: "作業不用寫也可以。",
              analysis: ""
            },
            {
              sentence: "🔹今日は 仕事 (しごと) に行 (い) かなくてもいいです。",
              translation: "今天不用去上班也可以。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "55. ～なければなりません（必須做～）",
          meaning: "表示義務，必須做某事。",
          description: "📌 句型說明\n動詞ない形去掉「い」 + ければなりません",
          examples: [
            {
              sentence: "🔹早 (はや) く 寝 (ね) なければなりません。",
              translation: "必須早點睡。",
              analysis: ""
            },
            {
              sentence: "🔹明日 (あした) 会議 (かいぎ) に出 (で) なければなりません。",
              translation: "明天必須出席會議。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "56. ～なくてはいけません（不得不做～）",
          meaning: "和「～なければなりません」意思相近，表示義務、不得不做某事。",
          description: "📌 句型說明\n動詞ない形去掉「い」 + くてはいけません",
          examples: [
            {
              sentence: "🔹宿題 (しゅくだい) を しなくてはいけません。",
              translation: "必須做作業。",
              analysis: ""
            },
            {
              sentence: "🔹毎日 (まいにち) 勉強 (べんきょう) しなくてはいけません。",
              translation: "每天都得學習。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "57. ～たほうがいいです（最好做～）",
          meaning: "用來建議對方做某事，表示這樣做比較好。",
          description: "📌 句型說明\n動詞た形 + ほうがいいです",
          examples: [
            {
              sentence: "🔹早 (はや) く 寝 (ね) たほうがいいです。",
              translation: "最好早點睡。",
              analysis: ""
            },
            {
              sentence: "🔹日本語 (にほんご) を 毎日 (まいにち) 勉強 (べんきょう) したほうがいいです。",
              translation: "最好每天學習日語。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "58. ～ないほうがいいです（最好不要做～）",
          meaning: "用來建議對方不要做某事，表示這樣做比較好。",
          description: "📌 句型說明\n動詞ない形 + ほうがいいです",
          examples: [
            {
              sentence: "🔹夜遅 (よるおそ) く 食 (た) べないほうがいいです。",
              translation: "最好不要太晚吃東西。",
              analysis: ""
            },
            {
              sentence: "🔹タバコを 吸 (す) わないほうがいいです。",
              translation: "最好不要抽菸。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "59. ～ことができます（能夠～）",
          meaning: "表示能力或可能性。",
          description: "📌 句型說明\n動詞辭書形 + ことができます",
          examples: [
            {
              sentence: "🔹日本語 (にほんご) を 話 (はな) すことができます。",
              translation: "能說日語。",
              analysis: ""
            },
            {
              sentence: "🔹ここで 泳 (およ) ぐことができます。",
              translation: "可以在這裡游泳。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "60. ～たいです（想做～）",
          meaning: "表示「我」想做某事（只用於第一人稱，不能用來說別人的願望）。",
          description: "📌 句型說明\n動詞ます形去掉「ます」 + たいです",
          examples: [
            {
              sentence: "🔹日本へ 行 (い) きたいです。",
              translation: "我想去日本。",
              analysis: ""
            },
            {
              sentence: "🔹お寿司 (すし) を 食 (た) べたいです。",
              translation: "我想吃壽司。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "61. ～たがっています（某人想做～）",
          meaning: "用來表示「第三人稱」的願望，不能用來描述自己的願望。",
          description: "📌 句型說明\n動詞ます形去掉「ます」 + たがっています",
          examples: [
            {
              sentence: "🔹彼 (かれ) は 日本へ行 (い) きたがっています。",
              translation: "他想去日本。",
              analysis: ""
            },
            {
              sentence: "🔹妹 (いもうと) は ケーキを食 (た) べたがっています。",
              translation: "妹妹想吃蛋糕。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "62. ～ている（正在～ / 持續狀態）",
          meaning: "表示動作正在進行中，或某種狀態的持續。",
          description:
            "📌 句型說明\n動詞て形 + いる\n✅ 「正在～」用法（進行式）\n✅ 「持續狀態」用法",
            examples: [
              {
                sentence: "🔹今、私は 本 (ほん) を読 (よ) んでいます。",
                translation: "現在我正在看書。",
                analysis: ""
              },
              {
                sentence: "🔹田中先生正在打電話。",
                translation: "妹妹想吃蛋糕。",
                analysis: ""
              },
              {
                sentence: "🔹彼 (かれ) は 結婚 (けっこん) しています。",
                translation: "他已經結婚了。",
                analysis: ""
              },
              {
                sentence: "🔹兄 (あに) は 会社 (かいしゃ) に勤 (つと) めています。",
                translation: "我哥哥在公司上班。",
                analysis: ""
              },
            ],
        },
        {
          pattern: "63. ～てから（做完 A 之後再做 B）",
          meaning: "表示「A 之後，再進行 B」，強調前後順序。",
          description: "📌 句型說明\n動詞て形 + から、B（後續動作）",
          examples: [
            {
              sentence: "🔹朝 (あさ) ごはんを食 (た) べてから、会社 (かいしゃ) へ行 (い) きます。",
              translation: "吃完早餐後，去公司。",
              analysis: ""
            },
            {
              sentence: "🔹日本に来 (き) てから、日本語 (にほんご) を勉強 (べんきょう) し始 (はじ) めました。",
              translation: "來到日本之後，開始學日語。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "64. ～たことがあります（曾經做過～）",
          meaning: "表示過去的經驗，「曾經做過某事」。",
          description: "📌 句型說明\n動詞た形 + ことがあります",
          examples: [
            {
              sentence: "🔹寿司 (すし) を食 (た) べたことがあります。",
              translation: "我曾經吃過壽司。",
              analysis: ""
            },
            {
              sentence: "🔹富士山 (ふじさん) に登 (のぼ) ったことがありますか？",
              translation: "你有爬過富士山嗎？",
              analysis: ""
            },
          ],
        },
        {
          pattern: "65. ～たり～たりします（又～又～ / 有時～有時～）",
          meaning: "用來列舉幾個動作，表示「做了 A、做了 B（不限於兩項）」。",
          description: "📌 句型說明\n動詞た形 + り、動詞た形 + り します",
          examples: [
            {
              sentence: "🔹休 (やす) みの日 (ひ) は映画 (えいが) を見 (み) たり、本 (ほん) を読 (よ) んだりします。",
              translation: "休假的時候，有時看電影，有時讀書。",
              analysis: ""
            },
            {
              sentence: "🔹夏 (なつ) は海 (うみ) で泳 (およ) いだり、山 (やま) へ行 (い) ったりします。",
              translation: "夏天有時去海邊游泳，有時去爬山。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "66. ～ながら（一邊～一邊～）",
          meaning: "表示同時進行兩個動作，重點是「主動作」在後。",
          description: "📌 句型說明\n動詞ます形去掉「ます」 + ながら、B（主要動作）",
          examples: [
            {
              sentence: "🔹音楽 (おんがく) を聞 (き) きながら、勉強 (べんきょう) します。",
              translation: "一邊聽音樂，一邊學習。",
              analysis: ""
            },
            {
              sentence: "🔹テレビを見 (み) ながら、ご飯 (ごはん) を食 (た) べます。",
              translation: "一邊看電視，一邊吃飯。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "67. ～やすい / ～にくい（容易～ / 難以～）",
          meaning: "表示某個動作 容易 或 難以 進行。",
          description:
            "📌 句型說明\n動詞ます形去掉「ます」 + やすい（容易～）\n動詞ます形去掉「ます」 + にくい（難以～）\n✅ 「～やすい」用法\n ✅ 「～にくい」用法\n ➝ 他的話很難理解。",
            examples: [
              {
                sentence: "🔹このペンは書 (か) きやすいです。",
                translation: "這支筆很好寫。",
                analysis: ""
              },
              {
                sentence: "🔹この料理 (りょうり) は作 (つく) りやすいです。",
                translation: "這道料理很容易做。",
                analysis: ""
              },
              {
                sentence: "🔹この字 (じ) は読 (よ) みにくいです。",
                translation: "這個字很難讀。",
                analysis: ""
              },
              {
                sentence: "🔹彼 (かれ) の話 (はなし) はわかりにくいです。\n",
                translation: "他的話很難理解。",
                analysis: ""
              }
            ],
        },
        {
          pattern: "68. ～くなる / ～になる（變成～）",
          meaning: "表示事物狀態或性質的變化。",
          description:
            "📌 句型說明\nい形容詞去い + くなる（變成～，用於形容詞）\nな形容詞 / 名詞 + になる（變成～，用於名詞）",
          examples: [
            {
              sentence: "🔹寒 (さむ) くなりました。",
              translation: "變冷了。",
              analysis: ""
            },
            {
              sentence: "🔹日本語 (にほんご) が上手 (じょうず) になりました。",
              translation: "日語變好了。",
              analysis: ""
            },
            {
              sentence: "🔹先生 (せんせい) になりたいです。",
              translation: "我想成為老師。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "69. ～すぎる（太～）",
          meaning: "表示某個動作或狀態超過適當的程度。",
          description:
            "📌 句型說明\n動詞ます形去掉「ます」 + すぎる\nい形容詞去い + すぎる\nな形容詞去な + すぎる",
          examples: [
            {
              sentence: "🔹食 (た) べすぎました。",
              translation: "吃太多了。",
              analysis: ""
            },
            {
              sentence: "🔹この服 (ふく) は高 (たか) すぎます。",
              translation: "這件衣服太貴了。",
              analysis: ""
            },
            {
              sentence: "🔹この問題 (もんだい) は難 (むずか) しすぎます。",
              translation: "這個問題太難了。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "70. ～そうです（様態）（看起來～）",
          meaning: "表示說話者根據觀察，對某事物的狀態進行推測。",
          description:
            "📌 句型說明\nい形容詞去い + そうです\nな形容詞去な + そうです\n動詞ます形去掉「ます」 + そうです（快要～ / 看起來要～）",
          examples: [
            {
              sentence: "🔹このケーキはおいしそうです。",
              translation: "這個蛋糕看起來很好吃。",
              analysis: ""
            },
            {
              sentence: "🔹彼 (かれ) は元気 (げんき) そうです。",
              translation: "他看起來很有精神。",
              analysis: ""
            },
            {
              sentence: "🔹雨 (あめ) が降 (ふ) りそうです。",
              translation: "看起來快要下雨了。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "71. ～そうです（傳聞）（聽說～）",
          meaning: "表示聽說某事，但說話者自己沒有直接經歷或確認。",
          description:
            "📌 句型說明\n動詞普通形 + そうです\nい形容詞普通形 + そうです\nな形容詞普通形 + そうです\n名詞 + だそうです",
          examples: [
            {
              sentence: "🔹天気予報 (てんきよほう) によると、明日 (あした) は雨 (あめ) が降 (ふ) るそうです。",
              translation: "據天氣預報說，明天會下雨。",
              analysis: ""
            },
            {
              sentence: "🔹田中 (たなか) さんは結婚 (けっこん) するそうです。",
              translation: "聽說田中先生要結婚了。",
              analysis: ""
            },
            {
              sentence: "🔹この映画 (えいが) はとても面白 (おもしろ) いそうです。",
              translation: "聽說這部電影很有趣。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "72. ～でしょう / ～かもしれません（應該～吧 / 可能～）",
          meaning: "表示對未來或現狀的推測，語氣不同。",
          description:
            "📌 句型說明\n動詞普通形 + でしょう / かもしれません\nい形容詞普通形 + でしょう / かもしれません\nな形容詞普通形 + でしょう / かもしれません\n名詞 + でしょう / かもしれません",
          examples: [
            {
              sentence: "🔹明日 (あした) は雨 (あめ) が降 (ふ) るでしょう。",
              translation: "明天應該會下雨吧。（較確定）",
              analysis: ""
            },
            {
              sentence: "🔹明日 (あした) は雨 (あめ) が降 (ふ) るかもしれません。",
              translation: "明天可能會下雨。（不太確定）",
              analysis: ""
            },
            {
              sentence: "🔹田中 (たなか) さんは来 (く) るでしょう。",
              translation: "田中先生應該會來吧。",
              analysis: ""
            },
            {
              sentence: "🔹田中 (たなか) さんは来 (く) るかもしれません。",
              translation: "田中先生可能會來。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "73. ～と思います（我覺得～）",
          meaning: "表示說話者的想法、意見或推測。",
          description:
            "📌 句型說明\n動詞普通形 + と思います\nい形容詞普通形 + と思います\nな形容詞普通形 + と思います\n名詞 + だと思います",
          examples: [
            {
              sentence: "🔹この映画 (えいが) は面白 (おもしろ) いと思 (おも) います。",
              translation: "我覺得這部電影很有趣。",
              analysis: ""
            },
            {
              sentence: "🔹田中 (たなか) さんは来 (く) ると思 (おも) います。",
              translation: "我覺得田中先生會來。",
              analysis: ""
            },
            {
              sentence: "🔹この店 (みせ) はおいしいと思 (おも) います。",
              translation: "我覺得這家店的東西很好吃。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "74. ～から（因為～所以～）",
          meaning: "表示原因或理由，用於說明 個人主觀的原因。較口語化。",
          description: "📌 句型說明\n原因句 + から、結果句。",
          examples: [
            {
              sentence: "🔹今日は雨 (あめ) だから、出 (で) かけません。",
              translation: "今天因為下雨，所以不外出。",
              analysis: ""
            },
            {
              sentence: "🔹疲 (つか) れたから、早 (はや) く寝 (ね) ます。",
              translation: "因為累了，所以早點睡。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "75. ～ので（因為～所以～，較禮貌）",
          meaning: "表示原因或理由，語氣比「から」更禮貌、更客觀，適合正式場合或請求時使用。",
          description: "📌 句型說明\n原因句 + ので、結果句。",
          examples: [
            {
              sentence: "🔹明日 (あした) は試験 (しけん) なので、勉強 (べんきょう) します。",
              translation: "因為明天有考試，所以要學習。",
              analysis: ""
            },
            {
              sentence: "🔹熱 (ねつ) があるので、会社 (かいしゃ) を休 (やす) みます。",
              translation: "因為發燒了，所以請假。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "76. ～ために（為了～）",
          meaning: "表示「為了達成某個目標」，後接具體的行動。",
          description: "📌 句型說明\n名詞 + のために\n動詞辭書形 + ために",
          examples: [
            {
              sentence: "🔹健康 (けんこう) のために、運動 (うんどう) します。",
              translation: "為了健康，我運動。",
              analysis: ""
            },
            {
              sentence: "🔹日本語 (にほんご) を勉強 (べんきょう) するために、日本へ行 (い) きます。",
              translation: "為了學日語，我去日本。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "77. ～ように（為了～能夠～）",
          meaning: "表示「為了某種狀態或能力的達成」，多用於能力或狀態變化。",
          description: "📌 句型說明\n動詞辭書形 / ない形 + ように",
          examples: [
            {
              sentence: "🔹日本語 (にほんご) が話 (はな) せるように、毎日 (まいにち) 練習 (れんしゅう) しています。",
              translation: "為了能說日語，每天都在練習。",
              analysis: ""
            },
            {
              sentence: "🔹風邪 (かぜ) をひかないように、暖 (あたた) かい服 (ふく) を着 (き) てください。",
              translation: "為了不感冒，請穿暖一點的衣服。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "78. ～に行きます（去做某事）",
          meaning: "表示「去某個地方做某個動作」。",
          description: "📌 句型說明\n名詞 + に行きます\n動詞ます形去掉「ます」 + に行きます",
          examples: [
            {
              sentence: "🔹駅 (えき) に切符 (きっぷ) を買 (か) いに行きます。",
              translation: "我去車站買票。",
              analysis: ""
            },
            {
              sentence: "🔹友達 (ともだち) に会 (あ) いに行きます。",
              translation: "我去見朋友。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "79. ～より～のほうが（比～更～）",
          meaning: "表示比較兩個事物，某一方更優越。",
          description: "📌 句型說明\n名詞 + より + 名詞 + のほうが + 形容詞 / 副詞",
          examples: [
            {
              sentence: "🔹この本 (ほん) より あの本 (ほん) のほうが おもしろいです。",
              translation: "那本書比這本書更有趣。",
              analysis: ""
            },
            {
              sentence: "🔹日本語 (にほんご) より 英語 (えいご) のほうが 簡単 (かんたん) です。",
              translation: "英語比日語簡單。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "80. ～がいちばん～（最～的是～）",
          meaning: "表示三者或以上的比較，某個事物最突出。",
          description: "📌 句型說明\n名詞 + がいちばん + 形容詞",
          examples: [
            {
              sentence: "🔹季節 (きせつ) の中 (なか) で、春 (はる) がいちばん 好 (す) きです。",
              translation: "在四季當中，我最喜歡春天。",
              analysis: ""
            },
            {
              sentence: "🔹このレストランの料理 (りょうり) が いちばん おいしいです。",
              translation: "這家餐廳的料理最好吃。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "81. ～たら（如果～的話）",
          meaning: "表示假設條件，當條件成立時會發生結果。",
          description:
            "📌 句型說明\n動詞た形 + ら\nい形容詞去い + かったら\nな形容詞 / 名詞 + だったら",
          examples: [
            {
              sentence: "🔹雨 (あめ) が降 (ふ) ったら、出 (で) かけません。",
              translation: "如果下雨的話，就不出門。",
              analysis: ""
            },
            {
              sentence: "🔹暇 (ひま) だったら、一緒 (いっしょ) に映画 (えいが) を見 (み) に行 (い) きませんか？",
              translation: "如果有空的話，要不要一起去看電影？",
              analysis: ""
            },
          ],
        },
        {
          pattern: "82. ～ば（如果～的話，較正式）",
          meaning: "和「～たら」類似，但語氣較正式，主要用於條件句。",
          description:
            "📌 句型說明\n動詞 1類（五段）改成「え段」+ ば\n動詞 2類（上一段 / 下一段）+ れば\n動詞 3類（する ➝ すれば / くる ➝ くれば）\nい形容詞去い + ければ\nな形容詞 / 名詞 + なら（與「なら」用法相同）",
          examples: [
            {
              sentence: "🔹お金 (かね) があれば、旅行 (りょこう) に行 (い) きたいです。",
              translation: "如果有錢的話，就想去旅行。",
              analysis: ""
            },
            {
              sentence: "🔹静 (しず) かであれば、勉強 (べんきょう) しやすいです。",
              translation: "如果安靜的話，就容易學習。",
              analysis: ""
            },
          ],
        },
        {
          pattern: "83. ～なら（如果是～的話）",
          meaning: "表示對某個話題進行條件性的評論、建議、或判斷。",
          description: "📌 句型說明\n名詞 + なら\n動詞辭書形 + なら",
          examples: [
            {
              sentence: "🔹日本語 (にほんご) なら、少 (すこ) しわかります。",
              translation: "如果是日語的話，我懂一點。",
              analysis: ""
            },
            {
              sentence: "🔹行 (い) くなら、早 (はや) く行 (い) ったほうがいいですよ。",
              translation: "如果要去的話，最好早點去哦。",
              analysis: ""
            },
          ],
        },
      ],
    },
  ],
};

export default n5AdvanceGrammarZhTW;