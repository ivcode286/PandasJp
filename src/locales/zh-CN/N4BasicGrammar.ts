import { GrammarData } from "../../types/translation";

const n4BasicGrammarZhCN: GrammarData = {
  chapters: [
    {
      title: "建议与命令",
      sections: [
        {
          pattern: "1. 動詞（た形）＋ほうがいい（最好～）",
          meaning: "建议最好做某事",
          description: "📌 句型说明：\n「〜たほうがいい」用来表示建议，意思是「最好做某事」，带有轻微的忠告意味。\n使用场景：提供建议或提醒。",
          examples: [
            {
              sentence: "🔹 早く寝たほうがいいです。",
              translation: "最好早点睡。",
              analysis: "",
            },
            {
              sentence: "🔹 もっと勉強したほうがいいですよ。",
              translation: "你最好多学习一点哦。",
              analysis: "",
            },
            {
              sentence: "🔹 傘を持ったほうがいいです。",
              translation: "最好带伞。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "2. 動詞（ない形）＋ほうがいい（最好不要～）",
          meaning: "建议最好不要做某事",
          description: "📌 句型说明：\n「〜ないほうがいい」用来表示建议，意思是「最好不要做某事」，带有警告或劝阻的语气。\n使用场景：劝阻或警告。",
          examples: [
            {
              sentence: "🔹 タバコを吸わないほうがいいです。",
              translation: "最好不要抽烟。",
              analysis: "",
            },
            {
              sentence: "🔹 夜遅くまで起きていないほうがいいですよ。",
              translation: "最好不要熬夜到太晚哦。",
              analysis: "句中「起きていない」为「起きる」的ない形，后接「ほうがいい」，表示建议避免熬夜，语气亲切带提醒。",
            },
            {
              sentence: "🔹 そんなことを言わないほうがいい。",
              translation: "最好不要说那样的话。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "3. 動詞（ます形，去ます）＋なさい（請做～）",
          meaning: "命令或指示做某事",
          description: "📌 句型说明：\n「〜なさい」是用来表示命令或指示的句型，通常由上位者（例如父母、老师）对下位者（例如孩子、学生）使用，带有强烈的要求语气。\n使用场景：正式或权威性指示。",
          examples: [
            {
              sentence: "🔹 宿題を終わりなさい。",
              translation: "请把作业做完。",
              analysis: "",
            },
            {
              sentence: "🔹 早く起きなさい。",
              translation: "请早点起床。",
              analysis: "",
            },
            {
              sentence: "🔹 ここに座りなさい。",
              translation: "请坐在这里。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "4. 動詞（辭書形）＋べきだ（應該～）",
          meaning: "表示应该做的义务或责任",
          description: "📌 句型说明：\n「〜べきだ」表示义务或责任，意思是「应该做某事」，常用于表达道德上或社会规范上的建议。\n使用场景：强调责任或规范。",
          examples: [
            {
              sentence: "🔹 学生は毎日勉強するべきです。",
              translation: "学生应该每天学习。",
              analysis: "",
            },
            {
              sentence: "🔹 約束を守るべきだ。",
              translation: "应该遵守承诺。",
              analysis: "",
            },
            {
              sentence: "🔹 環境を大切にするべきです。",
              translation: "应该珍惜环境。",
              analysis: "句中「大切にする」为「大切にする」的辞书形，后接「べきだ」，表示珍惜环境是社会责任，带有规范性语气。",
            },
          ],
        },
      ],
    },
    {
      title: "意图与计划",
      sections: [
        {
          pattern: "5. 動詞（辭書形）＋つもり（打算～）",
          meaning: "表示主观的意图或计划",
          description: "📌 句型说明：\n「〜つもり」表示主观的意图或计划，意思是「我打算做某事」。\n使用场景：表达个人计划或决心。",
          examples: [
            {
              sentence: "🔹 明日、日本へ行くつもりです。",
              translation: "我打算明天去日本。",
              analysis: "",
            },
            {
              sentence: "🔹 今晩、映画を見るつもりです。",
              translation: "我打算今晚看电影。",
              analysis: "",
            },
            {
              sentence: "🔹 来年、大学に入るつもりです。",
              translation: "我打算明年上大学。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "6. 動詞（意向形）＋と思う（想～）",
          meaning: "表示个人的意愿或计划",
          description: "📌 句型说明：\n「〜うと思う」表示个人的意愿或计划，意思是「我想做某事」，比「つもり」更轻松。\n使用场景：表达较随意的意愿。",
          examples: [
            {
              sentence: "🔹 週末に旅行に行こうと思います。",
              translation: "我想周末去旅行。",
              analysis: "句中「行こう」为「行く」的意向形，后接「と思う」，表示说话者对周末旅行的轻松计划，语气较随意。",
            },
            {
              sentence: "🔹 新しい服を買おうと思っています。",
              translation: "我想买新衣服。",
              analysis: "",
            },
            {
              sentence: "🔹 日本語をもっと勉強しようと思います。",
              translation: "我想多学点日语。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "7. 名詞／動詞（辭書形）＋予定だ（預定～）",
          meaning: "表示已安排的计划",
          description: "📌 句型说明：\n「〜予定だ」表示已经安排好的计划，意思是「预定要做某事」，比「つもり」更正式。\n使用场景：描述具体安排。",
          examples: [
            {
              sentence: "🔹 明日の会議は10時からの予定です。",
              translation: "明天的会议预定从10点开始。",
              analysis: "",
            },
            {
              sentence: "🔹 来週、友達と会う予定です。",
              translation: "我预定下周和朋友见面。",
              analysis: "",
            },
            {
              sentence: "🔹 夏休みに旅行する予定だ。",
              translation: "预定暑假去旅行。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "能力与变化",
      sections: [
        {
          pattern: "8. 動詞（辭書形）＋ようになる（變得會～）",
          meaning: "表示能力或状态的变化",
          description: "📌 句型说明：\n「〜ようになる」表示能力或状态的变化，意思是「变得会做某事」或「变成某状态」。\n使用场景：描述进步或改变。",
          examples: [
            {
              sentence: "🔹 日本語を話せるようになりました。",
              translation: "我变得会说日语了。",
              analysis: "",
            },
            {
              sentence: "🔹 毎日運動するようになりました。",
              translation: "我变得每天都运动了。",
              analysis: "句中「運動する」为辞书形，后接「ようになる」，表示从过去不运动到现在养成每天运动的习惯，强调状态变化。",
            },
            {
              sentence: "🔹 朝早く起きるようになりました。",
              translation: "我变得早上能早起了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "9. 動詞（辭書形）＋ことができる（能夠～）",
          meaning: "表示具备某种能力",
          description: "📌 句型说明：\n「〜ことができる」表示具备某种能力，意思是「能够做某事」，比 N5 的「できます」更正式。\n使用场景：正式表达能力。",
          examples: [
            {
              sentence: "🔹 ピアノを弾くことができます。",
              translation: "我能够弹钢琴。",
              analysis: "",
            },
            {
              sentence: "🔹 英語を話すことができます。",
              translation: "我能够说英语。",
              analysis: "",
            },
            {
              sentence: "🔹 車を運転することができます。",
              translation: "我能够开车。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "10. 動詞（辭書形）＋なくなる（變得沒有～）",
          meaning: "表示某状态或东西消失",
          description: "📌 句型说明：\n「〜なくなる」表示某种状态或东西消失，意思是「变得没有某物」或「不再做某事」。\n使用场景：描述消失或终止。",
          examples: [
            {
              sentence: "🔹 お金がなくなりました。",
              translation: "钱变得没有了。",
              analysis: "",
            },
            {
              sentence: "🔹 疲れがなくなった。",
              translation: "疲劳消失了。",
              analysis: "",
            },
            {
              sentence: "🔹 雨が降らなくなりました。",
              translation: "雨不再下了。",
              analysis: "句中「降らなく」为「降る」的否定形，后接「なった」，表示雨从过去的降雨状态变为不再降雨，强调状态终止。",
            },
          ],
        },
      ],
    },
    {
      title: "经验与习惯",
      sections: [
        {
          pattern: "11. 動詞（た形）＋ことがある（曾經～）",
          meaning: "表示过去的经验",
          description: "📌 句型说明：\n「〜ことがある」表示过去的经验，意思是「曾经做过某事」。\n使用场景：分享个人经历。",
          examples: [
            {
              sentence: "🔹 日本へ行ったことがあります。",
              translation: "我曾经去过日本。",
              analysis: "",
            },
            {
              sentence: "🔹 寿司を食べたことがあります。",
              translation: "我曾经吃过寿司。",
              analysis: "",
            },
            {
              sentence: "🔹 地震を経験したことがあります。",
              translation: "我曾经经历过地震。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "12. 動詞（辭書形）＋ことにしている（決定要～）",
          meaning: "表示个人的习惯或决定",
          description: "📌 句型说明：\n「〜ことにしている」表示个人的习惯或决定，意思是「我决定要这样做」。\n使用场景：表达个人原则或习惯。",
          examples: [
            {
              sentence: "🔹 毎朝6時に起きることにしています。",
              translation: "我决定每天早上6点起床。",
              analysis: "",
            },
            {
              sentence: "🔹 週末は運動することにしています。",
              translation: "我决定周末要运动。",
              analysis: "",
            },
            {
              sentence: "🔹 タバコを吸わないことにしています。",
              translation: "我决定不抽烟。",
              analysis: "句中「吸わない」为「吸う」的否定辞书形，后接「ことにしています」，表示说话者主动决定戒烟，强调个人原则。",
            },
          ],
        },
        {
          pattern: "13. 動詞（辭書形）＋ことになっている（規定要～）",
          meaning: "表示客观的规定或安排",
          description: "📌 句型说明：\n「〜ことになっている」表示客观的规定或安排，意思是「按照规定要做某事」。\n使用场景：描述规则或安排。",
          examples: [
            {
              sentence: "🔹 会議は10時から始まることになっています。",
              translation: "会议规定从10点开始。",
              analysis: "",
            },
            {
              sentence: "🔹 学生は制服を着ることになっています。",
              translation: "学生规定要穿制服。",
              analysis: "句中「着る」为辞书形，后接「ことになっています」，表示穿制服是学校的客观规定，强调制度性。",
            },
            {
              sentence: "🔹 このビルでは喫煙しないことになっています。",
              translation: "这栋大楼规定不能抽烟。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "推测与不确定",
      sections: [
        {
          pattern: "14. 動詞（辭書形／ない形）＋かもしれない（可能～）",
          meaning: "表示对某事的不确定性",
          description: "📌 句型说明：\n「〜かもしれない」表示对某事的不确定性，意思是「可能会发生某事」。\n使用场景：表达不确定的猜测。",
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
            {
              sentence: "🔹 このケーキはおいしいかもしれません。",
              translation: "这个蛋糕可能很好吃。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "15. 動詞（辭書形）／い形容詞／な形容詞／名詞＋でしょう（應該～吧）",
          meaning: "表示较肯定的推测",
          description: "📌 句型说明：\n「〜でしょう」表示对事物的推测，意思是「应该会这样吧」，语气较为肯定。\n使用场景：表达有根据的猜测。",
          examples: [
            {
              sentence: "🔹 明日は晴れるでしょう。",
              translation: "明天应该会晴天吧。",
              analysis: "",
            },
            {
              sentence: "🔹 この映画は面白いでしょう。",
              translation: "这部电影应该很有趣吧。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は学生でしょう。",
              translation: "他应该是学生吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "16. 動詞（辭書形）／い形容詞／な形容詞＋ようだ（看起來像～）",
          meaning: "表示根据观察的推测",
          description: "📌 句型说明：\n「〜ようだ」表示根据观察的推测，意思是「看起来像某样」。\n使用场景：描述外观或感觉。",
          examples: [
            {
              sentence: "🔹 雨が降るようです。",
              translation: "看起来要下雨了。",
              analysis: "",
            },
            {
              sentence: "🔹 この料理はおいしいようです。",
              translation: "这道菜看起来很好吃。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は疲れているようです。",
              translation: "他看起来很累。",
              analysis: "句中「疲れている」为「疲れる」的进行形，后接「ようだ」，表示根据观察推测他处于疲劳状态，强调外在印象。",
            },
          ],
        },
        {
          pattern: "17. 動詞（辭書形）／い形容詞／な形容詞／名詞＋みたいだ（好像～）",
          meaning: "表示轻松的推测",
          description: "📌 句型说明：\n「〜みたいだ」表示根据感觉或印象的推测，意思是「好像是某样」，语气较轻松。\n使用场景：随意表达猜测。",
          examples: [
            {
              sentence: "🔹 風邪をひいたみたいです。",
              translation: "我好像感冒了。",
              analysis: "",
            },
            {
              sentence: "🔹 この犬はかわいいみたいだ。",
              translation: "这只狗好像很可爱。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は忙しいみたいです。",
              translation: "他好像很忙。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "18. 動詞（辭書形）／い形容詞／な形容詞／名詞＋らしい（聽說／似乎）",
          meaning: "表示根据传闻或外观的推测",
          description: "📌 句型说明：\n「〜らしい」表示根据传闻或外观的推测，意思是「听说是某样」或「似乎是某样」。\n使用场景：间接推测或传闻。",
          examples: [
            {
              sentence: "🔹 彼は医者らしいです。",
              translation: "听说他是医生。",
              analysis: "",
            },
            {
              sentence: "🔹 この店は安いらしい。",
              translation: "这家店似乎很便宜。",
              analysis: "",
            },
            {
              sentence: "🔹 明日は休みらしいですよ。",
              translation: "听说明天放假哦。",
              analysis: "句中「休み」后接「らしい」，表示说话者根据传闻推测明天是假期，后加「ですよ」使语气更亲切。",
            },
          ],
        },
        {
          pattern: "19. 動詞（辭書形）／い形容詞／な形容詞／名詞＋はずだ（應該）",
          meaning: "表示逻辑上的预期",
          description: "📌 句型说明：\n「〜はずだ」表示根据逻辑或预期的推测，意思是「应该是某样」。\n使用场景：表达合理推断。",
          examples: [
            {
              sentence: "🔹 彼はもう家に着いたはずです。",
              translation: "他应该已经到家了。",
              analysis: "句中「着いた」为「着く」的辞书形，后接「はずだ」，表示根据逻辑（例如时间）推测他已到家，强调合理性。",
            },
            {
              sentence: "🔹 この問題は簡単なはずだ。",
              translation: "这个问题应该很简单。",
              analysis: "",
            },
            {
              sentence: "🔹 田中さんは日本人のはずです。",
              translation: "田中应该是日本人。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "原因与理由",
      sections: [
        {
          pattern: "20. 動詞（て形）／い形容詞（くて）／な形容詞（で）＋ので（因為～）",
          meaning: "表示客观原因",
          description: "📌 句型说明：\n「〜ので」表示原因或理由，意思是「因为～所以～」，比「から」更客观且礼貌。\n使用场景：正式或礼貌的解释。",
          examples: [
            {
              sentence: "🔹 雨が降ったので、試合は中止になりました。",
              translation: "因为下雨，所以比赛取消了。",
              analysis: "",
            },
            {
              sentence: "🔹 忙しくて、昨日は来られませんでした。",
              translation: "因为很忙，昨天没能来。",
              analysis: "句中「忙しくて」为「忙しい」的て形，后接「ので」，表示忙碌是未來的客观原因，语气礼貌。",
            },
            {
              sentence: "🔹 静かなので、ここで勉強できます。",
              translation: "因为很安静，所以能在这里学习。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "21. 動詞（辭書形）／い形容詞／な形容詞（だ）＋から（因為～）",
          meaning: "表示主观原因",
          description: "📌 句型说明：\n「〜から」表示原因或理由，意思是「因为～所以～」，语气较主观且直接。\n使用场景：日常解释。",
          examples: [
            {
              sentence: "🔹 寒いから、コートを着ます。",
              translation: "因为冷，所以我穿外套。",
              analysis: "",
            },
            {
              sentence: "🔹 時間がなかったから、宿題ができませんでした。",
              translation: "因为没时间，所以没能做作业。",
              analysis: "句中「なかった」为「ある」的否定过去形，后接「から」，表示没时间是未完成作业的主观原因。",
            },
            {
              sentence: "🔹 彼は優しいから、みんなに好かれています。",
              translation: "因为他很温柔，所以大家都喜欢他。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "22. 動詞（辭書形）＋ために（為了～）",
          meaning: "表示动作的目的",
          description: "📌 句型说明：\n「〜ために」表示目的，意思是「为了做某事」，常与意志动词搭配。\n使用场景：表达意图或目标。",
          examples: [
            {
              sentence: "🔹 健康のために、毎日運動します。",
              translation: "为了健康，我每天运动。",
              analysis: "",
            },
            {
              sentence: "🔹 試験に合格するために、勉強しています。",
              translation: "为了通过考试，我在学习。",
              analysis: "句中「合格する」为辞书形，后接「ために」，表示学习的目的是「合格」（通过考试），强调意图。",
            },
            {
              sentence: "🔹 友達に会うために、東京へ行きます。",
              translation: "为了见朋友，我要去东京。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "条件与假设",
      sections: [
        {
          pattern: "23. 動詞（た形）／い形容詞（かった）／な形容詞・名詞（だった）＋ら（如果～）",
          meaning: "表示假设条件",
          description: "📌 句型说明：\n「〜たら」表示假设条件，意思是「如果～就～」，适用于各种情况，语气较自然。\n使用场景：假设未来或可能情况。",
          examples: [
            {
              sentence: "🔹 雨が降ったら、試合は中止になります。",
              translation: "如果下雨，比赛就取消。",
              analysis: "句中「降った」为「降る」的た形，后接「たら」，表示假设下雨的条件会导致比赛中止，语气自然。",
            },
            {
              sentence: "🔹 天気がよかったら、散歩に行きます。",
              translation: "如果天气好，我就去散步。",
              analysis: "",
            },
            {
              sentence: "🔹 時間があったら、映画を見たいです。",
              translation: "如果有时间，我想看电影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "24. 動詞（ば形）／い形容詞（ければ）／な形容詞（であれば）／名詞（であれば）＋ば（如果～）",
          meaning: "表示正式的假设条件",
          description: "📌 句型说明：\n「〜ば」表示假设条件，意思是「如果～就～」，语气较正式，常见于书面语。\n使用场景：正式或书面假设。",
          examples: [
            {
              sentence: "🔹 早く起きれば、学校に間に合います。",
              translation: "如果早点起床，就能赶上学校。",
              analysis: "句中「起きれば」为「起きる」的ば形，后接「ば」，表示早起是赶上学校的条件，语气正式。",
            },
            {
              sentence: "🔹 お金があれば、旅行に行けます。",
              translation: "如果有钱，就能去旅行。",
              analysis: "",
            },
            {
              sentence: "🔹 静かであれば、ここで勉強できます。",
              translation: "如果安静，就能在这里学习。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "25. 動詞（辭書形）／い形容詞／な形容詞・名詞（だ）＋なら（如果是～）",
          meaning: "表示前提或建议的假设",
          description: "📌 句型说明：\n「〜なら」表示假设条件，意思是「如果是～就～」，常强调某个前提或建议。\n使用场景：提供建议或假设。",
          examples: [
            {
              sentence: "🔹 行くなら、今すぐ出たほうがいいです。",
              translation: "如果要去的话，最好现在就出发。",
              analysis: "句中「行くなら」由「行く」的辞书形后加「なら」，表示假设要去的前提，后接建议「出たほうがいい」，强调行动的紧迫性。",
            },
            {
              sentence: "🔹 忙しいなら、手伝いますよ。",
              translation: "如果很忙，我就帮你哦。",
              analysis: "",
            },
            {
              sentence: "🔹 学生なら、もっと勉強すべきです。",
              translation: "如果是学生，就应该多学习。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "26. 動詞（辭書形）／い形容詞／な形容詞＋と（自然條件）（一～就～）",
          meaning: "表示自然发生的因果条件",
          description: "📌 句型说明：\n「〜と」表示自然发生的条件，意思是「一～就～」，强调因果的必然性。\n使用场景：描述客观规律。",
          examples: [
            {
              sentence: "🔹 春になると、花が咲きます。",
              translation: "一到春天，花就开了。",
              analysis: "",
            },
            {
              sentence: "🔹 スイッチを押すと、電気がつきます。",
              translation: "一按开关，电就亮了。",
              analysis: "",
            },
            {
              sentence: "🔹 寒いと、手が冷たくなります。",
              translation: "一冷，手就变冷了。",
              analysis: "句中「寒いと」由「寒い」后加「と」，表示寒冷天气必然导致手变冷，强调自然因果关系。",
            },
          ],
        },
      ],
    },
    {
      title: "时间与状态表现",
      sections: [
        {
          pattern: "27. 動詞（て形）＋いる（狀態）（正在～／持續狀態）",
          meaning: "表示动作进行或状态持续",
          description: "📌 句型说明：\n「〜ている」表示动作正在进行或某种状态的持续，特别用于描述当前状态。\n使用场景：描述进行中或固定状态。",
          examples: [
            {
              sentence: "🔹 彼は日本に住んでいます。",
              translation: "他住在日本。",
              analysis: "",
            },
            {
              sentence: "🔹 私は眼鏡をかけています。",
              translation: "我戴着眼镜。",
              analysis: "",
            },
            {
              sentence: "🔹 今、本を読んでいます。",
              translation: "我正在读书。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "28. 名詞／動詞（ている形）＋間に（在～期間）",
          meaning: "表示某动作在某段时间内完成",
          description: "📌 句型说明：\n「〜間に」表示某动作在某段时间内完成，意思是「在～期间」。\n使用场景：描述时间范围内的动作。",
          examples: [
            {
              sentence: "🔹 休みの間に、宿題を終わらせます。",
              translation: "在放假期间，我会把作业做完。",
              analysis: "",
            },
            {
              sentence: "🔹 先生が話している間に、メモを取ります。",
              translation: "在老师讲话期间，我会做笔记。",
              analysis: "句中「話している間」由「話す」的ている形后加「間に」，表示在老师讲话的时间范围内完成做笔记的动作。",
            },
            {
              sentence: "🔹 昼休みの間に、ご飯を食べます。",
              translation: "在午休期间，我会吃饭。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "29. 動詞（ている形）／い形容詞／な形容詞＋うちに（趁著～）",
          meaning: "表示趁着某状态或时机做某事",
          description: "📌 句型说明：\n「〜うちに」表示趁着某状态或时机做某事，意思是「趁着～的时候」。\n使用场景：强调时机的重要性。",
          examples: [
            {
              sentence: "🔹 若いうちに、たくさん旅行したいです。",
              translation: "我想趁年轻时多旅行。",
              analysis: "句中「若い」为い形容词，后接「うちに」，表示趁着年轻的状态进行旅行，强调时机的有限性。",
            },
            {
              sentence: "🔹 雨が降っていないうちに、家に帰ります。",
              translation: "趁着还没下雨，我要回家。",
              analysis: "",
            },
            {
              sentence: "🔹 元気なうちに、仕事を終えたい。",
              translation: "我想趁着有精神时把工作做完。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "30. 動詞（て形）＋まま（保持～狀態）",
          meaning: "表示保持某状态不变",
          description: "📌 句型说明：\n「〜まま」表示保持某种状态不变，意思是「保持～的样子」。\n使用场景：描述未改变的状态。",
          examples: [
            {
              sentence: "🔹 窓を開けたまま寝ました。",
              translation: "我开着窗户睡了。",
              analysis: "句中「開けた」为「開ける」的て形，后接「まま」，表示窗户保持开着的状态未关，强调持续性。",
            },
            {
              sentence: "🔹 靴を履いたまま、家に入りました。",
              translation: "我穿着鞋进了家。",
              analysis: "",
            },
            {
              sentence: "🔹 テレビをつけたまま、出かけました。",
              translation: "我开着电视就出去了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "31. 動詞（て形）＋ながら（一邊～一邊～）",
          meaning: "表示同时进行两个动作",
          description: "📌 句型说明：\n「〜ながら」表示同时进行两个动作，意思是「一边～一边～」，主语必须相同。\n使用场景：描述多任务。",
          examples: [
            {
              sentence: "🔹 音楽を聴きながら、勉強します。",
              translation: "我一边听音乐一边学习。",
              analysis: "",
            },
            {
              sentence: "🔹 テレビを見ながら、ご飯を食べます。",
              translation: "我一边看电视一边吃饭。",
              analysis: "",
            },
            {
              sentence: "🔹 歩きながら、友達と話しました。",
              translation: "我一边走一边和朋友聊天。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "动作前后与准备",
      sections: [
        {
          pattern: "32. 動詞（て形）＋から（～之後）",
          meaning: "表示动作的先后顺序",
          description: "📌 句型说明：\n「〜てから」表示动作的先后顺序，意思是「做了～之后再～」。\n使用场景：描述连续动作。",
          examples: [
            {
              sentence: "🔹 宿題をしてから、テレビを見ます。",
              translation: "做完作业后，我会看电视。",
              analysis: "",
            },
            {
              sentence: "🔹 朝ごはんを食べてから、学校へ行きます。",
              translation: "吃完早餐后，我会去学校。",
              analysis: "",
            },
            {
              sentence: "🔹 シャワーを浴びてから、寝ます。",
              translation: "洗完澡后，我会睡觉。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "33. 名詞／動詞（辭書形）＋前に（～之前）",
          meaning: "表示某动作在另一动作之前",
          description: "📌 句型说明：\n「〜前に」表示某动作在另一动作之前发生，意思是「在～之前」。\n使用场景：描述动作顺序。",
          examples: [
            {
              sentence: "🔹 寝る前に、本を読みます。",
              translation: "睡觉前，我会读书。",
              analysis: "",
            },
            {
              sentence: "🔹 試験の前に、復習します。",
              translation: "考试前，我会复习。",
              analysis: "",
            },
            {
              sentence: "🔹 出かける前に、鍵をかけます。",
              translation: "出门前，我会锁门。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "34. 動詞（た形）＋あとで（～之後）",
          meaning: "表示某动作完成后的另一动作",
          description: "📌 句型说明：\n「〜たあとで」表示某动作完成后再进行另一动作，意思是「～之后」，与「てから」类似但更口语化。\n使用场景：描述动作顺序。",
          examples: [
            {
              sentence: "🔹 ご飯を食べたあとで、散歩します。",
              translation: "吃完饭后，我会去散步。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事が終わったあとで、友達と会います。",
              translation: "工作结束后，我会和朋友见面。",
              analysis: "",
            },
            {
              sentence: "🔹 勉強したあとで、ゲームをします。",
              translation: "学习完后，我会玩游戏。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "35. 動詞（て形）＋おく（先～）",
          meaning: "表示为将来准备而先完成某事",
          description: "📌 句型说明：\n「〜ておく」表示为将来做准备而先完成某事，意思是「先把～做好」。\n使用场景：描述提前准备。",
          examples: [
            {
              sentence: "🔹 部屋を掃除しておきます。",
              translation: "我先把房间打扫好。",
              analysis: "",
            },
            {
              sentence: "🔹 荷物を準備しておきました。",
              translation: "我先把行李准备好了。",
              analysis: "",
            },
            {
              sentence: "🔹 窓を閉めておいてください。",
              translation: "请先把窗户关好。",
              analysis: "句中「閉めて」为「閉める」的て形，后接「おいて」，表示为未来（例如防止下雨）提前关窗，语气为礼貌请求。",
            },
          ],
        },
      ],
    },
    {
      title: "使役与被动",
      sections: [
        {
          pattern: "36. 動詞（使役形：〜せる／させる）（讓～做）",
          meaning: "表示让某人做某事",
          description: "📌 句型说明：\n「〜せる／させる」表示使役，让某人去做某事，意思是「让～做～」。\n- 一段动词用「〜せる」，二段及サ变动词用「〜させる」。\n使用场景：表达要求或强制。",
          examples: [
            {
              sentence: "🔹 子供に野菜を食べさせます。",
              translation: "我让孩子吃蔬菜。",
              analysis: "",
            },
            {
              sentence: "🔹 学生に宿題を出させました。",
              translation: "我让学生交作业。",
              analysis: "句中「出させました」由「出す」的使役形「出させる」加过去式，表示说话者要求学生提交作业，带有权威语气。",
            },
            {
              sentence: "🔹 友達に手伝わせます。",
              translation: "我让朋友帮忙。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "37. 動詞（被動形：〜れる／られる）（被～）",
          meaning: "表示被某人做某事",
          description: "📌 句型说明：\n「〜れる／られる」表示被动，意思是「被某人做某事」。\n- 一段动词用「〜れる」，二段及サ变动词用「〜られる」。\n使用场景：描述被动事件。",
          examples: [
            {
              sentence: "🔹 先生に褒められました。",
              translation: "我被老师表扬了。",
              analysis: "",
            },
            {
              sentence: "🔹 犬に手を噛まれました。",
              translation: "我的手被狗咬了。",
              analysis: "句中「噛まれました」由「噃む」的被动形「噃まれる」加过去式，表示手被狗咬的被动事件，带有不愉快语感。",
            },
            {
              sentence: "🔹 友達に笑われました。",
              translation: "我被朋友笑了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "38. 動詞（使役被動形：〜させられる）（被要求做～）",
          meaning: "表示被要求或被迫做某事",
          description: "📌 句型说明：\n「〜させられる」结合使役和被动，意思是「被要求或被迫做某事」，带有不情愿的语感。\n使用场景：描述被迫的情况。",
          examples: [
            {
              sentence: "🔹 先生に宿題をさせられました。",
              translation: "我被老师要求做作业。",
              analysis: "句中「させられました」由「する」的使役被动形「させられる」加过去式，表示被老师强制要求做作业，带不情愿语气。",
            },
            {
              sentence: "🔹 親に部屋を掃除させられます。",
              translation: "我被父母要求打扫房间。",
              analysis: "",
            },
            {
              sentence: "🔹 上司に残業させられました。",
              translation: "我被上司要求加班。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "其他常见句型",
      sections: [
        {
          pattern: "39. 動詞（て形）＋もいい（可以～）",
          meaning: "表示允许某行为",
          description: "📌 句型说明：\n「〜てもいい」表示允许某行为，意思是「可以做某事」，常用于请求许可或确认。\n使用场景：询问或给予许可。",
          examples: [
            {
              sentence: "🔹 ここで写真を撮ってもいいですか？",
              translation: "可以在这里拍照吗？",
              analysis: "",
            },
            {
              sentence: "🔹 窓を開けてもいいです。",
              translation: "可以开窗户。",
              analysis: "",
            },
            {
              sentence: "🔹 この本を借りてもいいですか？",
              translation: "可以借这本书吗？",
              analysis: "",
            },
          ],
        },
        {
          pattern: "40. 動詞（て形）＋はいけない（不可以～）",
          meaning: "表示禁止某行为",
          description: "📌 句型说明：\n「〜てはいけない」表示禁止某行为，意思是「不可以做某事」，语气较强硬。\n使用场景：表达禁令。",
          examples: [
            {
              sentence: "🔹 ここでタバコを吸ってはいけません。",
              translation: "不能在这里抽烟。",
              analysis: "",
            },
            {
              sentence: "🔹 学校で遊んではいけない。",
              translation: "不能在学校玩耍。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題を忘れてはいけません。",
              translation: "不能忘记做作业。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "41. 動詞（ない形）＋なければならない（必須～）",
          meaning: "表示必须做的义务",
          description: "📌 句型说明：\n「〜なければならない」表示义务或必要性，意思是「必须做某事」。\n使用场景：强调必要性。",
          examples: [
            {
              sentence: "🔹 毎日勉強しなければなりません。",
              translation: "我必须每天学习。",
              analysis: "",
            },
            {
              sentence: "🔹 明日までに宿題を終わらせなければなりません。",
              translation: "我必须在明天前完成作业。",
              analysis: "句中「終わらせない」为「終わらせる」的ない形，后接「なければならない」，表示完成作业是截止日期前的强制义务。",
            },
            {
              sentence: "🔹 遅刻しないようにしなければなりません。",
              translation: "我必须不迟到。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "42. 動詞（なくても形）＋いい（不必～）",
          meaning: "表示无需做某事",
          description: "📌 句型说明：\n「〜なくてもいい」表示没有做某事的必要，意思是「不必做某事」。\n使用场景：表达免除义务。",
          examples: [
            {
              sentence: "🔹 急がなくてもいいですよ。",
              translation: "不必着急哦。",
              analysis: "",
            },
            {
              sentence: "🔹 今日は宿題をしなくてもいいです。",
              translation: "今天不必做作业。",
              analysis: "",
            },
            {
              sentence: "🔹 傘を持たなくてもいいです。",
              translation: "不必带伞。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "43. 動詞（辭書形）＋ようにする（設法～）",
          meaning: "表示努力达成某目标",
          description: "📌 句型说明：\n「〜ようにする」表示努力达成某目标，意思是「设法做到～」。\n使用场景：表达努力或决心。",
          examples: [
            {
              sentence: "🔹 毎日運動するようにします。",
              translation: "我设法每天运动。",
              analysis: "",
            },
            {
              sentence: "🔹 遅刻しないようにします。",
              translation: "我设法不迟到。",
              analysis: "",
            },
            {
              sentence: "🔹 日本語を上手に話すようにします。",
              translation: "我设法把日语说好。",
              analysis: "句中「話す」为辞书形，后接「ようにします」，表示说话者努力达成说好日语的目标，强调主动性。",
            },
          ],
        },
        {
          pattern: "44. 動詞（辭書形）＋ように言う（說要～）",
          meaning: "表示某人要求或叮嘱做某事",
          description: "📌 句型说明：\n「〜ように言う」表示某人要求或叮嘱做某事，意思是「说要～」。\n使用场景：转述指示。",
          examples: [
            {
              sentence: "🔹 先生は宿題をするように言いました。",
              translation: "老师说要做作业。",
              analysis: "",
            },
            {
              sentence: "🔹 母は早く寝るように言いました。",
              translation: "妈妈说要早点睡。",
              analysis: "",
            },
            {
              sentence: "🔹 友達はここで待つように言いました。",
              translation: "朋友说要在这里等。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "45. 動詞（た形）＋ばかり（剛剛～）",
          meaning: "表示某动作刚刚完成",
          description: "📌 句型说明：\n「〜たばかり」表示某动作刚刚完成，意思是「刚刚做了～」。\n使用场景：强调时间接近。",
          examples: [
            {
              sentence: "🔹 ご飯を食べたばかりです。",
              translation: "我刚刚吃完饭。",
              analysis: "",
            },
            {
              sentence: "🔹 日本に来たばかりです。",
              translation: "我刚刚来到日本。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事を始めたばかりです。",
              translation: "我刚刚开始工作。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "46. 動詞（たところ／ているところ）（剛～／正在～的時候）",
          meaning: "表示动作的时间点",
          description: "📌 句型说明：\n「〜たところ」表示刚完成某事，「〜ているところ」表示正在做某事，两者都描述动作的时间点。\n使用场景：强调动作阶段。",
          examples: [
            {
              sentence: "🔹 今、家に帰ったところです。",
              translation: "我刚刚回到家。",
              analysis: "",
            },
            {
              sentence: "🔹 今、料理をしているところです。",
              translation: "我正在做饭。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題を終えたところです。",
              translation: "我刚刚做完作业。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "比较与程度",
      sections: [
        {
          pattern: "47. 名詞1＋より＋名詞2＋のほうが～（比～更～）",
          meaning: "表示比较，B 比 A 更具某特质",
          description: "📌 句型说明：\n「〜より〜のほうが」表示比较，意思是「比起 A，B 更～」。\n使用场景：比较两个事物。",
          examples: [
            {
              sentence: "🔹 コーヒーよりお茶のほうが好きです。",
              translation: "比起咖啡，我更喜欢茶。",
              analysis: "",
            },
            {
              sentence: "🔹 バスより電車のほうが速いです。",
              translation: "比起公交，电车更快。",
              analysis: "",
            },
            {
              sentence: "🔹 夏より冬のほうが寒いです。",
              translation: "比起夏天，冬天更冷。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "48. 動詞（辭書形）／い形容詞＋ほど（到～程度）",
          meaning: "表示某事物的程度",
          description: "📌 句型说明：\n「〜ほど」表示某事物的程度，意思是「到～的程度」。\n使用场景：强调程度。",
          examples: [
            {
              sentence: "🔹 びっくりするほど大きいです。",
              translation: "大得让人吃惊。",
              analysis: "句中「びっくりする」为辞书形，后接「ほど」，表示「大きい」（大）的程度高到让人震惊，强调夸张性。",
            },
            {
              sentence: "🔹 泣きたくなるほど悲しいです。",
              translation: "悲伤到想哭的程度。",
              analysis: "",
            },
            {
              sentence: "🔹 子供でも分かるほど簡単です。",
              translation: "简单到连小孩都懂的程度。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "49. 動詞（ます形，去ます）／い形容詞＋すぎる（太～）",
          meaning: "表示程度过高",
          description: "📌 句型说明：\n「〜すぎる」表示某事物的程度过高，意思是「太～」。\n使用场景：描述过度行为或状态。",
          examples: [
            {
              sentence: "🔹 食べすぎました。",
              translation: "我吃太多了。",
              analysis: "",
            },
            {
              sentence: "🔹 この服は高すぎます。",
              translation: "这件衣服太贵了。",
              analysis: "",
            },
            {
              sentence: "🔹 飲みすぎて、頭が痛いです。",
              translation: "喝太多，头痛了。",
              analysis: "句中「飲みすぎて」由「飲む」的ます形去掉「ます」后加「すぎる」的て形，表示过量饮酒导致「頭が痛い」（头痛），强调因果。",
            },
          ],
        },
        {
          pattern: "50. 動詞（ます形，去ます）＋やすい／にくい（容易／難以）",
          meaning: "表示动作的难易度",
          description: "📌 句型说明：\n「〜やすい」表示容易做某事，「〜にくい」表示难以做某事，描述动作的难易度。\n使用场景：描述难易程度。",
          examples: [
            {
              sentence: "🔹 この本は読みやすいです。",
              translation: "这本书容易读。",
              analysis: "",
            },
            {
              sentence: "🔹 この箱は重くて持ちにくいです。",
              translation: "这个箱子太重，难以拿。",
              analysis: "句中「持ちにくい」由「持つ」的ます形去掉「ます」后加「にくい」，表示因「重くて」（太重）而难以拿，强调困难性。",
            },
            {
              sentence: "🔹 この料理は作りやすいです。",
              translation: "这道菜容易做。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "动作完成与结果",
      sections: [
        {
          pattern: "51. 動詞（て形）＋しまう（不小心做完／遺憾）",
          meaning: "表示动作完成，带遗憾或不小心",
          description: "📌 句型说明：\n「〜てしまう」表示动作完成，带有不小心或遗憾的语感，意思是「不小心做了～」或「可惜～」。\n使用场景：表达后悔或意外。",
          examples: [
            {
              sentence: "🔹 宿題を忘れてしまいました。",
              translation: "我不小心忘了做作业。",
              analysis: "",
            },
            {
              sentence: "🔹 大事な書類を捨ててしまった。",
              translation: "我把重要的文件扔掉了，真可惜。",
              analysis: "句中「捨ててしまった」由「捨てる」的て形后加「しまう」，表示意外扔掉重要文件，带有遗憾语气。",
            },
            {
              sentence: "🔹 ケーキを全部食べてしまいました。",
              translation: "我不小心把蛋糕全吃掉了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "52. 動詞（て形）＋っぱなし（保持某狀態）",
          meaning: "表示持续某状态未变",
          description: "📌 句型说明：\n「〜っぱなし」表示某状态持续未变，意思是「一直保持～的状态」，常带有不满语气。\n使用场景：批评未改变的状态。",
          examples: [
            {
              sentence: "🔹 テレビをつけっぱなしにしました。",
              translation: "我一直让电视开着。",
              analysis: "句中「つけっぱなし」由「つける」的て形后加「っぱなし」，表示电视未关一直开着，带有疏忽的不满语气。",
            },
            {
              sentence: "🔹 ドアを開けっぱなしにしないでください。",
              translation: "请不要让门一直开着。",
              analysis: "",
            },
            {
              sentence: "🔹 電気をつけっぱなしで寝ました。",
              translation: "我开着电灯就睡了。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "目的与手段",
      sections: [
        {
          pattern: "53. 動詞（辭書形）＋のに（用於～目的）",
          meaning: "表示某动作或物品用于某目的",
          description: "📌 句型说明：\n「〜のに」表示某动作或物品用于某目的，意思是「用来做～」，常接「使う」「役立つ」等动词。\n使用场景：描述用途。",
          examples: [
            {
              sentence: "🔹 このナイフは野菜を切るのに使います。",
              translation: "这把刀用来切蔬菜。",
              analysis: "",
            },
            {
              sentence: "🔹 ノートはメモを取るのに便利です。",
              translation: "笔记本用来记笔记很方便。",
              analysis: "句中「取るのに」由「取る」的辞书形后加「のに」，表示笔记本的用途是记笔记，强调便利性。",
            },
            {
              sentence: "🔹 お金は旅行に行くのに必要です。",
              translation: "钱是用来旅行的必需品。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "54. 動詞（辭書形）＋ために（為了～）",
          meaning: "表示动作的目的",
          description: "📌 句型说明：\n「〜ために」表示目的，意思是「为了做某事」，强调意图，常与意志动词搭配。\n使用场景：表达目标。",
          examples: [
            {
              sentence: "🔹 健康のために、毎日運動します。",
              translation: "为了健康，我每天运动。",
              analysis: "",
            },
            {
              sentence: "🔹 試験に合格するために、勉強しています。",
              translation: "为了通过考试，我在学习。",
              analysis: "",
            },
            {
              sentence: "🔹 友達に会うために、東京へ行きます。",
              translation: "为了见朋友，我要去东京。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "列举与举例",
      sections: [
        {
          pattern: "55. 動詞（た形）＋り〜たりする（～或～）",
          meaning: "表示列举多个动作",
          description: "📌 句型说明：\n「〜たり〜たりする」表示列举多个动作，意思是「有时～有时～」，表达不完全列举。\n使用场景：描述多样行为。",
          examples: [
            {
              sentence: "🔹 週末は映画を見たり、買い物したりします。",
              translation: "周末我有时看电影，有时购物。",
              analysis: "句中「見たり」「買い物したり」由「見る」和「買い物する」的た形后加「り」，表示周末的多种活动，强调不完全列举。",
            },
            {
              sentence: "🔹 友達と話したり、ゲームをしたりしました。",
              translation: "我和朋友有时聊天，有时玩游戏。",
              analysis: "",
            },
            {
              sentence: "🔹 休みの日は寝たり、本を読んだりします。",
              translation: "休息日我有时睡觉，有时读书。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "56. 名詞＋とか〜とか（～啦～啦）",
          meaning: "表示轻松列举事物",
          description: "📌 句型说明：\n「〜とか〜とか」表示列举事物，意思是「～啦～啦」，语气轻松且不完全列举。\n使用场景：随意列举。",
          examples: [
            {
              sentence: "🔹 スーパーで野菜とか肉とかを買いました。",
              translation: "我在超市买了蔬菜啦肉啦之类的。",
              analysis: "",
            },
            {
              sentence: "🔹 旅行にカメラとかお金とかを持っていきます。",
              translation: "旅行我会带相机啦钱啦之类的。",
              analysis: "",
            },
            {
              sentence: "🔹 友達にケーキとかジュースとかをあげました。",
              translation: "我给朋友蛋糕啦果汁啦之类的。",
              analysis: "",
            },
          ],
        },
      ],
    },
  ],
};

export default n4BasicGrammarZhCN;