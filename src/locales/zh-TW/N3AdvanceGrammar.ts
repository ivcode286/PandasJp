import { GrammarData } from "../../types/translation";

const n3AdvanceGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: "動詞複合與狀態",
      sections: [
        {
          pattern: "51. ～ところ",
          meaning: "表示某動作或事件的時間點或狀態",
          description: "📌 句型說明：\n動詞普通形 + ところ\n用來表示正在做、即將做或剛做完某事。\n使用場景：描述動作的特定階段，常帶有時間上的精確感。",
          examples: [
            {
              sentence: "🔹 今、食事をするところです。",
              translation: "我正要吃飯。",
              analysis: "",
            },
            {
              sentence: "🔹 家に帰ったところです。",
              translation: "我剛回到家。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "52. ～ところだ",
          meaning: "強調某動作即將發生或剛剛完成",
          description: "📌 句型說明：\n動詞普通形 + ところだ\n強調動作的時間點，常帶有即時感。\n使用場景：突出動作即將開始或剛結束。",
          examples: [
            {
              sentence: "🔹 これから出かけるところだ。",
              translation: "我正要出門。",
              analysis: "",
            },
            {
              sentence: "🔹 宿題を終えたところだ。",
              translation: "我剛做完作業。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "53. ～ばかり",
          meaning: "表示某動作剛剛完成，強調時間上的接近",
          description: "📌 句型說明：\n動詞た形 + ばかり\n表示某事剛發生不久。\n使用場景：強調動作完成不久，常帶有「剛剛」的語氣。",
          examples: [
            {
              sentence: "🔹 日本に来たばかりです。",
              translation: "我剛來日本。",
              analysis: "",
            },
            {
              sentence: "🔹 ご飯を食べたばかりだ。",
              translation: "我剛吃完飯。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "54. ～ばかりいる",
          meaning: "表示某人總是做某事，帶有負面評價",
          description: "📌 句型說明：\n動詞て形 + ばかりいる\n常用於批評某人反覆做某事。\n使用場景：表達對某人行為的不滿。",
          examples: [
            {
              sentence: "🔹 彼はゲームばかりしている。",
              translation: "他總是玩遊戲。",
              analysis: "",
            },
            {
              sentence: "🔹 テレビばかり見ている。",
              translation: "總是看電視。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "55. ～だけ",
          meaning: "表示僅限於某事物或數量",
          description: "📌 句型說明：\n名詞 / 動詞普通形 + だけ\n表示「只有」或「僅僅」。\n使用場景：限定範圍或數量。",
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
          meaning: "表示僅憑某條件即可達成",
          description: "📌 句型說明：\n動詞て形 + だけで\n強調「僅靠…就夠了」。\n使用場景：突出簡單的條件即可完成某事。",
          examples: [
            {
              sentence: "🔹 このボタンを押すだけで、機械が動きます。",
              translation: "只要按這個按鈕，機器就會動。",
              analysis: "句中「押す」為「押す」的て形，後接「だけで」，表示僅需按下按鈕這一動作，無需其他條件，機器即可運作。",
            },
            {
              sentence: "🔹 お金だけで幸せになれない。",
              translation: "光靠錢不能變幸福。",
              analysis: "句中「お金だけで」表示僅靠金錢不足以達成幸福，暗含需要其他因素，帶有否定語氣。",
            },
          ],
        },
        {
          pattern: "57. ～しかない",
          meaning: "表示只有某事物，帶有「別無他物」的語氣",
          description: "📌 句型說明：\n名詞 + しかない\n表示「只有…，沒有其他的」。\n使用場景：強調有限的選擇，常帶遺憾或無奈。",
          examples: [
            {
              sentence: "🔹 ポケットにお金しかない。",
              translation: "口袋裡只有錢。",
              analysis: "",
            },
            {
              sentence: "🔹 時間しかない。",
              translation: "只有時間。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "58. ～すぎる",
          meaning: "表示某事物的程度過高",
          description: "📌 句型說明：\n動詞ます形去掉ます / い形容詞去掉い / な形容詞 + すぎる\n表示「太…」或「過於…」。\n使用場景：描述過度行為或狀態，常帶負面意味。",
          examples: [
            {
              sentence: "🔹 食べすぎると、太ります。",
              translation: "吃太多會變胖。",
              analysis: "句中「食べすぎる」為「食べる」的ます形去掉「ます」後加「すぎる」，表示過量飲食，後接「と」表示條件，說明結果是變胖。",
            },
            {
              sentence: "🔹 この服は派手すぎる。",
              translation: "這件衣服太花俏了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "59. ～やすい",
          meaning: "表示某動作或事情容易進行",
          description: "📌 句型說明：\n動詞ます形去掉ます + やすい\n表示某事因簡單或方便而容易達成。\n使用場景：描述易於完成的事物。",
          examples: [
            {
              sentence: "🔹 この本は読みやすいです。",
              translation: "這本書很好讀。",
              analysis: "",
            },
            {
              sentence: "🔹 この靴は履きやすい。",
              translation: "這雙鞋很好穿。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "60. ～にくい",
          meaning: "表示某動作或事情難以進行",
          description: "📌 句型說明：\n動詞ます形去掉ます + にくい\n表示某事因困難而不易達成。\n使用場景：描述難以完成的事物。",
          examples: [
            {
              sentence: "🔹 この問題は解きにくい。",
              translation: "這個問題很難解。",
              analysis: "",
            },
            {
              sentence: "🔹 彼の字は読みにくい。",
              translation: "他的字很難讀。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "61. ～がち",
          meaning: "表示某事有某種傾向，常帶負面意味",
          description: "📌 句型說明：\n動詞ます形去掉ます / 名詞 + がち\n表示「容易…」或「常常…」。\n使用場景：批評某人或事的傾向。",
          examples: [
            {
              sentence: "🔹 彼は遅れがちだ。",
              translation: "他常常遲到。",
              analysis: "",
            },
            {
              sentence: "🔹 忙しくて、忘れがちです。",
              translation: "因為忙，常常忘記。",
              analysis: "句中「忘れがち」由「忘れる」的ます形去掉「ます」後加「がち」，表示因忙碌而有忘記的傾向，帶有負面語氣。",
            },
          ],
        },
        {
          pattern: "62. ～つづける",
          meaning: "表示某動作持續進行",
          description: "📌 句型說明：\n動詞ます形去掉ます + つづける\n強調動作的連續性。\n使用場景：描述長期或連續的行為。",
          examples: [
            {
              sentence: "🔹 毎日、走りつづける。",
              translation: "每天持續跑步。",
              analysis: "",
            },
            {
              sentence: "🔹 彼は話しつづけた。",
              translation: "他持續說話。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "63. ～かける",
          meaning: "表示某動作即將完成但未完成",
          description: "📌 句型說明：\n動詞ます形去掉ます + かける\n表示「差點…」或「正在…中途」。\n使用場景：描述動作未完成或差點發生。",
          examples: [
            {
              sentence: "🔹 コップを落としかけた。",
              translation: "差點把杯子摔了。",
              analysis: "句中「落としかけた」由「落とす」的ます形去掉「ます」後加「かける」，表示杯子差點掉落但最終未摔，強調動作未完成。",
            },
            {
              sentence: "🔹 宿題をやりかけた。",
              translation: "作業做到一半。",
              analysis: "句中「やりかけた」由「やる」的ます形去掉「ます」後加「かける」，表示作業開始但未完成，停在中途。",
            },
          ],
        },
        {
          pattern: "64. ～きる",
          meaning: "表示某動作徹底完成",
          description: "📌 句型說明：\n動詞ます形去掉ます + きる\n表示「完全…」或「全部…」。\n使用場景：強調動作徹底完成。",
          examples: [
            {
              sentence: "🔹 本を読みきった。",
              translation: "把書讀完了。",
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
          description: "📌 句型說明：\n動詞ます形去掉ます + なおす\n表示「重新…」或「修正…」。\n使用場景：描述改正錯誤或重做。",
          examples: [
            {
              sentence: "🔹 間違えたので、書きなおした。",
              translation: "因為寫錯了，所以重寫。",
              analysis: "句中「書きなおした」由「書く」的ます形去掉「ます」後加「なおす」，表示因錯誤而重新書寫，強調修正行為。",
            },
            {
              sentence: "🔹 服を縫いなおした。",
              translation: "把衣服重新縫好。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "66. ～おわる",
          meaning: "表示某動作或事件結束",
          description: "📌 句型說明：\n動詞ます形去掉ます + おわる\n表示「…結束」。\n使用場景：描述某事完成。",
          examples: [
            {
              sentence: "🔹 試験がやりおわった。",
              translation: "考試做完了。",
              analysis: "",
            },
            {
              sentence: "🔹 仕事を終わりおわった。",
              translation: "工作結束了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "67. ～直す",
          meaning: "表示修復或改正某事物",
          description: "📌 句型說明：\n動詞ます形去掉ます + 直す\n表示「修理…」或「改正…」。\n使用場景：描述修補或糾正。",
          examples: [
            {
              sentence: "🔹 壊れた時計を直した。",
              translation: "修好了壞掉的鐘。",
              analysis: "",
            },
            {
              sentence: "🔹 間違えた部分を直した。",
              translation: "改正了錯誤的部分。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "68. ～直る",
          meaning: "表示某事物被修復或恢復",
          description: "📌 句型說明：\n動詞ます形去掉ます + 直る\n表示「被修好」或「恢復」。\n使用場景：描述事物恢復正常。",
          examples: [
            {
              sentence: "🔹 壊れたパソコンが直った。",
              translation: "壞掉的電腦修好了。",
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
          meaning: "表示某動作突然開始或完成",
          description: "📌 句型說明：\n動詞ます形去掉ます + 出す\n表示「突然…」或「完成…」。\n使用場景：描述動作的突發或開始。",
          examples: [
            {
              sentence: "🔹 急に走り出した。",
              translation: "突然跑起來。",
              analysis: "句中「走り出した」由「走る」的ます形去掉「ます」後加「出す」，表示跑步動作突然開始，強調突發性。",
            },
            {
              sentence: "🔹 宿題をやり出した。",
              translation: "開始做作業。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "70. ～入れる",
          meaning: "表示某動作涉及放入或加入",
          description: "📌 句型說明：\n動詞ます形去掉ます + 入れる\n表示「放進…」或「加入…」。\n使用場景：描述放入或添加行為。",
          examples: [
            {
              sentence: "🔹 カバンに本を入れました。",
              translation: "把書放進包包裡。",
              analysis: "",
            },
            {
              sentence: "🔹 スープに塩を入れた。",
              translation: "在湯裡加了鹽。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "動作與關係",
      sections: [
        {
          pattern: "71. ～抜く",
          meaning: "表示某動作完全通過或超越",
          description: "📌 句型說明：\n動詞ます形去掉ます + 抜く\n表示「通過…」或「超越…」。\n使用場景：描述通過障礙或超越他人。",
          examples: [
            {
              sentence: "🔹 長いトンネルを抜けた。",
              translation: "穿過了長隧道。",
              analysis: "句中「抜けた」由「抜ける」的ます形去掉「ます」後加「抜く」，表示完全通過隧道，強調動作完成。",
            },
            {
              sentence: "🔹 彼はライバルを抜いた。",
              translation: "他超越了對手。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "72. ～込む",
          meaning: "表示某動作深入或擠進",
          description: "📌 句型說明：\n動詞ます形去掉ます + 込む\n表示「深入…」或「擠進…」。\n使用場景：描述進入或擁擠的情景。",
          examples: [
            {
              sentence: "🔹 部屋に駆け込んだ。",
              translation: "衝進房間。",
              analysis: "",
            },
            {
              sentence: "🔹 電車が混み込んだ。",
              translation: "電車很擁擠。",
              analysis: "句中「混み込んだ」由「混む」的ます形去掉「ます」後加「込む」，表示電車內部因人多而變得擁擠，強調狀態。",
            },
          ],
        },
        {
          pattern: "73. ～あげる",
          meaning: "表示給予某人某動作（對等或下級）",
          description: "📌 句型說明：\n動詞て形 + あげる\n表示「幫…做…」或「給…」。\n使用場景：表達對等或下級的恩惠。",
          examples: [
            {
              sentence: "🔹 友達に本を貸してあげた。",
              translation: "借書給朋友。",
              analysis: "",
            },
            {
              sentence: "🔹 子供に宿題を教えてあげた。",
              translation: "幫小孩教作業。",
              analysis: "句中「教えてあげた」由「教える」的て形後加「あげる」，表示為小孩提供教導，強調說話者主動給予幫助。",
            },
          ],
        },
        {
          pattern: "74. ～くれる",
          meaning: "表示某人為說話者做某事（恩惠）",
          description: "📌 句型說明：\n動詞て形 + くれる\n表示「為我…」或「給我…」。\n使用場景：表達他人對說話者的恩惠。",
          examples: [
            {
              sentence: "🔹 友達がケーキを分けてくれた。",
              translation: "朋友分給我蛋糕。",
              analysis: "",
            },
            {
              sentence: "🔹 彼が助けてくれた。",
              translation: "他幫了我。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "75. ～もらう",
          meaning: "表示說話者接受某人某動作",
          description: "📌 句型說明：\n動詞て形 + もらう\n表示「請…幫我…」或「從…得到…」。\n使用場景：表達接受他人的行為或物品。",
          examples: [
            {
              sentence: "🔹 先生に質問を教えてもらった。",
              translation: "請老師幫我解答問題。",
              analysis: "句中「教えてもらった」由「教える」的て形後加「もらう」，表示說話者接受老師的教導，強調接受恩惠。",
            },
            {
              sentence: "🔹 友達にお菓子をもらった。",
              translation: "從朋友那得到點心。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "76. ～ていく",
          meaning: "表示某動作或狀態逐漸遠離或持續進行",
          description: "📌 句型說明：\n動詞て形 + いく\n表示「…而去」或「逐漸…」。\n使用場景：描述動作方向或狀態延續。",
          examples: [
            {
              sentence: "🔹 時間が過ぎていく。",
              translation: "時間逐漸過去。",
              analysis: "",
            },
            {
              sentence: "🔹 走っていく。",
              translation: "跑遠了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "77. ～てくる",
          meaning: "表示某動作或狀態逐漸接近或開始",
          description: "📌 句型說明：\n動詞て形 + くる\n表示「…而來」或「逐漸…」。\n使用場景：描述動作接近或狀態開始。",
          examples: [
            {
              sentence: "🔹 天気が暖かくなってきた。",
              translation: "天氣逐漸暖和起來。",
              analysis: "句中「なってきた」由「なる」的て形後加「くる」，表示天氣從過去到現在逐漸變暖，強調變化的過程。",
            },
            {
              sentence: "🔹 友達が走ってきた。",
              translation: "朋友跑過來了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "78. ～とおり",
          meaning: "表示按照某方式或內容進行",
          description: "📌 句型說明：\n動詞普通形 / 名詞 + とおり\n表示「按照…」或「如…所述」。\n使用場景：描述遵循某指示或模式。",
          examples: [
            {
              sentence: "🔹 先生の言ったとおりにした。",
              translation: "按照老師說的去做。",
              analysis: "句中「言ったとおり」由「言う」的た形後加「とおり」，表示完全按照老師的指示行動，強調遵循性。",
            },
            {
              sentence: "🔹 予定のとおり進んだ。",
              translation: "按照計劃進行。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "79. ～どおり",
          meaning: "表示完全按照某方式或內容",
          description: "📌 句型說明：\n名詞 + どおり\n表示「完全按照…」或「正如…」。\n使用場景：強調完全符合某標準。",
          examples: [
            {
              sentence: "🔹 マニュアルどおりに作った。",
              translation: "完全按照說明書製作。",
              analysis: "",
            },
            {
              sentence: "🔹 計画どおりに終わった。",
              translation: "正如計劃結束。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "80. ～ないで",
          meaning: "表示不做某動作而進行另一動作",
          description: "📌 句型說明：\n動詞ない形 + で\n表示「不…而…」。\n使用場景：描述省略某動作的情況。",
          examples: [
            {
              sentence: "🔹 靴を脱がないで入った。",
              translation: "沒脫鞋就進去了。",
              analysis: "句中「脱がないで」由「脱ぐ」的ない形後加「で」，表示未脫鞋直接進入，強調省略脫鞋動作。",
            },
            {
              sentence: "🔹 何も言わないで帰った。",
              translation: "什麼也沒說就走了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "81. ～ずに",
          meaning: "表示不做某動作而進行另一動作（書面語）",
          description: "📌 句型說明：\n動詞ない形去掉ない + ずに\n表示「不…而…」，較正式。\n使用場景：書面或正式場合描述省略動作。",
          examples: [
            {
              sentence: "🔹 朝ごはんを食べずに学校に行った。",
              translation: "沒吃早餐就去學校了。",
              analysis: "句中「食べずに」由「食べる」的ない形去掉「ない」後加「ずに」，表示未吃早餐直接上學，語氣較正式。",
            },
            {
              sentence: "🔹 許可を得ずに使った。",
              translation: "未經許可就用了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "82. ～まま",
          meaning: "表示某狀態保持不變",
          description: "📌 句型說明：\n動詞た形 / 名詞 + まま\n表示「保持…狀態」。\n使用場景：描述未改變的狀態。",
          examples: [
            {
              sentence: "🔹 ドアを開けたまま寝た。",
              translation: "開著門睡覺了。",
              analysis: "句中「開けたまま」由「開ける」的た形後加「まま」，表示門保持開著狀態未關，強調持續性。",
            },
            {
              sentence: "🔹 服を着たまま泳いだ。",
              translation: "穿著衣服游泳了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "83. ～っぱなし",
          meaning: "表示某狀態持續未改變，帶有負面意味",
          description: "📌 句型說明：\n動詞ます形去掉ます + っぱなし\n表示「一直…」或「沒關/沒停」。\n使用場景：批評未改變的狀態。",
          examples: [
            {
              sentence: "🔹 テレビをつけっぱなしにした。",
              translation: "電視一直開著。",
              analysis: "句中「つけっぱなし」由「つける」的ます形去掉「ます」後加「っぱなし」，表示電視未關一直開著，帶有疏忽的負面語氣。",
            },
            {
              sentence: "🔹 窓を開けっぱなしにした。",
              translation: "窗戶一直開著。",
              analysis: "",
            },
          ],
        },
      ],
    },
    {
      title: "條件與表達",
      sections: [
        {
          pattern: "84. ～限り",
          meaning: "表示某範圍或條件下的極限",
          description: "📌 句型說明：\n動詞普通形 / 名詞 + 限り\n表示「在…範圍內」或「只要…」。\n使用場景：限定條件或範圍。",
          examples: [
            {
              sentence: "🔹 私の知る限り、彼は来ない。",
              translation: "據我所知，他不會來。",
              analysis: "句中「知る限り」由「知る」後加「限り」，表示在說話者知識範圍內的判斷，強調有限的認知。",
            },
            {
              sentence: "🔹 時間の限り勉強する。",
              translation: "在時間範圍內學習。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "85. ～かわりに",
          meaning: "表示某事物代替另一事物",
          description: "📌 句型說明：\n動詞普通形 / 名詞 + かわりに\n表示「代替…」或「作為…的交換」。\n使用場景：描述替代行為。",
          examples: [
            {
              sentence: "🔹 彼の代わりに私がやった。",
              translation: "我代替他做了。",
              analysis: "",
            },
            {
              sentence: "🔹 お金のかわりに物を使った。",
              translation: "用東西代替錢。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "86. ～代わりに",
          meaning: "表示某事物作為另一事物的代替",
          description: "📌 句型說明：\n名詞 + 代わりに\n表示「代替…」或「與…交換」。\n使用場景：強調替代物。",
          examples: [
            {
              sentence: "🔹 コーヒーの代わりに紅茶を飲んだ。",
              translation: "喝紅茶代替咖啡。",
              analysis: "",
            },
            {
              sentence: "🔹 車の代わりに自転車を使った。",
              translation: "用腳踏車代替車。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "87. ～に対して",
          meaning: "表示某動作或態度的對象",
          description: "📌 句型說明：\n名詞 + に対して\n表示「對…」或「針對…」。\n使用場景：描述動作的對象。",
          examples: [
            {
              sentence: "🔹 彼に対して怒っている。",
              translation: "我對他生氣。",
              analysis: "",
            },
            {
              sentence: "🔹 問題に対して意見を述べた。",
              translation: "針對問題發表意見。",
              analysis: "句中「に対して」表示動作「述べた」（發表）的對象是「問題」，強調針對特定議題。",
            },
          ],
        },
        {
          pattern: "88. ～に関して",
          meaning: "表示某話題或內容的範圍",
          description: "📌 句型說明：\n名詞 + に関して\n表示「關於…」或「涉及…」。\n使用場景：討論特定主題。",
          examples: [
            {
              sentence: "🔹 環境問題に関して話した。",
              translation: "談論環境問題。",
              analysis: "",
            },
            {
              sentence: "🔹 新しい計画に関して質問がある。",
              translation: "關於新計劃有問題。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "89. ～について",
          meaning: "表示某話題或主題",
          description: "📌 句型說明：\n名詞 + について\n表示「關於…」或「對於…」。\n使用場景：表達討論或思考的主題。",
          examples: [
            {
              sentence: "🔹 日本の文化について話したい。",
              translation: "我想談談日本文化。",
              analysis: "",
            },
            {
              sentence: "🔹 試験について考えている。",
              translation: "我在想考試的事。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "90. ～に応じて",
          meaning: "表示根據某條件或情況採取行動",
          description: "📌 句型說明：\n名詞 + に応じて\n表示「根據…」或「隨著…」。\n使用場景：描述因應情況的行為。",
          examples: [
            {
              sentence: "🔹 状況に応じて対応します。",
              translation: "根據情況應對。",
              analysis: "句中「状況に応じて」表示根據「情況」（狀況）的不同，採取相應的「対応」（應對措施），強調靈活性。",
            },
            {
              sentence: "🔹 天気に応じて服を選ぶ。",
              translation: "根據天氣選衣服。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "91. ～に基づいて",
          meaning: "表示某事物以某基礎進行",
          description: "📌 句型說明：\n名詞 + に基づいて\n表示「基於…」或「根據…」。\n使用場景：描述依據或基礎。",
          examples: [
            {
              sentence: "🔹 調査に基づいて結論を出した。",
              translation: "基於調查得出結論。",
              analysis: "句中「調査に基づいて」表示結論的得出是以「調査」（調查）為基礎，強調依據的可靠性。",
            },
            {
              sentence: "🔹 ルールに基づいて行動する。",
              translation: "根據規則行動。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "92. ～を問わず",
          meaning: "表示不論某條件如何",
          description: "📌 句型說明：\n名詞 + を問わず\n表示「無論…」或「不管…」。\n使用場景：描述無條件的情況。",
          examples: [
            {
              sentence: "🔹 年齢を問わず参加できます。",
              translation: "無論年齡都可以參加。",
              analysis: "句中「年齢を問わず」表示參與活動不考慮「年齢」（年齡）限制，強調無條件性。",
            },
            {
              sentence: "🔹 時間を問わず連絡してください。",
              translation: "不管什麼時間都可以聯繫。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "93. ～にかけて",
          meaning: "表示某範圍或期間的持續",
          description: "📌 句型說明：\n名詞 + にかけて\n表示「從…到…」或「遍及…」。\n使用場景：描述時間或空間範圍。",
          examples: [
            {
              sentence: "🔹 夏にかけて暑くなる。",
              translation: "到了夏天會變熱。",
              analysis: "",
            },
            {
              sentence: "🔹 全国にかけて雨が降る。",
              translation: "全國都會下雨。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "94. ～に沿って",
          meaning: "表示按照某路線或方針進行",
          description: "📌 句型說明：\n名詞 + に沿って\n表示「沿著…」或「按照…」。\n使用場景：描述遵循路線或規則。",
          examples: [
            {
              sentence: "🔹 川に沿って歩いた。",
              translation: "沿著河走。",
              analysis: "",
            },
            {
              sentence: "🔹 規則に沿って進める。",
              translation: "按照規則進行。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "95. ～につれて",
          meaning: "表示隨著某事物的變化而變化",
          description: "📌 句型說明：\n動詞普通形 / 名詞 + につれて\n表示「隨著…」或「伴隨…」。\n使用場景：描述連動的變化。",
          examples: [
            {
              sentence: "🔹 年を取るにつれて、体力が落ちる。",
              translation: "隨著年齡增長，體力下降。",
              analysis: "句中「年を取るにつれて」表示隨著「年を取る」（年齡增長），「体力」（體力）隨之「落ちる」（下降），強調因果變化。",
            },
            {
              sentence: "🔹 夜になるにつれて、寒くなる。",
              translation: "隨著夜晚到來，變冷了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "96. ～とともに",
          meaning: "表示某事物與另一事物同時發生",
          description: "📌 句型說明：\n動詞普通形 / 名詞 + とともに\n表示「與…一起」或「伴隨…」。\n使用場景：描述同時性。",
          examples: [
            {
              sentence: "🔹 技術の進歩とともに、生活が変わった。",
              translation: "隨著技術進步，生活改變了。",
              analysis: "句中「技術の進歩とともに」表示「技術の進歩」（技術進步）與「生活が変わった」（生活改變）同時發生，強調連動關係。",
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
          meaning: "表示某結論或理由的推斷",
          description: "📌 句型說明：\n動詞普通形 / い形容詞 / な形容詞 + わけだ\n表示「難怪…」或「這就是…的原因」。\n使用場景：解釋原因或結論。",
          examples: [
            {
              sentence: "🔹 毎日練習したから、上手になったわけだ。",
              translation: "每天練習，難怪變厲害了。",
              analysis: "句中「練習したから、上手になったわけだ」表示因「毎日練習した」（每天練習），得出「上手になった」（變厲害）的結論，「わけだ」強調這是原因。",
            },
            {
              sentence: "🔹 忙しいわけだ。",
              translation: "這就是忙的原因。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "98. ～わけにはいかない",
          meaning: "表示因為某理由不能做某事",
          description: "📌 句型說明：\n動詞普通形 + わけにはいかない\n表示「不能…」或「不得不…」。\n使用場景：表達義務或限制。",
          examples: [
            {
              sentence: "🔹 約束したから、行かないわけにはいかない。",
              translation: "既然答應了，就不能不去。",
              analysis: "句中「行かないわけにはいかない」由「行かない」後加「わけにはいかない」，表示因「約束した」（答應了），不能不履行，強調義務。",
            },
            {
              sentence: "🔹 友達の頼みだから、断るわけにはいかない。",
              translation: "因為是朋友的請求，不能拒絕。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "99. ～ことになる",
          meaning: "表示某事被決定或自然形成",
          description: "📌 句型說明：\n動詞普通形 + ことになる\n表示「決定…」或「結果是…」。\n使用場景：描述客觀決定或結果。",
          examples: [
            {
              sentence: "🔹 来週、海外に行くことになった。",
              translation: "決定下週去海外。",
              analysis: "句中「行くことになった」由「行く」後加「ことになる」，表示去海外的決定已形成，強調客觀結果。",
            },
            {
              sentence: "🔹 会議が中止になったことになる。",
              translation: "會議取消了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "100. ～ことにする",
          meaning: "表示說話者主觀決定某事",
          description: "📌 句型說明：\n動詞普通形 + ことにする\n表示「我決定…」或「打算…」。\n使用場景：表達主觀意願。",
          examples: [
            {
              sentence: "🔹 今日から早く寝ることにする。",
              translation: "我決定從今天開始早睡。",
              analysis: "",
            },
            {
              sentence: "🔹 彼の意見に従うことにした。",
              translation: "我決定聽他的意見。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "101. ～ことだ",
          meaning: "表示建議或希望某事發生",
          description: "📌 句型說明：\n動詞普通形 + ことだ\n表示「最好…」或「希望…」。\n使用場景：提出建議或期望。",
          examples: [
            {
              sentence: "🔹 もっと勉強することだ。",
              translation: "最好多學習。",
              analysis: "",
            },
            {
              sentence: "🔹 早く寝ることだ。",
              translation: "希望你早點睡。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "102. ～つもり",
          meaning: "表示說話者的意圖或計劃",
          description: "📌 句型說明：\n動詞普通形 + つもり\n表示「打算…」或「計劃…」。\n使用場景：表達個人計劃。",
          examples: [
            {
              sentence: "🔹 夏に旅行するつもりです。",
              translation: "我打算夏天去旅行。",
              analysis: "",
            },
            {
              sentence: "🔹 もう帰るつもりはない。",
              translation: "我沒打算回去。",
              analysis: "句中「帰るつもりはない」由「帰る」後加「つもり」並否定，表示說話者無意回歸，強調主觀意願。",
            },
          ],
        },
        {
          pattern: "103. ～予定だ",
          meaning: "表示某事的預定計劃",
          description: "📌 句型說明：\n動詞普通形 + 予定だ\n表示「計劃…」或「預定…」。\n使用場景：描述未來安排。",
          examples: [
            {
              sentence: "🔹 来週、友達に会う予定だ。",
              translation: "預定下週見朋友。",
              analysis: "",
            },
            {
              sentence: "🔹 新しい車を買う予定だ。",
              translation: "計劃買新車。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "104. ～らしい（推測）",
          meaning: "表示根據某證據推測某事",
          description: "📌 句型說明：\n動詞普通形 / い形容詞 / な形容詞 + らしい\n表示「好像…」或「似乎…」。\n使用場景：根據間接證據推測。",
          examples: [
            {
              sentence: "🔹 彼は忙しいらしい。",
              translation: "他好像很忙。",
              analysis: "",
            },
            {
              sentence: "🔹 この店は安いらしい。",
              translation: "這家店似乎很便宜。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "105. ～はずだ",
          meaning: "表示根據某理由應當如此",
          description: "📌 句型說明：\n動詞普通形 / い形容詞 / な形容詞 + はずだ\n表示「應該…」或「按理說…」。\n使用場景：表達合理預期。",
          examples: [
            {
              sentence: "🔹 彼はもう来たはずだ。",
              translation: "他應該已經來了。",
              analysis: "句中「来たはずだ」由「来る」後加「はずだ」，表示根據某理由（例如約定時間）推測他已到達，強調合理性。",
            },
            {
              sentence: "🔹 この問題は簡単なはずだ。",
              translation: "這個問題應該很簡單。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "106. ～ようがない",
          meaning: "表示某事無法做到",
          description: "📌 句型說明：\n動詞普通形 + ようがない\n表示「沒辦法…」或「無法…」。\n使用場景：表達無能為力。",
          examples: [
            {
              sentence: "🔹 時間がないから、行くようがない。",
              translation: "因為沒時間，沒辦法去。",
              analysis: "句中「行くようがない」由「行く」後加「ようがない」，表示因「時間がない」（沒時間）而無法前往，強調限制。",
            },
            {
              sentence: "🔹 説明のしようがない。",
              translation: "無法解釋。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "107. ～ように見える",
          meaning: "表示某事看起來像是某狀態",
          description: "📌 句型說明：\n動詞普通形 / い形容詞 / な形容詞 + ように見える\n表示「看起來像…」。\n使用場景：描述外觀印象。",
          examples: [
            {
              sentence: "🔹 彼は幸せそうに見える。",
              translation: "他看起來很幸福。",
              analysis: "",
            },
            {
              sentence: "🔹 空が暗そうに見える。",
              translation: "天空看起來很暗。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "108. ～ように思える",
          meaning: "表示某事給人某種感覺",
          description: "📌 句型說明：\n動詞普通形 / い形容詞 / な形容詞 + ように思える\n表示「感覺像…」。\n使用場景：描述主觀感受。",
          examples: [
            {
              sentence: "🔹 彼は親切そうに思える。",
              translation: "他感覺很親切。",
              analysis: "",
            },
            {
              sentence: "🔹 この仕事は難しそうに思える。",
              translation: "這份工作感覺很難。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "109. ～上で",
          meaning: "表示在某條件或階段之後",
          description: "📌 句型說明：\n動詞た形 / 名詞 + 上で\n表示「在…之後」或「在…基礎上」。\n使用場景：描述前置條件。",
          examples: [
            {
              sentence: "🔹 話し合った上で、決めました。",
              translation: "在討論後決定了。",
              analysis: "句中「話し合った上で」由「話し合う」的た形後加「上で」，表示在「話し合った」（討論）完成後才「決めました」（決定），強調前置條件。",
            },
            {
              sentence: "🔹 調査の上で、報告します。",
              translation: "在調查後報告。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "110. ～を通じて",
          meaning: "表示通過某媒介或期間",
          description: "📌 句型說明：\n名詞 + を通じて\n表示「通過…」或「經由…」。\n使用場景：描述媒介或時間跨度。",
          examples: [
            {
              sentence: "🔹 友達を通じて知り合った。",
              translation: "通過朋友認識的。",
              analysis: "",
            },
            {
              sentence: "🔹 一年を通じて暖かい。",
              translation: "全年都很溫暖。",
              analysis: "句中「一年を通じて」表示在「一年」的整個時間範圍內，氣候保持「暖かい」（溫暖），強調持續性。",
            },
          ],
        },
        {
          pattern: "111. ～にわたって",
          meaning: "表示某事持續某範圍或時間",
          description: "📌 句型說明：\n名詞 + にわたって\n表示「遍及…」或「持續…」。\n使用場景：描述長時間或廣範圍。",
          examples: [
            {
              sentence: "🔹 三日間にわたって会議をした。",
              translation: "連續三天開會。",
              analysis: "句中「三日間にわたって」表示會議持續「三日間」（三天），強調時間跨度。",
            },
            {
              sentence: "🔹 全国にわたって有名だ。",
              translation: "全國聞名。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "112. ～をきっかけに",
          meaning: "表示以某事為契機開始",
          description: "📌 句型說明：\n名詞 + をきっかけに\n表示「以…為契機」或「因為…而…」。\n使用場景：描述事件的起因。",
          examples: [
            {
              sentence: "🔹 旅行をきっかけに、日本語を勉強した。",
              translation: "因為旅行開始學日語。",
              analysis: "句中「旅行をきっかけに」表示「旅行」作為契機，促使「日本語を勉強した」（學習日語），強調因果關係。",
            },
            {
              sentence: "🔹 彼の言葉をきっかけに、考えが変わった。",
              translation: "因為他的話改變了想法。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "113. ～をもとに",
          meaning: "表示以某事物為基礎",
          description: "📌 句型說明：\n名詞 + をもとに\n表示「以…為基礎」或「根據…」。\n使用場景：描述依據來源。",
          examples: [
            {
              sentence: "🔹 データをもとに計画を作った。",
              translation: "根據數據制定計劃。",
              analysis: "句中「データをもとに」表示計劃的制定以「データ」（數據）為基礎，強調依據的具體性。",
            },
            {
              sentence: "🔹 本をもとに映画を作った。",
              translation: "根據書拍了電影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "114. ～を除いて",
          meaning: "表示排除某事物",
          description: "📌 句型說明：\n名詞 + を除いて\n表示「除了…」或「排除…」。\n使用場景：描述例外情況。",
          examples: [
            {
              sentence: "🔹 彼を除いて、皆来た。",
              translation: "除了他，大家都來了。",
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
          meaning: "表示某事物附加於另一事物",
          description: "📌 句型說明：\n名詞 + に加えて\n表示「除了…還…」或「加上…」。\n使用場景：描述附加內容。",
          examples: [
            {
              sentence: "🔹 勉強に加えて、運動もする。",
              translation: "除了學習還運動。",
              analysis: "",
            },
            {
              sentence: "🔹 本に加えて、ノートも買った。",
              translation: "除了書還買了筆記本。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "116. ～をめぐって",
          meaning: "表示圍繞某事物進行爭論或行動",
          description: "📌 句型說明：\n名詞 + をめぐって\n表示「圍繞…」或「關於…的爭論」。\n使用場景：描述爭議或焦點。",
          examples: [
            {
              sentence: "🔹 遺産をめぐって争った。",
              translation: "圍繞遺產爭執。",
              analysis: "句中「遺産をめぐって」表示爭執的焦點是「遺産」（遺產），強調圍繞某事物的衝突。",
            },
            {
              sentence: "🔹 計画をめぐって話し合った。",
              translation: "關於計劃進行討論。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "117. ～向き",
          meaning: "表示某事物適合某對象或用途",
          description: "📌 句型說明：\n名詞 + 向き\n表示「適合…」或「面向…」。\n使用場景：描述適宜性。",
          examples: [
            {
              sentence: "🔹 この本は初心者向きだ。",
              translation: "這本書適合初學者。",
              analysis: "",
            },
            {
              sentence: "🔹 子供向きの映画だ。",
              translation: "這是面向小孩的電影。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "118. ～次第",
          meaning: "表示某事取決於另一事",
          description: "📌 句型說明：\n動詞普通形 / 名詞 + 次第\n表示「取決於…」或「一旦…就…」。\n使用場景：描述依賴或順序。",
          examples: [
            {
              sentence: "🔹 天気次第で決めます。",
              translation: "取決於天氣決定。",
              analysis: "",
            },
            {
              sentence: "🔹 準備が終わり次第、始めます。",
              translation: "一旦準備好就開始。",
              analysis: "句中「終わり次第」由「終わる」後加「次第」，表示一旦「準備」（準備工作）完成，立即「始めます」（開始），強調順序性。",
            },
          ],
        },
        {
          pattern: "119. ～と同時に",
          meaning: "表示某事與另一事同時發生",
          description: "📌 句型說明：\n動詞普通形 / 名詞 + と同時に\n表示「與…同時」或「一邊…一邊…」。\n使用場景：描述同時性。",
          examples: [
            {
              sentence: "🔹 ドアを開けると同時に、電話が鳴った。",
              translation: "開門的同時，電話響了。",
              analysis: "句中「開けると同時に」由「開ける」後加「と同時に」，表示「開門」與「電話が鳴った」（電話響起）同時發生，強調時間重疊。",
            },
            {
              sentence: "🔹 仕事が終わると同時に、帰った。",
              translation: "工作一結束就回去了。",
              analysis: "",
            },
          ],
        },
        {
          pattern: "120. ～たびに",
          meaning: "表示每次某事發生時，另一事隨之發生",
          description: "📌 句型說明：\n動詞た形 / 名詞 + たびに\n表示「每次…時」或「一…就…」。\n使用場景：描述重複的連動事件。",
          examples: [
            {
              sentence: "🔹 彼に会うたびに、緊張する。",
              translation: "每次見他都緊張。",
              analysis: "句中「会うたびに」由「会う」的た形後加「たびに」，表示每次「会う」（見他）時，說話者都會「緊張する」（緊張），強調重複性。",
            },
            {
              sentence: "🔹 雨が降るたびに、傘を忘れる。",
              translation: "每次下雨都忘帶傘。",
              analysis: "",
            },
          ],
        },
      ],
    },
  ],
};

export default n3AdvanceGrammarZhTW;