//TravelChat.ts
const travelChatZhTW = {
    stories: [
      {
        title: "出發到機場",
        imageName: "airport-flight.jpg",
        story: [
          {
            chapter: "機場報到 Check-in：パンダ 在機場確認航班。",
            content: [
              { sentence: "パンダ: 「すみません、東京行きの飛行機（ひこうき）の予約（よやく）を確認（かくにん）したいです。」", translation: "パンダ: 「不好意思，我想確認去東京的飛機預訂。」" },
              { sentence: "スタッフ: 「かしこまりました。パスポートをください。」", translation: "工作人員: 「好的，請給我您的護照。」" },
              { sentence: "パンダ: 「はい、どうぞ。名前（なまえ）はパンダです。」", translation: "パンダ: 「好的，給您。我的名字是パンダ。」" },
              { sentence: "スタッフ: 「ありがとうございます。少々お待ちください。」", translation: "工作人員: 「謝謝，請稍等。」" },
              { sentence: "スタッフ: 「はい、確認できました。東京行きは午後（ごご）3時です。」", translation: "工作人員: 「好的，已確認。去東京的航班是下午3點。」" },
              { sentence: "パンダ: 「搭乗口（とうじょうぐち）はどこですか？」", translation: "パンダ: 「登機門在哪裡？」" },
              { sentence: "スタッフ: 「ゲート10番です。搭乗券（とうじょうけん）をどうぞ。」", translation: "工作人員: 「在10號登機門。這是您的登機證。」" },
            ],
          },
          {
            chapter: "行李托運 Baggage Check-in：パンダ 托運行李。",
            content: [
              { sentence: "パンダ: 「荷物（にもつ）を預（あず）けたいです。」", translation: "パンダ: 「我想托運行李。」" },
              { sentence: "スタッフ: 「荷物はいくつですか？」", translation: "工作人員: 「行李有幾件？」" },
              { sentence: "パンダ: 「二つです。一つはスーツケースで、もう一つはバッグです。」", translation: "パンダ: 「兩件。一件是行李箱，另一件是背包。」" },
              { sentence: "スタッフ: 「重さ（おもさ）を計（はか）りますね。大丈夫です。」", translation: "工作人員: 「我來稱一下重量。沒問題。」" },
              { sentence: "パンダ: 「ありがとうございます。手荷物（てにもつ）はこれだけです。」", translation: "パンダ: 「謝謝。我的手提行李就只有這個。」" },
              { sentence: "スタッフ: 「かしこまりました。荷物をこちらでお預かりします。」", translation: "工作人員: 「好的，我們會幫您處理行李。」" },
            ],
          },
          {
            chapter: "安檢 Security：小花🌸 通過安檢。",
            content: [
              { sentence: "係員（かかりいん）: 「かばんをこちらで開けてください。」", translation: "安檢人員: 「請在這裡打開您的包包。」" },
              { sentence: "小花: 「はい、わかりました。」", translation: "小花: 「好的，我知道了。」" },
              { sentence: "係員: 「水（みず）や飲み物（のみもの）はありますか？」", translation: "安檢人員: 「有水或飲料嗎？」" },
              { sentence: "小花: 「はい、水が一本（いっぽん）あります。」", translation: "小花: 「有，我有一瓶水。」" },
              { sentence: "係員: 「水はここで捨（す）ててください。」", translation: "安檢人員: 「請在這裡丟掉水。」" },
              { sentence: "小花: 「わかりました。捨てます。」", translation: "小花: 「明白了。我會丟掉。」" },
              { sentence: "係員: 「ありがとうございます。どうぞ、通ってください。」", translation: "安檢人員: 「謝謝，請通過。」" },
            ],
          },
          {
            chapter: "登機門等候 Boarding Gate：小花🌸 在登機門等待。",
            content: [
              { sentence: "小花: 「すみません、搭乗口（とうじょうぐち）はどこですか？」", translation: "小花: 「不好意思，登機門在哪裡？」" },
              { sentence: "スタッフ: 「ゲート5番です。あそこに座（すわ）って待ってください。」", translation: "工作人員: 「在5號登機門。請在那邊坐下等候。」" },
              { sentence: "小花: 「何時（なんじ）に乗りますか？」", translation: "小花: 「幾點登機？」" },
              { sentence: "スタッフ: 「午後（ごご）2時30分からです。もうすぐですよ。」", translation: "工作人員: 「從下午2點30分開始。很快就到了。」" },
              { sentence: "小花: 「ありがとうございます。トイレはどこですか？」", translation: "小花: 「謝謝。廁所在哪裡？」" },
              { sentence: "スタッフ: 「あそこです。搭乗（とうじょう）までまだ時間（じかん）がありますよ。」", translation: "工作人員: 「在那邊。離登機還有點時間。」" },
            ],
          },
          {
            chapter: "機上服務 In-flight Service：小花🌸 在飛機上請求服務。",
            content: [
              { sentence: "小花: 「すみません、お水をください。」", translation: "小花: 「不好意思，請給我水。」" },
              { sentence: "CA（キャビンアテンダント）: 「はい、かしこまりました。冷（つめ）たい水でいいですか？」", translation: "空服員: 「好的，冷水可以嗎？」" },
              { sentence: "小花: 「はい、大丈夫です。ありがとうございます。」", translation: "小花: 「可以，謝謝。」" },
              { sentence: "CA: 「毛布（もうふ）もお持ちしますか？」", translation: "空服員: 「要不要拿毯子給您？」" },
              { sentence: "小花: 「お願いします。ちょっと寒（さむ）いです。」", translation: "小花: 「麻煩了。有點冷。」" },
              { sentence: "CA: 「かしこまりました。こちらでお預かりします。」", translation: "空服員: 「好的，這是您的毯子。」" },
              { sentence: "小花: 「ありがとうございます。とても親切（しんせつ）ですね。」", translation: "小花: 「謝謝。您真親切。」" },
              { sentence: "CA: 「どういたしまして。快適（かいてき）な旅を！」", translation: "空服員: 「不客氣。祝您旅途愉快！」" },
            ],
          },
        ],
      },
    ],
  };
  
  export default travelChatZhTW;