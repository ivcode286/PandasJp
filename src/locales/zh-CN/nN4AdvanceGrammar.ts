// src/data/N4AdvanceGrammarZhCN.ts
import { GrammarData } from "../../types/translation";

const N4AdvanceGrammarZhCN: GrammarData = {
  chapters: [
    {
      title: "📌 N4进阶语法",
      sections: [
        {
          pattern: "57. ～にくい（难以～）",
          meaning: "表示某动作或事情难以进行。",
          description: "📌 句型说明\n动词ます形去掉「ます」 + にくい\n用来描述某事因困难而不易达成。",
          examples: [
            {
              sentence: "🔹この本は読みにくいです。",
              translation: "这本书很难读。",
            },
            {
              sentence: "🔹彼の字は見にくいです。",
              translation: "他的字很难看清楚。",
            },
          ],
        },
        {
          pattern: "58. ～やすい（容易～）",
          meaning: "表示某动作或事情容易进行。",
          description: "📌 句型说明\n动词ます形去掉「ます」 + やすい\n用来描述某事因简单或方便而容易达成。",
          examples: [
            {
              sentence: "🔹この服は着やすいです。",
              translation: "这件衣服很好穿。",
            },
            {
              sentence: "🔹このアプリは使いやすいです。",
              translation: "这个应用程序很好用。",
            },
          ],
        },
        {
          pattern: "59. ～てある（表示完成状态）",
          meaning: "表示某动作已完成，且结果保留下来，通常是有意为之。",
          description: "📌 句型说明\n动词て形 + ある\n强调动作的结果状态，通常与他动词搭配。",
          examples: [
            {
              sentence: "🔹部屋に花が飾ってあります。",
              translation: "房间里已经装饰了花。",
            },
            {
              sentence: "🔹窓が開けてあります。",
              translation: "窗户已经被打开了。",
            },
          ],
        },
        {
          pattern: "60. ～ことがある（有时会～）",
          meaning: "表示某事偶尔会发生，或曾经发生过。",
          description: "📌 句型说明\n动词辞书形 + ことがある\n用来描述偶发事件或过去经验。",
          examples: [
            {
              sentence: "🔹朝、寝坊することがあります。",
              translation: "有时候早上会睡过头。",
            },
            {
              sentence: "🔹子供の時、木から落ちたことがあります。",
              translation: "小时候曾经从树上摔下来。",
            },
          ],
        },
        {
          pattern: "61. ～てしまう（完全完成、遗憾）",
          meaning: "表示动作彻底完成，或带有遗憾、不情愿的语气。",
          description: "📌 句型说明\n动词て形 + しまう\n口语中常缩为「～ちゃう」或「～じゃう」。\n可用于表示意外或不希望的结果。",
          examples: [
            {
              sentence: "🔹宿題を忘れてしまいました。",
              translation: "我把作业忘记了（遗憾）。",
            },
            {
              sentence: "🔹ケーキを全部食べてしまった。",
              translation: "我把蛋糕全吃掉了（彻底完成）。",
            },
          ],
        },
        {
          pattern: "62. ～ばかり（刚刚做完）",
          meaning: "表示某动作刚刚完成，强调时间上的接近。",
          description: "📌 句型说明\n动词た形 + ばかり\n用来表示某事刚发生不久。",
          examples: [
            {
              sentence: "🔹今、家に帰ったばかりです。",
              translation: "我刚刚回到家。",
            },
            {
              sentence: "🔹ご飯を食べたばかりなので、お腹がいっぱいです。",
              translation: "刚吃完饭，所以肚子很饱。",
            },
          ],
        },
        {
          pattern: "63. ～がする（感觉到～）",
          meaning: "表示感觉到某种气味、声音或感觉。",
          description: "📌 句型说明\n名词（表示感官） + がする\n常用于描述感官体验，如闻到、听到等。",
          examples: [
            {
              sentence: "🔹カレーの匂いがします。",
              translation: "我闻到咖喱的味道。",
            },
            {
              sentence: "🔹外で誰かの声がします。",
              translation: "我听到外面有人的声音。",
            },
          ],
        },
        {
          pattern: "64. ～ようだ（好像～）",
          meaning: "表示根据观察或感觉，某事好像是某种状态。",
          description: "📌 句型说明\n动词普通形 / い形容词普通形 / な形容词 + ようだ\n名词 + のようだ\n用于推测或比喻。",
          examples: [
            {
              sentence: "🔹彼は疲れているようだ。",
              translation: "他好像很累。",
            },
            {
              sentence: "🔹雪が降るようだ。",
              translation: "好像要下雪了。",
            },
          ],
        },
        {
          pattern: "65. ～らしい（听说～）",
          meaning: "表示听说或传闻，说话者未亲自确认。",
          description: "📌 句型说明\n动词普通形 / い形容词普通形 / な形容词 + らしい\n名词 + らしい\n用于传达二手信息。",
          examples: [
            {
              sentence: "🔹田中さんは結婚するらしい。",
              translation: "听说田中要结婚了。",
            },
            {
              sentence: "🔹この店は美味しいらしい。",
              translation: "听说这家店很好吃。",
            },
          ],
        },
        {
          pattern: "66. ～のに（明明～却～）",
          meaning: "表示与预期相反的情况，带有遗憾或不满。",
          description: "📌 句型说明\n动词普通形 / い形容词普通形 / な形容词 + のに\n名词 + なのに\n前句描述事实，后句表示相反结果。",
          examples: [
            {
              sentence: "🔹一生懸命勉強したのに、試験に落ちました。",
              translation: "明明很努力学习了，却没考过。",
            },
            {
              sentence: "🔹天気がいいのに、家にいます。",
              translation: "明明天气很好，却待在家里。",
            },
          ],
        },
        {
          pattern: "67. ～ながら（一边～一边～）",
          meaning: "表示同时进行两个动作，后者为主要动作。",
          description: "📌 句型说明\n动词ます形去掉「ます」 + ながら + 主要动作\n两个动作由同一主语执行。",
          examples: [
            {
              sentence: "🔹音楽を聞きながら、本を読みます。",
              translation: "一边听音乐，一边读书。",
            },
            {
              sentence: "🔹テレビを見ながら、食事をします。",
              translation: "一边看电视，一边吃饭。",
            },
          ],
        },
        {
          pattern: "68. ～てばかりいる（总是～）",
          meaning: "表示某动作反复进行，带有抱怨或负面语气。",
          description: "📌 句型说明\n动词て形 + ばかりいる\n强调某人总是做某事，通常带批判意味。",
          examples: [
            {
              sentence: "🔹彼はゲームをしてばかりいます。",
              translation: "他总是在玩游戏。",
            },
            {
              sentence: "🔹子供はテレビを見てばかりいます。",
              translation: "孩子总是在看电视。",
            },
          ],
        },
        {
          pattern: "69. ～させる（使役形）",
          meaning: "表示让或强迫某人做某事。",
          description: "📌 句型说明\n动词 1类：改为「あ段」+ せる\n动词 2类：去ます + させる\n动词 3类：する ➝ させる / くる ➝ こさせる\n表示命令或允许。",
          examples: [
            {
              sentence: "🔹子供に野菜を食べさせます。",
              translation: "我让孩子吃蔬菜。",
            },
            {
              sentence: "🔹先生が生徒に宿題をさせました。",
              translation: "老师让学生做作业。",
            },
          ],
        },
        {
          pattern: "70. ～られる（被动形）",
          meaning: "表示被动，某动作由他人施加于主语。",
          description: "📌 句型说明\n动词 1类：改为「あ段」+ れる\n动词 2类：去ます + られる\n动词 3类：する ➝ される / くる ➝ こられる\n用于描述被动或受害。",
          examples: [
            {
              sentence: "🔹友達に秘密を話されました。",
              translation: "我的秘密被朋友说出去了。",
            },
            {
              sentence: "🔹犬にかまれました。",
              translation: "我被狗咬了。",
            },
          ],
        },
        {
          pattern: "71. ～させられる（使役被动形）",
          meaning: "表示被强迫做某事，带有不情愿的语气。",
          description: "📌 句型说明\n动词 1类：改为「あ段」+ せられる\n动词 2类：去ます + させられる\n动词 3类：する ➝ させられる / くる ➝ こさせられる\n强调被强迫的感觉。",
          examples: [
            {
              sentence: "🔹親に勉強させられました。",
              translation: "我被父母强迫学习。",
            },
            {
              sentence: "🔹会社で残業させられました。",
              translation: "我被公司强迫加班。",
            },
          ],
        },
        {
          pattern: "72. ～てもらう（请别人为我做）",
          meaning: "表示请他人为自己做某事，带有感谢意味。",
          description: "📌 句型说明\n动词て形 + もらう\n主语是接受动作的人。",
          examples: [
            {
              sentence: "🔹友達に荷物を持ってもらいました。",
              translation: "我请朋友帮我拿行李。",
            },
            {
              sentence: "🔹先生に質問を説明してもらいました。",
              translation: "我请老师帮我解释问题。",
            },
          ],
        },
        {
          pattern: "73. ～てくれる（别人为我做）",
          meaning: "表示他人自发为自己做某事，带有感激语气。",
          description: "📌 句型说明\n动词て形 + くれる\n主语是执行动作的人，通常是对自己亲近的人。",
          examples: [
            {
              sentence: "🔹友達がケーキを買ってくれました。",
              translation: "朋友帮我买了蛋糕。",
            },
            {
              sentence: "🔹姉が部屋を掃除してくれました。",
              translation: "姐姐帮我打扫了房间。",
            },
          ],
        },
        {
          pattern: "74. ～てあげる（我为别人做）",
          meaning: "表示自己为他人做某事，通常对地位较低或亲近的人。",
          description: "📌 句型说明\n动词て形 + あげる\n主语是执行动作的人。",
          examples: [
            {
              sentence: "🔹妹にお菓子を買ってあげました。",
              translation: "我帮妹妹买了零食。",
            },
            {
              sentence: "🔹友達に宿題を教えてあげました。",
              translation: "我帮朋友教了作业。",
            },
          ],
        },
        {
          pattern: "75. ～ていただく（敬语：请别人为我做）",
          meaning: "表示礼貌地请他人为自己做某事，是「～てもらう」的敬语形式。",
          description: "📌 句型说明\n动词て形 + いただく\n用于正式或对地位较高的人。",
          examples: [
            {
              sentence: "🔹先生に質問を説明していただきました。",
              translation: "我请老师为我解释了问题。",
            },
            {
              sentence: "🔹医者に健康をチェックしていただきました。",
              translation: "我请医生为我检查了健康。",
            },
          ],
        },
        {
          pattern: "76. ～てくださる（敬语：别人为我做）",
          meaning: "表示他人为自己做某事，是「～てくれる」的敬语形式。",
          description: "📌 句型说明\n动词て形 + くださる\n用于对地位较高或需表示尊敬的人。",
          examples: [
            {
              sentence: "🔹先生が本を貸してくださった。",
              translation: "老师借给我书。",
            },
            {
              sentence: "🔹社長がアドバイスをしてくださいました。",
              translation: "社长给了我建议。",
            },
          ],
        },
        {
          pattern: "77. ～てやる（我为低辈分的人或动物做）",
          meaning: "表示自己为地位较低的人或动物做某事，语气较随意或粗鲁。",
          description: "📌 句型说明\n动词て形 + やる\n多用于亲近的人或动物，语气较不正式。",
          examples: [
            {
              sentence: "🔹犬にご飯をやってきます。",
              translation: "我去喂狗吃饭。",
            },
            {
              sentence: "🔹弟に宿題を教えてやった。",
              translation: "我帮弟弟教了作业。",
            },
          ],
        },
        {
          pattern: "78. お～になる（尊敬语）",
          meaning: "表示对他人的动作或状态表示尊敬。",
          description: "📌 句型说明\nお + 动词ます形去掉「ます」 + になる\n用于表示对地位较高者的动作。",
          examples: [
            {
              sentence: "🔹先生がお話しになる。",
              translation: "老师在说话。",
            },
            {
              sentence: "🔹社長がお帰りになりました。",
              translation: "社长回去了。",
            },
          ],
        },
        {
          pattern: "79. お～する（谦让语）",
          meaning: "表示自己谦逊地进行某动作，对他人表示尊敬。",
          description: "📌 句型说明\nお + 动词ます形去掉「ます」 + する\n用于正式场合或对地位较高者。",
          examples: [
            {
              sentence: "🔹お預かりします。",
              translation: "我帮您保管。",
            },
            {
              sentence: "🔹お答えします。",
              translation: "我来回答。",
            },
          ],
        },
        {
          pattern: "80. ～すぎる（过于～）",
          meaning: "表示某动作或状态超过适当程度。",
          description: "📌 句型说明\n动词ます形去掉「ます」 + すぎる\nい形容词去い + すぎる\nな形容词去な + すぎる\n表示过度或不适当。",
          examples: [
            {
              sentence: "🔹昨日、飲みすぎました。",
              translation: "昨天喝太多了。",
            },
            {
              sentence: "🔹このカバンは重すぎます。",
              translation: "这个包包太重了。",
            },
          ],
        },
        {
          pattern: "81. ～ておく（提前做～、事先做～）",
          meaning: "表示为了某目的而提前完成某动作。",
          description: "📌 句型说明\n动词て形 + おく\n口语中常缩为「～とく」。\n强调为未来准备。",
          examples: [
            {
              sentence: "🔹旅行の前に、荷物をまとめておきます。",
              translation: "旅行前，我先把行李整理好。",
            },
            {
              sentence: "🔹会議の資料を印刷しておきました。",
              translation: "我已经把会议资料印好了。",
            },
          ],
        },
        {
          pattern: "82. ～ところ（正要～、正在～、刚做完～）",
          meaning: "表示某动作或状态的时间点，如正要、正在或刚完成。",
          description: "📌 句型说明\n动词辞书形 + ところ（正要～）\n动词て形 + いるところ（正在～）\n动词た形 + ところ（刚做完～）\n用来描述动作的具体阶段。",
          examples: [
            {
              sentence: "🔹今、家を出るところです。",
              translation: "我正要出门。",
            },
            {
              sentence: "🔹彼はご飯を食べているところです。",
              translation: "他正在吃饭。",
            },
            {
              sentence: "🔹宿題をやったところです。",
              translation: "我刚做完作业。",
            },
          ],
        },
        {
          pattern: "83. ～までに（到～之前）",
          meaning: "表示某动作或状态必须在某时间点之前完成。",
          description: "📌 句型说明\n名词（时间） + までに + 动词\n强调截止时间。",
          examples: [
            {
              sentence: "🔹月曜日までにレポートを提出してください。",
              translation: "请在星期一之前提交报告。",
            },
            {
              sentence: "🔹5時までに駅に着きます。",
              translation: "我会在5点之前到车站。",
            },
          ],
        },
        {
          pattern: "84. ～によって（因为～而不同、根据～）",
          meaning: "表示因某因素而异，或根据某基准。",
          description: "📌 句型说明\n名词 + によって + 动词 / 形容词\n用于表示原因、方法或依据。\n书面语气较强。",
          examples: [
            {
              sentence: "🔹人によって考え方が違います。",
              translation: "根据人的不同，想法也不同。",
            },
            {
              sentence: "🔹天気によって予定が変わります。",
              translation: "根据天气，计划会改变。",
            },
          ],
        },
        {
          pattern: "85. ～はずだ（理应～）",
          meaning: "表示根据常理或预期，某事应该会发生。",
          description: "📌 句型说明\n动词普通形 / い形容词普通形 / な形容词 + はずだ\n名词 + のはずだ\n表示逻辑推测。",
          examples: [
            {
              sentence: "🔹彼はもう家に着いたはずです。",
              translation: "他应该已经到家了。",
            },
            {
              sentence: "🔹この店は美味しいはずだ。",
              translation: "这家店应该很好吃。",
            },
          ],
        },
        {
          pattern: "86. ～はずがない（不可能～）",
          meaning: "表示根据常理，某事不可能发生。",
          description: "📌 句型说明\n动词普通形 / い形容词普通形 / な形容词 + はずがない\n名词 + のはずがない\n强调否定推测。",
          examples: [
            {
              sentence: "🔹彼がそんなことを言うはずがない。",
              translation: "他不可能说那种话。",
            },
            {
              sentence: "🔹この問題が簡単なはずがない。",
              translation: "这个问题不可能简单。",
            },
          ],
        },
        {
          pattern: "87. ～ことになる（决定要～）",
          meaning: "表示某事已被决定，通常是客观或外部决定。",
          description: "📌 句型说明\n动词辞书形 / ない形 + ことになる\n表示决定或安排。",
          examples: [
            {
              sentence: "🔹来月、海外に行くことになりました。",
              translation: "下个月决定要去国外。",
            },
            {
              sentence: "🔹会議は午後から行うことになった。",
              translation: "会议决定从下午开始。",
            },
          ],
        },
        {
          pattern: "88. ～ことにする（自己决定要～）",
          meaning: "表示说话者自己决定做某事。",
          description: "📌 句型说明\n动词辞书形 / ない形 + ことにする\n强调主观决定。",
          examples: [
            {
              sentence: "🔹毎日、運動することにしました。",
              translation: "我决定每天运动。",
            },
            {
              sentence: "🔹タバコを吸わないことにした。",
              translation: "我决定不抽烟。",
            },
          ],
        },
        {
          pattern: "89. ～ようにする（尽量做到～）",
          meaning: "表示努力或尝试去实现某状态或动作。",
          description: "📌 句型说明\n动词辞书形 / ない形 + ようにする\n表示有意识的努力。",
          examples: [
            {
              sentence: "🔹遅刻しないようにします。",
              translation: "我会尽量不迟到。",
            },
            {
              sentence: "🔹毎日、日本語を勉強するようにしています。",
              translation: "我尽量每天学日语。",
            },
          ],
        },
        {
          pattern: "90. ～ようになる（变得能～）",
          meaning: "表示能力或状态的变化，变得能够做某事。",
          description: "📌 句型说明\n动词辞书形 / ない形 + ようになる\n强调能力或习惯的改变。",
          examples: [
            {
              sentence: "🔹日本語が話せるようになりました。",
              translation: "我变得能说日语了。",
            },
            {
              sentence: "🔹朝早く起きるようになった。",
              translation: "我变得能早起了。",
            },
          ],
        },
        {
          pattern: "91. ～らしい（符合～身份、典型）",
          meaning: "表示某事物或人符合某种典型特征或身份。",
          description: "📌 句型说明\n名词 + らしい\n动词普通形 / い形容词普通形 + らしい\n表示符合预期或特征。",
          examples: [
            {
              sentence: "🔹彼女は女らしい服を着ています。",
              translation: "她穿着很女性化的衣服。",
            },
            {
              sentence: "🔹子供らしい笑顔が素敵です。",
              translation: "那孩子般的笑容很迷人。",
            },
          ],
        },
        {
          pattern: "92. ～みたいだ（看起来像～）",
          meaning: "表示根据外观或感觉，某事物看起来像某状态。",
          description: "📌 句型说明\n动词普通形 / い形容词普通形 / な形容词 + みたいだ\n名词 + のみたいだ\n语气较口语化。",
          examples: [
            {
              sentence: "🔹彼は病気みたいだ。",
              translation: "他看起来像是生病了。",
            },
            {
              sentence: "🔹この絵は本物みたいだ。",
              translation: "这幅画看起来像是真品。",
            },
          ],
        },
        {
          pattern: "93. ～ばよかった（如果～就好了）",
          meaning: "表示对过去的遗憾，认为如果做了某事会更好。",
          description: "📌 句型说明\n动词ば形 + よかった\n表示反事实的遗憾。",
          examples: [
            {
              sentence: "🔹もっと勉強すればよかった。",
              translation: "如果多学习就好了。",
            },
            {
              sentence: "🔹早く寝ればよかった。",
              translation: "如果早点睡就好了。",
            },
          ],
        },
        {
          pattern: "94. ～ば～ほど（越～越～）",
          meaning: "表示某状态或动作的程度越高，另一状态也越强。",
          description: "📌 句型说明\n动词ば形 / い形容词ければ + ほど\n表示比例关系。",
          examples: [
            {
              sentence: "🔹勉強すればするほど、頭がよくなります。",
              translation: "越学习，头脑越聪明。",
            },
            {
              sentence: "🔹高ければ高いほど、品質がいい。",
              translation: "越贵，品质越好。",
            },
          ],
        },
        {
          pattern: "95. ～たまま（保持某状态）",
          meaning: "表示某动作完成后，该状态持续不变。",
          description: "📌 句型说明\n动词た形 + まま\n强调状态的持续。",
          examples: [
            {
              sentence: "🔹窓を開けたまま寝ました。",
              translation: "我开着窗户睡觉了。",
            },
            {
              sentence: "🔹靴を履いたまま家に入りました。",
              translation: "我穿着鞋进了家。",
            },
          ],
        },
        {
          pattern: "96. ～のようだ（比喻、像～一样）",
          meaning: "表示某事物像某种状态或事物，用于比喻。",
          description: "📌 句型说明\n名词 + のようだ\n动词普通形 / い形容词普通形 / な形容词 + ようだ\n用于比喻或推测。",
          examples: [
            {
              sentence: "🔹彼女は天使のようだ。",
              translation: "她就像天使一样。",
            },
            {
              sentence: "🔹風が強く吹くようだ。",
              translation: "风好像在猛烈地吹。",
            },
          ],
        },
        {
          pattern: "97. ～のように（像～一样做某事）",
          meaning: "表示某动作或状态像某事物一样进行。",
          description: "📌 句型说明\n名词 + のように + 动词\n动词普通形 / い形容词普通形 + ように\n强调模仿或比喻。",
          examples: [
            {
              sentence: "🔹鳥のようにはう。",
              translation: "像鸟一样飞。",
            },
            {
              sentence: "🔹子供のようにはしゃぐ。",
              translation: "像小孩一样兴奋。",
            },
          ],
        },
        {
          pattern: "98. ～ないで（不做～而～）",
          meaning: "表示不做某事而进行另一动作。",
          description: "📌 句型说明\n动词ない形 + で + 动词\n表示否定条件下的动作。",
          examples: [
            {
              sentence: "🔹朝ごはんを食べないで学校に行きました。",
              translation: "我没吃早餐就去学校了。",
            },
            {
              sentence: "🔹宿題をしないで遊んでいます。",
              translation: "我没做作业就去玩了。",
            },
          ],
        },
        {
          pattern: "99. ～ずに（书面语的ないで）",
          meaning: "表示不做某事而进行另一动作，书面语气。",
          description: "📌 句型说明\n动词辞书形 + ずに + 动词\n功能与「～ないで」相同，但更正式。",
          examples: [
            {
              sentence: "🔹許可を得ずに部屋に入った。",
              translation: "我没得到许可就进了房间。",
            },
            {
              sentence: "🔹食事せずに働いた。",
              translation: "我没吃饭就工作了。",
            },
          ],
        },
        {
          pattern: "100. ～てもかまわない（做～也没关系）",
          meaning: "表示做某事是允许的，没问题。",
          description: "📌 句型说明\n动词て形 + もかまわない\n表示许可，语气较随意。",
          examples: [
            {
              sentence: "🔹ここで写真を撮ってもかまいません。",
              translation: "在这里拍照也没关系。",
            },
            {
              sentence: "🔹遅く帰ってもかまいません。",
              translation: "晚点回家也没关系。",
            },
          ],
        },
        {
          pattern: "101. ～なくてもかまわない（不做～也没关系）",
          meaning: "表示不做某事也没问题，没有义务。",
          description: "📌 句型说明\n动词ない形 + なくてもかまわない\n表示无需强制。",
          examples: [
            {
              sentence: "🔹急がなくてもかまいません。",
              translation: "不用着急也没关系。",
            },
            {
              sentence: "🔹宿題をしなくてもかまいません。",
              translation: "不做作业也没关系。",
            },
          ],
        },
        {
          pattern: "102. ～てはいけない（不可以做～）",
          meaning: "表示禁止，不允许做某事。",
          description: "📌 句型说明\n动词て形 + はいけない\n用于规则或禁止。",
          examples: [
            {
              sentence: "🔹ここでタバコを吸ってはいけません。",
              translation: "这里不可以抽烟。",
            },
            {
              sentence: "🔹授業中に話してはいけません。",
              translation: "上课时不可以说话。",
            },
          ],
        },
        {
          pattern: "103. ～なくてはいけない（必须～）",
          meaning: "表示必须做某事，带有义务感。",
          description: "📌 句型说明\n动词ない形去掉「い」 + くてはいけない\n表示必要性。",
          examples: [
            {
              sentence: "🔹毎日、運動しなくてはいけません。",
              translation: "每天必须运动。",
            },
            {
              sentence: "🔹時間通りに来なくてはいけません。",
              translation: "必须准时到。",
            },
          ],
        },
        {
          pattern: "104. ～なければならない（必须～）",
          meaning: "表示必须做某事，语气较正式。",
          description: "📌 句型说明\n动词ない形去掉「い」 + なければならない\n与「～なくてはいけない」意思相近。",
          examples: [
            {
              sentence: "🔹試験のために勉強しなければなりません。",
              translation: "为了考试必须学习。",
            },
            {
              sentence: "🔹明日、早く起きなければなりません。",
              translation: "明天必须早起。",
            },
          ],
        },
        {
          pattern: "105. ～てもいい（可以做～）",
          meaning: "表示允许做某事。",
          description: "📌 句型说明\n动词て形 + もいい\n用于表示许可。",
          examples: [
            {
              sentence: "🔹ここで休んでもいいです。",
              translation: "可以在这里休息。",
            },
            {
              sentence: "🔹この本を読んでもいいです。",
              translation: "可以读这本书。",
            },
          ],
        },
        {
          pattern: "106. ～なくてもいい（可以不做～）",
          meaning: "表示不做某事也没关系，没有义务。",
          description: "📌 句型说明\n动词ない形 + なくてもいい\n表示无需强制。",
          examples: [
            {
              sentence: "🔹今日、掃除しなくてもいいです。",
              translation: "今天可以不打扫。",
            },
            {
              sentence: "🔹急がなくてもいいですよ。",
              translation: "不用急也没关系。",
            },
          ],
        },
      ],
    },
  ],
};

export default N4AdvanceGrammarZhCN;