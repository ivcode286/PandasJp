import { GrammarData } from "../../types/translation";

const n4GrammarZhCN: GrammarData = {
  chapters: [
    {
      title: "建议与命令",
      sections: [
        {
          pattern: "1. 动词（た形）＋ほうがいい（最好～）",
          meaning: "",
          description: "📌 句型说明 「〜たほうがいい」用来表示建议，意思是「最好做某事」，带有轻微的忠告意味。",
          examples: [
            {
              sentence: "🔹 早く寝たほうがいいです。",
              translation: "（最好早点睡。）",
            },
            {
              sentence: "🔹 もっと勉強したほうがいいですよ。",
              translation: "（你最好多学习一点哦。）",
            },
            {
              sentence: "🔹 傘を持ったほうがいいです。",
              translation: "（最好带伞。）",
            },
          ],
        },
        {
          pattern: "2. 动词（ない形）＋ほうがいい（最好不要～）",
          meaning: "",
          description: "📌 句型说明 「〜ないほうがいい」用来表示建议，意思是「最好不要做某事」，带有警告或劝阻的语气。",
          examples: [
            {
              sentence: "🔹 タバコを吸わないほうがいいです。",
              translation: "（最好不要抽烟。）",
            },
            {
              sentence: "🔹 夜遅くまで起きていないほうがいいですよ。",
              translation: "（最好不要熬夜到太晚哦。）",
            },
            {
              sentence: "🔹 そんなことを言わないほうがいい。",
              translation: "（最好不要说那样的话。）",
            },
          ],
        },
        {
          pattern: "3. 动词（ます形，去ます）＋なさい（请做～）",
          meaning: "",
          description: "📌 句型说明 「〜なさい」是用来表示命令或指示的句型，通常由上位者（例如父母、老师）对下位者（例如孩子、学生）使用，带有强烈的要求语气。",
          examples: [
            {
              sentence: "🔹 宿題を終わりなさい。",
              translation: "（请把作业做完。）",
            },
            {
              sentence: "🔹 早く起きなさい。",
              translation: "（请早点起床。）",
            },
            {
              sentence: "🔹 ここに座りなさい。",
              translation: "（请坐在这儿。）",
            },
          ],
        },
        {
          pattern: "4. 动词（辞书形）＋べきだ（应该～）",
          meaning: "",
          description: "📌 句型说明 「〜べきだ」表示义务或责任，意思是「应该做某事」，常用于表达道德上或社会规范上的建议。",
          examples: [
            {
              sentence: "🔹 学生は毎日勉強するべきです。",
              translation: "（学生应该每天学习。）",
            },
            {
              sentence: "🔹 約束を守るべきだ。",
              translation: "（应该遵守承诺。）",
            },
            {
              sentence: "🔹 環境を大切にするべきです。",
              translation: "（应该珍惜环境。）",
            },
          ],
        },
      ],
    },
    {
      title: "意图与计划",
      sections: [
        {
          pattern: "5. 动词（辞书形）＋つもり（打算～）",
          meaning: "",
          description: "📌 句型说明 「〜つもり」表示主观的意图或计划，意思是「我打算做某事」。",
          examples: [
            {
              sentence: "🔹 明日、日本へ行くつもりです。",
              translation: "（我打算明天去日本。）",
            },
            {
              sentence: "🔹 今晩、映画を見るつもりです。",
              translation: "（我打算今晚看电影。）",
            },
            {
              sentence: "🔹 来年、大学に入るつもりです。",
              translation: "（我打算明年上大学。）",
            },
          ],
        },
        {
          pattern: "6. 动词（意向形）＋と思う（想～）",
          meaning: "",
          description: "📌 句型说明 「〜うと思う」表示个人的意愿或计划，意思是「我想做某事」，比「つもり」更轻松。",
          examples: [
            {
              sentence: "🔹 週末に旅行に行こうと思います。",
              translation: "（我想周末去旅行。）",
            },
            {
              sentence: "🔹 新しい服を買おうと思っています。",
              translation: "（我想买新衣服。）",
            },
            {
              sentence: "🔹 日本語をもっと勉強しようと思います。",
              translation: "（我想多学点日语。）",
            },
          ],
        },
        {
          pattern: "7. 名词／动词（辞书形）＋予定だ（预定～）",
          meaning: "",
          description: "📌 句型说明 「〜予定だ」表示已经安排好的计划，意思是「预定要做某事」，比「つもり」更正式。",
          examples: [
            {
              sentence: "🔹 明日の会議は10時からの予定です。",
              translation: "（明天的会议预定从10点开始。）",
            },
            {
              sentence: "🔹 来週、友達と会う予定です。",
              translation: "（我预定下周和朋友见面。）",
            },
            {
              sentence: "🔹 夏休みに旅行する予定だ。",
              translation: "（预定暑假去旅行。）",
            },
          ],
        },
      ],
    },
    {
      title: "能力与变化",
      sections: [
        {
          pattern: "8. 动词（辞书形）＋ようになる（变得会～）",
          meaning: "",
          description: "📌 句型说明 「〜ようになる」表示能力或状态的变化，意思是「变得会做某事」或「变成某状态」。",
          examples: [
            {
              sentence: "🔹 日本語を話せるようになりました。",
              translation: "（我变得会说日语了。）",
            },
            {
              sentence: "🔹 毎日運動するようになりました。",
              translation: "（我变得每天都运动了。）",
            },
            {
              sentence: "🔹 朝早く起きるようになりました。",
              translation: "（我变得早上能早起了。）",
            },
          ],
        },
        {
          pattern: "9. 动词（辞书形）＋ことができる（能够～）",
          meaning: "",
          description: "📌 句型说明 「〜ことができる」表示具备某种能力，意思是「能够做某事」，比 N5 的「できます」更正式。",
          examples: [
            {
              sentence: "🔹 ピアノを弾くことができます。",
              translation: "（我能够弹钢琴。）",
            },
            {
              sentence: "🔹 英語を話すことができます。",
              translation: "（我能够说英语。）",
            },
            {
              sentence: "🔹 車を運転することができます。",
              translation: "（我能够开车。）",
            },
          ],
        },
        {
          pattern: "10. 动词（辞书形）＋なくなる（变得没有～）",
          meaning: "",
          description: "📌 句型说明 「〜なくなる」表示某种状态或东西消失，意思是「变得没有某物」或「不再做某事」。",
          examples: [
            {
              sentence: "🔹 お金がなくなりました。",
              translation: "（钱变得没有了。）",
            },
            {
              sentence: "🔹 疲れがなくなった。",
              translation: "（疲劳消失了。）",
            },
            {
              sentence: "🔹 雨が降らなくなりました。",
              translation: "（雨不再下了。）",
            },
          ],
        },
      ],
    },
    {
      title: "经验与习惯",
      sections: [
        {
          pattern: "11. 动词（た形）＋ことがある（曾经～）",
          meaning: "",
          description: "📌 句型说明 「〜ことがある」表示过去的经验，意思是「曾经做过某事」。",
          examples: [
            {
              sentence: "🔹 日本へ行ったことがあります。",
              translation: "（我曾经去过日本。）",
            },
            {
              sentence: "🔹 寿司を食べたことがあります。",
              translation: "（我曾经吃过寿司。）",
            },
            {
              sentence: "🔹 地震を経験したことがあります。",
              translation: "（我曾经经历过地震。）",
            },
          ],
        },
        {
          pattern: "12. 动词（辞书形）＋ことにしている（决定要～）",
          meaning: "",
          description: "📌 句型说明 「〜ことにしている」表示个人的习惯或决定，意思是「我决定要这样做」。",
          examples: [
            {
              sentence: "🔹 毎朝6時に起きることにしています。",
              translation: "（我决定每天早上6点起床。）",
            },
            {
              sentence: "🔹 週末は運動することにしています。",
              translation: "（我决定周末要运动。）",
            },
            {
              sentence: "🔹 タバコを吸わないことにしています。",
              translation: "（我决定不抽烟。）",
            },
          ],
        },
        {
          pattern: "13. 动词（辞书形）＋ことになっている（规定要～）",
          meaning: "",
          description: "📌 句型说明 「〜ことになっている」表示客观的规定或安排，意思是「按照规定要做某事」。",
          examples: [
            {
              sentence: "🔹 会議は10時から始まることになっています。",
              translation: "（会议规定从10点开始。）",
            },
            {
              sentence: "🔹 学生は制服を着ることになっています。",
              translation: "（学生规定要穿制服。）",
            },
            {
              sentence: "🔹 このビルでは喫煙しないことになっています。",
              translation: "（这栋大楼规定不能抽烟。）",
            },
          ],
        },
      ],
    },
    {
      title: "推测与不确定",
      sections: [
        {
          pattern: "14. 动词（辞书形／ない形）＋かもしれない（可能～）",
          meaning: "",
          description: "📌 句型说明 「〜かもしれない」表示对某事的不确定性，意思是「可能会发生某事」。",
          examples: [
            {
              sentence: "🔹 明日は雨が降るかもしれません。",
              translation: "（明天可能会下雨。）",
            },
            {
              sentence: "🔹 彼は来ないかもしれません。",
              translation: "（他可能不会来。）",
            },
            {
              sentence: "🔹 このケーキはおいしいかもしれません。",
              translation: "（这个蛋糕可能很好吃。）",
            },
          ],
        },
        {
          pattern: "15. 动词（辞书形）／い形容词／な形容词／名词＋でしょう（应该～吧）",
          meaning: "",
          description: "📌 句型说明 「〜でしょう」表示对事物的推测，意思是「应该会这样吧」，语气较为肯定。",
          examples: [
            {
              sentence: "🔹 明日は晴れるでしょう。",
              translation: "（明天应该会晴天吧。）",
            },
            {
              sentence: "🔹 この映画は面白いでしょう。",
              translation: "（这部电影应该很有趣吧。）",
            },
            {
              sentence: "🔹 彼は学生でしょう。",
              translation: "（他应该是学生吧。）",
            },
          ],
        },
        {
          pattern: "16. 动词（辞书形）／い形容词／な形容词＋ようだ（看起来像～）",
          meaning: "",
          description: "📌 句型说明 「〜ようだ」表示根据观察的推测，意思是「看起来像某样」。",
          examples: [
            {
              sentence: "🔹 雨が降るようです。",
              translation: "（看起来要下雨了。）",
            },
            {
              sentence: "🔹 この料理はおいしいようです。",
              translation: "（这道菜看起来很好吃。）",
            },
            {
              sentence: "🔹 彼は疲れているようです。",
              translation: "（他看起来很累~~很累。）",
            },
          ],
        },
        {
          pattern: "17. 动词（辞书形）／い形容词／な形容词／名词＋みたいだ（好像～）",
          meaning: "",
          description: "📌 句型说明 「〜みたいだ」表示根据感觉或印象的推测，意思是「好像是某样」，语气较轻松。",
          examples: [
            {
              sentence: "🔹 風邪をひいたみたいです。",
              translation: "（我好像感冒了。）",
            },
            {
              sentence: "🔹 この犬はかわいいみたいだ。",
              translation: "（这只狗好像很可爱。）",
            },
            {
              sentence: "🔹 彼は忙しいみたいです。",
              translation: "（他好像很忙。）",
            },
          ],
        },
        {
          pattern: "18. 动词（辞书形）／い形容词／な形容词／名词＋らしい（听说／似乎）",
          meaning: "",
          description: "📌 句型说明 「〜らしい」表示根据传闻或外观的推测，意思是「听说是某样」或「似乎是某样」。",
          examples: [
            {
              sentence: "🔹 彼は医者らしいです。",
              translation: "（听说他是医生。）",
            },
            {
              sentence: "🔹 この店は安いらしい。",
              translation: "（这家店似乎很便宜。）",
            },
            {
              sentence: "🔹 明日は休みらしいですよ。",
              translation: "（听说明天放假哦。）",
            },
          ],
        },
        {
          pattern: "19. 动词（辞书形）／い形容词／な形容词／名词＋はずだ（应该）",
          meaning: "",
          description: "📌 句型说明 「〜はずだ」表示根据逻辑或预期的推测，意思是「应该是某样」。",
          examples: [
            {
              sentence: "🔹 彼はもう家に着いたはずです。",
              translation: "（他应该已经到家了。）",
            },
            {
              sentence: "🔹 この問題は簡単なはずだ。",
              translation: "（这个问题应该很简单。）",
            },
            {
              sentence: "🔹 田中さんは日本人のはずです。",
              translation: "（田中应该是日本人。）",
            },
          ],
        },
      ],
    },
    {
      title: "原因与理由",
      sections: [
        {
          pattern: "20. 动词（て形）／い形容词（くて）／な形容词（で）＋ので（因为～）",
          meaning: "",
          description: "📌 句型说明 「〜ので」表示原因或理由，意思是「因为～所以～」，比「から」更客观且礼貌。",
          examples: [
            {
              sentence: "🔹 雨が降ったので、試合は中止になりました。",
              translation: "（因为下雨，所以比赛取消了。）",
            },
            {
              sentence: "🔹 忙しくて、昨日は来られませんでした。",
              translation: "（因为很忙，昨天没能来。）",
            },
            {
              sentence: "🔹 静かなので、ここで勉強できます。",
              translation: "（因为很安静，所以能在这儿学习。）",
            },
          ],
        },
        {
          pattern: "21. 动词（辞书形）／い形容词／な形容词（だ）＋から（因为～）",
          meaning: "",
          description: "📌 句型说明 「〜から」表示原因或理由，意思是「因为～所以～」，语气较主观且直接。",
          examples: [
            {
              sentence: "🔹 寒いから、コートを着ます。",
              translation: "（因为冷，所以我穿外套。）",
            },
            {
              sentence: "🔹 時間がなかったから、宿題ができませんでした。",
              translation: "（因为没时间，所以没能做作业。）",
            },
            {
              sentence: "🔹 彼は優しいから、みんなに好かれています。",
              translation: "（因为他很温柔，所以大家都喜欢他。）",
            },
          ],
        },
        {
          pattern: "22. 动词（辞书形）＋ために（为了～）",
          meaning: "",
          description: "📌 句型说明 「〜ために」表示目的，意思是「为了做某事」，常与意志动词搭配。",
          examples: [
            {
              sentence: "🔹 健康のために、毎日運動します。",
              translation: "（为了健康，我每天运动。）",
            },
            {
              sentence: "🔹 試験に合格するために、勉強しています。",
              translation: "（为了通过考试，我在学习。）",
            },
            {
              sentence: "🔹 友達に会うために、東京へ行きます。",
              translation: "（为了见朋友，我要去东京。）",
            },
          ],
        },
      ],
    },
    {
      title: "条件与假设",
      sections: [
        {
          pattern: "23. 动词（た形）／い形容词（かった）／な形容词・名词（だった）＋ら（如果～）",
          meaning: "",
          description: "📌 句型说明 「〜たら」表示假设条件，意思是「如果～就～」，适用于各种情况，语气较自然。",
          examples: [
            {
              sentence: "🔹 雨が降ったら、試合は中止になります。",
              translation: "（如果下雨，比赛就取消。）",
            },
            {
              sentence: "🔹 天気がよかったら、散歩に行きます。",
              translation: "（如果天气好，我就去散步。）",
            },
            {
              sentence: "🔹 時間があったら、映画を見たいです。",
              translation: "（如果有时间，我想看电影。）",
            },
          ],
        },
        {
          pattern: "24. 动词（ば形）／い形容词（ければ）／な形容词（であれば）／名词（であれば）＋ば（如果～）",
          meaning: "",
          description: "📌 句型说明 「〜ば」表示假设条件，意思是「如果～就～」，语气较正式，常见于书面语。",
          examples: [
            {
              sentence: "🔹 早く起きれば、学校に間に合います。",
              translation: "（如果早点起床，就能赶上学校。）",
            },
            {
              sentence: "🔹 お金があれば、旅行に行けます。",
              translation: "（如果有钱，就能去旅行。）",
            },
            {
              sentence: "🔹 静かであれば、ここで勉強できます。",
              translation: "（如果安静，就能在这儿学习。）",
            },
          ],
        },
        {
          pattern: "25. 动词（辞书形）／い形容词／な形容词・名词（だ）＋なら（如果是～）",
          meaning: "",
          description: "📌 句型说明 「〜なら」表示假设条件，意思是「如果是～就～」，常强调某个前提或建议。",
          examples: [
            {
              sentence: "🔹 行くなら、今すぐ出たほうがいいです。",
              translation: "（如果要去的话，最好现在就出发。）",
            },
            {
              sentence: "🔹 忙しいなら、手伝いますよ。",
              translation: "（如果很忙，我就帮你哦。）",
            },
            {
              sentence: "🔹 学生なら、もっと勉強すべきです。",
              translation: "（如果是学生，就应该多学习。）",
            },
          ],
        },
        {
          pattern: "26. 动词（辞书形）／い形容词／な形容词＋と（自然条件）（一～就～）",
          meaning: "",
          description: "📌 句型说明 「〜と」表示自然发生的条件，意思是「一～就～」，强调因果的必然性。",
          examples: [
            {
              sentence: "🔹 春になると、花が咲きます。",
              translation: "（一到春天，花就开了。）",
            },
            {
              sentence: "🔹 スイッチを押すと、電気がつきます。",
              translation: "（一按开关，电就亮了。）",
            },
            {
              sentence: "🔹 寒いと、手が冷たくなります。",
              translation: "（一冷，手就变冷了。）",
            },
          ],
        },
      ],
    },
    {
      title: "时间与状态表现",
      sections: [
        {
          pattern: "27. 动词（て形）＋いる（状态）（正在～／持续状态）",
          meaning: "",
          description: "📌 句型说明 「〜ている」表示动作正在进行或某种状态的持续，特别用于描述当前状态。",
          examples: [
            {
              sentence: "🔹 彼は日本に住んでいます。",
              translation: "（他住在日本。）",
            },
            {
              sentence: "🔹 私は眼鏡をかけています。",
              translation: "（我戴着眼镜。）",
            },
            {
              sentence: "🔹 今、本を読んでいます。",
              translation: "（我正在读书。）",
            },
          ],
        },
        {
          pattern: "28. 名词／动词（ている形）＋間に（在～期间）",
          meaning: "",
          description: "📌 句型说明 「〜間に」表示某动作在某段时间内完成，意思是「在～期间」。",
          examples: [
            {
              sentence: "🔹 休みの間に、宿題を終わらせます。",
              translation: "（在放假期间，我会把作业做完。）",
            },
            {
              sentence: "🔹 先生が話している間に、メモを取ります。",
              translation: "（在老师讲话期间，我会做笔记。）",
            },
            {
              sentence: "🔹 昼休みの間に、ご飯を食べます。",
              translation: "（在午休期间，我会吃饭。）",
            },
          ],
        },
        {
          pattern: "29. 动词（ている形）／い形容词／な形容词＋うちに（趁着～）",
          meaning: "",
          description: "📌 句型说明 「〜うちに」表示趁着某状态或时机做某事，意思是「趁着～的时候」。",
          examples: [
            {
              sentence: "🔹 若いうちに、たくさん旅行したいです。",
              translation: "（我想趁年轻时多旅行。）",
            },
            {
              sentence: "🔹 雨が降っていないうちに、家に帰ります。",
              translation: "（趁着还没下雨，我要回家。）",
            },
            {
              sentence: "🔹 元気なうちに、仕事を終えたい。",
              translation: "（我想趁着有精神时把工作做完。）",
            },
          ],
        },
        {
          pattern: "30. 动词（て形）＋まま（保持～状态）",
          meaning: "",
          description: "📌 句型说明 「〜まま」表示保持某种状态不变，意思是「保持～的样子」。",
          examples: [
            {
              sentence: "🔹 窓を開けたまま寝ました。",
              translation: "（我开着窗户睡了。）",
            },
            {
              sentence: "🔹 靴を履いたまま、家に入りました。",
              translation: "（我穿着鞋进了家。）",
            },
            {
              sentence: "🔹 テレビをつけたまま、出かけました。",
              translation: "（我开着电视就出去了。）",
            },
          ],
        },
        {
          pattern: "31. 动词（て形）＋ながら（一边～一边～）",
          meaning: "",
          description: "📌 句型说明 「〜ながら」表示同时进行两个动作，意思是「一边～一边～」，主语必须相同。",
          examples: [
            {
              sentence: "🔹 音楽を聴きながら、勉強します。",
              translation: "（我一边听音乐一边学习。）",
            },
            {
              sentence: "🔹 テレビを見ながら、ご飯を食べます。",
              translation: "（我一边看电视一边吃饭。）",
            },
            {
              sentence: "🔹 歩きながら、友達と話しました。",
              translation: "（我一边走一边和朋友聊天。）",
            },
          ],
        },
      ],
    },
    {
      title: "动作前后与准备",
      sections: [
        {
          pattern: "32. 动词（て形）＋から（～之后）",
          meaning: "",
          description: "📌 句型说明 「〜てから」表示动作的先后顺序，意思是「做了～之后再～」。",
          examples: [
            {
              sentence: "🔹 宿題をしてから、テレビを見ます。",
              translation: "（做完作业后，我会看电视。）",
            },
            {
              sentence: "🔹 朝ごはんを食べてから、学校へ行きます。",
              translation: "（吃完早餐后，我会去学校。）",
            },
            {
              sentence: "🔹 シャワーを浴びてから、寝ます。",
              translation: "（洗完澡后，我会睡觉。）",
            },
          ],
        },
        {
          pattern: "33. 名词／动词（辞书形）＋前に（～之前）",
          meaning: "",
          description: "📌 句型说明 「〜前に」表示某动作在另一动作之前发生，意思是「在～之前」。",
          examples: [
            {
              sentence: "🔹 寝る前に、本を読みます。",
              translation: "（睡觉前，我会读书。）",
            },
            {
              sentence: "🔹 試験の前に、復習します。",
              translation: "（考试前，我会复习。）",
            },
            {
              sentence: "🔹 出かける前に、鍵をかけます。",
              translation: "（出门前，我会锁门。）",
            },
          ],
        },
        {
          pattern: "34. 动词（た形）＋あとで（～之后）",
          meaning: "",
          description: "📌 句型说明 「〜たあとで」表示某动作完成后进行另一动作，意思是「～之后」，与「てから」类似但更口语化。",
          examples: [
            {
              sentence: "🔹 ご飯を食べたあとで、散歩します。",
              translation: "（吃完饭后，我会去散步。）",
            },
            {
              sentence: "🔹 仕事が終わったあとで、友達と会います。",
              translation: "（工作结束后，我会和朋友见面。）",
            },
            {
              sentence: "🔹 勉強したあとで、ゲームをします。",
              translation: "（学习完后，我会玩游戏。）",
            },
          ],
        },
        {
          pattern: "35. 动词（て形）＋おく（先～）",
          meaning: "",
          description: "📌 句型说明 「〜ておく」表示为将来做准备而先完成某事，意思是「先把～做好」。",
          examples: [
            {
              sentence: "🔹 部屋を掃除しておきます。",
              translation: "（我先把房间打扫好。）",
            },
            {
              sentence: "🔹 荷物を準備しておきました。",
              translation: "（我先把行李准备好了。）",
            },
            {
              sentence: "🔹 窓を閉めておいてください。",
              translation: "（请先把窗户关好。）",
            },
          ],
        },
      ],
    },
    {
      title: "使役与被动",
      sections: [
        {
          pattern: "36. 动词（使役形：〜せる／させる）（让～做）",
          meaning: "",
          description: "📌 句型说明 「〜せる／させる」表示使役，让某人去做某事，意思是「让～做～」。一段动词用「〜せる」，二段及サ变动词用「〜させる」。",
          examples: [
            {
              sentence: "🔹 子供に野菜を食べさせます。",
              translation: "（我让孩子吃蔬菜。）",
            },
            {
              sentence: "🔹 学生に宿題を出させました。",
              translation: "（我让学生交作业。）",
            },
            {
              sentence: "🔹 友達に手伝わせます。",
              translation: "（我让朋友帮忙。）",
            },
          ],
        },
        {
          pattern: "37. 动词（被动形：〜れる／られる）（被～）",
          meaning: "",
          description: "📌 句型说明 「〜れる／られる」表示被动，意思是「被某人做某事」。一段动词用「〜れる」，二段及サ变动词用「〜られる」。",
          examples: [
            {
              sentence: "🔹 先生に褒められました。",
              translation: "（我被老师表扬了。）",
            },
            {
              sentence: "🔹 犬に手を噛まれました。",
              translation: "（我的手被狗咬了。）",
            },
            {
              sentence: "🔹 友達に笑われました。",
              translation: "（我被朋友笑了。）",
            },
          ],
        },
        {
          pattern: "38. 动词（使役被动形：〜させられる）（被要求做～）",
          meaning: "",
          description: "📌 句型说明 「〜させられる」结合使役和被动，意思是「被要求或被迫做某事」，带有不情愿的语感。",
          examples: [
            {
              sentence: "🔹 先生に宿題をさせられました。",
              translation: "（我被老师要求做作业。）",
            },
            {
              sentence: "🔹 親に部屋を掃除させられます。",
              translation: "（我被父母要求打扫房间。）",
            },
            {
              sentence: "🔹 上司に残業させられました。",
              translation: "（我被上司要求加班。）",
            },
          ],
        },
      ],
    },
    {
      title: "其他常见句型",
      sections: [
        {
          pattern: "39. 动词（て形）＋もいい（可以～）",
          meaning: "",
          description: "📌 句型说明 「〜てもいい」表示允许某行为，意思是「可以做某事」，常用于请求许可或确认。",
          examples: [
            {
              sentence: "🔹 ここで写真を撮ってもいいですか？",
              translation: "（可以在这儿拍照吗？）",
            },
            {
              sentence: "🔹 窓を開けてもいいです。",
              translation: "（可以开窗户。）",
            },
            {
              sentence: "🔹 この本を借りてもいいですか？",
              translation: "（可以借这本书吗？）",
            },
          ],
        },
        {
          pattern: "40. 动词（て形）＋はいけない（不可以～）",
          meaning: "",
          description: "📌 句型说明 「〜てはいけない」表示禁止某行为，意思是「不可以做某事」，语气较强硬。",
          examples: [
            {
              sentence: "🔹 ここでタバコを吸ってはいけません。",
              translation: "（不能在这儿抽烟。）",
            },
            {
              sentence: "🔹 学校で遊んではいけない。",
              translation: "（不能在学校玩耍。）",
            },
            {
              sentence: "🔹 宿題を忘れてはいけません。",
              translation: "（不能忘记做作业。）",
            },
          ],
        },
        {
          pattern: "41. 动词（ない形）＋なければならない（必须～）",
          meaning: "",
          description: "📌 句型说明 「〜なければならない」表示义务或必要性，意思是「必须做某事」。",
          examples: [
            {
              sentence: "🔹 毎日勉強しなければなりません。",
              translation: "（我必须每天学习。）",
            },
            {
              sentence: "🔹 明日までに宿題を終わらせなければなりません。",
              translation: "（我必须在明天前完成作业。）",
            },
            {
              sentence: "🔹 遅刻しないようにしなければなりません。",
              translation: "（我必须不迟到。）",
            },
          ],
        },
        {
          pattern: "42. 动词（なくても形）＋いい（不必～）",
          meaning: "",
          description: "📌 句型说明 「〜なくてもいい」表示没有做某事的必要，意思是「不必做某事」。",
          examples: [
            {
              sentence: "🔹 急がなくてもいいですよ。",
              translation: "（不必着急哦。）",
            },
            {
              sentence: "🔹 今日は宿題をしなくてもいいです。",
              translation: "（今天不必做作业。）",
            },
            {
              sentence: "🔹 傘を持たなくてもいいです。",
              translation: "（不必带伞。）",
            },
          ],
        },
        {
          pattern: "43. 动词（辞书形）＋ようにする（设法～）",
          meaning: "",
          description: "📌 句型说明 「〜ようにする」表示努力达成某目标，意思是「设法做到～」。",
          examples: [
            {
              sentence: "🔹 毎日運動するようにします。",
              translation: "（我设法每天运动。）",
            },
            {
              sentence: "🔹 遅刻しないようにします。",
              translation: "（我设法不迟到。）",
            },
            {
              sentence: "🔹 日本語を上手に話すようにします。",
              translation: "（我设法把日语说好。）",
            },
          ],
        },
        {
          pattern: "44. 动词（辞书形）＋ように言う（说要～）",
          meaning: "",
          description: "📌 句型说明 「〜ように言う」表示某人要求或叮嘱做某事，意思是「说要～」。",
          examples: [
            {
              sentence: "🔹 先生は宿題をするように言いました。",
              translation: "（老师说要做作业。）",
            },
            {
              sentence: "🔹 母は早く寝るように言いました。",
              translation: "（妈妈说要早点睡。）",
            },
            {
              sentence: "🔹 友達はここで待つように言いました。",
              translation: "（朋友说要在这儿等。）",
            },
          ],
        },
        {
          pattern: "45. 动词（た形）＋ばかり（刚刚～）",
          meaning: "",
          description: "📌 句型说明 「〜たばかり」表示某动作刚刚完成，意思是「刚刚做了～」。",
          examples: [
            {
              sentence: "🔹 ご飯を食べたばかりです。",
              translation: "（我刚刚吃完饭。）",
            },
            {
              sentence: "🔹 日本に来たばかりです。",
              translation: "（我刚刚来到日本。）",
            },
            {
              sentence: "🔹 仕事を始めたばかりです。",
              translation: "（我刚刚开始工作。）",
            },
          ],
        },
        {
          pattern: "46. 动词（たところ／ているところ）（刚～／正在～的时候）",
          meaning: "",
          description: "📌 句型说明 「〜たところ」表示刚完成某事，「〜ているところ」表示正在做某事，两者都描述动作的时间点。",
          examples: [
            {
              sentence: "🔹 今、家に帰ったところです。",
              translation: "（我刚刚回到家。）",
            },
            {
              sentence: "🔹 今、料理をしているところです。",
              translation: "（我正在做饭。）",
            },
            {
              sentence: "🔹 宿題を終えたところです。",
              translation: "（我刚刚做完作业。）",
            },
          ],
        },
      ],
    },
    {
      title: "比较与程度",
      sections: [
        {
          pattern: "47. 名词1＋より＋名词2＋のほうが～（比～更～）",
          meaning: "",
          description: "📌 句型说明 「〜より〜のほうが」表示比较，意思是「比起 A，B 更～」。",
          examples: [
            {
              sentence: "🔹 コーヒーよりお茶のほうが好きです。",
              translation: "（比起咖啡，我更喜欢茶。）",
            },
            {
              sentence: "🔹 バスより電車のほうが速いです。",
              translation: "（比起公交，电车更快。）",
            },
            {
              sentence: "🔹 夏より冬のほうが寒いです。",
              translation: "（比起夏天，冬天更冷。）",
            },
          ],
        },
        {
          pattern: "48. 动词（辞书形）／い形容词＋ほど（到～程度）",
          meaning: "",
          description: "📌 句型说明 「〜ほど」表示某事物的程度，意思是「到～的程度」。",
          examples: [
            {
              sentence: "🔹 びっくりするほど大きいです。",
              translation: "（大得让人吃惊。）",
            },
            {
              sentence: "🔹 泣きたくなるほど悲しいです。",
              translation: "（悲伤到想哭的程度。）",
            },
            {
              sentence: "🔹 子供でも分かるほど簡単です。",
              translation: "（简单到连小孩都懂的程度。）",
            },
          ],
        },
        {
          pattern: "49. 动词（ます形，去ます）／い形容词＋すぎる（太～）",
          meaning: "",
          description: "📌 句型说明 「〜すぎる」表示某事物的程度过高，意思是「太～」。",
          examples: [
            {
              sentence: "🔹 食べすぎました。",
              translation: "（我吃太多了。）",
            },
            {
              sentence: "🔹 この服は高すぎます。",
              translation: "（这件衣服太贵了。）",
            },
            {
              sentence: "🔹 飲みすぎて、頭が痛いです。",
              translation: "（喝太多，头痛了。）",
            },
          ],
        },
        {
          pattern: "50. 动词（ます形，去ます）＋やすい／にくい（容易／难以）",
          meaning: "",
          description: "📌 句型说明 「〜やすい」表示容易做某事，「〜にくい」表示难以做某事，描述动作的难易度。",
          examples: [
            {
              sentence: "🔹 この本は読みやすいです。",
              translation: "（这本书容易读。）",
            },
            {
              sentence: "🔹 この箱は重くて持ちにくいです。",
              translation: "（这个箱子太重，难以拿。）",
            },
            {
              sentence: "🔹 この料理は作りやすいです。",
              translation: "（这道菜容易做。）",
            },
          ],
        },
      ],
    },
    {
      title: "动作完成与结果",
      sections: [
        {
          pattern: "51. 动词（て形）＋しまう（不小心做完／遗憾）",
          meaning: "",
          description: "📌 句型说明 「〜てしまう」表示动作完成，带有不小心或遗憾的语感，意思是「不小心做了～」或「可惜～」。",
          examples: [
            {
              sentence: "🔹 宿題を忘れてしまいました。",
              translation: "（我不小心忘了做作业。）",
            },
            {
              sentence: "🔹 大事な書類を捨ててしまった。",
              translation: "（我把重要的文件扔掉了，真可惜。）",
            },
            {
              sentence: "🔹 ケーキを全部食べてしまいました。",
              translation: "（我不小心把蛋糕全吃掉了。）",
            },
          ],
        },
        {
          pattern: "52. 动词（て形）＋っぱなし（保持某状态）",
          meaning: "",
          description: "📌 句型说明 「〜っぱなし」表示某状态持续未变，意思是「一直保持～的状态」，常带有不满语气。",
          examples: [
            {
              sentence: "🔹 テレビをつけっぱなしにしました。",
              translation: "（我一直让电视开着。）",
            },
            {
              sentence: "🔹 ドアを開けっぱなしにしないでください。",
              translation: "（请不要让门一直开着。）",
            },
            {
              sentence: "🔹 電気をつけっぱなしで寝ました。",
              translation: "（我开着电灯就睡了。）",
            },
          ],
        },
      ],
    },
    {
      title: "目的与手段",
      sections: [
        {
          pattern: "53. 动词（辞书形）＋のに（用于～目的）",
          meaning: "",
          description: "📌 句型说明 「〜のに」表示某动作或物品用于某目的，意思是「用来做～」，常接「使う」「役立つ」等动词。",
          examples: [
            {
              sentence: "🔹 このナイフは野菜を切るのに使います。",
              translation: "（这把刀用来切蔬菜。）",
            },
            {
              sentence: "🔹 ノートはメモを取るのに便利です。",
              translation: "（笔记本用来记笔记很方便。）",
            },
            {
              sentence: "🔹 お金は旅行に行くのに必要です。",
              translation: "（钱是用来旅行的必需品。）",
            },
          ],
        },
        {
          pattern: "54. 动词（辞书形）＋ために（为了～）",
          meaning: "",
          description: "📌 句型说明 「〜ために」表示目的，意思是「为了做某事」，强调意图，常与意志动词搭配。",
          examples: [
            {
              sentence: "🔹 健康のために、毎日運動します。",
              translation: "（为了健康，我每天运动。）",
            },
            {
              sentence: "🔹 試験に合格するために、勉強しています。",
              translation: "（为了通过考试，我在学习。）",
            },
            {
              sentence: "🔹 友達に会うために、東京へ行きます。",
              translation: "（为了见朋友，我要去东京。）",
            },
          ],
        },
      ],
    },
    {
      title: "列举与举例",
      sections: [
        {
          pattern: "55. 动词（た形）＋り〜たりする（～或～）",
          meaning: "",
          description: "📌 句型说明 「〜たり〜たりする」表示列举多个动作，意思是「有时～有时～」，表达不完全列举。",
          examples: [
            {
              sentence: "🔹 週末は映画を見たり、買い物したりします。",
              translation: "（周末我有时看电影，有时购物。）",
            },
            {
              sentence: "🔹 友達と話したり、ゲームをしたりしました。",
              translation: "（我和朋友有时聊天，有时玩游戏。）",
            },
            {
              sentence: "🔹 休みの日は寝たり、本を読んだりします。",
              translation: "（休息日我有时睡觉，有时读书。）",
            },
          ],
        },
        {
          pattern: "56. 名词＋とか〜とか（～啦～啦）",
          meaning: "",
          description: "📌 句型说明 「〜とか〜とか」表示列举事物，意思是「～啦～啦」，语气轻松且不完全列举。",
          examples: [
            {
              sentence: "🔹 スーパーで野菜とか肉とかを買いました。",
              translation: "（我在超市买了蔬菜啦肉啦之类的。）",
            },
            {
              sentence: "🔹 旅行にカメラとかお金とかを持っていきます。",
              translation: "（旅行我会带相机啦钱啦之类的。）",
            },
            {
              sentence: "🔹 友達にケーキとかジュースとかをあげました。",
              translation: "（我给朋友蛋糕啦果汁啦之类的。）",
            },
          ],
        },
      ],
    }
  ],
};

export default n4GrammarZhCN;