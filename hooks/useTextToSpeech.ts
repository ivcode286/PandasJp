import { Platform } from "react-native";
import * as Speech from "expo-speech";

// Remove emojis
const removeEmojis = (text: string): string => {
  return text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");
};

// Remove speaker names (supports both full-width and half-width colon)
const removeSpeakerNames = (text: string): string => {
  return text.replace(/[^：:]+[：:]/g, "");
};

// Remove kana in parentheses (supports both half-width () and full-width （）)
const removeKanaInParentheses = (text: string): string => {
  // Match half-width () and full-width （） containing only kana (hiragana/katakana)
  return text.replace(/(\([ぁ-ゟ゠-ヿ]*?\)|\（[ぁ-ゟ゠-ヿ]*?\）)/g, "");
};

const useTextToSpeech = () => {
  const speak = (text: string) => {
    if (!text) return;

    // Process text: remove emojis, speaker names, and kana in parentheses
    let sanitizedText = removeEmojis(text);
    sanitizedText = removeSpeakerNames(sanitizedText);
    sanitizedText = removeKanaInParentheses(sanitizedText);
    console.log("Original text:", text); // Log original text
    console.log("Sanitized text:", sanitizedText); // Log processed text

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

          // Cancel previous speech to avoid overlap
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