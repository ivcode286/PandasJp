const phoneticsZhTW = {
  intro: "日語 N5 基本發音規則與示例\n\n日語的發音主要由 平假名（ひらがな） 和 片假名（カタカナ） 組成，並遵循固定的音節發音規則。以下是日語基本發音規則的詳細說明，包括例子。",
  sections: {
    sei: {
      title: "1. 五十音圖與基本發音",
      description:
        "日語的基本發音由 清音、濁音、半濁音、拗音、促音、長音 組成。\n\n📌 2.1 清音\n清音是最基礎的發音，不帶任何特殊符號（濁點゛或半濁點゜）的五十音假名。所有日語五十音的基本形態都屬於清音。\n\n例如：\nか (ka), さ (sa), た (ta), は (ha)\nあ (a), い (i), う (u), え (e), お (o)（元音也是清音）\n\n點擊下方「五十音圖」可進入詳情。",
    },
    dakuon: {
      title: "2. 濁音（だくおん）",
      description: "某些假名加上濁點「゛」（濁音符號）後，會變成濁音，發音較重。",
      data: [
        { row: "か行", a: "が (ga)", i: "ぎ (gi)", u: "ぐ (gu)", e: "げ (ge)", o: "ご (go)" },
        { row: "さ行", a: "ざ (za)", i: "じ (ji)", u: "ず (zu)", e: "ぜ (ze)", o: "ぞ (zo)" },
        { row: "た行", a: "だ (da)", i: "ぢ (ji)", u: "づ (zu)", e: "で (de)", o: "ど (do)" },
      ],
      extra:
        "📌 例句：\n• さがす（探す）：sagasu（尋找）\n• でんしゃ（電車）：densha（電車）\n• ざっし（雜誌）：zasshi（雜誌）",
    },
    handakuon: {
      title: "3. 半濁音（はんだくおん）",
      description: "「は行」的音加上「゜」（半濁音符號）後變成「ぱ行」，發音較輕。",
      data: [
        { row: "は行", a: "ぱ (pa)", i: "ぴ (pi)", u: "ぷ (pu)", e: "ぺ (pe)", o: "ぽ (po)" },
      ],
      extra:
        "📌 例句：\n• ぴあの（ピアノ）：piano（鋼琴）\n• ぱん（パン）：pan（麵包）",
    },
    sokuon: {
      title: "4. 促音（そくおん）",
      description:
        "促音「っ」表示發音時要短暫停頓，類似於英文的雙子音發音，如「happen」。\n\n📌 例句：\n• きって（切手）：kitte（郵票）\n• ざっし（雜誌）：zasshi（雜誌）",
    },
    chouon: {
      title: "5. 長音（ちょうおん）",
      description: "日語中長音表示音節的延長，不同於短音，發音時間較長。",
      data: [
        { type: "あ行", mark: "あ → ああ", example: "おかあさん（母親）" },
        { type: "い行", mark: "い → いい", example: "にいさん（哥哥）" },
        { type: "う行", mark: "う → うう", example: "くうこう（機場）" },
        { type: "え行", mark: "え → えい", example: "せんせい（老師）" },
        { type: "お行", mark: "お → おう", example: "おとうさん（父親）" },
      ],
    },
    youon: {
      title: "6. 拗音（ようおん）",
      description: "拗音是由「い」段的音加上小型「ゃ、ゅ、ょ」組成，發音會變成合成音。",
      data: [
        { combo: "きゃ（キャ）", romaji: "kya", example: "キャベツ（卷心菜）" },
        { combo: "きゅ（キュ）", romaji: "kyu", example: "キュウリ（黃瓜）" },
        { combo: "きょ（キョ）", romaji: "kyo", example: "東京（とうきょう）" },
      ],
    },
    summary: {
      title: "總結",
      items: [
        "清音（基礎發音）",
        "濁音（が、ざ、だ等）",
        "半濁音（ぱ、ぴ等）",
        "促音（短暫停頓，如「きって」）",
        "長音（音節延長，如「せんせい」）",
        "拗音（合成音，如「きゃ、しゅ、ちょ」）",
      ],
    },
  },
};

export default phoneticsZhTW;