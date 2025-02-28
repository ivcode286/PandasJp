// N5StoryScreen.ts

// 定義故事資料的 TypeScript 介面
export interface StoryLine {
  sentence: string;
  translation: string;
}

export interface StoryChapter {
  chapter: string;
  content: StoryLine[];
}

export interface Story {
  title: string;
  imageName: string;
  story: StoryChapter[];
}

// 內嵌的故事資料
export const storiesData: Story[] = [
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
          { sentence: "女の子：「ちがいます！私は桃子姫です！」", translation: "女孩：「才不是！我是桃子姬！」" }
        ]
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
          { sentence: "桃子姫：「ありがとうございます！行ってきます！」", translation: "桃子姬：「謝謝！我出發了！」" }
        ]
      },
      {
        chapter: "第三章：第一位夥伴 - 犬",
        content: [
          { sentence: "桃子姫は歩いていると、一匹の犬に会いました。", translation: "桃子姬在路上走著，遇到了一隻狗。" },
          { sentence: "犬：「こんにちは！私はSNSが大好きな犬です！」", translation: "狗：「你好！我是超愛用社群媒體的狗！」" },
          { sentence: "桃子姫：「一緒に鬼ヶ島へ行きませんか？」", translation: "桃子姬：「要不要一起去鬼島？」" },
          { sentence: "犬：「いいですね！でも、きびだんごをくれますか？」", translation: "狗：「好啊！但可以給我糰子嗎？」" },
          { sentence: "桃子姫：「はい、どうぞ！」", translation: "桃子姬：「好，給你！」" },
          { sentence: "犬：「ありがとうございます！#桃子姫と冒険」", translation: "狗：「謝謝！#和桃子姬一起冒險」" }
        ]
      },
      {
        chapter: "第四章：第二位夥伴 - 猿",
        content: [
          { sentence: "次に、猿に会いました。", translation: "接著，她遇到了一隻猴子。" },
          { sentence: "猿：「私はアニメが大好きです！」", translation: "猴子：「我超愛動漫！」" },
          { sentence: "桃子姫：「じゃあ、一緒に鬼と戦いましょう！」", translation: "桃子姬：「那麼，我們一起去打鬼吧！」" },
          { sentence: "猿：「いいですね！でも、きびだんごが欲しいです。」", translation: "猴子：「好啊！但我想要糰子。」" },
          { sentence: "桃子姫：「はい、どうぞ！」", translation: "桃子姬：「好，給你！」" }
        ]
      },
      {
        chapter: "第五章：第三位夥伴 - 雉",
        content: [
          { sentence: "最後に、雉に会いました。", translation: "最後，她遇到了一隻雉雞。" },
          { sentence: "雉：「私は強いですよ！」", translation: "雉雞：「我很強喔！」" },
          { sentence: "桃子姫：「一緒に鬼を倒しましょう！」", translation: "桃子姬：「我們一起去打鬼吧！」" },
          { sentence: "雉：「OK！でも、きびだんごをください！」", translation: "雉雞：「好啊！但請給我糰子！」" }
        ]
      },
      {
        chapter: "第六章：鬼ヶ島での戦い",
        content: [
          { sentence: "桃子姫と仲間たちは鬼ヶ島に着きました。", translation: "桃子姬和夥伴們到達了鬼島。" },
          { sentence: "鬼：「やめてください！このきびだんごを食べたら、全部返します！」", translation: "鬼：「請住手！這糰子太好吃了，我把東西全部還給你們！」" },
          { sentence: "桃子姫：「本当ですか？」", translation: "桃子姬：「真的嗎？」" },
          { sentence: "鬼：「はい！おいしすぎます！」", translation: "鬼：「真的！太好吃了！」" }
        ]
      },
      {
        chapter: "第七章：大成功！",
        content: [
          { sentence: "桃子姫たちは村に帰りました。", translation: "桃子姬他們回到了村莊。" },
          { sentence: "村人：「桃子姫！ありがとう！」", translation: "村民：「桃子姬！謝謝！」" },
          { sentence: "桃子姫：「みんなで勝ちました！」", translation: "桃子姬：「我們一起贏了！」" }
        ]
      }
    ]
  },
  {
    title: "パンダの神社参りと雪の試練",
    imageName: "panda_shrine.jpg",
    story: [
      {
        chapter: "第一章：神社へ行きたい",
        content: [
          { sentence: "ある日、パンダは神社へ参拝（さんぱい）しようと思いました。", translation: "有一天，熊猫決定去神社參拜。" },
          { sentence: "パンダ：「神社でお願いごとをしたいです！」", translation: "熊猫：「我想去神社許願！」" },
          { sentence: "空は少し曇っていましたが、パンダは気にしませんでした。", translation: "天空有點陰沉，但熊猫並不在意。" },
          { sentence: "パンダは雪道を歩きながら、神社を目指しました。", translation: "熊猫踏著雪地，朝神社出發。" }
        ]
      },
      {
        chapter: "第二章：突然の暴風雪",
        content: [
          { sentence: "しばらく歩くと、突然、強い風と雪が降り始めました。", translation: "走了一會兒，突然颳起大風，開始下起暴風雪。" },
          { sentence: "パンダ：「えっ？こんなに雪が降るなんて…。」", translation: "熊猫：「咦？怎麼會下這麼大的雪…。」" },
          { sentence: "視界が悪くなり、道が見えなくなりました。", translation: "能見度變得很差，路都看不清了。" },
          { sentence: "その時、雪だるまが現れました！", translation: "這時，一個雪人出現了！" }
        ]
      },
      {
        chapter: "第三章：雪だるまの忠告",
        content: [
          { sentence: "雪だるま：「パンダさん、危ないですよ！早く帰りましょう！」", translation: "雪人：「熊猫，這裡很危險！快回家吧！」" },
          { sentence: "パンダ：「でも、今戻るのはもっと危ないです…。」", translation: "熊猫：「可是，現在回頭更危險…。」" },
          { sentence: "雪がたくさん降って、帰り道が隠れてしまいました。", translation: "因為大雪，回去的路已經完全被埋住了。" },
          { sentence: "パンダ：「進むしかありません！」", translation: "熊猫：「只能繼續向前了！」" },
          { sentence: "雪だるま：「そうですか…気をつけてください。」", translation: "雪人：「這樣啊…請小心。」" }
        ]
      },
      {
        chapter: "第四章：仙人の助け",
        content: [
          { sentence: "パンダは雪の中を一生懸命歩き続けました。", translation: "熊猫在大雪中努力地繼續前進。" },
          { sentence: "その姿を見て、仙子が現れました。", translation: "看到這一幕，仙子現身了。" },
          { sentence: "仙子：「あなたの強い心に感動しました。助けてあげましょう！」", translation: "仙子：「你的決心讓我很感動，我來幫助你吧！」" },
          { sentence: "仙子は魔法で雪を軽くして、パンダを温かい場所へ連れて行きました。", translation: "仙子用魔法減輕了風雪，並帶熊猫到一個溫暖的地方。" }
        ]
      },
      {
        chapter: "第五章：温かい紅豆湯",
        content: [
          { sentence: "仙子はパンダのために、温かい紅豆湯を作りました。", translation: "仙子為熊猫煮了一碗溫熱的紅豆湯。" },
          { sentence: "パンダ：「わあ！いいにおいですね！」", translation: "熊猫：「哇！好香啊！」" },
          { sentence: "パンダは紅豆湯を飲んで、体がぽかぽかになりました。", translation: "熊猫喝了紅豆湯，身體變得暖暖的。" },
          { sentence: "仙子：「もう大丈夫ですよ。雪も止まりました。」", translation: "仙子：「已經沒事了。雪也停了。」" }
        ]
      },
      {
        chapter: "第六章：神社への到着",
        content: [
          { sentence: "やがて太陽が出て、天気が良くなりました。", translation: "不久後，太陽出來了，天氣變好了。" },
          { sentence: "パンダ：「よかった！これなら神社に行けます！」", translation: "熊猫：「太好了！這樣就能去神社了！」" },
          { sentence: "パンダはお礼を言って、仙子に別れを告げました。", translation: "熊猫向仙子道謝，並告別了她。" },
          { sentence: "そして、ついに神社に到着しました！", translation: "最後，熊猫終於抵達神社！" },
          { sentence: "パンダ：「がんばってよかった！神様にお願いをしましょう！」", translation: "熊猫：「努力沒有白費！我要來向神明許願！」" }
        ]
      }
    ]
  },
  // 以下為其他故事，已根據你的 JSON 補全
  {
    title: "肥猫と不思議なケーキ",
    imageName: "fat_cat.jpg",
    story: [
      {
        chapter: "第一章：肥猫の夢",
        content: [
          { sentence: "むかしむかし、ある町に、とても太った猫がいました。", translation: "很久很久以前，在一個小鎮上，有一隻非常肥的貓。" },
          { sentence: "その猫はいつもゴロゴロして、あまり働きません。", translation: "那隻貓總是懶洋洋地躺著，不太做事。" },
          { sentence: "猫：「うーん、ケーキが食べたいです……。」", translation: "貓：「唔……我想吃蛋糕……。」" },
          { sentence: "町の人：「噂によると、隣の島に不思議なケーキがあるそうですよ。」", translation: "鎮民：「聽說在隔壁的島上，有一個神奇的蛋糕哦。」" },
          { sentence: "猫：「行きたいです！でも、ねむい……。」", translation: "貓：「我想去！不過，好想睡……。」" }
        ]
      },
      {
        chapter: "第二章：寝過ごしたクルーズ船",
        content: [
          { sentence: "猫は旅の準備をしましたが、すぐに疲れて眠ってしまいました。", translation: "貓在準備旅行時，很快就累了並且睡著了。" },
          { sentence: "朝になると、クルーズ船はもう出発していました。", translation: "早上時，遊輪已經出發了。" },
          { sentence: "猫：「あれ？船がない！どうしよう……。」", translation: "貓：「咦？船不見了！該怎麼辦……。」" },
          { sentence: "町の人：「あなたが寝ている間に、クルーズ船は行ってしまいましたよ。」", translation: "鎮民：「在你睡著的時候，遊輪就已經開走了哦。」" },
          { sentence: "猫：「しまった！では、別の方法で島に行きます！」", translation: "貓：「糟糕！那我就用其他方法去那座島！」" }
        ]
      },
      {
        chapter: "第三章：ボロボロのボート",
        content: [
          { sentence: "猫は港へ行き、古いボートを見つけました。", translation: "貓來到港口，找到了一艘破舊的船。" },
          { sentence: "船頭：「このボートは安いですが、だいぶボロいですよ。」", translation: "船家：「這艘船很便宜，但已經很破爛了哦。」" },
          { sentence: "猫：「大丈夫です！ぼくはケーキを食べに行きたいです！」", translation: "貓：「沒問題！我想去吃蛋糕！」" },
          { sentence: "猫はボートに乗って、隣の島へ進み始めました。", translation: "貓坐上那艘破爛的船，朝隔壁的島出發。" },
          { sentence: "しかし、ボートはあまり速くありませんでした。", translation: "然而，這艘船的速度並不快。" }
        ]
      },
      {
        chapter: "第四章：重すぎる体",
        content: [
          { sentence: "猫はボートの上でまたうとうとしていました。", translation: "貓在船上又打起瞌睡。" },
          { sentence: "すると、ボートが少しずつ沈み始めました！", translation: "突然，船開始慢慢下沉了！" },
          { sentence: "猫：「えっ？どうして沈むのですか？」", translation: "貓：「咦？為什麼在下沉？」" },
          { sentence: "船頭：「あなたが重すぎるんですよ！早く水を出さないと！」", translation: "船家：「因為你太重了啊！快點把船裡的水舀出去！」" },
          { sentence: "猫：「大変だ！ぼく、がんばります！」", translation: "貓：「糟了！我、我會努力的！」" }
        ]
      },
      {
        chapter: "第五章：ケーキの島へ",
        content: [
          { sentence: "猫は一生懸命、水を外へかき出しました。", translation: "貓拚命地把船裡的水往外舀。" },
          { sentence: "何とかボートは沈まずに、島へ近づきました。", translation: "好不容易，船沒有完全下沉，並逐漸靠近島嶼。" },
          { sentence: "猫：「やった！もう少しです！」", translation: "貓：「太好了！就快到了！」" },
          { sentence: "ついに島に到着すると、そこには大きなケーキがありました！", translation: "終於抵達島上，發現那裡真的有超大的蛋糕！" },
          { sentence: "猫：「わあ！これが噂のケーキですね！」", translation: "貓：「哇！這就是傳聞中的蛋糕吧！」" },
          { sentence: "船頭：「苦労しましたが、到着できてよかったですね！」", translation: "船家：「雖然很辛苦，但能抵達真是太好了！」" }
        ]
      },
      {
        chapter: "第六章：ごほうびのケーキ",
        content: [
          { sentence: "猫はケーキを食べて、とても幸せになりました。", translation: "貓吃了蛋糕，感到非常幸福。" },
          { sentence: "猫：「やっぱり寝てばかりではダメですね。少しは頑張ります！」", translation: "貓：「果然只會睡覺是不行的。我也要努力一點！」" },
          { sentence: "船頭：「そうですね。行動すると、美味しいごほうびがありますよ。」", translation: "船家：「是啊。只要行動，就會有美味的收穫呢。」" },
          { sentence: "それ以来、猫は少しだけまじめになりました。", translation: "從那以後，貓變得稍微認真了一點。" },
          { sentence: "でも、時々はやっぱりゴロゴロしていました。", translation: "不過，它還是會時不時地懶洋洋打滾。" }
        ]
      }
    ]
  },
  // 其他故事可以繼續補充，例如 "まほうしょうじょ ひかり" 等
];
