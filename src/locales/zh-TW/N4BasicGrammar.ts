import { GrammarData } from "../../types/translation";

const n4BasicGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: "建議與命令",
      sections: [
        {
          pattern: "1. 動詞（た形）＋ほうがいい（最好～）",
          meaning: "建議最好做某事",
          description: "📌 句型說明：\n「〜たほうがいい」用來表示建議，意思是「最好做某事」，帶有輕微的忠告意味。\n使用場景：提供建議或提醒。",
          examples: [
            {
              sentence: "🔹 早く寝たほうがいいです。",
              translation: "最好早點睡。",
              analysis: "",
            },
            {
              sentence: "🔹 もっと勉強したほうがいいですよ。",
              translation: "你最好多學習一點哦。",
              analysis: "",
            },
            {
              sentence: "🔹 傘を持ったほうがいいです。",
              translation: "最好帶傘。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "2. 動詞（ない形）＋ほうがいい（最好不要～）",
          meaning: "建議最好不要做某事",
          description: "📌 句型說明：\n「〜ないほうがいい」用來表示建議，意思是「最好不要做某事」，帶有警告或勸阻的語氣。\n使用場景：勸阻或警告。",
          examples: [
            {
              sentence: "🔹 タバコを吸わないほうがいいです。",
              translation: "最好不要抽菸。",
              analysis: "",
            },
            {
              sentence: "🔹 夜遅くまで起きていないほうがいいですよ。",
              translation: "最好不要熬夜到太晚哦。",
              analysis: "句中「起きていない」為「起きる」的ない形，後接「ほうがいい」，表示建議避免熬夜，語氣親切帶提醒。",
            },
            {
              sentence: "🔹 そんなことを言わないほうがいい。",
              translation: "最好不要說那樣的話。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "3. 動詞（ます形，去ます）＋なさい（請做～）",
          meaning: "命令或指示做某事",
          description: "📌 句型說明：\n「〜なさい」是用來表示命令或指示的句型，通常由上位者（例如父母、老師）對下位者（例如孩子、學生）使用，帶有強烈的要求語氣。\n使用場景：正式或權威性指示。",
          examples: [
            {
              sentence: "🔹 宿題を終わりなさい。",
              translation: "請把作業做完。",
              analysis: "",
            },
            {
              sentence: "🔹 早く起きなさい。",
              translation: "請早點起床。",
              analysis: "",
            },
            {
              sentence: "🔹 ここに座りなさい。",
              translation: "請坐在這裡。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "4. 動詞（辭書形）＋べきだ（應該～）",
          meaning: "表示應該做的義務或責任",
          description: "📌 句型說明：\n「〜べきだ」表示義務或責任，意思是「應該做某事」，常用於表達道德上或社會規範上的建議。\n使用場景：強調責任或規範。",
          examples: [
            {
              sentence: "🔹 学生は毎日勉強するべきです。",
              translation: "學生應該每天學習。",
              analysis: "",
            },
            {
              sentence: "🔹 約束を守るべきだ。",
              translation: "應該遵守承諾。",
              analysis: "",
            },
            {
              sentence: "🔹 環境を大切にするべきです。",
              translation: "應該珍惜環境。",
              analysis: "句中「大切にする」為「大切にする」的辭書形，後接「べきだ」，表示珍惜環境是社會責任，帶有規範性語氣。",
            },
          ],
        },
      ],
    },
    {
      title: "意圖與計劃",
      sections: [
        {
          pattern: "5. 動詞（辭書形）＋つもり（打算～）",
          meaning: "表示主觀的意圖或計劃",
          description: "📌 句型說明：\n「〜つもり」表示主觀的意圖或計劃，意思是「我打算做某事」。\n使用場景：表達個人計劃或決心。",
          examples: [
            {
              sentence: "🔹 明日、日本へ行くつもりです。",
              translation: "我打算明天去日本。",
              analysis: "",
            },
            {
              sentence: "🔹 今晩、映画を見るつもりです。",
              translation: "我打算今晚看電影。",
              analysis: "",
            },
            {
              sentence: "🔹 来年、大学に入るつもりです。",
              translation: "我打算明年上大學。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "6. 動詞（意向形）＋と思う（想～）",
          meaning: "表示個人的意願或計劃",
          description: "📌 句型說明：\n「〜うと思う」表示個人的意願或計劃，意思是「我想做某事」，比「つもり」更輕鬆。\n使用場景：表達較隨意的意願。",
          examples: [
            {
              sentence: "🔹 週末に旅行に行こうと思います。",
              translation: "我想週末去旅行。",
              analysis: "句中「行こう」為「行く」的意向形，後接「と思う」，表示說話者對週末旅行的輕鬆計劃，語氣較隨意。",
            },
            {
              sentence: "🔹 新しい服を買おうと思っています。",
              translation: "我想買新衣服。",
              analysis: "",
            },
            {
              sentence: "🔹 日本語をもっと勉強しようと思います。",
              translation: "我想多學點日語。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "7. 名詞／動詞（辭書形）＋予定だ（預定～）",
          meaning: "表示已安排的計劃",
          description: "📌 句型說明：\n「〜予定だ」表示已經安排好的計劃，意思是「預定要做某事」，比「つもり」更正式。\n使用場景：描述具體安排。",
          examples: [
            {
              sentence: "🔹 明日の会議は10時からの予定です。",
              translation: "明天的會議預定從10點開始。",
              analysis: "",
            },
            {
              sentence: "🔹 来週、友達と会う予定です。",
              translation: "我預定下週和朋友見面。",
              analysis: "",
            },
            {
              sentence: "🔹 夏休みに旅行する予定だ。",
              translation: "預定暑假去旅行。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "能力與變化",
      sections: [
        {
          pattern: "8. 動詞（辭書形）＋ようになる（變得會～）",
          meaning: "表示能力或狀態的變化",
          description: "📌 句型說明：\n「〜ようになる」表示能力或狀態的變化，意思是「變得會做某事」或「變成某狀態」。\n使用場景：描述進步或改變。",
          examples: [
            {
              sentence: "🔹 日本語を話せるようになりました。",
              translation: "我變得會說日語了。",
              analysis: "",
            },
            {
              sentence: "🔹 毎日運動するようになりました。",
              translation: "我變得每天都運動了。",
              analysis: "句中「運動する」為辭書形，後接「ようになる」，表示從過去不運動到現在養成每天運動的習慣，強調狀態變化。",
            },
            {
              sentence: "🔹 朝早く起きるようになりました。",
              translation: "我變得早上能早起了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "9. 動詞（辭書形）＋ことができる（能夠～）",
          meaning: "表示具備某種能力",
          description: "📌 句型說明：\n「〜ことができる」表示具備某種能力，意思是「能夠做某事」，比 N5 的「できます」更正式。\n使用場景：正式表達能力。",
          examples: [
            {
              sentence: "🔹 ピアノを弾くことができます。",
              translation: "我能夠彈鋼琴。",
              analysis: "",
            },
            {
              sentence: "🔹 英語を話すことができます。",
              translation: "我能夠說英語。",
              analysis: "",
            },
            {
              sentence: "🔹 車を運転することができます。",
              translation: "我能夠開車。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "10. 動詞（辭書形）＋なくなる（變得沒有～）",
          meaning: "表示某狀態或東西消失",
          description: "📌 句型說明：\n「〜なくなる」表示某種狀態或東西消失，意思是「變得沒有某物」或「不再做某事」。\n使用場景：描述消失或終止。",
          examples: [
            {
              sentence: "🔹 お金がなくなりました。",
              translation: "錢變得沒有了。",
              analysis: "",
            },
            {
              sentence: "🔹 疲れがなくなった。",
              translation: "疲勞消失了。",
              analysis: "",
            },
            {
              sentence: "🔹 雨が降らなくなりました。",
              translation: "雨不再下了。",
              analysis: "句中「降らなく」為「降る」的否定形，後接「なった」，表示雨從過去的降雨狀態變為不再降雨，強調狀態終止。",
            },
          ],
        },
      ],
    },
    {
      title: "經驗與習慣",
      sections: [
        {
          pattern: "11. 動詞（た形）＋ことがある（曾經～）",
          meaning: "表示過去的經驗",
          description: "📌 句型說明：\n「〜ことがある」表示過去的經驗，意思是「曾經做過某事」。\n使用場景：分享個人經歷。",
          examples: [
            {
              sentence: "🔹 日本へ行ったことがあります。",
              translation: "我曾經去過日本。",
              analysis: "",
            },
            {
              sentence: "🔹 寿司を食べたことがあります。",
              translation: "我曾經吃過壽司。",
              analysis: "",
            },
            {
              sentence: "🔹 地震を経験したことがあります。",
              translation: "我曾經經歷過地震。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "12. 動詞（辭書形）＋ことにしている（決定要～）",
          meaning: "表示個人的習慣或決定",
          description: "📌 句型說明：\n「〜ことにしている」表示個人的習慣或決定，意思是「我決定要這樣做」。\n使用場景：表達個人原則或習慣。",
          examples: [
            {
              sentence: "🔹 毎朝6時に起きることにしています。",
              translation: "我決定每天早上6點起床。",
              analysis: "",
            },
            {
              sentence: "🔹 週末は運動することにしています。",
              translation: "我決定週末要運動。",
              analysis: "",
            },
            {
              sentence: "🔹 タバコを吸わないことにしています。",
              translation: "我決定不抽菸。",
              analysis: "句中「吸わない」為「吸う」的否定辭書形，後接「ことにしています」，表示說話者主動決定戒菸，強調個人原則。",
            },
          ],
        },
        {
          pattern: "13. 動詞（辭書形）＋ことになっている（規定要～）",
          meaning: "表示客觀的規定或安排",
          description: "📌 句型說明：\n「〜ことになっている」表示客觀的規定或安排，意思是「按照規定要做某事」。\n使用場景：描述規則或安排。",
          examples: [
            {
              sentence: "🔹 会議は10時から始まることになっています。",
              translation: "會議規定從10點開始。",
              analysis: "",
            },
            {
              sentence: "🔹 学生は制服を着ることになっています。",
              translation: "學生規定要穿制服。",
              analysis: "句中「着る」為辭書形，後接「ことになっています」，表示穿制服是學校的客觀規定，強調制度性。",
            },
            {
              sentence: "🔹 このビルでは喫煙しないことになっています。",
              translation: "這棟大樓規定不能抽菸。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "推測與不確定",
      sections: [
        {
          pattern: "14. 動詞（辭書形／ない形）＋かもしれない（可能～）",
          meaning: "表示對某事的不確定性",
          description: "📌 句型說明：\n「〜かもしれない」表示對某事的不確定性，意思是「可能會發生某事」。\n使用場景：表達不確定的猜測。",
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
            {
              sentence: "🔹 このケーキはおいしいかもしれません。",
              translation: "這個蛋糕可能很好吃。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "15. 動詞（辭書形）／い形容詞／な形容詞／名詞＋でしょう（應該～吧）",
          meaning: "表示較肯定的推測",
          description: "📌 句型說明：\n「〜でしょう」表示對事物的推測，意思是「應該會這樣吧」，語氣較為肯定。\n使用場景：表達有根據的猜測。",
          examples: [
            {
              sentence: "🔹 明日は晴れるでしょう。",
              translation: "明天應該會晴天吧。",
              analysis: "",
            },
            {
              sentence: "🔹 この映画は面白いでしょう。",
              translation: "這部電影應該很有趣吧。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は学生でしょう。",
              translation: "他應該是學生吧。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "16. 動詞（辭書形）／い形容詞／な形容詞＋ようだ（看起來像～）",
          meaning: "表示根據觀察的推測",
          description: "📌 句型說明：\n「〜ようだ」表示根據觀察的推測，意思是「看起來像某樣」。\n使用場景：描述外觀或感覺。",
          examples: [
            {
              sentence: "🔹 雨が降るようです。",
              translation: "看起來要下雨了。",
              analysis: "",
            },
            {
              sentence: "🔹 この料理はおいしいようです。",
              translation: "這道菜看起來很好吃。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は疲れているようです。",
              translation: "他看起來很累。",
              analysis: "句中「疲れている」為「疲れる」的進行形，後接「ようだ」，表示根據觀察推測他處於疲勞狀態，強調外在印象。",
            },
          ],
        },
        {
          pattern: "17. 動詞（辭書形）／い形容詞／な形容詞／名詞＋みたいだ（好像～）",
          meaning: "表示輕鬆的推測",
          description: "📌 句型說明：\n「〜みたいだ」表示根據感覺或印象的推測，意思是「好像是某樣」，語氣較輕鬆。\n使用場景：隨意表達猜測。",
          examples: [
            {
              sentence: "🔹 風邪をひいたみたいです。",
              translation: "我好像感冒了。",
              analysis: "",
            },
            {
              sentence: "🔹 この犬はかわいいみたいだ。",
              translation: "這隻狗好像很可愛。",
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
          meaning: "表示根據傳聞或外觀的推測",
          description: "📌 句型說明：\n「〜らしい」表示根據傳聞或外觀的推測，意思是「聽說是某樣」或「似乎是某樣」。\n使用場景：間接推測或傳聞。",
          examples: [
            {
              sentence: "🔹 彼は医者らしいです。",
              translation: "聽說他是醫生。",
              analysis: "",
            },
            {
              sentence: "🔹 この店は安いらしい。",
              translation: "這家店似乎很便宜。",
              analysis: "",
            },
            {
              sentence: "🔹 明日は休みらしいですよ。",
              translation: "聽說明天放假哦。",
              analysis: "句中「休み」後接「らしい」，表示說話者根據傳聞推測明天是假期，後加「ですよ」使語氣更親切。",
            },
          ],
        },
        {
          pattern: "19. 動詞（辭書形）／い形容詞／な形容詞／名詞＋はずだ（應該）",
          meaning: "表示邏輯上的預期",
          description: "📌 句型說明：\n「〜はずだ」表示根據邏輯或預期的推測，意思是「應該是某樣」。\n使用場景：表達合理推斷。",
          examples: [
            {
              sentence: "🔹 彼はもう家に着いたはずです。",
              translation: "他應該已經到家了。",
              analysis: "句中「着いた」為「着く」的辭書形，後接「はずだ」，表示根據邏輯（例如時間）推測他已到家，強調合理性。",
            },
            {
              sentence: "🔹 この問題は簡単なはずだ。",
              translation: "這個問題應該很簡單。",
              analysis: "",
            },
            {
              sentence: "🔹 田中さんは日本人のはずです。",
              translation: "田中應該是日本人。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "原因與理由",
      sections: [
        {
          pattern: "20. 動詞（て形）／い形容詞（くて）／な形容詞（で）＋ので（因為～）",
          meaning: "表示客觀原因",
          description: "📌 句型說明：\n「〜ので」表示原因或理由，意思是「因為～所以～」，比「から」更客觀且禮貌。\n使用場景：正式或禮貌的解釋。",
          examples: [
            {
              sentence: "🔹 雨が降ったので、試合は中止になりました。",
              translation: "因為下雨，所以比賽取消了。",
              analysis: "",
            },
            {
              sentence: "🔹 忙しくて、昨日は来られませんでした。",
              translation: "因為很忙，昨天沒能來。",
              analysis: "句中「忙しくて」為「忙しい」的て形，後接「ので」，表示忙碌是未來的客觀原因，語氣禮貌。",
            },
            {
              sentence: "🔹 静かなので、ここで勉強できます。",
              translation: "因為很安靜，所以能在這裡學習。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "21. 動詞（辭書形）／い形容詞／な形容詞（だ）＋から（因為～）",
          meaning: "表示主觀原因",
          description: "📌 句型說明：\n「〜から」表示原因或理由，意思是「因為～所以～」，語氣較主觀且直接。\n使用場景：日常解釋。",
          examples: [
            {
              sentence: "🔹 寒いから、コートを着ます。",
              translation: "因為冷，所以我穿外套。",
              analysis: "",
            },
            {
              sentence: "🔹 時間がなかったから、宿題ができませんでした。",
              translation: "因為沒時間，所以沒能做作業。",
              analysis: "句中「なかった」為「ある」的否定過去形，後接「から」，表示沒時間是未完成作業的主觀原因。",
            },
            {
              sentence: "🔹 彼は優しいから、みんなに好かれています。",
              translation: "因為他很溫柔，所以大家都喜歡他。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "22. 動詞（辭書形）＋ために（為了～）",
          meaning: "表示動作的目的",
          description: "📌 句型說明：\n「〜ために」表示目的，意思是「為了做某事」，常與意志動詞搭配。\n使用場景：表達意圖或目標。",
          examples: [
            {
              sentence: "🔹 健康のために、毎日運動します。",
              translation: "為了健康，我每天運動。",
              analysis: "",
            },
            {
              sentence: "🔹 試験に合格するために、勉強しています。",
              translation: "為了通過考試，我在學習。",
              analysis: "句中「合格する」為辭書形，後接「ために」，表示學習的目的是「合格」（通過考試），強調意圖。",
            },
            {
              sentence: "🔹 友達に会うために、東京へ行きます。",
              translation: "為了見朋友，我要去東京。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "條件與假設",
      sections: [
        {
          pattern: "23. 動詞（た形）／い形容詞（かった）／な形容詞・名詞（だった）＋ら（如果～）",
          meaning: "表示假設條件",
          description: "📌 句型說明：\n「〜たら」表示假設條件，意思是「如果～就～」，適用於各種情況，語氣較自然。\n使用場景：假設未來或可能情況。",
          examples: [
            {
              sentence: "🔹 雨が降ったら、試合は中止になります。",
              translation: "如果下雨，比賽就取消。",
              analysis: "句中「降った」為「降る」的た形，後接「たら」，表示假設下雨的條件會導致比賽中止，語氣自然。",
            },
            {
              sentence: "🔹 天気がよかったら、散歩に行きます。",
              translation: "如果天氣好，我就去散步。",
              analysis: "",
            },
            {
              sentence: "🔹 時間があったら、映画を見たいです。",
              translation: "如果有時間，我想看電影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "24. 動詞（ば形）／い形容詞（ければ）／な形容詞（であれば）／名詞（であれば）＋ば（如果～）",
          meaning: "表示正式的假設條件",
          description: "📌 句型說明：\n「〜ば」表示假設條件，意思是「如果～就～」，語氣較正式，常見於書面語。\n使用場景：正式或書面假設。",
          examples: [
            {
              sentence: "🔹 早く起きれば、学校に間に合います。",
              translation: "如果早點起床，就能趕上學校。",
              analysis: "句中「起きれば」為「起きる」的ば形，後接「ば」，表示早起是趕上學校的條件，語氣正式。",
            },
            {
              sentence: "🔹 お金があれば、旅行に行けます。",
              translation: "如果有錢，就能去旅行。",
              analysis: "",
            },
            {
              sentence: "🔹 静かであれば、ここで勉強できます。",
              translation: "如果安靜，就能在這裡學習。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "25. 動詞（辭書形）／い形容詞／な形容詞・名詞（だ）＋なら（如果是～）",
          meaning: "表示前提或建議的假設",
          description: "📌 句型說明：\n「〜なら」表示假設條件，意思是「如果是～就～」，常強調某個前提或建議。\n使用場景：提供建議或假設。",
          examples: [
            {
              sentence: "🔹 行くなら、今すぐ出たほうがいいです。",
              translation: "如果要去的話，最好現在就出發。",
              analysis: "句中「行くなら」由「行く」的辭書形後加「なら」，表示假設要去的前提，後接建議「出たほうがいい」，強調行動的緊迫性。",
            },
            {
              sentence: "🔹 忙しいなら、手伝いますよ。",
              translation: "如果很忙，我就幫你哦。",
              analysis: "",
            },
            {
              sentence: "🔹 学生なら、もっと勉強すべきです。",
              translation: "如果是學生，就應該多學習。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "26. 動詞（辭書形）／い形容詞／な形容詞＋と（自然條件）（一～就～）",
          meaning: "表示自然發生的因果條件",
          description: "📌 句型說明：\n「〜と」表示自然發生的條件，意思是「一～就～」，強調因果的必然性。\n使用場景：描述客觀規律。",
          examples: [
            {
              sentence: "🔹 春になると、花が咲きます。",
              translation: "一到春天，花就開了。",
              analysis: "",
            },
            {
              sentence: "🔹 スイッチを押すと、電気がつきます。",
              translation: "一按開關，電就亮了。",
              analysis: "",
            },
            {
              sentence: "🔹 寒いと、手が冷たくなります。",
              translation: "一冷，手就變冷了。",
              analysis: "句中「寒いと」由「寒い」後加「と」，表示寒冷天氣必然導致手變冷，強調自然因果關係。",
            },
          ],
        },
      ],
    },
    {
      title: "時間與狀態表現",
      sections: [
        {
          pattern: "27. 動詞（て形）＋いる（狀態）（正在～／持續狀態）",
          meaning: "表示動作進行或狀態持續",
          description: "📌 句型說明：\n「〜ている」表示動作正在進行或某種狀態的持續，特別用於描述當前狀態。\n使用場景：描述進行中或固定狀態。",
          examples: [
            {
              sentence: "🔹 彼は日本に住んでいます。",
              translation: "他住在日本。",
              analysis: "",
            },
            {
              sentence: "🔹 私は眼鏡をかけています。",
              translation: "我戴著眼鏡。",
              analysis: "",
            },
            {
              sentence: "🔹 今、本を読んでいます。",
              translation: "我正在讀書。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "28. 名詞／動詞（ている形）＋間に（在～期間）",
          meaning: "表示某動作在某段時間內完成",
          description: "📌 句型說明：\n「〜間に」表示某動作在某段時間內完成，意思是「在～期間」。\n使用場景：描述時間範圍內的動作。",
          examples: [
            {
              sentence: "🔹 休みの間に、宿題を終わらせます。",
              translation: "在放假期間，我會把作業做完。",
              analysis: "",
            },
            {
              sentence: "🔹 先生が話している間に、メモを取ります。",
              translation: "在老師講話期間，我會做筆記。",
              analysis: "句中「話している間」由「話す」的ている形後加「間に」，表示在老師講話的時間範圍內完成做筆記的動作。",
            },
            {
              sentence: "🔹 昼休みの間に、ご飯を食べます。",
              translation: "在午休期間，我會吃飯。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "29. 動詞（ている形）／い形容詞／な形容詞＋うちに（趁著～）",
          meaning: "表示趁著某狀態或時機做某事",
          description: "📌 句型說明：\n「〜うちに」表示趁著某狀態或時機做某事，意思是「趁著～的時候」。\n使用場景：強調時機的重要性。",
          examples: [
            {
              sentence: "🔹 若いうちに、たくさん旅行したいです。",
              translation: "我想趁年輕時多旅行。",
              analysis: "句中「若い」為い形容詞，後接「うちに」，表示趁著年輕的狀態進行旅行，強調時機的有限性。",
            },
            {
              sentence: "🔹 雨が降っていないうちに、家に帰ります。",
              translation: "趁著還沒下雨，我要回家。",
              analysis: "",
            },
            {
              sentence: "🔹 元気なうちに、仕事を終えたい。",
              translation: "我想趁著有精神時把工作做完。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "30. 動詞（て形）＋まま（保持～狀態）",
          meaning: "表示保持某狀態不變",
          description: "📌 句型說明：\n「〜まま」表示保持某種狀態不變，意思是「保持～的樣子」。\n使用場景：描述未改變的狀態。",
          examples: [
            {
              sentence: "🔹 窓を開けたまま寝ました。",
              translation: "我開著窗戶睡了。",
              analysis: "句中「開けた」為「開ける」的て形，後接「まま」，表示窗戶保持開著的狀態未關，強調持續性。",
            },
            {
              sentence: "🔹 靴を履いたまま、家に入りました。",
              translation: "我穿著鞋進了家。",
              analysis: "",
            },
            {
              sentence: "🔹 テレビをつけたまま、出かけました。",
              translation: "我開著電視就出去了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "31. 動詞（て形）＋ながら（一邊～一邊～）",
          meaning: "表示同時進行兩個動作",
          description: "📌 句型說明：\n「〜ながら」表示同時進行兩個動作，意思是「一邊～一邊～」，主語必須相同。\n使用場景：描述多任務。",
          examples: [
            {
              sentence: "🔹 音楽を聴きながら、勉強します。",
              translation: "我一邊聽音樂一邊學習。",
              analysis: "",
            },
            {
              sentence: "🔹 テレビを見ながら、ご飯を食べます。",
              translation: "我一邊看電視一邊吃飯。",
              analysis: "",
            },
            {
              sentence: "🔹 歩きながら、友達と話しました。",
              translation: "我一邊走一邊和朋友聊天。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "動作前後與準備",
      sections: [
        {
          pattern: "32. 動詞（て形）＋から（～之後）",
          meaning: "表示動作的先後順序",
          description: "📌 句型說明：\n「〜てから」表示動作的先後順序，意思是「做了～之後再～」。\n使用場景：描述連續動作。",
          examples: [
            {
              sentence: "🔹 宿題をしてから、テレビを見ます。",
              translation: "做完作業後，我會看電視。",
              analysis: "",
            },
            {
              sentence: "🔹 朝ごはんを食べてから、学校へ行きます。",
              translation: "吃完早餐後，我會去學校。",
              analysis: "",
            },
            {
              sentence: "🔹 シャワーを浴びてから、寝ます。",
              translation: "洗完澡後，我會睡覺。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "33. 名詞／動詞（辭書形）＋前に（～之前）",
          meaning: "表示某動作在另一動作之前",
          description: "📌 句型說明：\n「〜前に」表示某動作在另一動作之前發生，意思是「在～之前」。\n使用場景：描述動作順序。",
          examples: [
            {
              sentence: "🔹 寝る前に、本を読みます。",
              translation: "睡覺前，我會讀書。",
              analysis: "",
            },
            {
              sentence: "🔹 試験の前に、復習します。",
              translation: "考試前，我會複習。",
              analysis: "",
            },
            {
              sentence: "🔹 出かける前に、鍵をかけます。",
              translation: "出門前，我會鎖門。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "34. 動詞（た形）＋あとで（～之後）",
          meaning: "表示某動作完成後的另一動作",
          description: "📌 句型說明：\n「〜たあとで」表示某動作完成後再進行另一動作，意思是「～之後」，與「てから」類似但更口語化。\n使用場景：描述動作順序。",
          examples: [
            {
              sentence: "🔹 ご飯を食べたあとで、散歩します。",
              translation: "吃完飯後，我會去散步。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事が終わったあとで、友達と会います。",
              translation: "工作結束後，我會和朋友見面。",
              analysis: "",
            },
            {
              sentence: "🔹 勉強したあとで、ゲームをします。",
              translation: "學習完後，我會玩遊戲。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "35. 動詞（て形）＋おく（先～）",
          meaning: "表示為將來準備而先完成某事",
          description: "📌 句型說明：\n「〜ておく」表示為將來做準備而先完成某事，意思是「先把～做好」。\n使用場景：描述提前準備。",
          examples: [
            {
              sentence: "🔹 部屋を掃除しておきます。",
              translation: "我先把房間打掃好。",
              analysis: "",
            },
            {
              sentence: "🔹 荷物を準備しておきました。",
              translation: "我先把行李準備好了。",
              analysis: "",
            },
            {
              sentence: "🔹 窓を閉めておいてください。",
              translation: "請先把窗戶關好。",
              analysis: "句中「閉めて」為「閉める」的て形，後接「おいて」，表示為未來（例如防止下雨）提前關窗，語氣為禮貌請求。",
            },
          ],
        },
      ],
    },
    {
      title: "使役與被動",
      sections: [
        {
          pattern: "36. 動詞（使役形：〜せる／させる）（讓～做）",
          meaning: "表示讓某人做某事",
          description: "📌 句型說明：\n「〜せる／させる」表示使役，讓某人去做某事，意思是「讓～做～」。\n- 一段動詞用「〜せる」，二段及サ變動詞用「〜させる」。\n使用場景：表達要求或強制。",
          examples: [
            {
              sentence: "🔹 子供に野菜を食べさせます。",
              translation: "我讓孩子吃蔬菜。",
              analysis: "",
            },
            {
              sentence: "🔹 学生に宿題を出させました。",
              translation: "我讓學生交作業。",
              analysis: "句中「出させました」由「出す」的使役形「出させる」加過去式，表示說話者要求學生提交作業，帶有權威語氣。",
            },
            {
              sentence: "🔹 友達に手伝わせます。",
              translation: "我讓朋友幫忙。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "37. 動詞（被動形：〜れる／られる）（被～）",
          meaning: "表示被某人做某事",
          description: "📌 句型說明：\n「〜れる／られる」表示被動，意思是「被某人做某事」。\n- 一段動詞用「〜れる」，二段及サ變動詞用「〜られる」。\n使用場景：描述被動事件。",
          examples: [
            {
              sentence: "🔹 先生に褒められました。",
              translation: "我被老師表揚了。",
              analysis: "",
            },
            {
              sentence: "🔹 犬に手を噛まれました。",
              translation: "我的手被狗咬了。",
              analysis: "句中「噛まれました」由「噛む」的被動形「噛まれる」加過去式，表示手被狗咬的被動事件，帶有不愉快語感。",
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
          description: "📌 句型說明：\n「〜させられる」結合使役和被動，意思是「被要求或被迫做某事」，帶有不情願的語感。\n使用場景：描述被迫的情況。",
          examples: [
            {
              sentence: "🔹 先生に宿題をさせられました。",
              translation: "我被老師要求做作業。",
              analysis: "句中「させられました」由「する」的使役被動形「させられる」加過去式，表示被老師強制要求做作業，帶不情願語氣。",
            },
            {
              sentence: "🔹 親に部屋を掃除させられます。",
              translation: "我被父母要求打掃房間。",
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
      title: "其他常見句型",
      sections: [
        {
          pattern: "39. 動詞（て形）＋もいい（可以～）",
          meaning: "表示允許某行為",
          description: "📌 句型說明：\n「〜てもいい」表示允許某行為，意思是「可以做某事」，常用於請求許可或確認。\n使用場景：詢問或給予許可。",
          examples: [
            {
              sentence: "🔹 ここで写真を撮ってもいいですか？",
              translation: "可以在這裡拍照嗎？",
              analysis: "",
            },
            {
              sentence: "🔹 窓を開けてもいいです。",
              translation: "可以開窗戶。",
              analysis: "",
            },
            {
              sentence: "🔹 この本を借りてもいいですか？",
              translation: "可以借這本書嗎？",
              analysis: "",
            },
          ],
        },
        {
          pattern: "40. 動詞（て形）＋はいけない（不可以～）",
          meaning: "表示禁止某行為",
          description: "📌 句型說明：\n「〜てはいけない」表示禁止某行為，意思是「不可以做某事」，語氣較強硬。\n使用場景：表達禁令。",
          examples: [
            {
              sentence: "🔹 ここでタバコを吸ってはいけません。",
              translation: "不能在這裡抽菸。",
              analysis: "",
            },
            {
              sentence: "🔹 学校で遊んではいけない。",
              translation: "不能在學校玩耍。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題を忘れてはいけません。",
              translation: "不能忘記做作業。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "41. 動詞（ない形）＋なければならない（必須～）",
          meaning: "表示必須做的義務",
          description: "📌 句型說明：\n「〜なければならない」表示義務或必要性，意思是「必須做某事」。\n使用場景：強調必要性。",
          examples: [
            {
              sentence: "🔹 毎日勉強しなければなりません。",
              translation: "我必須每天學習。",
              analysis: "",
            },
            {
              sentence: "🔹 明日までに宿題を終わらせなければなりません。",
              translation: "我必須在明天前完成作業。",
              analysis: "句中「終わらせない」為「終わらせる」的ない形，後接「なければならない」，表示完成作業是截止日期前的強制義務。",
            },
            {
              sentence: "🔹 遅刻しないようにしなければなりません。",
              translation: "我必須不遲到。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "42. 動詞（なくても形）＋いい（不必～）",
          meaning: "表示無需做某事",
          description: "📌 句型說明：\n「〜なくてもいい」表示沒有做某事的必要，意思是「不必做某事」。\n使用場景：表達免除義務。",
          examples: [
            {
              sentence: "🔹 急がなくてもいいですよ。",
              translation: "不必著急哦。",
              analysis: "",
            },
            {
              sentence: "🔹 今日は宿題をしなくてもいいです。",
              translation: "今天不必做作業。",
              analysis: "",
            },
            {
              sentence: "🔹 傘を持たなくてもいいです。",
              translation: "不必帶傘。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "43. 動詞（辭書形）＋ようにする（設法～）",
          meaning: "表示努力達成某目標",
          description: "📌 句型說明：\n「〜ようにする」表示努力達成某目標，意思是「設法做到～」。\n使用場景：表達努力或決心。",
          examples: [
            {
              sentence: "🔹 毎日運動するようにします。",
              translation: "我設法每天運動。",
              analysis: "",
            },
            {
              sentence: "🔹 遅刻しないようにします。",
              translation: "我設法不遲到。",
              analysis: "",
            },
            {
              sentence: "🔹 日本語を上手に話すようにします。",
              translation: "我設法把日語說好。",
              analysis: "句中「話す」為辭書形，後接「ようにします」，表示說話者努力達成說好日語的目標，強調主動性。",
            },
          ],
        },
        {
          pattern: "44. 動詞（辭書形）＋ように言う（說要～）",
          meaning: "表示某人要求或叮囑做某事",
          description: "📌 句型說明：\n「〜ように言う」表示某人要求或叮囑做某事，意思是「說要～」。\n使用場景：轉述指示。",
          examples: [
            {
              sentence: "🔹 先生は宿題をするように言いました。",
              translation: "老師說要做作業。",
              analysis: "",
            },
            {
              sentence: "🔹 母は早く寝るように言いました。",
              translation: "媽媽說要早點睡。",
              analysis: "",
            },
            {
              sentence: "🔹 友達はここで待つように言いました。",
              translation: "朋友說要在這裡等。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "45. 動詞（た形）＋ばかり（剛剛～）",
          meaning: "表示某動作剛剛完成",
          description: "📌 句型說明：\n「〜たばかり」表示某動作剛剛完成，意思是「剛剛做了～」。\n使用場景：強調時間接近。",
          examples: [
            {
              sentence: "🔹 ご飯を食べたばかりです。",
              translation: "我剛剛吃完飯。",
              analysis: "",
            },
            {
              sentence: "🔹 日本に来たばかりです。",
              translation: "我剛剛來到日本。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事を始めたばかりです。",
              translation: "我剛剛開始工作。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "46. 動詞（たところ／ているところ）（剛～／正在～的時候）",
          meaning: "表示動作的時間點",
          description: "📌 句型說明：\n「〜たところ」表示剛完成某事，「〜ているところ」表示正在做某事，兩者都描述動作的時間點。\n使用場景：強調動作階段。",
          examples: [
            {
              sentence: "🔹 今、家に帰ったところです。",
              translation: "我剛剛回到家。",
              analysis: "",
            },
            {
              sentence: "🔹 今、料理をしているところです。",
              translation: "我正在做飯。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題を終えたところです。",
              translation: "我剛剛做完作業。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "比較與程度",
      sections: [
        {
          pattern: "47. 名詞1＋より＋名詞2＋のほうが～（比～更～）",
          meaning: "表示比較，B 比 A 更具某特質",
          description: "📌 句型說明：\n「〜より〜のほうが」表示比較，意思是「比起 A，B 更～」。\n使用場景：比較兩個事物。",
          examples: [
            {
              sentence: "🔹 コーヒーよりお茶のほうが好きです。",
              translation: "比起咖啡，我更喜歡茶。",
              analysis: "",
            },
            {
              sentence: "🔹 バスより電車のほうが速いです。",
              translation: "比起公車，電車更快。",
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
          description: "📌 句型說明：\n「〜ほど」表示某事物的程度，意思是「到～的程度」。\n使用場景：強調程度。",
          examples: [
            {
              sentence: "🔹 びっくりするほど大きいです。",
              translation: "大得讓人吃驚。",
              analysis: "句中「びっくりする」為辭書形，後接「ほど」，表示「大きい」（大）的程度高到讓人震驚，強調誇張性。",
            },
            {
              sentence: "🔹 泣きたくなるほど悲しいです。",
              translation: "悲傷到想哭的程度。",
              analysis: "",
            },
            {
              sentence: "🔹 子供でも分かるほど簡単です。",
              translation: "簡單到連小孩都懂的程度。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "49. 動詞（ます形，去ます）／い形容詞＋すぎる（太～）",
          meaning: "表示程度過高",
          description: "📌 句型說明：\n「〜すぎる」表示某事物的程度過高，意思是「太～」。\n使用場景：描述過度行為或狀態。",
          examples: [
            {
              sentence: "🔹 食べすぎました。",
              translation: "我吃太多了。",
              analysis: "",
            },
            {
              sentence: "🔹 この服は高すぎます。",
              translation: "這件衣服太貴了。",
              analysis: "",
            },
            {
              sentence: "🔹 飲みすぎて、頭が痛いです。",
              translation: "喝太多，頭痛了。",
              analysis: "句中「飲みすぎて」由「飲む」的ます形去掉「ます」後加「すぎる」的て形，表示過量飲酒導致「頭が痛い」（頭痛），強調因果。",
            },
          ],
        },
        {
          pattern: "50. 動詞（ます形，去ます）＋やすい／にくい（容易／難以）",
          meaning: "表示動作的難易度",
          description: "📌 句型說明：\n「〜やすい」表示容易做某事，「〜にくい」表示難以做某事，描述動作的難易度。\n使用場景：描述難易程度。",
          examples: [
            {
              sentence: "🔹 この本は読みやすいです。",
              translation: "這本書容易讀。",
              analysis: "",
            },
            {
              sentence: "🔹 この箱は重くて持ちにくいです。",
              translation: "這個箱子太重，難以拿。",
              analysis: "句中「持ちにくい」由「持つ」的ます形去掉「ます」後加「にくい」，表示因「重くて」（太重）而難以拿，強調困難性。",
            },
            {
              sentence: "🔹 この料理は作りやすいです。",
              translation: "這道菜容易做。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "動作完成與結果",
      sections: [
        {
          pattern: "51. 動詞（て形）＋しまう（不小心做完／遺憾）",
          meaning: "表示動作完成，帶遺憾或不小心",
          description: "📌 句型說明：\n「〜てしまう」表示動作完成，帶有不小心或遺憾的語感，意思是「不小心做了～」或「可惜～」。\n使用場景：表達後悔或意外。",
          examples: [
            {
              sentence: "🔹 宿題を忘れてしまいました。",
              translation: "我不小心忘了做作業。",
              analysis: "",
            },
            {
              sentence: "🔹 大事な書類を捨ててしまった。",
              translation: "我把重要的文件扔掉了，真可惜。",
              analysis: "句中「捨ててしまった」由「捨てる」的て形後加「しまう」，表示意外扔掉重要文件，帶有遺憾語氣。",
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
          meaning: "表示持續某狀態未變",
          description: "📌 句型說明：\n「〜っぱなし」表示某狀態持續未變，意思是「一直保持～的狀態」，常帶有不滿語氣。\n使用場景：批評未改變的狀態。",
          examples: [
            {
              sentence: "🔹 テレビをつけっぱなしにしました。",
              translation: "我一直讓電視開著。",
              analysis: "句中「つけっぱなし」由「つける」的て形後加「っぱなし」，表示電視未關一直開著，帶有疏忽的不滿語氣。",
            },
            {
              sentence: "🔹 ドアを開けっぱなしにしないでください。",
              translation: "請不要讓門一直開著。",
              analysis: "",
            },
            {
              sentence: "🔹 電気をつけっぱなしで寝ました。",
              translation: "我開著電燈就睡了。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "目的與手段",
      sections: [
        {
          pattern: "53. 動詞（辭書形）＋のに（用於～目的）",
          meaning: "表示某動作或物品用於某目的",
          description: "📌 句型說明：\n「〜のに」表示某動作或物品用於某目的，意思是「用來做～」，常接「使う」「役立つ」等動詞。\n使用場景：描述用途。",
          examples: [
            {
              sentence: "🔹 このナイフは野菜を切るのに使います。",
              translation: "這把刀用來切蔬菜。",
              analysis: "",
            },
            {
              sentence: "🔹 ノートはメモを取るのに便利です。",
              translation: "筆記本用來記筆記很方便。",
              analysis: "句中「取るのに」由「取る」的辭書形後加「のに」，表示筆記本的用途是記筆記，強調便利性。",
            },
            {
              sentence: "🔹 お金は旅行に行くのに必要です。",
              translation: "錢是用來旅行的必需品。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "54. 動詞（辭書形）＋ために（為了～）",
          meaning: "表示動作的目的",
          description: "📌 句型說明：\n「〜ために」表示目的，意思是「為了做某事」，強調意圖，常與意志動詞搭配。\n使用場景：表達目標。",
          examples: [
            {
              sentence: "🔹 健康のために、毎日運動します。",
              translation: "為了健康，我每天運動。",
              analysis: "",
            },
            {
              sentence: "🔹 試験に合格するために、勉強しています。",
              translation: "為了通過考試，我在學習。",
              analysis: "",
            },
            {
              sentence: "🔹 友達に会うために、東京へ行きます。",
              translation: "為了見朋友，我要去東京。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "列舉與舉例",
      sections: [
        {
          pattern: "55. 動詞（た形）＋り〜たりする（～或～）",
          meaning: "表示列舉多個動作",
          description: "📌 句型說明：\n「〜たり〜たりする」表示列舉多個動作，意思是「有時～有時～」，表達不完全列舉。\n使用場景：描述多樣行為。",
          examples: [
            {
              sentence: "🔹 週末は映画を見たり、買い物したりします。",
              translation: "週末我有時看電影，有時購物。",
              analysis: "句中「見たり」「買い物したり」由「見る」和「買い物する」的た形後加「り」，表示週末的多種活動，強調不完全列舉。",
            },
            {
              sentence: "🔹 友達と話したり、ゲームをしたりしました。",
              translation: "我和朋友有時聊天，有時玩遊戲。",
              analysis: "",
            },
            {
              sentence: "🔹 休みの日は寝たり、本を読んだりします。",
              translation: "休息日我有時睡覺，有時讀書。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "56. 名詞＋とか〜とか（～啦～啦）",
          meaning: "表示輕鬆列舉事物",
          description: "📌 句型說明：\n「〜とか〜とか」表示列舉事物，意思是「～啦～啦」，語氣輕鬆且不完全列舉。\n使用場景：隨意列舉。",
          examples: [
            {
              sentence: "🔹 スーパーで野菜とか肉とかを買いました。",
              translation: "我在超市買了蔬菜啦肉啦之類的。",
              analysis: "",
            },
            {
              sentence: "🔹 旅行にカメラとかお金とかを持っていきます。",
              translation: "旅行我會帶相機啦錢啦之類的。",
              analysis: "",
            },
            {
              sentence: "🔹 友達にケーキとかジュースとかをあげました。",
              translation: "我給朋友蛋糕啦果汁啦之類的。",
              analysis: "",
            },
          ],
        },
      ],
    },
  ],
};

export default n4BasicGrammarZhTW;