// app/[lang]/screens/WordsScreen.tsx
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  StyleSheet,
  SectionList,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { LEVELS } from '@/src/utils/constants';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { insertAds, AdItem } from '@/src/utils/adUtils';

interface Word {
  wordId: number | string;
  letter: string;
  letterOrder: number;
  words: string;
  pron: string;
  meaning: string;
  meaning_zh?: string;
}

type SectionItem = Word | AdItem;

interface Section {
  title: string;
  data: SectionItem[];
  letterOrder: number;
}

export const sectionListRef = React.createRef<SectionList<SectionItem>>();
export let globalSections: Section[] = [];

const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const AD_HEIGHT = 50;
const ITEM_MARGIN = 8;

const AD_FREQUENCY = 6;
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8778852534152395/6522556607';

const groupWordsByLetter = (words: Word[]): Section[] => {
  const groups: { [letter: string]: { order: number; words: Word[] } } = {};
  words.forEach((word, index) => {
    const wordWithId = {
      ...word,
      wordId: word.wordId ?? `fallback-${index}`,
    };
    const letter = wordWithId.letter || 'Unknown';
    if (!groups[letter]) {
      groups[letter] = { order: wordWithId.letterOrder ?? 0, words: [] };
    }
    groups[letter].words.push(wordWithId);
  });

  const sections = Object.entries(groups)
    .map(([letter, { order, words }], sectionIndex) => {
      if (!words.length) {
        console.warn(`Empty section for letter: ${letter}`);
        return null;
      }
      // Ensure unique ad IDs by using sectionIndex
      const sectionData = insertAds(words, AD_FREQUENCY, sectionIndex);
      return {
        title: letter,
        data: sectionData,
        letterOrder: order,
      };
    })
    .filter((section): section is Section => section !== null)
    .sort((a, b) => a.letterOrder - b.letterOrder);

  if (__DEV__) {
    console.log('Generated sections:', sections.map(s => ({
      title: s.title,
      dataLength: s.data.length,
      adCount: s.data.filter(item => 'type' in item).length,
    })));
  }

  return sections;
};

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: (_, index) => {
    return index % (AD_FREQUENCY + 1) === AD_FREQUENCY ? AD_HEIGHT + ITEM_MARGIN : ITEM_HEIGHT + ITEM_MARGIN;
  },
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

export const scrollToSection = (title: string): void => {
  const sectionIndex = globalSections.findIndex((section) => section.title === title);
  if (sectionIndex !== -1 && sectionListRef.current) {
    sectionListRef.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewPosition: 0,
    });
  }
};

export default function WordsScreen({
  level: staticLevel,
  sections: staticSections,
}: {
  level?: string;
  sections?: Section[];
}) {
  const { level: paramLevel, lang } = useLocalSearchParams();
  const router = useRouter();
  const { t } = useTranslation(['words', 'common', 'home']);
  const { speak } = useTextToSpeech();
  const [sections, setSections] = useState<Section[]>(staticSections || []);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const level = staticLevel || paramLevel || '';
  const levelString = Array.isArray(level) ? level[0] : level;
  const effectiveLang = typeof lang === 'string' ? lang : 'zh-tw';
  const drawerWidth = 200;
  const gestureAreaWidth = Platform.OS === 'web' ? drawerWidth : 350;
  const translateX = useSharedValue(drawerWidth);

  const levelToTranslationKey: { [key: string]: string } = {
    [LEVELS.N5]: 'words_n5',
    [LEVELS.N5_KANJI]: 'kanji_n5',
    [LEVELS.N4_N3]: 'words_n4_n3',
  };

  const headerTitle = levelString && levelToTranslationKey[levelString]
    ? t(`home:menu.${levelToTranslationKey[levelString]}`, 'Words')
    : 'Words';

  const toggleDrawer = (open: boolean) => {
    console.log('Toggling drawer to:', open, 'Platform:', Platform.OS, 'isAnimating:', isAnimating);
    setDrawerOpen(open);
    setIsAnimating(true);
    translateX.value = withTiming(open ? 0 : drawerWidth, { duration: 300 }, () => {
      runOnJS(setIsAnimating)(false);
      console.log('Animation finished, isAnimating set to false, drawerOpen:', open);
    });
  };

  const handleBackPress = () => {
    if (Platform.OS === 'web' && !router.canGoBack()) {
      router.replace(`/${effectiveLang}/(tabs)`);
    } else {
      router.back();
    }
  };

  const panGesture = Gesture.Pan()
    .enabled(!isAnimating && Platform.OS !== 'web')
    .onStart((event) => {
      console.log('Gesture started, drawerOpen:', drawerOpen, 'Platform:', Platform.OS, 'x:', event.x);
    })
    .onUpdate((event) => {
      const offset = drawerOpen ? 0 : drawerWidth;
      const newX = Math.max(0, Math.min(event.translationX + offset, drawerWidth));
      translateX.value = newX;
      console.log('Gesture updating, translationX:', event.translationX, 'newX:', newX);
    })
    .onEnd((event) => {
      console.log('Gesture ended, translationX:', event.translationX);
      const threshold = drawerWidth * 0.1;
      const shouldOpen = drawerOpen
        ? event.translationX < threshold
        : event.translationX < -threshold;
      runOnJS(toggleDrawer)(shouldOpen);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  useEffect(() => {
    console.log(`Current Level in WordsScreen: ${level}, Platform: ${Platform.OS}`);
    translateX.value = drawerWidth;
    if (!staticSections) {
      const loadWords = () => {
        if (!level || typeof level !== 'string') {
          console.error('Level is undefined or not a string');
          setSections([]);
          return;
        }
        let key: string;
        if (level === LEVELS.N5) key = 'n5';
        else if (level === LEVELS.N5_KANJI) key = 'n5_kanji';
        else if (level === LEVELS.N4_N3) key = 'n4n3';
        else {
          console.error(`Invalid level: ${level}`);
          setSections([]);
          return;
        }
        const words = t(`words:${key}`, { returnObjects: true }) as Word[];
        if (__DEV__) {
          console.log(`Raw words for ${key}:`, words);
        }
        if (!Array.isArray(words)) {
          console.error(`t('words:${key}') did not return an array:`, words);
          setSections([]);
          return;
        }
        const transformedWords = words.map((word, index) => ({
          ...word,
          wordId: word.wordId ?? `fallback-${key}-${index}`,
          letter: word.letter || 'Unknown',
          letterOrder: word.letterOrder ?? 0,
          meaning_zh: word.meaning_zh ?? word.meaning,
        }));
        const groupedSections = groupWordsByLetter(transformedWords);
        setSections(groupedSections);
        globalSections = groupedSections;
      };
      loadWords();
    } else {
      globalSections = staticSections;
    }
  }, [level, t, staticSections]);

  const drawerItems =
    (t(`common:drawer.${levelString?.toUpperCase()}`, { returnObjects: true }) as string[]) || [];

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackPress} style={styles.headerButton}>
            <IoniconsWeb name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            {headerTitle}
          </Text>
          <TouchableOpacity onPress={() => toggleDrawer(!drawerOpen)} style={styles.headerButton}>
            <IoniconsWeb name="menu" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentWrapper}>
          {sections.length === 0 ? (
            <Text style={styles.errorText}>No data available for level: {levelString || 'undefined'}</Text>
          ) : (
            <SectionList<SectionItem>
              ref={sectionListRef}
              sections={sections}
              keyExtractor={(item, index) => {
                if ('type' in item) {
                  const adId = item.id || `fallback-ad-${index}`; // Use || for simplicity
                  return `ad-${adId}`;
                }
                return `word-${item.wordId}-${index}`;
              }}
              renderItem={({ item }) => {
                if ('type' in item && item.type === 'ad') {
                  return (
                    <View style={styles.adContainer}>
                      <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.BANNER}
                        onAdFailedToLoad={(error) => console.error('Ad failed to load:', error)}
                      />
                    </View>
                  );
                }
                const word = item as Word;
                return (
                  <View style={styles.item}>
                    <Text style={styles.words}>{word.words}</Text>
                    <Text style={styles.meaning}>{word.meaning_zh || 'No Translation'}</Text>
                    <View style={styles.row}>
                      <Text style={styles.reading}>{word.pron}</Text>
                      <TouchableOpacity onPress={() => speak(word.pron)} style={styles.speakerIcon}>
                        <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.headerContainer}>
                  <Text style={styles.sectionHeader}>{title || 'No Header'}</Text>
                </View>
              )}
              stickySectionHeadersEnabled={false}
              getItemLayout={getItemLayout}
              contentContainerStyle={styles.sectionListContent}
              style={styles.sectionList}
            />
          )}

          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[styles.drawerContainer, animatedStyle, { width: gestureAreaWidth }]}
            >
              <View style={[styles.drawer, { width: drawerWidth }]}>
                <ScrollView>
                  {drawerItems.map((label: string) => (
                    <TouchableOpacity
                      key={label}
                      style={styles.drawerItemVertical}
                      onPress={() => {
                        toggleDrawer(false);
                        setTimeout(() => scrollToSection(label), 300);
                      }}
                    >
                      <Text style={styles.drawerItemLabel}>{label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </Animated.View>
          </GestureDetector>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#121212',
    width: '100%',
    zIndex: 1001,
  },
  headerButton: {
    padding: 4,
    minWidth: 32,
  },
  headerTitle: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    flex: 1,
    marginHorizontal: 8,
  },
  contentWrapper: {
    flex: 1,
    position: 'relative',
  },
  sectionList: {
    flex: 1,
  },
  sectionListContent: {
    paddingBottom: 80,
    backgroundColor: '#121212',
  },
  drawerContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    zIndex: 1000,
  },
  drawer: {
    backgroundColor: '#121212',
    height: '100%',
    padding: 10,
    marginLeft: 'auto',
  },
  drawerItemVertical: {
    width: '100%',
    marginVertical: 4,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#444444',
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
  },
  drawerItemLabel: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
  },
  item: {
    backgroundColor: '#1e1e1e',
    padding: 20,
    height: ITEM_HEIGHT,
    borderRadius: 8,
    marginBottom: ITEM_MARGIN,
  },
  adContainer: {
    alignItems: 'center',
    marginBottom: ITEM_MARGIN,
    height: AD_HEIGHT,
  },
  headerContainer: {
    height: SECTION_HEADER_HEIGHT,
    justifyContent: 'center',
    backgroundColor: '#2a2a2a',
  },
  sectionHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#ffcc00',
  },
  words: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  reading: {
    fontSize: 18,
    color: '#ffffff',
    flex: 1,
    marginRight: 40,
  },
  meaning: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingRight: 50,
  },
  speakerIcon: {
    padding: 1,
    marginRight: 150,
  },
  errorText: {
    color: '#ff5555',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});