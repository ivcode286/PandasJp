interface StoryContent {
    sentence: string;
    translation: string;
  }
  
  interface StoryChapter {
    chapter: string;
    content: StoryContent[];
  }
  
  interface Story {
    title: string;
    imageName: string;
    story: StoryChapter[];
  }
  
  const n5StoryScreenZhTW: Story[] = [
    {
      title: "桃子姫の大冒険",
      imageName: "momoko.jpg",
      story: [
        {
          chapter: "第一章：桃子姫の誕生",
          content: [
            { sentence: "むかしむかし、ある村に、おじいさんとおばあさんがいました。", translation: "很久很久以前，在一個村莊裡，有一位老爺爺和老婆婆。" },
            { sentence: "ある日、おばあさんが川で洗濯をしています。", translation: "有一天，老婆婆正在河邊洗衣服。" },
            { sentence: "すると、大きい桃が流れてきました！", translation: "突然，一顆大大的桃子漂了過來！" },
            { sentence: "おばあさん：「大きいですね！持って帰りましょう！」", translation: "老婆婆：「好大啊！帶回家吧！」" },
            { sentence: "家で、桃を切ると、中から女の子が出てきました！", translation: "回到家後，當他們切開桃子時，一個女孩從裡面跑了出來！" },
            { sentence: "女の子：「やっと出られた！ここはどこですか？」", translation: "女孩：「終於出來了！這裡是哪裡？」" },
            { sentence: "おじいさん：「これは……桃太郎ですね！」", translation: "老爺爺：「這是……桃太郎吧！」" },
            { sentence: "女の子：「ちがいます！私は桃子姫です！」", translation: "女孩：「才不是！我是桃子姬！」" },
          ],
        },
        {
          chapter: "第二章：鬼ヶ島へ行こう！",
          content: [
            { sentence: "桃子姫は大人になりました。", translation: "桃子姬長大了。" },
            { sentence: "ある日、村人たちは困っていました。", translation: "有一天，村民們很困擾。" },
            { sentence: "村人：「鬼がたくさんのものを盗んでいます！」", translation: "村民：「鬼偷走了很多東西！」" },
            { sentence: "桃子姫：「なんですって？！鬼ヶ島へ行って、鬼をやっつけたいです！」", translation: "桃子姬：「什麼？！我要去鬼島，把鬼打敗！」" },
            { sentence: "おじいさんとおばあさんはきびだんごをくれました。", translation: "老爺爺和老婆婆給了她「黍米糰子」。" },
            { sentence: "おじいさん：「きびだんごを持っていきなさい。」", translation: "老爺爺：「帶上這些糰子吧。」" },
            { sentence: "桃子姫：「ありがとうございます！行ってきます！」", translation: "桃子姬：「謝謝！我出發了！」" },
          ],
        },
        // Add remaining chapters and stories from n5_story.json...
      ],
    },
    {
      title: "パンダの神社参りと雪の試練",
      imageName: "panda_shrine.jpg",
      story: [
        {
          chapter: "第一章：神社へ行きたい",
          content: [
            { sentence: "ある日、パンダは神社へ参拝（さんぱい）しようと思いました。", translation: "有一天，熊貓決定去神社參拜。" },
            { sentence: "パンダ：「神社でお願いごとをしたいです！」", translation: "熊貓：「我想去神社許願！」" },
            { sentence: "空は少し曇っていましたが、パンダは気にしませんでした。", translation: "天空有點陰沉，但熊貓並不在意。" },
            { sentence: "パンダは雪道を歩きながら、神社を目指しました。", translation: "熊貓踏著雪地，朝神社出發。" },
          ],
        },
        // Add remaining chapters...
      ],
    },
    // Add remaining stories...
  ];
  
  export default n5StoryScreenZhTW;