import { Platform } from "react-native";
import * as Speech from "expo-speech";

// 移除 emoji
const removeEmojis = (text: string): string => {
  return text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");
};

// 移除所有講話人名稱（支援全形「：」和半形「:」）
const removeSpeakerNames = (text: string): string => {
  return text.replace(/[^：:]+[：:]/g, "");
};

// 移除括號中的假名（支援半形 () 和全形 （））
const removeKanaInParentheses = (text: string): string => {
  // 匹配半形括號 () 和全形括號 （），括號內是任意字符
  return text.replace(/(\(.*? \)|\（.*?\）)/g, "");
};

const useTextToSpeech = () => {
  const speak = (text: string) => {
    if (!text) return;

    // 先移除 emoji，再移除講話人名稱，最後移除括號中的假名
    let sanitizedText = removeEmojis(text);
    sanitizedText = removeSpeakerNames(sanitizedText);
    sanitizedText = removeKanaInParentheses(sanitizedText);
    console.log("Original text:", text); // 顯示原始文字
    console.log("Sanitized text:", sanitizedText); // 顯示處理後的文字

    if (Platform.OS === "web") {
      if ("speechSynthesis" in window) {
        let voices = window.speechSynthesis.getVoices();
        console.log("Initial voices:", voices);

        const speakUtterance = () => {
          voices = window.speechSynthesis.getVoices();
          console.log("Updated voices:", voices);
          const japaneseVoice = voices.find((voice) => voice.lang === "ja-JP");
          console.log("Japanese voice:", japaneseVoice);

          const utterance = new SpeechSynthesisUtterance(sanitizedText);
          if (japaneseVoice) {
            utterance.voice = japaneseVoice;
          }
          utterance.lang = "ja-JP";
          utterance.rate = 1.0;
          utterance.onend = () => {
            console.log("Speech ended");
          };
          utterance.onerror = (e) => {
            console.error("Speech error:", e);
          };

          // 取消之前的語音，避免重疊
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        };

        if (!voices.length) {
          window.speechSynthesis.onvoiceschanged = () => {
            console.log("voiceschanged event triggered");
            speakUtterance();
          };
        } else {
          speakUtterance();
        }
      } else {
        alert("Text-to-Speech is not supported in this browser.");
      }
    } else {
      Speech.speak(sanitizedText, {
        language: "ja-JP",
        rate: 1.0,
      });
    }
  };

  return { speak };
};

export default useTextToSpeech;