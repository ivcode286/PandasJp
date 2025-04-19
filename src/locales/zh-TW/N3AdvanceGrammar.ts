import { GrammarData } from "../../types/translation";

const n3AdvanceGrammarZhTW: GrammarData = {
  chapters: [
    {
      title: "動詞複合與狀態",
      sections: [
        {
          pattern: "51. ～ところ",
          meaning: "表示某動作或事件的時間點或狀態。",
          description: "📌 句型說明\n動詞普通形 + ところ\n用來表示正在做、即將做或剛做完某事。",
          examples: [
            {
              sentence: "🔹 今、食事をするところです。",
              translation: "（我正要吃飯。）",
            },
            {
              sentence: "🔹 家に帰ったところです。",
              translation: "（我剛回到家。）",
            },
          ],
        },
        {
          pattern: "52. ～ところだ",
          meaning: "強調某動作即將發生或剛剛完成。",
          description: "📌 句型說明\n動詞普通形 + ところだ\n強調動作的時間點，常帶有即時感。",
          examples: [
            {
              sentence: "🔹 これから出かけるところだ。",
              translation: "（我正要出門。）",
            },
            {
              sentence: "🔹 宿題を終えたところだ。",
              translation: "（我剛做完作業。）",
            },
          ],
        },
        {
          pattern: "53. ～ばかり",
          meaning: "表示某動作剛剛完成，強調時間上的接近。",
          description: "📌 句型說明\n動詞た形 + ばかり\n表示某事剛發生不久。",
          examples: [
            {
              sentence: "🔹 日本に来たばかりです。",
              translation: "（我剛來日本。）",
            },
            {
              sentence: "🔹 ご飯を食べたばかりだ。",
              translation: "（我剛吃完飯。）",
            },
          ],
        },
        {
          pattern: "54. ～ばかりいる",
          meaning: "表示某人總是做某事，帶有負面評價。",
          description: "📌 句型說明\n動詞て形 + ばかりいる\n常用於批評某人反覆做某事。",
          examples: [
            {
              sentence: "🔹 彼はゲームばかりしている。",
              translation: "（他總是玩遊戲。）",
            },
            {
              sentence: "🔹 テレビばかり見ている。",
              translation: "（總是看電視。）",
            },
          ],
        },
        {
          pattern: "55. ～だけ",
          meaning: "表示僅限於某事物或數量。",
          description: "📌 句型說明\n名詞 / 動詞普通形 + だけ\n表示「只有」或「僅僅」。",
          examples: [
            {
              sentence: "🔹 水だけ飲みます。",
              translation: "（我只喝水。）",
            },
            {
              sentence: "🔹 一回だけ行った。",
              translation: "（我只去了一次。）",
            },
          ],
        },
        {
          pattern: "56. ～だけで",
          meaning: "表示僅憑某條件即可達成。",
          description: "📌 句型說明\n動詞て形 + だけで\n強調「僅靠…就夠了」。",
          examples: [
            {
              sentence: "🔹 このボタンを押 押すだけで、機械が動きます。",
              translation: "（只要按這個按鈕，機器就會動。）",
            },
            {
              sentence: "🔹 お金だけで幸せになれない。",
              translation: "（光靠錢不能變幸福。）",
            },
          ],
        },
        {
          pattern: "57. ～しかない",
          meaning: "表示只有某事物，帶有「別無他物」的語氣。",
          description: "📌 句型說明\n名詞 + しかない\n表示「只有…，沒有其他的」。",
          examples: [
            {
              sentence: "🔹 ポケットにお金しかない。",
              translation: "（口袋裡只有錢。）",
            },
            {
              sentence: "🔹 時間しかない。",
              translation: "（只有時間。）",
            },
          ],
        },
        {
          pattern: "58. ～すぎる",
          meaning: "表示某事物的程度過高。",
          description: "📌 句型說明\n動詞ます形去掉ます / い形容詞去掉い / な形容詞 + すぎる\n表示「太…」或「過於…」。",
          examples: [
            {
              sentence: "🔹 食べすぎると、太ります。",
              translation: "（吃太多會變胖。）",
            },
            {
              sentence: "🔹 この服は派手すぎる。",
              translation: "（這件衣服太花俏了。）",
            },
          ],
        },
        {
          pattern: "59. ～やすい",
          meaning: "表示某動作或事情容易進行。",
          description: "📌 句型說明\n動詞ます形去掉ます + やすい\n表示某事因簡單或方便而容易達成。",
          examples: [
            {
              sentence: "🔹 この本は読みやすいです。",
              translation: "（這本書很好讀。）",
            },
            {
              sentence: "🔹 この靴は履きやすい。",
              translation: "（這雙鞋很好穿。）",
            },
          ],
        },
        {
          pattern: "60. ～にくい",
          meaning: "表示某動作或事情難以進行。",
          description: "📌 句型說明\n動詞ます形去掉ます + にくい\n表示某事因困難而不易達成。",
          examples: [
            {
              sentence: "🔹 この問題は解きにくい。",
              translation: "（這個問題很難解。）",
            },
            {
              sentence: "🔹 彼の字は読みにくい。",
              translation: "（他的字很難讀。）",
            },
          ],
        },
        {
          pattern: "61. ～がち",
          meaning: "表示某事有某種傾向，常帶負面意味。",
          description: "📌 句型說明\n動詞ます形去掉ます / 名詞 + がち\n表示「容易…」或「常常…」。",
          examples: [
            {
              sentence: "🔹 彼は遅れがちだ。",
              translation: "（他常常遲到。）",
            },
            {
              sentence: "🔹 忙しくて、忘れがちです。",
              translation: "（因為忙，常常忘記。）",
            },
          ],
        },
        {
          pattern: "62. ～つづける",
          meaning: "表示某動作持續進行。",
          description: "📌 句型說明\n動詞ます形去掉ます + つづける\n強調動作的連續性。",
          examples: [
            {
              sentence: "🔹 毎日、走りつづける。",
              translation: "（每天持續跑步。）",
            },
            {
              sentence: "🔹 彼は話しつづけた。",
              translation: "（他持續說話。）",
            },
          ],
        },
        {
          pattern: "63. ～かける",
          meaning: "表示某動作即將完成但未完成。",
          description: "📌 句型說明\n動詞ます形去掉ます + かける\n表示「差點…」或「正在…中途」。",
          examples: [
            {
              sentence: "🔹 コップを落としかけた。",
              translation: "（差點把杯子摔了。）",
            },
            {
              sentence: "🔹 宿題をやりかけた。",
              translation: "（作業做到一半。）",
            },
          ],
        },
        {
          pattern: "64. ～きる",
          meaning: "表示某動作徹底完成。",
          description: "📌 句型說明\n動詞ます形去掉ます + きる\n表示「完全…」或「全部…」。",
          examples: [
            {
              sentence: "🔹 本を読みきった。",
              translation: "（把書讀完了。）",
            },
            {
              sentence: "🔹 ケーキを食べきった。",
              translation: "（把蛋糕全吃光了。）",
            },
          ],
        },
        {
          pattern: "65. ～なおす",
          meaning: "表示重新做某事以修正。",
          description: "📌 句型說明\n動詞ます形去掉ます + なおす\n表示「重新…」或「修正…」。",
          examples: [
            {
              sentence: "🔹 間違えたので、書きなおした。",
              translation: "（因為寫錯了，所以重寫。）",
            },
            {
              sentence: "🔹 服を縫いなおした。",
              translation: "（把衣服重新縫好。）",
            },
          ],
        },
        {
          pattern: "66. ～おわる",
          meaning: "表示某動作或事件結束。",
          description: "📌 句型說明\n動詞ます形去掉ます + おわる\n表示「…結束」。",
          examples: [
            {
              sentence: "🔹 試験がやりおわった。",
              translation: "（考試做完了。）",
            },
            {
              sentence: "🔹 仕事を終わりおわった。",
              translation: "（工作結束了。）",
            },
          ],
        },
        {
          pattern: "67. ～直す",
          meaning: "表示修復或改正某事物。",
          description: "📌 句型說明\n動詞ます形去掉ます + 直す\n表示「修理…」或「改正…」。",
          examples: [
            {
              sentence: "🔹 壊れた時計を直した。",
              translation: "（修好了壞掉的鐘。）",
            },
            {
              sentence: "🔹 間違えた部分を直した。",
              translation: "（改正了錯誤的部分。）",
            },
          ],
        },
        {
          pattern: "68. ～直る",
          meaning: "表示某事物被修復或恢復。",
          description: "📌 句型說明\n動詞ます形去掉ます + 直る\n表示「被修好」或「恢復」。",
          examples: [
            {
              sentence: "🔹 壊れたパソコンが直った。",
              translation: "（壞掉的電腦修好了。）",
            },
            {
              sentence: "🔹 病気から直った。",
              translation: "（病好了。）",
            },
          ],
        },
        {
          pattern: "69. ～出す",
          meaning: "表示某動作突然開始或完成。",
          description: "📌 句型說明\n動詞ます形去掉ます + 出す\n表示「突然…」或「完成…」。",
          examples: [
            {
              sentence: "🔹 急に走り出した。",
              translation: "（突然跑起來。）",
            },
            {
              sentence: "🔹 宿題をやり出した。",
              translation: "（開始做作業。）",
            },
          ],
        },
        {
          pattern: "70. ～入れる",
          meaning: "表示某動作涉及放入或加入。",
          description: "📌 句型說明\n動詞ます形去掉ます + 入れる\n表示「放進…」或「加入…」。",
          examples: [
            {
              sentence: "🔹 カバンに本を入れました。",
              translation: "（把書放進包包裡。）",
            },
            {
              sentence: "🔹 スープに塩を入れた。",
              translation: "（在湯裡加了鹽。）",
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
          meaning: "表示某動作完全通過或超越。",
          description: "📌 句型說明\n動詞ます形去掉ます + 抜く\n表示「通過…」或「超越…」。",
          examples: [
            {
              sentence: "🔹 長いトンネルを抜けた。",
              translation: "（穿過了長隧道。）",
            },
            {
              sentence: "🔹 彼はライバルを抜いた。",
              translation: "（他超越了對手。）",
            },
          ],
        },
        {
          pattern: "72. ～込む",
          meaning: "表示某動作深入或擠進。",
          description: "📌 句型說明\n動詞ます形去掉ます + 込む\n表示「深入…」或「擠進…」。",
          examples: [
            {
              sentence: "🔹 部屋に駆け込んだ。",
              translation: "（衝進房間。）",
            },
            {
              sentence: "🔹 電車が混み込んだ。",
              translation: "（電車很擁擠。）",
            },
          ],
        },
        {
          pattern: "73. ～あげる",
          meaning: "表示給予某人某動作（對等或下級）。",
          description: "📌 句型說明\n動詞て形 + あげる\n表示「幫…做…」或「給…」。",
          examples: [
            {
              sentence: "🔹 友達に本を貸してあげた。",
              translation: "（借書給朋友。）",
            },
            {
              sentence: "🔹 子供に宿題を教えてあげた。",
              translation: "（幫小孩教作業。）",
            },
          ],
        },
        {
          pattern: "74. ～くれる",
          meaning: "表示某人為說話者做某事（恩惠）。",
          description: "📌 句型說明\n動詞て形 + くれる\n表示「為我…」或「給我…」。",
          examples: [
            {
              sentence: "🔹 友達がケーキを分けてくれた。",
              translation: "（朋友分給我蛋糕。）",
            },
            {
              sentence: "🔹 彼が助けてくれた。",
              translation: "（他幫了我。）",
            },
          ],
        },
        {
          pattern: "75. ～もらう",
          meaning: "表示說話者接受某人某動作。",
          description: "📌 句型說明\n動詞て形 + もらう\n表示「請…幫我…」或「從…得到…」。",
          examples: [
            {
              sentence: "🔹 先生に質問を教えてもらった。",
              translation: "（請老師幫我解答問題。）",
            },
            {
              sentence: "🔹 友達にお菓子をもらった。",
              translation: "（從朋友那得到點心。）",
            },
          ],
        },
        {
          pattern: "76. ～ていく",
          meaning: "表示某動作或狀態逐漸遠離或持續進行。",
          description: "📌 句型說明\n動詞て形 + いく\n表示「…而去」或「逐漸…」。",
          examples: [
            {
              sentence: "🔹 時間が過ぎていく。",
              translation: "（時間逐漸過去。）",
            },
            {
              sentence: "🔹 走っていく。",
              translation: "（跑遠了。）",
            },
          ],
        },
        {
          pattern: "77. ～てくる",
          meaning: "表示某動作或狀態逐漸接近或開始。",
          description: "📌 句型說明\n動詞て形 + くる\n表示「…而來」或「逐漸…」。",
          examples: [
            {
              sentence: "🔹 天気が暖かくなってきた。",
              translation: "（天氣逐漸暖和起來。）",
            },
            {
              sentence: "🔹 友達が走ってきた。",
              translation: "（朋友跑過來了。）",
            },
          ],
        },
        {
          pattern: "78. ～とおり",
          meaning: "表示按照某方式或內容進行。",
          description: "📌 句型說明\n動詞普通形 / 名詞 + とおり\n表示「按照…」或「如…所述」。",
          examples: [
            {
              sentence: "🔹 先生の言ったとおりにした。",
              translation: "（按照老師說的去做。）",
            },
            {
              sentence: "🔹 予定のとおり進んだ。",
              translation: "（按照計劃進行。）",
            },
          ],
        },
        {
          pattern: "79. ～どおり",
          meaning: "表示完全按照某方式或內容。",
          description: "📌 句型說明\n名詞 + どおり\n表示「完全按照…」或「正如…」。",
          examples: [
            {
              sentence: "🔹 マニュアルどおりに作った。",
              translation: "（完全按照說明書製作。）",
            },
            {
              sentence: "🔹 計画どおりに終わった。",
              translation: "（正如計劃結束。）",
            },
          ],
        },
        {
          pattern: "80. ～ないで",
          meaning: "表示不做某動作而進行另一動作。",
          description: "📌 句型說明\n動詞ない形 + で\n表示「不…而…」。",
          examples: [
            {
              sentence: "🔹 靴を脱がないで入った。",
              translation: "（沒脫鞋就進去了。）",
            },
            {
              sentence: "🔹 何も言わないで帰った。",
              translation: "（什麼也沒說就走了。）",
            },
          ],
        },
        {
          pattern: "81. ～ずに",
          meaning: "表示不做某動作而進行另一動作（書面語）。",
          description: "📌 句型說明\n動詞ない形去掉ない + ずに\n表示「不…而…」，較正式。",
          examples: [
            {
              sentence: "🔹 朝ごはんを食べずに学校に行った。",
              translation: "（沒吃早餐就去學校了。）",
            },
            {
              sentence: "🔹 許可を得ずに使った。",
              translation: "（未經許可就用了。）",
            },
          ],
        },
        {
          pattern: "82. ～まま",
          meaning: "表示某狀態保持不變。",
          description: "📌 句型說明\n動詞た形 / 名詞 + まま\n表示「保持…狀態」。",
          examples: [
            {
              sentence: "🔹 ドアを開けたまま寝た。",
              translation: "（開著門睡覺了。）",
            },
            {
              sentence: "🔹 服を着たまま泳いだ。",
              translation: "（穿著衣服游泳了。）",
            },
          ],
        },
        {
          pattern: "83. ～っぱなし",
          meaning: "表示某狀態持續未改變，帶有負面意味。",
          description: "📌 句型說明\n動詞ます形去掉ます + っぱなし\n表示「一直…」或「沒關/沒停」。",
          examples: [
            {
              sentence: "🔹 テレビをつけっぱなしにした。",
              translation: "（電視一直開著。）",
            },
            {
              sentence: "🔹 窓を開けっぱなしにした。",
              translation: "（窗戶一直開著。）",
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
          meaning: "表示某範圍或條件下的極限。",
          description: "📌 句型說明\n動詞普通形 / 名詞 + 限り\n表示「在…範圍內」或「只要…」。",
          examples: [
            {
              sentence: "🔹 私の知る限り、彼は来ない。",
              translation: "（據我所知，他不會來。）",
            },
            {
              sentence: "🔹 時間の限り勉強する。",
              translation: "（在時間範圍內學習。）",
            },
          ],
        },
        {
          pattern: "85. ～かわりに",
          meaning: "表示某事物代替另一事物。",
          description: "📌 句型說明\n動詞普通形 / 名詞 + かわりに\n表示「代替…」或「作為…的交換」。",
          examples: [
            {
              sentence: "🔹 彼の代わりに私がやった。",
              translation: "（我代替他做了。）",
            },
            {
              sentence: "🔹 お金のかわりに物を使った。",
              translation: "（用東西代替錢。）",
            },
          ],
        },
        {
          pattern: "86. ～代わりに",
          meaning: "表示某事物作為另一事物的代替。",
          description: "📌 句型說明\n名詞 + 代わりに\n表示「代替…」或「與…交換」。",
          examples: [
            {
              sentence: "🔹 コーヒーの代わりに紅茶を飲んだ。",
              translation: "（喝紅茶代替咖啡。）",
            },
            {
              sentence: "🔹 車の代わりに自転車を使った。",
              translation: "（用腳踏車代替車。）",
            },
          ],
        },
        {
          pattern: "87. ～に対して",
          meaning: "表示某動作或態度的對象。",
          description: "📌 句型說明\n名詞 + に対して\n表示「對…」或「針對…」。",
          examples: [
            {
              sentence: "🔹 彼に対して怒っている。",
              translation: "（我對他生氣。）",
            },
            {
              sentence: "🔹 問題に対して意見を述べた。",
              translation: "（針對問題發表意見。）",
            },
          ],
        },
        {
          pattern: "88. ～に関して",
          meaning: "表示某話題或內容的範圍。",
          description: "📌 句型說明\n名詞 + に関して\n表示「關於…」或「涉及…」。",
          examples: [
            {
              sentence: "🔹 環境問題に関して話した。",
              translation: "（談論環境問題。）",
            },
            {
              sentence: "🔹 新しい計画に関して質問がある。",
              translation: "（關於新計劃有問題。）",
            },
          ],
        },
        {
          pattern: "89. ～について",
          meaning: "表示某話題或主題。",
          description: "📌 句型說明\n名詞 + について\n表示「關於…」或「對於…」。",
          examples: [
            {
              sentence: "🔹 日本の文化について話したい。",
              translation: "（我想談談日本文化。）",
            },
            {
              sentence: "🔹 試験について考えている。",
              translation: "（我在想考試的事。）",
            },
          ],
        },
        {
          pattern: "90. ～に応じて",
          meaning: "表示根據某條件或情況採取行動。",
          description: "📌 句型說明\n名詞 + に応じて\n表示「根據…」或「隨著…」。",
          examples: [
            {
              sentence: "🔹 状況に応じて対応します。",
              translation: "（根據情況應對。）",
            },
            {
              sentence: "🔹 天気に応じて服を選ぶ。",
              translation: "（根據天氣選衣服。）",
            },
          ],
        },
        {
          pattern: "91. ～に基づいて",
          meaning: "表示某事物以某基礎進行。",
          description: "📌 句型說明\n名詞 + に基づいて\n表示「基於…」或「根據…」。",
          examples: [
            {
              sentence: "🔹 調査に基づいて結論を出した。",
              translation: "（基於調查得出結論。）",
            },
            {
              sentence: "🔹 ルールに基づいて行動する。",
              translation: "（根據規則行動。）",
            },
          ],
        },
        {
          pattern: "92. ～を問わず",
          meaning: "表示不論某條件如何。",
          description: "📌 句型說明\n名詞 + を問わず\n表示「無論…」或「不管…」。",
          examples: [
            {
              sentence: "🔹 年齢を問わず参加できます。",
              translation: "（無論年齡都可以參加。）",
            },
            {
              sentence: "🔹 時間を問わず連絡してください。",
              translation: "（不管什麼時間都可以聯繫。）",
            },
          ],
        },
        {
          pattern: "93. ～にかけて",
          meaning: "表示某範圍或期間的持續。",
          description: "📌 句型說明\n名詞 + にかけて\n表示「從…到…」或「遍及…」。",
          examples: [
            {
              sentence: "🔹 夏にかけて暑くなる。",
              translation: "（到了夏天會變熱。）",
            },
            {
              sentence: "🔹 全国にかけて雨が降る。",
              translation: "（全國都會下雨。）",
            },
          ],
        },
        {
          pattern: "94. ～に沿って",
          meaning: "表示按照某路線或方針進行。",
          description: "📌 句型說明\n名詞 + に沿って\n表示「沿著…」或「按照…」。",
          examples: [
            {
              sentence: "🔹 川に沿って歩いた。",
              translation: "（沿著河走。）",
            },
            {
              sentence: "🔹 規則に沿って進める。",
              translation: "（按照規則進行。）",
            },
          ],
        },
        {
          pattern: "95. ～につれて",
          meaning: "表示隨著某事物的變化而變化。",
          description: "📌 句型說明\n動詞普通形 / 名詞 + につれて\n表示「隨著…」或「伴隨…」。",
          examples: [
            {
              sentence: "🔹 年を取るにつれて、体力が落ちる。",
              translation: "（隨著年齡增長，體力下降。）",
            },
            {
              sentence: "🔹 夜になるにつれて、寒くなる。",
              translation: "（隨著夜晚到來，變冷了。）",
            },
          ],
        },
        {
          pattern: "96. ～とともに",
          meaning: "表示某事物與另一事物同時發生。",
          description: "📌 句型說明\n動詞普通形 / 名詞 + とともに\n表示「與…一起」或「伴隨…」。",
          examples: [
            {
              sentence: "🔹 技術の進歩とともに、生活が変わった。",
              translation: "（隨著技術進步，生活改變了。）",
            },
            {
              sentence: "🔹 友達とともに旅行した。",
              translation: "（和朋友一起旅行。）",
            },
          ],
        },
        {
          pattern: "97. ～わけだ",
          meaning: "表示某結論或理由的推斷。",
          description: "📌 句型說明\n動詞普通形 / い形容詞 / な形容詞 + わけだ\n表示「難怪…」或「這就是…的原因」。",
          examples: [
            {
              sentence: "🔹 毎日練習したから、上手になったわけだ。",
              translation: "（每天練習，難怪變厲害了。）",
            },
            {
              sentence: "🔹 忙しいわけだ。",
              translation: "（這就是忙的原因。）",
            },
          ],
        },
        {
          pattern: "98. ～わけにはいかない",
          meaning: "表示因為某理由不能做某事。",
          description: "📌 句型說明\n動詞普通形 + わけにはいかない\n表示「不能…」或「不得不…」。",
          examples: [
            {
              sentence: "🔹 約束したから、行かないわけにはいかない。",
              translation: "（既然答應了，就不能不去。）",
            },
            {
              sentence: "🔹 友達の頼みだから、断るわけにはいかない。",
              translation: "（因為是朋友的請求，不能拒絕。）",
            },
          ],
        },
        {
          pattern: "99. ～ことになる",
          meaning: "表示某事被決定或自然形成。",
          description: "📌 句型說明\n動詞普通形 + ことになる\n表示「決定…」或「結果是…」。",
          examples: [
            {
              sentence: "🔹 来週、海外に行くことになった。",
              translation: "（決定下週去海外。）",
            },
            {
              sentence: "🔹 会議が中止になったことになる。",
              translation: "（會議取消了。）",
            },
          ],
        },
        {
          pattern: "100. ～ことにする",
          meaning: "表示說話者主觀決定某事。",
          description: "📌 句型說明\n動詞普通形 + ことにする\n表示「我決定…」或「打算…」。",
          examples: [
            {
              sentence: "🔹 今日から早く寝ることにする。",
              translation: "（我決定從今天開始早睡。）",
            },
            {
              sentence: "🔹 彼の意見に従うことにした。",
              translation: "（我決定聽他的意見。）",
            },
          ],
        },
        {
          pattern: "101. ～ことだ",
          meaning: "表示建議或希望某事發生。",
          description: "📌 句型說明\n動詞普通形 + ことだ\n表示「最好…」或「希望…」。",
          examples: [
            {
              sentence: "🔹 もっと勉強することだ。",
              translation: "（最好多學習。）",
            },
            {
              sentence: "🔹 早く寝ることだ。",
              translation: "（希望你早點睡。）",
            },
          ],
        },
        {
          pattern: "102. ～つもり",
          meaning: "表示說話者的意圖或計劃。",
          description: "📌 句型說明\n動詞普通形 + つもり\n表示「打算…」或「計劃…」。",
          examples: [
            {
              sentence: "🔹 夏に旅行するつもりです。",
              translation: "（我打算夏天去旅行。）",
            },
            {
              sentence: "🔹 もう帰るつもりはない。",
              translation: "（我沒打算回去。）",
            },
          ],
        },
        {
          pattern: "103. ～予定だ",
          meaning: "表示某事的預定計劃。",
          description: "📌 句型說明\n動詞普通形 + 予定だ\n表示「計劃…」或「預定…」。",
          examples: [
            {
              sentence: "🔹 来週、友達に会う予定だ。",
              translation: "（預定下週見朋友。）",
            },
            {
              sentence: "🔹 新しい車を買う予定だ。",
              translation: "（計劃買新車。）",
            },
          ],
        },
        {
          pattern: "104. ～らしい（推測）",
          meaning: "表示根據某證據推測某事。",
          description: "📌 句型說明\n動詞普通形 / い形容詞 / な形容詞 + らしい\n表示「好像…」或「似乎…」。",
          examples: [
            {
              sentence: "🔹 彼は忙しいらしい。",
              translation: "（他好像很忙。）",
            },
            {
              sentence: "🔹 この店は安いらしい。",
              translation: "（這家店似乎很便宜。）",
            },
          ],
        },
        {
          pattern: "105. ～はずだ",
          meaning: "表示根據某理由應當如此。",
          description: "📌 句型說明\n動詞普通形 / い形容詞 / な形容詞 + はずだ\n表示「應該…」或「按理說…」。",
          examples: [
            {
              sentence: "🔹 彼はもう来たはずだ。",
              translation: "（他應該已經來了。）",
            },
            {
              sentence: "🔹 この問題は簡単なはずだ。",
              translation: "（這個問題應該很簡單。）",
            },
          ],
        },
        {
          pattern: "106. ～ようがない",
          meaning: "表示某事無法做到。",
          description: "📌 句型說明\n動詞普通形 + ようがない\n表示「沒辦法…」或「無法…」。",
          examples: [
            {
              sentence: "🔹 時間がないから、行くようがない。",
              translation: "（因為沒時間，沒辦法去。）",
            },
            {
              sentence: "🔹 説明のしようがない。",
              translation: "（無法解釋。）",
            },
          ],
        },
        {
          pattern: "107. ～ように見える",
          meaning: "表示某事看起來像是某狀態。",
          description: "📌 句型說明\n動詞普通形 / い形容詞 / な形容詞 + ように見える\n表示「看起來像…」。",
          examples: [
            {
              sentence: "🔹 彼は幸せそうに見える。",
              translation: "（他看起來很幸福。）",
            },
            {
              sentence: "🔹 空が暗そうに見える。",
              translation: "（天空看起來很暗。）",
            },
          ],
        },
        {
          pattern: "108. ～ように思える",
          meaning: "表示某事給人某種感覺。",
          description: "📌 句型說明\n動詞普通形 / い形容詞 / な形容詞 + ように思える\n表示「感覺像…」。",
          examples: [
            {
              sentence: "🔹 彼は親切そうに思える。",
              translation: "（他感覺很親切。）",
            },
            {
              sentence: "🔹 この仕事は難しそうに思える。",
              translation: "（這份工作感覺很難。）",
            },
          ],
        },
        {
          pattern: "109. ～上で",
          meaning: "表示在某條件或階段之後。",
          description: "📌 句型說明\n動詞た形 / 名詞 + 上で\n表示「在…之後」或「在…基礎上」。",
          examples: [
            {
              sentence: "🔹 話し合った上で、決めました。",
              translation: "（在討論後決定了。）",
            },
            {
              sentence: "🔹 調査の上で、報告します。",
              translation: "（在調查後報告。）",
            },
          ],
        },
        {
          pattern: "110. ～を通じて",
          meaning: "表示通過某媒介或期間。",
          description: "📌 句型說明\n名詞 + を通じて\n表示「通過…」或「經由…」。",
          examples: [
            {
              sentence: "🔹 友達を通じて知り合った。",
              translation: "（通過朋友認識的。）",
            },
            {
              sentence: "🔹 一年を通じて暖かい。",
              translation: "（全年都很溫暖。）",
            },
          ],
        },
        {
          pattern: "111. ～にわたって",
          meaning: "表示某事持續某範圍或時間。",
          description: "📌 句型說明\n名詞 + にわたって\n表示「遍及…」或「持續…」。",
          examples: [
            {
              sentence: "🔹 三日間にわたって会議をした。",
              translation: "（連續三天開會。）",
            },
            {
              sentence: "🔹 全国にわたって有名だ。",
              translation: "（全國聞名。）",
            },
          ],
        },
        {
          pattern: "112. ～をきっかけに",
          meaning: "表示以某事為契機開始。",
          description: "📌 句型說明\n名詞 + をきっかけに\n表示「以…為契機」或「因為…而…」。",
          examples: [
            {
              sentence: "🔹 旅行をきっかけに、日本語を勉強した。",
              translation: "（因為旅行開始學日語。）",
            },
            {
              sentence: "🔹 彼の言葉をきっかけに、考えが変わった。",
              translation: "（因為他的話改變了想法。）",
            },
          ],
        },
        {
          pattern: "113. ～をもとに",
          meaning: "表示以某事物為基礎。",
          description: "📌 句型說明\n名詞 + をもとに\n表示「以…為基礎」或「根據…」。",
          examples: [
            {
              sentence: "🔹 データをもとに計画を作った。",
              translation: "（根據數據制定計劃。）",
            },
            {
              sentence: "🔹 本をもとに映画を作った。",
              translation: "（根據書拍了電影。）",
            },
          ],
        },
        {
          pattern: "114. ～を除いて",
          meaning: "表示排除某事物。",
          description: "📌 句型說明\n名詞 + を除いて\n表示「除了…」或「排除…」。",
          examples: [
            {
              sentence: "🔹 彼を除いて、皆来た。",
              translation: "（除了他，大家都來了。）",
            },
            {
              sentence: "🔹 日曜日を除いて、毎日働く。",
              translation: "（除了星期天，每天都工作。）",
            },
          ],
        },
        {
          pattern: "115. ～に加えて",
          meaning: "表示某事物附加於另一事物。",
          description: "📌 句型說明\n名詞 + に加えて\n表示「除了…還…」或「加上…」。",
          examples: [
            {
              sentence: "🔹 勉強に加えて、運動もする。",
              translation: "（除了學習還運動。）",
            },
            {
              sentence: "🔹 本に加えて、ノートも買った。",
              translation: "（除了書還買了筆記本。）",
            },
          ],
        },
        {
          pattern: "116. ～をめぐって",
          meaning: "表示圍繞某事物進行爭論或行動。",
          description: "📌 句型說明\n名詞 + をめぐって\n表示「圍繞…」或「關於…的爭論」。",
          examples: [
            {
              sentence: "🔹 遺産をめぐって争った。",
              translation: "（圍繞遺產爭執。）",
            },
            {
              sentence: "🔹 計画をめぐって話し合った。",
              translation: "（關於計劃進行討論。）",
            },
          ],
        },
        {
          pattern: "117. ～向き",
          meaning: "表示某事物適合某對象或用途。",
          description: "📌 句型說明\n名詞 + 向き\n表示「適合…」或「面向…」。",
          examples: [
            {
              sentence: "🔹 この本は初心者向きだ。",
              translation: "（這本書適合初學者。）",
            },
            {
              sentence: "🔹 子供向きの映画だ。",
              translation: "（這是面向小孩的電影。）",
            },
          ],
        },
        {
          pattern: "118. ～次第",
          meaning: "表示某事取決於另一事。",
          description: "📌 句型說明\n動詞普通形 / 名詞 + 次第\n表示「取決於…」或「一旦…就…」。",
          examples: [
            {
              sentence: "🔹 天気次第で決めます。",
              translation: "（取決於天氣決定。）",
            },
            {
              sentence: "🔹 準備が終わり次第、始めます。",
              translation: "（一旦準備好就開始。）",
            },
          ],
        },
        {
          pattern: "119. ～と同時に",
          meaning: "表示某事與另一事同時發生。",
          description: "📌 句型說明\n動詞普通形 / 名詞 + と同時に\n表示「與…同時」或「一邊…一邊…」。",
          examples: [
            {
              sentence: "🔹 ドアを開けると同時に、電話が鳴った。",
              translation: "（開門的同時，電話響了。）",
            },
            {
              sentence: "🔹 仕事が終わると同時に、帰った。",
              translation: "（工作一結束就回去了。）",
            },
          ],
        },
        {
          pattern: "120. ～たびに",
          meaning: "表示每次某事發生時，另一事隨之發生。",
          description: "📌 句型說明\n動詞た形 / 名詞 + たびに\n表示「每次…時」或「一…就…」。",
          examples: [
            {
              sentence: "🔹 彼に会うたびに、緊張する。",
              translation: "（每次見他都緊張。）",
            },
            {
              sentence: "🔹 雨が降るたびに、傘を忘れる。",
              translation: "（每次下雨都忘帶傘。）",
            },
          ],
        },
      ],
    },
  ],
};


export default n3AdvanceGrammarZhTW;