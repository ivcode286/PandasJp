const phoneticsZhCN = {
  intro: "日语 N5 基本发音规则与示例\n\n日语的发音主要由 平假名（ひらがな） 和 片假名（カタカナ） 组成，并且遵循固定的音节发音规则。以下是日语基本发音规则的详细说明，包括例子。",
  sections: {
    sei: {
      title: "1. 五十音图与基本发音",
      description:
        "日语的基本发音由 清音、浊音、半浊音、拗音、促音、长音 组成。\n\n📌 2.1 清音\n清音是最基础的发音，不带任何特殊符号（浊点゛或半浊点゜）的五十音假名。所有日语五十音的基本形态都属于清音。\n\n例如：\nか (ka), さ (sa), た (ta), は (ha)\nあ (a), い (i), う (u), え (e), お (o)（元音也是清音）\n\n点击下方「五十音图」可进入详情。",
    },
    dakuon: {
      title: "2. 浊音（だくおん）",
      description: "某些假名加上浊点「゛」（浊音符号）后，会变成浊音，发音较重。",
      data: [
        { row: "か行", a: "が (ga)", i: "ぎ (gi)", u: "ぐ (gu)", e: "げ (ge)", o: "ご (go)" },
        { row: "さ行", a: "ざ (za)", i: "じ (ji)", u: "ず (zu)", e: "ぜ (ze)", o: "ぞ (zo)" },
        { row: "た行", a: "だ (da)", i: "ぢ (ji)", u: "づ (zu)", e: "で (de)", o: "ど (do)" },
      ],
      extra:
        "📌 例句：\n• さがす（探す）：sagasu（寻找）\n• でんしゃ（电车）：densha（电车）\n• ざっし（杂志）：zasshi（杂志）",
    },
    handakuon: {
      title: "3. 半浊音（はんだくおん）",
      description: "「は行」的音加上「゜」（半浊音符号）后变成「ぱ行」，发音较轻。",
      data: [
        { row: "は行", a: "ぱ (pa)", i: "ぴ (pi)", u: "ぷ (pu)", e: "ぺ (pe)", o: "ぽ (po)" },
      ],
      extra:
        "📌 例句：\n• ぴあの（ピアノ）：piano（钢琴）\n• ぱん（パン）：pan（面包）",
    },
    sokuon: {
      title: "4. 促音（そくおん）",
      description:
        "促音「っ」表示发音时要短暂停顿，类似于英文的双子音发音，如「happen」。\n\n📌 例句：\n• きって（切手）：kitte（邮票）\n• ざっし（杂志）：zasshi（杂志）",
    },
    chouon: {
      title: "5. 长音（ちょうおん）",
      description: "日语中长音表示音节的延长，不同于短音，发音时间较长。",
      data: [
        { type: "あ行", mark: "あ → ああ", example: "おかあさん（母親）" },
        { type: "い行", mark: "い → いい", example: "にいさん（哥哥）" },
        { type: "う行", mark: "う → うう", example: "くうこう（机场）" },
        { type: "え行", mark: "え → えい", example: "せんせい（老师）" },
        { type: "お行", mark: "お → おう", example: "おとうさん（父亲）" },
      ],
    },
    youon: {
      title: "6. 拗音（ようおん）",
      description: "拗音是由「い」段的音加上小型「ゃ、ゅ、ょ」组成，发音会变成合成音。",
      data: [
        { combo: "きゃ（キャ）", romaji: "kya", example: "キャベツ（卷心菜）" },
        { combo: "きゅ（キュ）", romaji: "kyu", example: "キュウリ（黄瓜）" },
        { combo: "きょ（キョ）", romaji: "kyo", example: "東京（とうきょう）" },
      ],
    },
    summary: {
      title: "总结",
      items: [
        "清音（基础发音）",
        "浊音（が、ざ、だ等）",
        "半浊音（ぱ、ぴ等）",
        "促音（短暂停顿，如「きって」）",
        "长音（音节延长，如「せんせい」）",
        "拗音（合成音，如「きゃ、しゅ、ちょ」）",
      ],
    },
  },
};

export default phoneticsZhCN;