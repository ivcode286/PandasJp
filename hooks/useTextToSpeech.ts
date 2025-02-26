import { Platform } from "react-native";
import * as Speech from "expo-speech";

const removeEmojis = (text: string): string => {
  return text.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");
};

const useTextToSpeech = () => {
  const speak = (text: string) => {
    if (!text) return;

    const sanitizedText = removeEmojis(text); // remove emoji

    if (Platform.OS === "web") {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(sanitizedText);
        utterance.lang = "ja-JP"; // Japanese language
        utterance.rate = 1.0; // Adjust speed
        window.speechSynthesis.speak(utterance);
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
