import { GrammarData } from "../../types/translation";

const n5BasicGrammarZhCN: GrammarData = {
  chapters: [
    {
      title: "介绍 & 叙述",
      sections: [
        {
          pattern: "1. 名词1 + は + 名词2 + です / ではありません（A 是 B / A 不是 B)",
          meaning: "",
          description: "📌 句型说明 这是日语最基本的句型，表示「A 是 B」或「A 不是 B」。",
          examples: [
            {
              sentence: "🔹 私は学生です。",
              translation: "（我是学生。）",
            },
            {
              sentence: "🔹 これは日本の車です。",
              translation: "（这是日本的车。）",
            },
            {
              sentence: "🔹 彼は先生ではありません。",
              translation: "（他不是老师。）",
            },
          ],
        },
        {
          pattern: "2. 名词1 + は + 名词2 + だ / ではない（A 是 B / A 不是 B，简体形)",
          meaning: "",
          description: "📌 句型说明 这是「です / ではありません」的简体形，适用于 口语或日常对话。",
          examples: [
            {
              sentence: "🔹 あれは日本語の教科書だ。",
              translation: "（那是日语教科书。）",
            },
            {
              sentence: "🔹 これは俺のスマホだ。",
              translation: "（这是我的手机。）",
            },
            {
              sentence: "🔹 彼は先生ではない。",
              translation: "（他不是老师。）",
            },
          ],
        },
        {
          pattern: "3. 名词1 + も + 名词2 + です / ではありません（A 也是 B / A 也不是 B)",
          meaning: "",
          description: "📌 句型说明 「も」表示「也」，用来 表示前后两件事情相同。",
          examples: [
            {
              sentence: "🔹 私は学生です。田中さんも学生です。",
              translation: "（我是学生。田中也是学生。）",
            },
            {
              sentence: "🔹 それは猫ではありません。それも猫ではありません。",
              translation: "（那不是猫。那个也不是猫。）",
            },
          ],
        },
        {
          pattern: "4. 名词 + の + 名词（A 的 B)",
          meaning: "",
          description: "📌 句型说明 「の」表示 名词与名词的关系，用来表示 所有、分类、出处 等。",
          examples: [
            {
              sentence: "🔹 これは私の本です。",
              translation: "（这是我的书。）",
            },
            {
              sentence: "🔹 それは子供のおもちゃです。",
              translation: "（那是小孩的玩具。）",
            },
            {
              sentence: "🔹 彼は東京大学の学生です。",
              translation: "（他是东京大学的学生。）",
            },
          ],
        },
      ],
    },
    {
      title: "存在 & 拥有",
      sections: [
        {
          pattern: "5. 名词＋が＋あります / います（有 / 在)",
          meaning: "",
          description: "📌 句型说明\nあります：用于 无生命的东西（物品、植物、场所等）。\nいます：用于 有生命的东西（人、动物）。",
          examples: [
            {
              sentence: "🔹 机の上に本があります。",
              translation: "（桌上有本书。）",
            },
            {
              sentence: "🔹 公園に猫がいます。",
              translation: "（公园里有猫。）",
            },
            {
              sentence: "🔹 私は車があります。",
              translation: "（我有车。）",
            },
            {
              sentence: "🔹 田中さんには妹がいます。",
              translation: "（田中有个妹妹。）",
            },
          ],
        },
        {
          pattern: "6. 场所＋に＋名词＋が＋あります / います（在某地有某物 / 某人)",
          meaning: "",
          description: "📌 句型说明 用来表达「某个地方有某个人或物品」。",
          examples: [
            {
              sentence: "🔹 学校に図書館があります。",
              translation: "（学校里有图书馆。）",
            },
            {
              sentence: "🔹 部屋にテレビがあります。",
              translation: "（房间里有电视。）",
            },
            {
              sentence: "🔹 会社に田中さんがいます。",
              translation: "（公司里有田中先生。）",
            },
          ],
        },
        {
          pattern: "7. 名词1 は 名词2 の ところに あります / います（A 在 B 的某个位置)",
          meaning: "",
          description: "📌 句型说明 用来表达「A 在 B 的某个位置」。",
          examples: [
            {
              sentence: "🔹 本は机の上のところにあります。",
              translation: "（书在桌子的上方。）",
            },
            {
              sentence: "🔹 田中さんは会議室の中にいます。",
              translation: "（田中先生在会议室里。）",
            },
            {
              sentence: "🔹 車は家の前のところにあります。",
              translation: "（车在家的前面。）",
            },
          ],
        },
      ],
    },
    {
      title: "动作 & 状态",
      sections: [
        {
          pattern: "8. 名词 / 场所＋を＋动词（动作对象 / 动作范围)",
          meaning: "",
          description: "📌 句型说明 「を」表示 动作的对象或影响范围。",
          examples: [
            {
              sentence: "🔹 本を読みます。",
              translation: "（读书。）",
            },
            {
              sentence: "🔹 ご飯を食べます。",
              translation: "（吃饭。）",
            },
            {
              sentence: "🔹 公園を散歩します。",
              translation: "（在公园散步。）",
            },
          ],
        },
        {
          pattern: "9. 名词 / 场所＋で＋动词（在哪里做某事)",
          meaning: "",
          description: "📌 句型说明 「で」表示 动作发生的场所。",
          examples: [
            {
              sentence: "🔹 学校で勉強します。",
              translation: "（在学校学习。）",
            },
            {
              sentence: "🔹 レストランで食事します。",
              translation: "（在餐厅吃饭。）",
            },
            {
              sentence: "🔹 公園で遊びます。",
              translation: "（在公园玩。）",
            },
          ],
        },
        {
          pattern: "10. 名词＋を＋します（做某事)",
          meaning: "",
          description: "📌 句型说明 「を」用于 与「する」搭配的名词动词化。",
          examples: [
            {
              sentence: "🔹 サッカーをします。",
              translation: "（踢足球。）",
            },
            {
              sentence: "🔹 宿題をします。",
              translation: "（做作业。）",
            },
            {
              sentence: "🔹 会議をします。",
              translation: "（开会。）",
            },
          ],
        },
        {
          pattern: "11. 名词＋が＋好きです / 嫌いです（喜欢 / 讨厌某物)",
          meaning: "",
          description: "📌 句型说明 「好きです」表示 喜欢某物，而「嫌いです」表示 讨厌某物。",
          examples: [
            {
              sentence: "🔹 私は日本の映画が好きです。",
              translation: "（我喜欢日本电影。）",
            },
            {
              sentence: "🔹 彼は野菜が嫌いです。",
              translation: "（他讨厌蔬菜。）",
            },
          ],
        },
        {
          pattern: "12. 名词＋が＋欲しいです（想要某物)",
          meaning: "",
          description: "📌 句型说明 「欲しいです」表示 想要某物（只用于第一人称）。",
          examples: [
            {
              sentence: "🔹 新しいスマホが欲しいです。",
              translation: "（我想要新的手机。）",
            },
            {
              sentence: "🔹 彼女は車が欲しいです。",
              translation: "（她想要车。）",
            },
          ],
        },
        {
          pattern: "13. 名词＋が＋分かります（懂 / 明白某事)",
          meaning: "",
          description: "📌 句型说明 「分かります」表示 理解、明白某件事。",
          examples: [
            {
              sentence: "🔹 日本語が分かります。",
              translation: "（我懂日语。）",
            },
            {
              sentence: "🔹 数学が分かりません。",
              translation: "（我不懂数学。）",
            },
            {
              sentence: "🔹 彼は英語がよく分かります。",
              translation: "（他很懂英语。）",
            },
          ],
        },
      ],
    },
    {
      title: "形容词",
      sections: [
        {
          pattern: "14. い形容词＋です / くないです（形容词肯定 / 否定)",
          meaning: "",
          description: "📌 句型说明\nい形容词的基本变化方式。\n肯定句：「～です」\n否定句：「～くないです」",
          examples: [
            {
              sentence: "🔹 この本はおもしろいです。",
              translation: "（这本书很有趣。）",
            },
            {
              sentence: "🔹 この映画はおもしろくないです。",
              translation: "（这部电影不好看。）",
            },
          ],
        },
        {
          pattern: "15. な形容词＋です / ではありません（形容词肯定 / 否定)",
          meaning: "",
          description: "📌 句型说明\nな形容词的基本变化方式。\n肯定句：「～です」\n否定句：「～ではありません」",
          examples: [
            {
              sentence: "🔹 彼は元気です。",
              translation: "（他很有精神。）",
            },
            {
              sentence: "🔹 彼は元気ではありません。",
              translation: "（他没精神。）",
            },
          ],
        },
        {
          pattern: "16. い形容词＋くて / な形容词＋で（形容词连接)",
          meaning: "",
          description: "📌 句型说明\nい形容词：「～くて」\nな形容词：「～で」",
          examples: [
            {
              sentence: "🔹 このレストランは安くておいしいです。",
              translation: "（这家餐厅又便宜又好吃。）",
            },
            {
              sentence: "🔹 彼は親切で優しいです。",
              translation: "（他很亲切又温柔。）",
            },
          ],
        },
        {
          pattern: "17. い形容词＋く＋なります / な形容词＋に＋なります（变成某种状态)",
          meaning: "",
          description: "📌 句型说明\nい形容词：「～くなります」\nな形容词：「～になります」",
          examples: [
            {
              sentence: "🔹 天気が寒くなります。",
              translation: "（天气变冷了。）",
            },
            {
              sentence: "🔹 彼は医者になります。",
              translation: "（他成为医生了。）",
            },
          ],
        },
      ],
    },
    {
      title: "动词",
      sections: [
        {
          pattern: "18. 动词（ます形）（动词的敬体形)",
          meaning: "",
          description: "📌 句型说明 「ます形」用于正式场合，表示礼貌。",
          examples: [
            {
              sentence: "🔹 毎朝、新聞を読みます。",
              translation: "（每天早上读报纸。）",
            },
            {
              sentence: "🔹 学校へ行きます。",
              translation: "（去学校。）",
            },
          ],
        },
        {
          pattern: "19. 动词（ません）（动词否定形)",
          meaning: "",
          description: "📌 句型说明 「ません」是「ます」形的否定，表示「不做～」。",
          examples: [
            {
              sentence: "🔹 肉を食べません。",
              translation: "（不吃肉。）",
            },
            {
              sentence: "🔹 毎日運動しません。",
              translation: "（每天不运动。）",
            },
          ],
        },
        {
          pattern: "20. 动词（ました）（动词过去式)",
          meaning: "",
          description: "📌 句型说明 「ました」是「ます形」的过去式。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ました。",
              translation: "（昨天看了电影。）",
            },
            {
              sentence: "🔹 朝ごはんを食べました。",
              translation: "（吃了早餐。）",
            },
          ],
        },
        {
          pattern: "21. 动词（ませんでした）（动词过去否定)",
          meaning: "",
          description: "📌 句型说明 「ませんでした」是「ます形」的过去否定形。",
          examples: [
            {
              sentence: "🔹 昨日、映画を見ませんでした。",
              translation: "（昨天没有看电影。）",
            },
            {
              sentence: "🔹 朝ごはんを食べませんでした。",
              translation: "（没有吃早餐。）",
            },
          ],
        },
        {
          pattern: "22. 动词（て形）＋ください（请做～)",
          meaning: "",
          description: "📌 句型说明 「て形＋ください」用来 请求对方做某事，是 较有礼貌的请求表达。",
          examples: [
            {
              sentence: "🔹 この本を読んでください。",
              translation: "（请读这本书。）",
            },
            {
              sentence: "🔹 ここに名前を書いてください。",
              translation: "（请在这里写上名字。）",
            },
          ],
        },
        {
          pattern: "23. 动词（て形）＋もいいです（可以做～)",
          meaning: "",
          description: "📌 句型说明 「てもいいです」表示 允许某行为，意思是 可以做某事。",
          examples: [
            {
              sentence: "🔹 ここで写真を撮ってもいいです。",
              translation: "（可以在这里拍照。）",
            },
            {
              sentence: "🔹 この部屋に入ってもいいですか？",
              translation: "（可以进这个房间吗？）",
            },
          ],
        },
        {
          pattern: "24. 动词（て形）＋はいけません（不可以做～)",
          meaning: "",
          description: "📌 句型说明 「てはいけません」表示 禁止某行为。",
          examples: [
            {
              sentence: "🔹 ここでタバコを吸ってはいけません。",
              translation: "（不能在这里抽烟。）",
            },
            {
              sentence: "🔹 先生の話を聞かなくてはいけません。",
              translation: "（一定要听老师的话。）",
            },
          ],
        },
        {
          pattern: "25. 动词（て形）＋いる（正在进行的动作 / 状态)",
          meaning: "",
          description: "📌 句型说明 「ている」表示 动作正在进行 或 状态持续。",
          examples: [
            {
              sentence: "🔹 今、勉強しています。",
              translation: "（现在正在学习。）",
            },
            {
              sentence: "🔹 彼は日本に住んでいます。",
              translation: "（他住在日本。）",
            },
          ],
        },
        {
          pattern: "26. 动词（た形）＋ことがある（曾经做过某事)",
          meaning: "",
          description: "📌 句型说明 「た形＋ことがある」表示 曾经做过某事的经验。",
          examples: [
            {
              sentence: "🔹 日本へ行ったことがあります。",
              translation: "（曾经去过日本。）",
            },
            {
              sentence: "🔹 その映画を見たことがあります。",
              translation: "（看过那部电影。）",
            },
          ],
        },
        {
          pattern: "27. 动词（ない形）＋でください（请不要做～)",
          meaning: "",
          description: "📌 句型说明 「ない形＋でください」表示 请求对方不要做某事。",
          examples: [
            {
              sentence: "🔹 ここで遊ばないでください。",
              translation: "（请不要在这里玩。）",
            },
            {
              sentence: "🔹 写真を撮らないでください。",
              translation: "（请不要拍照。）",
            },
          ],
        },
        {
          pattern: "28. 动词（辞书形）＋ことができます（能够做某事)",
          meaning: "",
          description: "📌 句型说明 「ことができます」表示 具备某种能力或可以做某事。",
          examples: [
            {
              sentence: "🔹 日本語を話すことができます。",
              translation: "（会说日语。）",
            },
            {
              sentence: "🔹 車を運転することができます。",
              translation: "（会开车。）",
            },
          ],
        },
        {
          pattern: "29. 动词（ます形）＋たいです（想做某事)",
          meaning: "",
          description: "📌 句型说明 「たいです」表示 想做某事，只适用于第一人称。",
          examples: [
            {
              sentence: "🔹 日本へ行きたいです。",
              translation: "（想去日本。）",
            },
            {
              sentence: "🔹 お寿司を食べたいです。",
              translation: "（想吃寿司。）",
            },
          ],
        },
        {
          pattern: "30. 动词（ます形）＋に行きます（去做某事)",
          meaning: "",
          description: "📌 句型说明 「に行きます」表示 去某地进行某动作。",
          examples: [
            {
              sentence: "🔹 コンビニへ買い物に行きます。",
              translation: "（去便利店买东西。）",
            },
            {
              sentence: "🔹 図書館へ勉強しに行きます。",
              translation: "（去图书馆学习。）",
            },
          ],
        },
      ],
    },
    {
      title: "时间 & 顺序",
      sections: [
        {
          pattern: "31. 时间＋に＋动词（在某时候做某事)",
          meaning: "",
          description: "📌 句型说明 表示 在特定的时间点执行某动作。",
          examples: [
            {
              sentence: "🔹 朝7時に起きます。",
              translation: "（早上7点起床。）",
            },
            {
              sentence: "🔹 10時に会議があります。",
              translation: "（10点有会议。）",
            },
          ],
        },
        {
          pattern: "32. 名词＋の＋前に / 后で（在～之前 / 之后)",
          meaning: "",
          description: "📌 句型说明 表示 某动作发生的时间点是在另一个动作的前或后。",
          examples: [
            {
              sentence: "🔹 食事の前に手を洗います。",
              translation: "（吃饭前洗手。）",
            },
            {
              sentence: "🔹 授業の后で図書館へ行きます。",
              translation: "（下课后去图书馆。）",
            },
          ],
        },
        {
          pattern: "33. 动词（た形）＋后で（做完～之后)",
          meaning: "",
          description: "📌 句型说明 「た形＋后で」表示 在某个动作完成之后，进行另一个动作。",
          examples: [
            {
              sentence: "🔹 宿題をした后でテレビを見ます。",
              translation: "（做完作业后看电视。）",
            },
            {
              sentence: "🔹 ご飯を食べた后で散歩します。",
              translation: "（吃饭后散步。）",
            },
          ],
        },
        {
          pattern: "34. 名词＋の＋时 / 动词（辞书形・た形）＋时（～的时候)",
          meaning: "",
          description: "📌 句型说明 「时」表示 某个时间点发生的事情。",
          examples: [
            {
              sentence: "🔹 子供の时、日本に住んでいました。",
              translation: "（小时候住在日本。）",
            },
            {
              sentence: "🔹 仕事が終わった时、雨が降っていました。",
              translation: "（工作结束时正在下雨。）",
            },
          ],
        },
        {
          pattern: "35. 动词（て形）＋から（做完 A 之后再做 B)",
          meaning: "",
          description: "📌 句型说明 表示 先做完 A，再进行 B。",
          examples: [
            {
              sentence: "🔹 宿題をしてからテレビを見ます。",
              translation: "（先做作业，再看电视。）",
            },
            {
              sentence: "🔹 朝ごはんを食べてから学校へ行きます。",
              translation: "（吃完早餐后去学校。）",
            },
          ],
        },
      ],
    },
    {
      title: "可能 & 推测",
      sections: [
        {
          pattern: "36. 动词（辞书形 / ない形）＋かもしれません（可能～ / 也许～)",
          meaning: "",
          description: "📌 句型说明 「かもしれません」表示 对某件事不确定，但认为有可能发生。",
          examples: [
            {
              sentence: "🔹 明日は雨が降るかもしれません。",
              translation: "（明天可能会下雨。）",
            },
            {
              sentence: "🔹 彼は来ないかもしれません。",
              translation: "（他可能不会来。）",
            },
          ],
        },
        {
          pattern: "37. 动词（辞书形 / ない形）＋でしょう（应该～吧)",
          meaning: "",
          description: "📌 句型说明 「でしょう」表示 对未来或事实的推测。",
          examples: [
            {
              sentence: "🔹 明日は晴れるでしょう。",
              translation: "（明天应该会晴天。）",
            },
            {
              sentence: "🔹 彼はまだ会社にいるでしょう。",
              translation: "（他应该还在公司。）",
            },
          ],
        },
        {
          pattern: "38. い形容词（普通形）＋でしょう（应该～吧)",
          meaning: "",
          description: "📌 句型说明 用于 形容词的推测。",
          examples: [
            {
              sentence: "🔹 この映画は面白いでしょう。",
              translation: "（这部电影应该很有趣吧。）",
            },
            {
              sentence: "🔹 今日は寒いでしょう。",
              translation: "（今天应该很冷吧。）",
            },
          ],
        },
        {
          pattern: "39. な形容词（普通形）＋でしょう（应该～吧)",
          meaning: "",
          description: "📌 句型说明 用于 な形容词的推测。",
          examples: [
            {
              sentence: "🔹 彼は有名でしょう。",
              translation: "（他应该很有名吧。）",
            },
            {
              sentence: "🔹 その計画は大丈夫でしょう。",
              translation: "（那个计划应该没问题吧。）",
            },
          ],
        },
        {
          pattern: "40. 名词＋でしょう（应该是～吧)",
          meaning: "",
          description: "📌 句型说明 用于 对名词的推测。",
          examples: [
            {
              sentence: "🔹 彼は先生でしょう。",
              translation: "（他应该是老师吧。）",
            },
            {
              sentence: "🔹 あの人は日本人でしょう。",
              translation: "（那个人应该是日本人吧。）",
            },
          ],
        },
      ],
    },
    {
      title: "原因 & 目的",
      sections: [
        {
          pattern: "41. ～から、～（因为～，所以～)",
          meaning: "",
          description: "📌 句型说明 「から」用来 说明原因或理由，通常用于 个人观点或主观理由。",
          examples: [
            {
              sentence: "🔹 寒いから、コートを着ます。",
              translation: "（因为冷，所以穿外套。）",
            },
            {
              sentence: "🔹 今日は忙しいから、行けません。",
              translation: "（因为今天很忙，所以不能去。）",
            },
          ],
        },
        {
          pattern: "42. ～ので、～（因为～，所以～)",
          meaning: "",
          description: "📌 句型说明 「ので」与「から」相似，但更 委婉、客观，用于礼貌的说明理由。",
          examples: [
            {
              sentence: "🔹 雨が降ったので、試合は中止になりました。",
              translation: "（因为下雨，所以比赛取消了。）",
            },
            {
              sentence: "🔹 風邪をひいたので、休みます。",
              translation: "（因为感冒了，所以请假。）",
            },
          ],
        },
        {
          pattern: "43. 动词（ます形）＋に行く / 来る / 帰る（去 / 来 / 回去做某事)",
          meaning: "",
          description: "📌 句型说明 「に行く / 来る / 帰る」表示 前往某地进行某动作。",
          examples: [
            {
              sentence: "🔹 映画を見に行きます。",
              translation: "（去看电影。）",
            },
            {
              sentence: "🔹 先生に会いに来ました。",
              translation: "（来看老师。）",
            },
            {
              sentence: "🔹 日本へ勉強しに行きます。",
              translation: "（去日本学习。）",
            },
          ],
        },
      ],
    },
    {
      title: "比较",
      sections: [
        {
          pattern: "44. 名词1＋より＋名词2＋のほうが～（B 比 A 更～)",
          meaning: "",
          description: "📌 句型说明 「より」表示 比较对象，「のほうが」表示 更倾向于某一方。",
          examples: [
            {
              sentence: "🔹 日本語より英語のほうが簡単です。",
              translation: "（英语比日语简单。）",
            },
            {
              sentence: "🔹 バスより電車のほうが速いです。",
              translation: "（电车比公交快。）",
            },
          ],
        },
        {
          pattern: "45. 名词＋がいちばん～（最～的是～)",
          meaning: "",
          description: "📌 句型说明 「いちばん」用来表达 最高程度，即「最～」。",
          examples: [
            {
              sentence: "🔹 私は寿司がいちばん好きです。",
              translation: "（我最喜欢寿司。）",
            },
            {
              sentence: "🔹 この店のケーキがいちばん美味しいです。",
              translation: "（这家店的蛋糕最好吃。）",
            },
          ],
        },
      ],
    },
    {
      title: "假设",
      sections: [
        {
          pattern: "46. 动词（た形）＋ら、～（如果～的话)",
          meaning: "",
          description: "📌 句型说明 「たら」用来表达 假设条件，类似于「如果～，就～」。",
          examples: [
            {
              sentence: "🔹 雨が降ったら、試合は中止します。",
              translation: "（如果下雨，比赛就取消。）",
            },
            {
              sentence: "🔹 仕事が終わったら、飲みに行きましょう。",
              translation: "（工作结束后，一起去喝一杯吧。）",
            },
          ],
        },
        {
          pattern: "47. い形容词（かった形）＋ら、～（如果～的话)",
          meaning: "",
          description: "📌 句型说明 「い形容词」的「たら」形变化，表示 如果某种情况发生。",
          examples: [
            {
              sentence: "🔹 この料理が美味しかったら、また食べたいです。",
              translation: "（如果这道菜好吃的话，我想再吃。）",
            },
            {
              sentence: "🔹 天気がよかったら、散歩しましょう。",
              translation: "（如果天气好的话，就去散步吧。）",
            },
          ],
        },
        {
          pattern: "48. な形容词（だった形）＋ら、～（如果～的话)",
          meaning: "",
          description: "📌 句型说明 「な形容词」的「たら」形变化，表示 假设条件。",
          examples: [
            {
              sentence: "🔹 暇だったら、一緒に映画を見ませんか？",
              translation: "（如果有空的话，要不要一起看电影？）",
            },
            {
              sentence: "🔹 元気だったら、旅行に行きましょう。",
              translation: "（如果健康的话，就去旅行吧。）",
            },
          ],
        },
        {
          pattern: "49. 名词（だった形）＋ら、～（如果～的话)",
          meaning: "",
          description: "📌 句型说明 「名词」的「たら」形变化，表示 假设条件。",
          examples: [
            {
              sentence: "🔹 明日が休みだったら、遊びに行きます。",
              translation: "（如果明天放假的话，就去玩。）",
            },
            {
              sentence: "🔹 彼が社長だったら、会社はもっとよくなるでしょう。",
              translation: "（如果他是社长，公司应该会变得更好吧。）",
            },
          ],
        },
      ],
    },
  ],
};

export default n5BasicGrammarZhCN;