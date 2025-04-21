import { GrammarData } from "../../types/translation";

const n3AdvanceGrammarZhCN: GrammarData = {
  chapters: [
    {
      title: "动词复合与状态",
      sections: [
        {
          pattern: "51. ～ところ",
          meaning: "表示某动作或事件的时间点或状态",
          description: "📌 句型说明：\n动词普通形 + ところ\n用来表示正在做、即将做或刚做完某事。\n使用场景：描述动作的特定阶段，常带有时间上的精确感。",
          examples: [
            {
              sentence: "🔹 今、食事をするところです。",
              translation: "我正要吃饭。",
              analysis: "",
            },
            {
              sentence: "🔹 家に帰ったところです。",
              translation: "我刚回到家。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "52. ～ところだ",
          meaning: "强调某动作即将发生或刚刚完成",
          description: "📌 句型说明：\n动词普通形 + ところだ\n强调动作的时间点，常带有即时感。\n使用场景：突出动作即将开始或刚结束。",
          examples: [
            {
              sentence: "🔹 これから出かけるところだ。",
              translation: "我正要出门。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題を終えたところだ。",
              translation: "我刚做完作业。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "53. ～ばかり",
          meaning: "表示某动作刚刚完成，强调时间上的接近",
          description: "📌 句型说明：\n动词た形 + ばかり\n表示某事刚发生不久。\n使用场景：强调动作完成不久，常带「刚刚」的语气。",
          examples: [
            {
              sentence: "🔹 日本に来たばかりです。",
              translation: "我刚来日本。",
              analysis: "",
            },
            {
              sentence: "🔹 ご飯を食べたばかりだ。",
              translation: "我刚吃完饭。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "54. ～ばかりいる",
          meaning: "表示某人总是做某事，带有负面评价",
          description: "📌 句型说明：\n动词て形 + ばかりいる\n常用于批评某人反复做某事。\n使用场景：表达对某人行为的不满。",
          examples: [
            {
              sentence: "🔹 彼はゲームばかりしている。",
              translation: "他总是玩游戏。",
              analysis: "",
            },
            {
              sentence: "🔹 テレビばかり見ている。",
              translation: "总是看电视。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "55. ～だけ",
          meaning: "表示仅限于某事物或数量",
          description: "📌 句型说明：\n名词 / 动词普通形 + だけ\n表示「只有」或「仅仅」。\n使用场景：限定范围或数量。",
          examples: [
            {
              sentence: "🔹 水だけ飲みます。",
              translation: "我只喝水。",
              analysis: "",
            },
            {
              sentence: "🔹 一回だけ行った。",
              translation: "我只去了一次。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "56. ～だけで",
          meaning: "表示仅凭某条件即可达成",
          description: "📌 句型说明：\n动词て形 + だけで\n强调「仅靠…就够了」。\n使用场景：突出简单的条件即可完成某事。",
          examples: [
            {
              sentence: "🔹 このボタンを押すだけで、機械が動きます。",
              translation: "只要按这个按钮，机器就会动。",
              analysis: "句中「押す」为「押す」的て形，后接「だけで」，表示仅需按下按钮这一动作，无需其他条件，机器即可运作。",
            },
            {
              sentence: "🔹 お金だけで幸せになれない。",
              translation: "光靠钱不能变幸福。",
              analysis: "句中「お金だけで」表示仅靠金钱不足以达成幸福，暗含需要其他因素，带有否定语气。",
            },
          ],
        },
        {
          pattern: "57. ～しかない",
          meaning: "表示只有某事物，带有「别无他物」的语气",
          description: "📌 句型说明：\n名词 + しかない\n表示「只有…，没有其他的」。\n使用场景：强调有限的选择，常带遗憾或无奈。",
          examples: [
            {
              sentence: "🔹 ポケットにお金しかない。",
              translation: "口袋里只有钱。",
              analysis: "",
            },
            {
              sentence: "🔹 時間しかない。",
              translation: "只有时间。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "58. ～すぎる",
          meaning: "表示某事物的程度过高",
          description: "📌 句型说明：\n动词ます形去掉ます / い形容词去掉い / な形容词 + すぎる\n表示「太…」或「过于…」。\n使用场景：描述过度行为或状态，常带负面意味。",
          examples: [
            {
              sentence: "🔹 食べすぎると、太ります。",
              translation: "吃太多会变胖。",
              analysis: "句中「食べすぎる」为「食べる」的ます形去掉「ます」后加「すぎる」，表示过量饮食，后接「と」表示条件，说明结果是变胖。",
            },
            {
              sentence: "🔹 この服は派手すぎる。",
              translation: "这件衣服太花哨了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "59. ～やすい",
          meaning: "表示某动作或事情容易进行",
          description: "📌 句型说明：\n动词ます形去掉ます + やすい\n表示某事因简单或方便而容易达成。\n使用场景：描述易于完成的事物。",
          examples: [
            {
              sentence: "🔹 この本は読みやすいです。",
              translation: "这本书很好读。",
              analysis: "",
            },
            {
              sentence: "🔹 この靴は履きやすい。",
              translation: "这双鞋很好穿。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "60. ～にくい",
          meaning: "表示某动作或事情难以进行",
          description: "📌 句型说明：\n动词ます形去掉ます + にくい\n表示某事因困难而不易达成。\n使用场景：描述难以完成的事物。",
          examples: [
            {
              sentence: "🔹 この問題は解きにくい。",
              translation: "这个问题很难解。",
              analysis: "",
            },
            {
              sentence: "🔹 彼の字は読みにくい。",
              translation: "他的字很难读。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "61. ～がち",
          meaning: "表示某事有某种倾向，常带负面意味",
          description: "📌 句型说明：\n动词ます形去掉ます / 名词 + がち\n表示「容易…」或「常常…」。\n使用场景：批评某人或事的倾向。",
          examples: [
            {
              sentence: "🔹 彼は遅れがちだ。",
              translation: "他常常迟到。",
              analysis: "",
            },
            {
              sentence: "🔹 忙しくて、忘れがちです。",
              translation: "因为忙，常常忘记。",
              analysis: "句中「忘れがち」由「忘れる」的ます形去掉「ます」后加「がち」，表示因忙碌而有忘记的倾向，带有负面语气。",
            },
          ],
        },
        {
          pattern: "62. ～つづける",
          meaning: "表示某动作持续进行",
          description: "📌 句型说明：\n动词ます形去掉ます + つづける\n强调动作的连续性。\n使用场景：描述长期或连续的行为。",
          examples: [
            {
              sentence: "🔹 毎日、走りつづける。",
              translation: "每天持续跑步。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は話しつづけた。",
              translation: "他持续说话。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "63. ～かける",
          meaning: "表示某动作即将完成但未完成",
          description: "📌 句型说明：\n动词ます形去掉ます + かける\n表示「差点…」或「正在…中途」。\n使用场景：描述动作未完成或差点发生。",
          examples: [
            {
              sentence: "🔹 コップを落としかけた。",
              translation: "差点把杯子摔了。",
              analysis: "句中「落としかけた」由「落とす」的ます形去掉「ます」后加「かける」，表示杯子差点掉落但最终未摔，强调动作未完成。",
            },
            {
              sentence: "🔹 宿題をやりかけた。",
              translation: "作业做到一半。",
              analysis: "句中「やりかけた」由「やる」的ます形去掉「ます」后加「かける」，表示作业开始但未完成，停在中途。",
            },
          ],
        },
        {
          pattern: "64. ～きる",
          meaning: "表示某动作彻底完成",
          description: "📌 句型说明：\n动词ます形去掉ます + きる\n表示「完全…」或「全部…」。\n使用场景：强调动作彻底完成。",
          examples: [
            {
              sentence: "🔹 本を読みきった。",
              translation: "把书读完了。",
              analysis: "",
            },
            {
              sentence: "🔹 ケーキを食べきった。",
              translation: "把蛋糕全吃光了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "65. ～なおす",
          meaning: "表示重新做某事以修正",
          description: "📌 句型说明：\n动词ます形去掉ます + なおす\n表示「重新…」或「修正…」。\n使用场景：描述改正错误或重做。",
          examples: [
            {
              sentence: "🔹 間違えたので、書きなおした。",
              translation: "因为写错了，所以重写。",
              analysis: "句中「書きなおした」由「書く」的ます形去掉「ます」后加「なおす」，表示因错误而重新书写，强调修正行为。",
            },
            {
              sentence: "🔹 服を縫いなおした。",
              translation: "把衣服重新缝好。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "66. ～おわる",
          meaning: "表示某动作或事件结束",
          description: "📌 句型说明：\n动词ます形去掉ます + おわる\n表示「…结束」。\n使用场景：描述某事完成。",
          examples: [
            {
              sentence: "🔹 試験がやりおわった。",
              translation: "考试做完了。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事を終わりおわった。",
              translation: "工作结束了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "67. ～直す",
          meaning: "表示修复或改正某事物",
          description: "📌 句型说明：\n动词ます形去掉ます + 直す\n表示「修理…」或「改正…」。\n使用场景：描述修补或纠正。",
          examples: [
            {
              sentence: "🔹 壊れた時計を直した。",
              translation: "修好了坏掉的钟。",
              analysis: "",
            },
            {
              sentence: "🔹 間違えた部分を直した。",
              translation: "改正了错误的部分。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "68. ～直る",
          meaning: "表示某事物被修复或恢复",
          description: "📌 句型说明：\n动词ます形去掉ます + 直る\n表示「被修好」或「恢复」。\n使用场景：描述事物恢复正常。",
          examples: [
            {
              sentence: "🔹 壊れたパソコンが直った。",
              translation: "坏掉的电脑修好了。",
              analysis: "",
            },
            {
              sentence: "🔹 病気から直った。",
              translation: "病好了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "69. ～出す",
          meaning: "表示某动作突然开始或完成",
          description: "📌 句型说明：\n动词ます形去掉ます + 出す\n表示「突然…」或「完成…」。\n使用场景：描述动作的突发或开始。",
          examples: [
            {
              sentence: "🔹 急に走り出した。",
              translation: "突然跑起来。",
              analysis: "句中「走り出した」由「走る」的ます形去掉「ます」后加「出す」，表示跑步动作突然开始，强调突发性。",
            },
            {
              sentence: "🔹 宿題をやり出した。",
              translation: "开始做作业。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "70. ～入れる",
          meaning: "表示某动作涉及放入或加入",
          description: "📌 句型说明：\n动词ます形去掉ます + 入れる\n表示「放进…」或「加入…」。\n使用场景：描述放入或添加行为。",
          examples: [
            {
              sentence: "🔹 カバンに本を入れました。",
              translation: "把书放进包包里。",
              analysis: "",
            },
            {
              sentence: "🔹 スープに塩を入れた。",
              translation: "在汤里加了盐。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "动作与关系",
      sections: [
        {
          pattern: "71. ～抜く",
          meaning: "表示某动作完全通过或超越",
          description: "📌 句型说明：\n动词ます形去掉ます + 抜く\n表示「通过…」或「超越…」。\n使用场景：描述通过障碍或超越他人。",
          examples: [
            {
              sentence: "🔹 長いトンネルを抜けた。",
              translation: "穿过了长隧道。",
              analysis: "句中「抜けた」由「抜ける」的ます形去掉「ます」后加「抜く」，表示完全通过隧道，强调动作完成。",
            },
            {
              sentence: "🔹 彼はライバルを抜いた。",
              translation: "他超越了对手。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "72. ～込む",
          meaning: "表示某动作深入或挤进",
          description: "📌 句型说明：\n动词ます形去掉ます + 込む\n表示「深入…」或「挤进…」。\n使用场景：描述进入或拥挤的情景。",
          examples: [
            {
              sentence: "🔹 部屋に駆け込んだ。",
              translation: "冲进房间。",
              analysis: "",
            },
            {
              sentence: "🔹 電車が混み込んだ。",
              translation: "电车很拥挤。",
              analysis: "句中「混み込んだ」由「混む」的ます形去掉「ます」后加「込む」，表示电车内部因人多而变得拥挤，强调状态。",
            },
          ],
        },
        {
          pattern: "73. ～あげる",
          meaning: "表示给予某人某动作（对等或下级）",
          description: "📌 句型说明：\n动词て形 + あげる\n表示「帮…做…」或「给…」。\n使用场景：表达对等或下级的恩惠。",
          examples: [
            {
              sentence: "🔹 友達に本を貸してあげた。",
              translation: "借书给朋友。",
              analysis: "",
            },
            {
              sentence: "🔹 子供に宿題を教えてあげた。",
              translation: "帮小孩教作业。",
              analysis: "句中「教えてあげた」由「教える」的て形后加「あげる」，表示为小孩提供教导，强调说话者主动给予帮助。",
            },
          ],
        },
        {
          pattern: "74. ～くれる",
          meaning: "表示某人为说话者做某事（恩惠）",
          description: "📌 句型说明：\n动词て形 + くれる\n表示「为我…」或「给我…」。\n使用场景：表达他人对说话者的恩惠。",
          examples: [
            {
              sentence: "🔹 友達がケーキを分けてくれた。",
              translation: "朋友分给我蛋糕。",
              analysis: "",
            },
            {
              sentence: "🔹 彼が助けてくれた。",
              translation: "他帮了我。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "75. ～もらう",
          meaning: "表示说话者接受某人某动作",
          description: "📌 句型说明：\n动词て形 + もらう\n表示「请…帮我…」或「从…得到…」。\n使用场景：表达接受他人的行为或物品。",
          examples: [
            {
              sentence: "🔹 先生に質問を教えてもらった。",
              translation: "请老师帮我解答问题。",
              analysis: "句中「教えてもらった」由「教える」的て形后加「もらう」，表示说话者接受老师的教导，强调接受恩惠。",
            },
            {
              sentence: "🔹 友達にお菓子をもらった。",
              translation: "从朋友那得到点心。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "76. ～ていく",
          meaning: "表示某动作或状态逐渐远离或持续进行",
          description: "📌 句型说明：\n动词て形 + いく\n表示「…而去」或「逐渐…」。\n使用场景：描述动作方向或状态延续。",
          examples: [
            {
              sentence: "🔹 時間が過ぎていく。",
              translation: "时间逐渐过去。",
              analysis: "",
            },
            {
              sentence: "🔹 走っていく。",
              translation: "跑远了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "77. ～てくる",
          meaning: "表示某动作或状态逐渐接近或开始",
          description: "📌 句型说明：\n动词て形 + くる\n表示「…而来」或「逐渐…」。\n使用场景：描述动作接近或状态开始。",
          examples: [
            {
              sentence: "🔹 天気が暖かくなってきた。",
              translation: "天气逐渐暖和起来。",
              analysis: "句中「なってきた」由「なる」的て形后加「くる」，表示天气从过去到现在逐渐变暖，强调变化的过程。",
            },
            {
              sentence: "🔹 友達が走ってきた。",
              translation: "朋友跑过来了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "78. ～とおり",
          meaning: "表示按照某方式或内容进行",
          description: "📌 句型说明：\n动词普通形 / 名词 + とおり\n表示「按照…」或「如…所述」。\n使用场景：描述遵循某指示或模式。",
          examples: [
            {
              sentence: "🔹 先生の言ったとおりにした。",
              translation: "按照老师说的去做。",
              analysis: "句中「言ったとおり」由「言う」的た形后加「とおり」，表示完全按照老师的指示行动，强调遵循性。",
            },
            {
              sentence: "🔹 予定のとおり進んだ。",
              translation: "按照计划进行。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "79. ～どおり",
          meaning: "表示完全按照某方式或内容",
          description: "📌 句型说明：\n名词 + どおり\n表示「完全按照…」或「正如…」。\n使用场景：强调完全符合某标准。",
          examples: [
            {
              sentence: "🔹 マニュアルどおりに作った。",
              translation: "完全按照说明书制作。",
              analysis: "",
            },
            {
              sentence: "🔹 計画どおりに終わった。",
              translation: "正如计划结束。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "80. ～ないで",
          meaning: "表示不做某动作而进行另一动作",
          description: "📌 句型说明：\n动词ない形 + で\n表示「不…而…」。\n使用场景：描述省略某动作的情况。",
          examples: [
            {
              sentence: "🔹 靴を脱がないで入った。",
              translation: "没脱鞋就进去了。",
              analysis: "句中「脱がないで」由「脱ぐ」的ない形后加「で」，表示未脱鞋直接进入，强调省略脱鞋动作。",
            },
            {
              sentence: "🔹 何も言わないで帰った。",
              translation: "什么也没说就走了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "81. ～ずに",
          meaning: "表示不做某动作而进行另一动作（书面语）",
          description: "📌 句型说明：\n动词ない形去掉ない + ずに\n表示「不…而…」，较正式。\n使用场景：书面或正式场合描述省略动作。",
          examples: [
            {
              sentence: "🔹 朝ごはんを食べずに学校に行った。",
              translation: "没吃早餐就去学校了。",
              analysis: "句中「食べずに」由「食べる」的ない形去掉「ない」后加「ずに」，表示未吃早餐直接上学，语气较正式。",
            },
            {
              sentence: "🔹 許可を得ずに使った。",
              translation: "未经许可就用了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "82. ～まま",
          meaning: "表示某状态保持不变",
          description: "📌 句型说明：\n动词た形 / 名词 + まま\n表示「保持…状态」。\n使用场景：描述未改变的状态。",
          examples: [
            {
              sentence: "🔹 ドアを開けたまま寝た。",
              translation: "开着门睡觉了。",
              analysis: "句中「開けたまま」由「開ける」的た形后加「まま」，表示门保持开着状态未关，强调持续性。",
            },
            {
              sentence: "🔹 服を着たまま泳いだ。",
              translation: "穿着衣服游泳了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "83. ～っぱなし",
          meaning: "表示某状态持续未改变，带有负面意味",
          description: "📌 句型说明：\n动词ます形去掉ます + っぱなし\n表示「一直…」或「没关/没停」。\n使用场景：批评未改变的状态。",
          examples: [
            {
              sentence: "🔹 テレビをつけっぱなしにした。",
              translation: "电视一直开着。",
              analysis: "句中「つけっぱなし」由「つける」的ます形去掉「ます」后加「っぱなし」，表示电视未关一直开着，带有疏忽的负面语气。",
            },
            {
              sentence: "🔹 窓を開けっぱなしにした。",
              translation: "窗户一直开着。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "条件与表达",
      sections: [
        {
          pattern: "84. ～限り",
          meaning: "表示某范围或条件下的极限",
          description: "📌 句型说明：\n动词普通形 / 名词 + 限り\n表示「在…范围内」或「只要…」。\n使用场景：限定条件或范围。",
          examples: [
            {
              sentence: "🔹 私の知る限り、彼は来ない。",
              translation: "据我所知，他不会来。",
              analysis: "句中「知る限り」由「知る」后加「限り」，表示在说话者知识范围内判断，强调有限的认知。",
            },
            {
              sentence: "🔹 時間の限り勉強する。",
              translation: "在时间范围内学习。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "85. ～かわりに",
          meaning: "表示某事物代替另一事物",
          description: "📌 句型说明：\n动词普通形 / 名词 + かわりに\n表示「代替…」或「作为…的交换」。\n使用场景：描述替代行为。",
          examples: [
            {
              sentence: "🔹 彼の代わりに私がやった。",
              translation: "我代替他做了。",
              analysis: "",
            },
            {
              sentence: "🔹 お金のかわりに物を使った。",
              translation: "用东西代替钱。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "86. ～代わりに",
          meaning: "表示某事物作为另一事物的代替",
          description: "📌 句型说明：\n名词 + 代わりに\n表示「代替…」或「与…交换」。\n使用场景：强调替代物。",
          examples: [
            {
              sentence: "🔹 コーヒーの代わりに紅茶を飲んだ。",
              translation: "喝红茶代替咖啡。",
              analysis: "",
            },
            {
              sentence: "🔹 車の代わりに自転車を使った。",
              translation: "用自行车代替车。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "87. ～に対して",
          meaning: "表示某动作或态度的对象",
          description: "📌 句型说明：\n名词 + に対して\n表示「对…」或「针对…」。\n使用场景：描述动作的对象。",
          examples: [
            {
              sentence: "🔹 彼に対して怒っている。",
              translation: "我对他生气。",
              analysis: "",
            },
            {
              sentence: "🔹 問題に対して意見を述べた。",
              translation: "针对问题发表意见。",
              analysis: "句中「に対して」表示动作「述べた」（发表）的对象是「問題」，强调针对特定议题。",
            },
          ],
        },
        {
          pattern: "88. ～に関して",
          meaning: "表示某话题或内容的范围",
          description: "📌 句型说明：\n名词 + に関して\n表示「关于…」或「涉及…」。\n使用场景：讨论特定主题。",
          examples: [
            {
              sentence: "🔹 環境問題に関して話した。",
              translation: "谈论环境问题。",
              analysis: "",
            },
            {
              sentence: "🔹 新しい計画に関して質問がある。",
              translation: "关于新计划有问题。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "89. ～について",
          meaning: "表示某话题或主题",
          description: "📌 句型说明：\n名词 + について\n表示「关于…」或「对于…」。\n使用场景：表达讨论或思考的主题。",
          examples: [
            {
              sentence: "🔹 日本の文化について話したい。",
              translation: "我想谈谈日本文化。",
              analysis: "",
            },
            {
              sentence: "🔹 試験について考えている。",
              translation: "我在想考试的事。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "90. ～に応じて",
          meaning: "表示根据某条件或情况采取行动",
          description: "📌 句型说明：\n名词 + に応じて\n表示「根据…」或「随着…」。\n使用场景：描述因应情况的行为。",
          examples: [
            {
              sentence: "🔹 状況に応じて対応します。",
              translation: "根据情况应对。",
              analysis: "句中「状況に応じて」表示根据「状況」（状况）的不同，采取相应的「対応」（应对措施），强调灵活性。",
            },
            {
              sentence: "🔹 天気に応じて服を選ぶ。",
              translation: "根据天气选衣服。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "91. ～に基づいて",
          meaning: "表示某事物以某基础进行",
          description: "📌 句型说明：\n名词 + に基づいて\n表示「基于…」或「根据…」。\n使用场景：描述依据或基础。",
          examples: [
            {
              sentence: "🔹 調査に基づいて結論を出した。",
              translation: "基于调查得出结论。",
              analysis: "句中「調査に基づいて」表示结论的得出是以「調査」（调查）为基础，强调依据的可靠性。",
            },
            {
              sentence: "🔹 ルールに基づいて行動する。",
              translation: "根据规则行动。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "92. ～を問わず",
          meaning: "表示不论某条件如何",
          description: "📌 句型说明：\n名词 + を問わず\n表示「无论…」或「不管…」。\n使用场景：描述无条件的情况。",
          examples: [
            {
              sentence: "🔹 年齢を問わず参加できます。",
              translation: "无论年龄都可以参加。",
              analysis: "句中「年齢を問わず」表示参与活动不考虑「年齢」（年龄）限制，强调无条件性。",
            },
            {
              sentence: "🔹 時間を問わず連絡してください。",
              translation: "不管什么时间都可以联系。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "93. ～にかけて",
          meaning: "表示某范围或期间的持续",
          description: "📌 句型说明：\n名词 + にかけて\n表示「从…到…」或「遍及…」。\n使用场景：描述时间或空间范围。",
          examples: [
            {
              sentence: "🔹 夏にかけて暑くなる。",
              translation: "到了夏天会变热。",
              analysis: "",
            },
            {
              sentence: "🔹 全国にかけて雨が降る。",
              translation: "全国都会下雨。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "94. ～に沿って",
          meaning: "表示按照某路线或方针进行",
          description: "📌 句型说明：\n名词 + に沿って\n表示「沿着…」或「按照…」。\n使用场景：描述遵循路线或规则。",
          examples: [
            {
              sentence: "🔹 川に沿って歩いた。",
              translation: "沿着河走。",
              analysis: "",
            },
            {
              sentence: "🔹 規則に沿って進める。",
              translation: "按照规则进行。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "95. ～につれて",
          meaning: "表示随着某事物的变化而变化",
          description: "📌 句型说明：\n动词普通形 / 名词 + につれて\n表示「随着…」或「伴随…」。\n使用场景：描述联动的变化。",
          examples: [
            {
              sentence: "🔹 年を取るにつれて、体力が落ちる。",
              translation: "随着年龄增长，体力下降。",
              analysis: "句中「年を取るにつれて」表示随着「年を取る」（年龄增长），「体力」（体力）随之「落ちる」（下降），强调因果变化。",
            },
            {
              sentence: "🔹 夜になるにつれて、寒くなる。",
              translation: "随着夜晚到来，变冷了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "96. ～とともに",
          meaning: "表示某事物与另一事物同时发生",
          description: "📌 句型说明：\n动词普通形 / 名词 + とともに\n表示「与…一起」或「伴随…」。\n使用场景：描述同时性。",
          examples: [
            {
              sentence: "🔹 技術の進歩とともに、生活が変わった。",
              translation: "随着技术进步，生活改变了。",
              analysis: "句中「技術の進歩とともに」表示「技術の進歩」（技术进步）与「生活が変わった」（生活改变）同时发生，强调联动关系。",
            },
            {
              sentence: "🔹 友達とともに旅行した。",
              translation: "和朋友一起旅行。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "97. ～わけだ",
          meaning: "表示某结论或理由的推断",
          description: "📌 句型说明：\n动词普通形 / い形容词 / な形容词 + わけだ\n表示「难怪…」或「这就是…的原因」。\n使用场景：解释原因或结论。",
          examples: [
            {
              sentence: "🔹 毎日練習したから、上手になったわけだ。",
              translation: "每天练习，难怪变厉害了。",
              analysis: "句中「練習したから、上手になったわけだ」表示因「毎日練習した」（每天练习），得出「上手になった」（变厉害）的结论，「わけだ」强调这是原因。",
            },
            {
              sentence: "🔹 忙しいわけだ。",
              translation: "这就是忙的原因。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "98. ～わけにはいかない",
          meaning: "表示因为某理由不能做某事",
          description: "📌 句型说明：\n动词普通形 + わけにはいかない\n表示「不能…」或「不得不…」。\n使用场景：表达义务或限制。",
          examples: [
            {
              sentence: "🔹 約束したから、行かないわけにはいかない。",
              translation: "既然答应了，就不能不去。",
              analysis: "句中「行かないわけにはいかない」由「行かない」后加「わけにはいかない」，表示因「約束した」（答应了），不能不履行，强调义务。",
            },
            {
              sentence: "🔹 友達の頼みだから、断るわけにはいかない。",
              translation: "因为是朋友的请求，不能拒绝。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "99. ～ことになる",
          meaning: "表示某事被决定或自然形成",
          description: "📌 句型说明：\n动词普通形 + ことになる\n表示「决定…」或「结果是…」。\n使用场景：描述客观决定或结果。",
          examples: [
            {
              sentence: "🔹 来週、海外に行くことになった。",
              translation: "决定下周去海外。",
              analysis: "句中「行くことになった」由「行く」后加「ことになる」，表示去海外的决定已形成，强调客观结果。",
            },
            {
              sentence: "🔹 会議が中止になったことになる。",
              translation: "会议取消了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "100. ～ことにする",
          meaning: "表示说话者主观决定某事",
          description: "📌 句型说明：\n动词普通形 + ことにする\n表示「我决定…」或「打算…」。\n使用场景：表达主观意愿。",
          examples: [
            {
              sentence: "🔹 今日から早く寝ることにする。",
              translation: "我决定从今天开始早睡。",
              analysis: "",
            },
            {
              sentence: "🔹 彼の意見に従うことにした。",
              translation: "我决定听他的意见。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "101. ～ことだ",
          meaning: "表示建议或希望某事发生",
          description: "📌 句型说明：\n动词普通形 + ことだ\n表示「最好…」或「希望…」。\n使用场景：提出建议或期望。",
          examples: [
            {
              sentence: "🔹 もっと勉強することだ。",
              translation: "最好多学习。",
              analysis: "",
            },
            {
              sentence: "🔹 早く寝ることだ。",
              translation: "希望你早点睡。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "102. ～つもり",
          meaning: "表示说话者的意图或计划",
          description: "📌 句型说明：\n动词普通形 + つもり\n表示「打算…」或「计划…」。\n使用场景：表达个人计划。",
          examples: [
            {
              sentence: "🔹 夏に旅行するつもりです。",
              translation: "我打算夏天去旅行。",
              analysis: "",
            },
            {
              sentence: "🔹 もう帰るつもりはない。",
              translation: "我没打算回去。",
              analysis: "句中「帰るつもりはない」由「帰る」后加「つもり」并否定，表示说话者无意回归，强调主观意愿。",
            },
          ],
        },
        {
          pattern: "103. ～予定だ",
          meaning: "表示某事的预定计划",
          description: "📌 句型说明：\n动词普通形 + 予定だ\n表示「计划…」或「预定…」。\n使用场景：描述未来安排。",
          examples: [
            {
              sentence: "🔹 来週、友達に会う予定だ。",
              translation: "预定下周见朋友。",
              analysis: "",
            },
            {
              sentence: "🔹 新しい車を買う予定だ。",
              translation: "计划买新车。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "104. ～らしい（推測）",
          meaning: "表示根据某证据推测某事",
          description: "📌 句型说明：\n动词普通形 / い形容词 / な形容词 + らしい\n表示「好像…」或「似乎…」。\n使用场景：根据间接证据推测。",
          examples: [
            {
              sentence: "🔹 彼は忙しいらしい。",
              translation: "他好像很忙。",
              analysis: "",
            },
            {
              sentence: "🔹 この店は安いらしい。",
              translation: "这家店似乎很便宜。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "105. ～はずだ",
          meaning: "表示根据某理由应当如此",
          description: "📌 句型说明：\n动词普通形 / い形容词 / な形容词 + はずだ\n表示「应该…」或「按理说…」。\n使用场景：表达合理预期。",
          examples: [
            {
              sentence: "🔹 彼はもう来たはずだ。",
              translation: "他应该已经来了。",
              analysis: "句中「来たはずだ」由「来る」后加「はずだ」，表示根据某理由（例如约定时间）推测他已到达，强调合理性。",
            },
            {
              sentence: "🔹 この問題は簡単なはずだ。",
              translation: "这个问题应该很简单。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "106. ～ようがない",
          meaning: "表示某事无法做到",
          description: "📌 句型说明：\n动词普通形 + ようがない\n表示「没办法…」或「无法…」。\n使用场景：表达无能为力。",
          examples: [
            {
              sentence: "🔹 時間がないから、行くようがない。",
              translation: "因为没时间，没办法去。",
              analysis: "句中「行くようがない」由「行く」后加「ようがない」，表示因「時間がない」（没时间）而无法前往，强调限制。",
            },
            {
              sentence: "🔹 説明のしようがない。",
              translation: "无法解释。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "107. ～ように見える",
          meaning: "表示某事看起来像是某状态",
          description: "📌 句型说明：\n动词普通形 / い形容词 / な形容词 + ように見える\n表示「看起来像…」。\n使用场景：描述外观印象。",
          examples: [
            {
              sentence: "🔹 彼は幸せそうに見える。",
              translation: "他看起来很幸福。",
              analysis: "",
            },
            {
              sentence: "🔹 空が暗そうに見える。",
              translation: "天空看起来很暗。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "108. ～ように思える",
          meaning: "表示某事给人某种感觉",
          description: "📌 句型说明：\n动词普通形 / い形容词 / な形容词 + ように思える\n表示「感觉像…」。\n使用场景：描述主观感受。",
          examples: [
            {
              sentence: "🔹 彼は親切そうに思える。",
              translation: "他感觉很亲切。",
              analysis: "",
            },
            {
              sentence: "🔹 この仕事は難しそうに思える。",
              translation: "这份工作感觉很难。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "109. ～上で",
          meaning: "表示在某条件或阶段之后",
          description: "📌 句型说明：\n动词た形 / 名词 + 上で\n表示「在…之后」或「在…基础上」。\n使用场景：描述前置条件。",
          examples: [
            {
              sentence: "🔹 話し合った上で、決めました。",
              translation: "在讨论后决定了。",
              analysis: "句中「話し合った上で」由「話し合う」的た形后加「上で」，表示在「話し合った」（讨论）完成后才「決めました」（决定），强调前置条件。",
            },
            {
              sentence: "🔹 調査の上で、報告します。",
              translation: "在调查后报告。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "110. ～を通じて",
          meaning: "表示通过某媒介或期间",
          description: "📌 句型说明：\n名词 + を通じて\n表示「通过…」或「经由…」。\n使用场景：描述媒介或时间跨度。",
          examples: [
            {
              sentence: "🔹 友達を通じて知り合った。",
              translation: "通过朋友认识的。",
              analysis: "",
            },
            {
              sentence: "🔹 一年を通じて暖かい。",
              translation: "全年都很温暖。",
              analysis: "句中「一年を通じて」表示在「一年」的整个时间范围内，气候保持「暖かい」（温暖），强调持续性。",
            },
          ],
        },
        {
          pattern: "111. ～にわたって",
          meaning: "表示某事持续某范围或时间",
          description: "📌 句型说明：\n名词 + にわたって\n表示「遍及…」或「持续…」。\n使用场景：描述长时间或广范围。",
          examples: [
            {
              sentence: "🔹 三日間にわたって会議をした。",
              translation: "连续三天开会。",
              analysis: "句中「三日間にわたって」表示会议持续「三日間」（三天），强调时间跨度。",
            },
            {
              sentence: "🔹 全国にわたって有名だ。",
              translation: "全国闻名。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "112. ～をきっかけに",
          meaning: "表示以某事为契机开始",
          description: "📌 句型说明：\n名词 + をきっかけに\n表示「以…为契机」或「因为…而…」。\n使用场景：描述事件的起因。",
          examples: [
            {
              sentence: "🔹 旅行をきっかけに、日本語を勉強した。",
              translation: "因为旅行开始学日语。",
              analysis: "句中「旅行をきっかけに」表示「旅行」作为契机，促使「日本語を勉強した」（学习日语），强调因果关系。",
            },
            {
              sentence: "🔹 彼の言葉をきっかけに、考えが変わった。",
              translation: "因为他的话改变了想法。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "113. ～をもとに",
          meaning: "表示以某事物为基础",
          description: "📌 句型说明：\n名词 + をもとに\n表示「以…为基础」或「根据…」。\n使用场景：描述依据来源。",
          examples: [
            {
              sentence: "🔹 データをもとに計画を作った。",
              translation: "根据数据制定计划。",
              analysis: "句中「データをもとに」表示计划的制定以「データ」（数据）为基础，强调依据的具体性。",
            },
            {
              sentence: "🔹 本をもとに映画を作った。",
              translation: "根据书拍了电影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "114. ～を除いて",
          meaning: "表示排除某事物",
          description: "📌 句型说明：\n名词 + を除いて\n表示「除了…」或「排除…」。\n使用场景：描述例外情况。",
          examples: [
            {
              sentence: "🔹 彼を除いて、皆来た。",
              translation: "除了他，大家都来了。",
              analysis: "",
            },
            {
              sentence: "🔹 日曜日を除いて、毎日働く。",
              translation: "除了星期天，每天都工作。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "115. ～に加えて",
          meaning: "表示某事物附加于另一事物",
          description: "📌 句型说明：\n名词 + に加えて\n表示「除了…还…」或「加上…」。\n使用场景：描述附加内容。",
          examples: [
            {
              sentence: "🔹 勉強に加えて、運動もする。",
              translation: "除了学习还运动。",
              analysis: "",
            },
            {
              sentence: "🔹 本に加えて、ノートも買った。",
              translation: "除了书还买了笔记本。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "116. ～をめぐって",
          meaning: "表示围绕某事物进行争论或行动",
          description: "📌 句型说明：\n名词 + をめぐって\n表示「围绕…」或「关于…的争论」。\n使用场景：描述争议或焦点。",
          examples: [
            {
              sentence: "🔹 遺産をめぐって争った。",
              translation: "围绕遗产争执。",
              analysis: "句中「遺産をめぐって」表示争执的焦点是「遺産」（遗产），强调围绕某事物的冲突。",
            },
            {
              sentence: "🔹 計画をめぐって話し合った。",
              translation: "关于计划进行讨论。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "117. ～向き",
          meaning: "表示某事物适合某对象或用途",
          description: "📌 句型说明：\n名词 + 向き\n表示「适合…」或「面向…」。\n使用场景：描述适宜性。",
          examples: [
            {
              sentence: "🔹 この本は初心者向きだ。",
              translation: "这本书适合初学者。",
              analysis: "",
            },
            {
              sentence: "🔹 子供向きの映画だ。",
              translation: "这是面向小孩的电影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "118. ～次第",
          meaning: "表示某事取决于另一事",
          description: "📌 句型说明：\n动词普通形 / 名词 + 次第\n表示「取决于…」或「一旦…就…」。\n使用场景：描述依赖或顺序。",
          examples: [
            {
              sentence: "🔹 天気次第で決めます。",
              translation: "取决于天气决定。",
              analysis: "",
            },
            {
              sentence: "🔹 準備が終わり次第、始めます。",
              translation: "一旦准备好就开始。",
              analysis: "句中「終わり次第」由「終わる」后加「次第」，表示一旦「準備」（准备工作）完成，立即「始めます」（开始），强调顺序性。",
            },
          ],
        },
        {
          pattern: "119. ～と同時に",
          meaning: "表示某事与另一事同时发生",
          description: "📌 句型说明：\n动词普通形 / 名词 + と同時に\n表示「与…同时」或「一边…一边…」。\n使用场景：描述同时性。",
          examples: [
            {
              sentence: "🔹 ドアを開けると同時に、電話が鳴った。",
              translation: "开门的同时，电话响了。",
              analysis: "句中「開けると同時に」由「開ける」后加「と同時に」，表示「开门」与「電話が鳴った」（电话响起）同时发生，强调时间重叠。",
            },
            {
              sentence: "🔹 仕事が終わると同時に、帰った。",
              translation: "工作一结束就回去了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "120. ～たびに",
          meaning: "表示每次某事发生时，另一事随之发生",
          description: "📌 句型说明：\n动词た形 / 名词 + たびに\n表示「每次…时」或「一…就…」。\n使用场景：描述重复的联动事件。",
          examples: [
            {
              sentence: "🔹 彼に会うたびに、緊張する。",
              translation: "每次见他都紧张。",
              analysis: "句中「会うたびに」由「会う」的た形后加「たびに」，表示每次「会う」（见他）时，说话者都会「緊張する」（紧张），强调重复性。",
            },
            {
              sentence: "🔹 雨が降るたびに、傘を忘れる。",
              translation: "每次下雨都忘带伞。",
              analysis: "",
            },
          ],
        },
      ],
    },
  ],
};

export default n3AdvanceGrammarZhCN;