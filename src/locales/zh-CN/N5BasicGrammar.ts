import { GrammarData } from "../../types/translation";

const n5BasicGrammarZhCN: GrammarData = {
  chapters: [
    {
      title: "介绍 & 叙述",
      sections: [
        {
          pattern: "1. 名詞1 + は + 名詞2 + です / ではありません（A 是 B / A 不是 B)",
          meaning: "表示 A 是 B 或 A 不是 B",
          description: "📌 句型说明：这是日语最基本的句型，表示「A 是 B」或「A 不是 B」。\n使用场景：用于介绍或描述人或物的身份、性质。",
          examples: [
            {
              sentence: "🔹 私は学生です。",
              translation: "我是学生。",
              analysis: "",
            },
            {
              sentence: "🔹 これは日本の車です。",
              translation: "这是日本的车。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は先生ではありません。",
              translation: "他不是老师。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "2. 名詞1 + は + 名詞2 + だ / ではない（A 是 B / A 不是 B，簡體形)",
          meaning: "简体形表示 A 是 B 或 A 不是 B",
          description: "📌 句型说明：这是「です / ではありません」的简体形，适用于口语或日常对话。\n使用场景：较随意的场合，表达身份或性质。",
          examples: [
            {
              sentence: "🔹 あれは日本語の教科書だ。",
              translation: "那是日语教科书。",
              analysis: "",
            },
            {
              sentence: "🔹 これは俺のスマホだ。",
              translation: "这是我的手机。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は先生ではない。",
              translation: "他不是老师。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "3. 名詞1 + も + 名詞2 + です / ではありません（A 也是 B / A 也不是 B)",
          meaning: "表示 A 也是 B 或 A 也不是 B",
          description: "📌 句型说明：「も」表示「也」，用来表示前后两件事情相同。\n使用场景：强调相似性或一致性。",
          examples: [
            {
              sentence: "🔹 私は学生です。田中さんも学生です。",
              translation: "我是学生。田中也是学生。",
              analysis: "",
            },
            {
              sentence: "🔹 それは猫ではありません。それも猫ではありません。",
              translation: "那不是猫。那个也不是猫。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "4. 名詞 + の + 名詞（A 的 B)",
          meaning: "表示 A 拥有 B 或 B 属于 A",
          description: "📌 句型说明：「の」表示名词与名词的关系，用来表示所有、分类、出处等。\n使用场景：描述所有权、隶属或特性。",
          examples: [
            {
              sentence: "🔹 これは私の本です。",
              translation: "这是我的书。",
              analysis: "",
            },
            {
              sentence: "🔹 それは子供のおもちゃです。",
              translation: "那是小孩的玩具。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は東京大学の学生です。",
              translation: "他是东京大学的学生。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "存在 & 拥有",
      sections: [
        {
          pattern: "5. 名詞＋が＋あります / います（有 / 在)",
          meaning: "表示某物存在或某人拥有某物",
          description: "📌 句型说明：\n- あります：用于无生命的东西（物品、植物、场所等）。\n- います：用于有生命的东西（人、动物）。\n使用场景：描述存在或拥有。",
          examples: [
            {
              sentence: "🔹 机の上に本があります。",
              translation: "桌上有本书。",
              analysis: "",
            },
            {
              sentence: "🔹 公園に猫がいます。",
              translation: "公园里有猫。",
              analysis: "",
            },
            {
              sentence: "🔹 私は車があります。",
              translation: "我有车。",
              analysis: "",
            },
            {
              sentence: "🔹 田中さんには妹がいます。",
              translation: "田中有个妹妹。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "6. 場所＋に＋名詞＋が＋あります / います（在某地有某物 / 某人)",
          meaning: "表示某地有某物或某人",
          description: "📌 句型说明：用来表达「某个地方有某个人或物品」。\n使用场景：描述特定地点的存在。",
          examples: [
            {
              sentence: "🔹 学校に図書館があります。",
              translation: "学校里有图书馆。",
              analysis: "",
            },
            {
              sentence: "🔹 部屋にテレビがあります。",
              translation: "房间里有电视。",
              analysis: "",
            },
            {
              sentence: "🔹 会社に田中さんがいます。",
              translation: "公司里有田中先生。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "7. 名詞1 は 名詞2 の ところに あります / います（A 在 B 的某個位置)",
          meaning: "表示 A 在 B 的某个位置",
          description: "📌 句型说明：用来表达「A 在 B 的某个位置」。\n使用场景：精确描述位置。",
          examples: [
            {
              sentence: "🔹 本は机の上のところにあります。",
              translation: "书在桌子的上方。",
              analysis: "",
            },
            {
              sentence: "🔹 田中さんは会議室の中にいます。",
              translation: "田中先生在会议室里。",
              analysis: "",
            },
            {
              sentence: "🔹 車は家の前のところにあります。",
              translation: "车在家前面。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "动作 & 状态",
      sections: [
        {
          pattern: "8. 名詞 / 場所＋を＋動詞（動作對象 / 動作範圍)",
          meaning: "表示动作的对象或范围",
          description: "📌 句型说明：「を」表示动作的对象或影响范围。\n使用场景：描述动作作用于某物或某地。",
          examples: [
            {
              sentence: "🔹 本を読みます。",
              translation: "读书。",
              analysis: "",
            },
            {
              sentence: "🔹 ご飯を食べます。",
              translation: "吃饭。",
              analysis: "",
            },
            {
              sentence: "🔹 公園を散歩します。",
              translation: "在公园散步。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "9. 名詞 / 場所＋で＋動詞（在哪裡做某事)",
          meaning: "表示动作发生的地点",
          description: "📌 句型说明：「で」表示动作发生的场所。\n使用场景：描述动作地点。",
          examples: [
            {
              sentence: "🔹 学校で勉強します。",
              translation: "在学校学习。",
              analysis: "",
            },
            {
              sentence: "🔹 レストランで食事します。",
              translation: "在餐厅吃饭。",
              analysis: "",
            },
            {
              sentence: "🔹 公園で遊びます。",
              translation: "在公园玩。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "10. 名詞＋を＋します（做某事)",
          meaning: "将名词动词化表示做某事",
          description: "📌 句型说明：「を」用于与「する」搭配的名词动词化。\n使用场景：描述特定活动。",
          examples: [
            {
              sentence: "🔹 サッカーをします。",
              translation: "踢足球。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題をします。",
              translation: "做作业。",
              analysis: "",
            },
            {
              sentence: "🔹 会議をします。",
              translation: "开会。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "11. 名詞＋が＋好きです / 嫌いです（喜歡 / 討厭某物)",
          meaning: "表示喜欢或讨厌某物",
          description: "📌 句型说明：「好きです」表示喜欢某物，而「嫌いです」表示讨厌某物。\n使用场景：表达个人喜好。",
          examples: [
            {
              sentence: "🔹 私は日本の映画が好きです。",
              translation: "我喜欢日本电影。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は野菜が嫌いです。",
              translation: "他讨厌蔬菜。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "12. 名詞＋が＋欲しいです（想要某物)",
          meaning: "表示想要某物",
          description: "📌 句型说明：「欲しいです」表示想要某物（只用于第一人称）。\n使用场景：表达个人需求。",
          examples: [
            {
              sentence: "🔹 新しいスマホが欲しいです。",
              translation: "我想要新的手机。",
              analysis: "",
            },
            {
              sentence: "🔹 彼女は車が欲しいです。",
              translation: "她想要车。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "13. 名詞＋が＋分かります（懂 / 明白某事)",
          meaning: "表示理解或明白某事",
          description: "📌 句型说明：「分かります」表示理解、明白某件事。\n使用场景：表达知识或理解能力。",
          examples: [
            {
              sentence: "🔹 日本語が分かります。",
              translation: "我懂日语。",
              analysis: "",
            },
            {
              sentence: "🔹 数学が分かりません。",
              translation: "我不懂数学。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は英語がよく分かります。",
              translation: "他很懂英语。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "形容词",
      sections: [
        {
          pattern: "14. い形容詞＋です / くないです（形容詞肯定 / 否定)",
          meaning: "表示い形容词的肯定或否定",
          description: "📌 句型说明：\n- い形容词的基本变化方式。\n- 肯定句：「～です」\n- 否定句：「～くないです」\n使用场景：描述事物性质。",
          examples: [
            {
              sentence: "🔹 この本はおもしろいです。",
              translation: "这本书很有趣。",
              analysis: "",
            },
            {
              sentence: "🔹 この映画はおもしろくないです。",
              translation: "这部电影不好看。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "15. な形容詞＋です / ではありません（形容詞肯定 / 否定)",
          meaning: "表示な形容词的肯定或否定",
          description: "📌 句型说明：\n- な形容词的基本变化方式。\n- 肯定句：「～です」\n- 否定句：「～ではありません」\n使用场景：描述状态或特性。",
          examples: [
            {
              sentence: "🔹 彼は元気です。",
              translation: "他很有精神。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は元気ではありません。",
              translation: "他没精神。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "16. い形容詞＋くて / な形容詞＋で（形容詞連接)",
          meaning: "连接多个形容词",
          description: "📌 句型说明：\n- い形容词：「～くて」\n- な形容词：「～で」\n使用场景：描述多种性质。",
          examples: [
            {
              sentence: "🔹 このレストランは安くておいしいです。",
              translation: "这家餐厅又便宜又好吃。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は親切で優しいです。",
              translation: "他很亲切又温柔。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "17. い形容詞＋く＋なります / な形容詞＋に＋なります（變成某種狀態)",
          meaning: "表示变成某种状态",
          description: "📌 句型说明：\n- い形容词：「～くなります」\n- な形容词：「～になります」\n使用场景：描述状态变化。",
          examples: [
            {
              sentence: "🔹 天気が寒くなります。",
              translation: "天气变冷了。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は医者になります。",
              translation: "他成为医生了。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "动词",
      sections: [
        {
          pattern: "18. 動詞（ます形）（動詞的敬體形)",
          meaning: "表示动词的礼貌形式",
          description: "📌 句型说明：「ます形」用于正式场合，表示礼貌。\n使用场景：正式或礼貌对话。",
          examples: [
            {
              sentence: "🔹 毎朝、新聞を読みます。",
              translation: "每天早上读报纸。",
              analysis: "",
            },
            {
              sentence: "🔹 学校へ行きます。",
              translation: "去学校。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "19. 動詞（ません）（動詞否定形)",
          meaning: "表示不做某事",
          description: "📌 句型说明：「ません」是「ます」形的否定，表示「不做～」。\n使用场景：礼貌地表达否定。",
          examples: [
            {
              sentence: "🔹 肉を食べません。",
              translation: "不吃肉。",
              analysis: "",
            },
            {
              sentence: "🔹 毎日運動しません。",
              translation: "每天不运动。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "20. 動詞（ました）（動詞過去式)",
          meaning: "表示过去完成的动作",
          description: "📌 句型说明：「ました」是「ます形」的过去式。\n使用场景：描述过去事件。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ました。",
              translation: "昨天看了电影。",
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
          meaning: "表示过去未做的动作",
          description: "📌 句型说明：「ませんでした」是「ます形」的过去否定形。\n使用场景：描述过去未发生的事件。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ませんでした。",
              translation: "昨天没有看电影。",
              analysis: "",
            },
            {
              sentence: "🔹 朝ごはんを食べませんでした。",
              translation: "没有吃早餐。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "22. 動詞（て形）＋ください（請做～)",
          meaning: "请求对方做某事",
          description: "📌 句型说明：「て形＋ください」用来请求对方做某事，是较有礼貌的请求表达。\n使用场景：礼貌请求。",
          examples: [
            {
              sentence: "🔹 この本を読んでください。",
              translation: "请读这本书。",
              analysis: "",
            },
            {
              sentence: "🔹 ここに名前を書いてください。",
              translation: "请在这里写上名字。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "23. 動詞（て形）＋もいいです（可以做～)",
          meaning: "允许做某事",
          description: "📌 句型说明：「てもいいです」表示允许某行为，意思是可以做某事。\n使用场景：给予或询问许可。",
          examples: [
            {
              sentence: "🔹 ここで写真を撮ってもいいです。",
              translation: "可以在这里拍照。",
              analysis: "",
            },
            {
              sentence: "🔹 この部屋に入ってもいいですか？",
              translation: "可以进这个房间吗？",
              analysis: "",
            },
          ],
        },
        {
          pattern: "24. 動詞（て形）＋はいけません（不可以做～)",
          meaning: "禁止做某事",
          description: "📌 句型说明：「てはいけません」表示禁止某行为。\n使用场景：表达禁令。",
          examples: [
            {
              sentence: "🔹 ここでタバコを吸ってはいけません。",
              translation: "不能在这里抽烟。",
              analysis: "",
            },
            {
              sentence: "🔹 先生の話を聞かなくてはいけません。",
              translation: "一定要听老师的话。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "25. 動詞（て形）＋いる（正在進行的動作 / 狀態)",
          meaning: "表示动作进行或状态持续",
          description: "📌 句型说明：「ている」表示动作正在进行或状态持续。\n使用场景：描述当前状态或进行中的动作。",
          examples: [
            {
              sentence: "🔹 今、勉強しています。",
              translation: "现在正在学习。",
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
          meaning: "表示曾经的经验",
          description: "📌 句型说明：「た形＋ことがある」表示曾经做过某事的经验。\n使用场景：分享过去经历。",
          examples: [
            {
              sentence: "🔹 日本へ行ったことがあります。",
              translation: "曾经去过日本。",
              analysis: "",
            },
            {
              sentence: "🔹 その映画を見たことがあります。",
              translation: "看过那部电影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "27. 動詞（ない形）＋でください（請不要做～)",
          meaning: "请求对方不要做某事",
          description: "📌 句型说明：「ない形＋でください」表示请求对方不要做某事。\n使用场景：礼貌地表达禁止。",
          examples: [
            {
              sentence: "🔹 ここで遊ばないでください。",
              translation: "请不要在这里玩。",
              analysis: "",
            },
            {
              sentence: "🔹 写真を撮らないでください。",
              translation: "请不要拍照。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "28. 動詞（辭書形）＋ことができます（能夠做某事)",
          meaning: "表示有能力做某事",
          description: "📌 句型说明：「ことができます」表示具备某种能力或可以做某事。\n使用场景：表达能力。",
          examples: [
            {
              sentence: "🔹 日本語を話すことができます。",
              translation: "会说日语。",
              analysis: "",
            },
            {
              sentence: "🔹 車を運転することができます。",
              translation: "会开车。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "29. 動詞（ます形）＋たいです（想做某事)",
          meaning: "表示想做某事",
          description: "📌 句型说明：「たいです」表示想做某事，只适用于第一人称。\n使用场景：表达个人意愿。",
          examples: [
            {
              sentence: "🔹 日本へ行きたいです。",
              translation: "想去日本。",
              analysis: "",
            },
            {
              sentence: "🔹 お寿司を食べたいです。",
              translation: "想吃寿司。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "30. 動詞（ます形）＋に行きます（去做某事)",
          meaning: "表示去某地做某事",
          description: "📌 句型说明：「に行く」表示去某地进行某动作。\n使用场景：描述目的性移动。",
          examples: [
            {
              sentence: "🔹 コンビニへ買い物に行きます。",
              translation: "去便利店买东西。",
              analysis: "",
            },
            {
              sentence: "🔹 図書館へ勉強しに行きます。",
              translation: "去图书馆学习。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "时间 & 顺序",
      sections: [
        {
          pattern: "31. 時間＋に＋動詞（在某時候做某事)",
          meaning: "表示在特定时间做某事",
          description: "📌 句型说明：表示在特定的时间点执行某动作。\n使用场景：描述时间点。",
          examples: [
            {
              sentence: "🔹 朝7時に起きます。",
              translation: "早上7点起床。",
              analysis: "",
            },
            {
              sentence: "🔹 10時に会議があります。",
              translation: "10点有会议。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "32. 名詞＋の＋前に / 後で（在～之前 / 之後)",
          meaning: "表示某动作的前后时间",
          description: "📌 句型说明：表示某动作发生的时间点是在另一个动作的前或后。\n使用场景：描述时间顺序。",
          examples: [
            {
              sentence: "🔹 食事の前に手を洗います。",
              translation: "吃饭前洗手。",
              analysis: "",
            },
            {
              sentence: "🔹 授業の後で図書館へ行きます。",
              translation: "下课后去图书馆。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "33. 動詞（た形）＋後で（做完～之後)",
          meaning: "表示某动作完成后的另一动作",
          description: "📌 句型说明：「た形＋後で」表示在某个动作完成之后，进行另一个动作。\n使用场景：描述动作顺序。",
          examples: [
            {
              sentence: "🔹 宿題をした後でテレビを見ます。",
              translation: "做完作业后看电视。",
              analysis: "",
            },
            {
              sentence: "🔹 ご飯を食べた後で散歩します。",
              translation: "吃饭后散步。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "34. 名詞＋の＋時 / 動詞（辭書形・た形）＋時（～的時候)",
          meaning: "表示某时间点的事件",
          description: "📌 句型说明：「時」表示某个时间点发生的事情。\n使用场景：描述特定时刻。",
          examples: [
            {
              sentence: "🔹 子供の時、日本に住んでいました。",
              translation: "小时候住在日本。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事が終わった時、雨が降っていました。",
              translation: "工作结束时正在下雨。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "35. 動詞（て形）＋から（做完 A 之後再做 B)",
          meaning: "表示先后动作顺序",
          description: "📌 句型说明：表示先做完 A，再进行 B。\n使用场景：描述动作连续性。",
          examples: [
            {
              sentence: "🔹 宿題をしてからテレビを見ます。",
              translation: "先做作业，再看电视。",
              analysis: "",
            },
            {
              sentence: "🔹 朝ごはんを食べてから学校へ行きます。",
              translation: "吃完早餐后去学校。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "可能 & 推测",
      sections: [
        {
          pattern: "36. 動詞（辭書形 / ない形）＋かもしれません（可能～ / 也許～)",
          meaning: "表示不确定的可能性",
          description: "📌 句型说明：「かもしれません」表示对某件事不确定，但认为有可能发生。\n使用场景：推测未来事件。",
          examples: [
            {
              sentence: "🔹 明日は雨が降るかもしれません。",
              translation: "明天可能会下雨。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は来ないかもしれません。",
              translation: "他可能不会来。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "37. 動詞（辭書形 / ない形）＋でしょう（應該～吧)",
          meaning: "表示对未来的推测",
          description: "📌 句型说明：「でしょう」表示对未来或事实的推测。\n使用场景：表达有把握的猜测。",
          examples: [
            {
              sentence: "🔹 明日は晴れるでしょう。",
              translation: "明天应该会晴天。",
              analysis: "",
            },
            {
              sentence: "🔹 彼はまだ会社にいるでしょう。",
              translation: "他应该还在公司。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "38. い形容詞（普通形）＋でしょう（應該～吧)",
          meaning: "表示对い形容词的推测",
          description: "📌 句型说明：用于形容词的推测。\n使用场景：猜测事物性质。",
          examples: [
            {
              sentence: "🔹 この映画は面白いでしょう。",
              translation: "这部电影应该很有趣吧。",
              analysis: "",
            },
            {
              sentence: "🔹 今日は寒いでしょう。",
              translation: "今天应该很冷吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "39. な形容詞（普通形）＋でしょう（應該～吧)",
          meaning: "表示对な形容词的推测",
          description: "📌 句型说明：用于な形容词的推测。\n使用场景：猜测状态或特性。",
          examples: [
            {
              sentence: "🔹 彼は有名でしょう。",
              translation: "他应该很有名吧。",
              analysis: "",
            },
            {
              sentence: "🔹 その計画は大丈夫でしょう。",
              translation: "那个计划应该没问题吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "40. 名詞＋でしょう（應該是～吧)",
          meaning: "表示对名词的推测",
          description: "📌 句型说明：用于对名词的推测。\n使用场景：猜测身份或类别。",
          examples: [
            {
              sentence: "🔹 彼は先生でしょう。",
              translation: "他应该是老师吧。",
              analysis: "",
            },
            {
              sentence: "🔹 あの人は日本人でしょう。",
              translation: "那个人应该是日本人吧。",
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
          meaning: "表示原因和结果",
          description: "📌 句型说明：「から」用来说明原因或理由，通常用于个人观点或主观理由。\n使用场景：解释原因。",
          examples: [
            {
              sentence: "🔹 寒いから、コートを着ます。",
              translation: "因为冷，所以穿外套。",
              analysis: "",
            },
            {
              sentence: "🔹 今日は忙しいから、行けません。",
              translation: "因为今天很忙，所以不能去。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "42. ～ので、～（因為～，所以～)",
          meaning: "表示客观原因和结果",
          description: "📌 句型说明：「ので」与「から」相似，但更委婉、客观，用于礼貌的说明理由。\n使用场景：正式场合解释。",
          examples: [
            {
              sentence: "🔹 雨が降ったので、試合は中止になりました。",
              translation: "因为下雨，所以比赛取消了。",
              analysis: "",
            },
            {
              sentence: "🔹 風邪をひいたので、休みます。",
              translation: "因为感冒了，所以请假。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "43. 動詞（ます形）＋に行く / 来る / 帰る（去 / 來 / 回去做某事)",
          meaning: "表示去某地进行某动作",
          description: "📌 句型说明：「に行く / 来る / 帰る」表示前往某地进行某动作。\n使用场景：描述目的性移动。",
          examples: [
            {
              sentence: "🔹 映画を見に行きます。",
              translation: "去看电影。",
              analysis: "",
            },
            {
              sentence: "🔹 先生に会いに来ました。",
              translation: "来看老师。",
              analysis: "",
            },
            {
              sentence: "🔹 日本へ勉強しに行きます。",
              translation: "去日本学习。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "比较",
      sections: [
        {
          pattern: "44. 名詞1＋より＋名詞2＋のほうが～（B 比 A 更～)",
          meaning: "表示 B 比 A 更具某特质",
          description: "📌 句型说明：「より」表示比较对象，「のほうが」表示更倾向于某一方。\n使用场景：比较两个事物。",
          examples: [
            {
              sentence: "🔹 日本語より英語のほうが簡単です。",
              translation: "英语比日语简单。",
              analysis: "",
            },
            {
              sentence: "🔹 バスより電車のほうが速いです。",
              translation: "电车比公交快。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "45. 名詞＋がいちばん～（最～的是～)",
          meaning: "表示某物是最具某特质的",
          description: "📌 句型说明：「いちばん」用来表达最高程度，即「最～」。\n使用场景：表达最高级。",
          examples: [
            {
              sentence: "🔹 私は寿司がいちばん好きです。",
              translation: "我最喜欢寿司。",
              analysis: "",
            },
            {
              sentence: "🔹 この店のケーキがいちばん美味しいです。",
              translation: "这家店的蛋糕最好吃。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "假设",
      sections: [
        {
          pattern: "46. 動詞（た形）＋ら、～（如果～的話)",
          meaning: "表示假设条件",
          description: "📌 句型说明：「たら」用来表达假设条件，类似于「如果～，就～」。\n使用场景：假设未来或可能情况。",
          examples: [
            {
              sentence: "🔹 雨が降ったら、試合は中止します。",
              translation: "如果下雨，比赛就取消。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事が終わったら、飲みに行きましょう。",
              translation: "工作结束后，一起去喝一杯吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "47. い形容詞（かった形）＋ら、～（如果～的話)",
          meaning: "表示い形容词的假设条件",
          description: "📌 句型说明：「い形容词」的「たら」形变化，表示如果某种情况发生。\n使用场景：假设性质或状态。",
          examples: [
            {
              sentence: "🔹 この料理が美味しかったら、また食べたいです。",
              translation: "如果这道菜好吃，我想再吃。",
              analysis: "",
            },
            {
              sentence: "🔹 天気がよかったら、散歩しましょう。",
              translation: "如果天气好，就去散步吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "48. な形容詞（だった形）＋ら、～（如果～的話)",
          meaning: "表示な形容词的假设条件",
          description: "📌 句型说明：「な形容词」的「たら」形变化，表示假设条件。\n使用场景：假设状态或特性。",
          examples: [
            {
              sentence: "🔹 暇だったら、一緒に映画を見ませんか？",
              translation: "如果有空，要不要一起看电影？",
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
          meaning: "表示名词的假设条件",
          description: "📌 句型说明：「名词」的「たら」形变化，表示假设条件。\n使用场景：假设身份或情况。",
          examples: [
            {
              sentence: "🔹 明日が休みだったら、遊びに行きます。",
              translation: "如果明天放假，就去玩。",
              analysis: "",
            },
            {
              sentence: "🔹 彼が社長だったら、会社はもっとよくなるでしょう。",
              translation: "如果他是总裁，公司应该会变得更好吧。",
              analysis: "",
            },
          ],
        },
      ],
    },
  ],
};

export default n5BasicGrammarZhCN;