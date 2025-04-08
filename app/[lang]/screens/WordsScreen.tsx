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

interface Word {
  wordId: number;
  letter: string;
  letterOrder: number;
  words: string;
  pron: string;
  meaning: string;
  meaning_zh?: string;
}

interface Section {
  title: string;
  data: Word[];
  letterOrder: number;
}

export const sectionListRef = React.createRef<SectionList<Word>>();
export let globalSections: Section[] = [];

const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const ITEM_MARGIN = 8;

const groupWordsByLetter = (words: Word[]): Section[] => {
  const groups: { [letter: string]: { order: number; words: Word[] } } = {};
  words.forEach(word => {
    const letter = word.letter;
    if (!groups[letter]) {
      groups[letter] = { order: word.letterOrder, words: [] };
    }
    groups[letter].words.push(word);
  });
  return Object.entries(groups)
    .map(([letter, { order, words }]) => ({
      title: letter,
      data: words.sort((a, b) => a.wordId - b.wordId),
      letterOrder: order,
    }))
    .sort((a, b) => a.letterOrder - b.letterOrder);
};

const getItemLayout = sectionListGetItemLayout({
  getItemHeight: () => ITEM_HEIGHT + ITEM_MARGIN,
  getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

export const scrollToSection = (title: string): void => {
  const sectionIndex = globalSections.findIndex(section => section.title === title);
  if (sectionIndex !== -1 && sectionListRef.current) {
    sectionListRef.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex,
      viewPosition: 0,
    });
  }
};

export default function WordsScreen() {
  const { level } = useLocalSearchParams();
  const router = useRouter();
  const { t } = useTranslation('words');
  const { t: tCommon } = useTranslation('common');
  const { speak } = useTextToSpeech();
  const [sections, setSections] = useState<Section[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const levelString = Array.isArray(level) ? level[0] : level;
  const drawerWidth = 200;
  const gestureAreaWidth = Platform.OS === 'web' ? drawerWidth : 300; // iOS 上擴展到 300px
  const translateX = useSharedValue(drawerWidth); // Start closed

  const toggleDrawer = (open: boolean) => {
    console.log('Toggling drawer to:', open, 'Platform:', Platform.OS, 'isAnimating:', isAnimating);
    setDrawerOpen(open);
    setIsAnimating(true);
    translateX.value = withTiming(open ? 0 : drawerWidth, { duration: 300 }, () => {
      runOnJS(setIsAnimating)(false);
      console.log('Animation finished, isAnimating set to false, drawerOpen:', open);
    });
  };

  const panGesture = Gesture.Pan()
    .enabled(!isAnimating && Platform.OS !== 'web') // Web 上禁用手勢
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
    translateX.value = drawerWidth; // 初始位置關閉
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
      const words = t(key, { returnObjects: true }) as Word[];
      if (!Array.isArray(words)) {
        console.error(`t('${key}') did not return an array:`, words);
        setSections([]);
        return;
      }
      const transformedWords = words.map(word => ({
        ...word,
        meaning_zh: word.meaning,
      }));
      const groupedSections = groupWordsByLetter(transformedWords);
      setSections(groupedSections);
      globalSections = groupedSections;
    };
    loadWords();
  }, [level, t]);

  const drawerItems = (tCommon(`drawer.${levelString?.toUpperCase()}`, { returnObjects: true }) as string[]) || [];

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
            <IoniconsWeb name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            {levelString || 'Unknown Level'}
          </Text>
          <TouchableOpacity onPress={() => toggleDrawer(!drawerOpen)} style={styles.headerButton}>
            <IoniconsWeb name="menu" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentWrapper}>
          {sections.length === 0 ? (
            <Text style={styles.errorText}>No data available for level: {levelString || 'undefined'}</Text>
          ) : (
            <SectionList<Word>
              ref={sectionListRef}
              sections={sections}
              keyExtractor={(item, index) => item.wordId + index.toString()}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Text style={styles.words}>{item.words}</Text>
                  <Text style={styles.meaning}>{item.meaning_zh || 'No Translation'}</Text>
                  <View style={styles.row}>
                    <Text style={styles.reading}>{item.pron}</Text>
                    <TouchableOpacity onPress={() => speak(item.pron)} style={styles.speakerIcon}>
                      <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.headerContainer}>
                  <Text style={styles.sectionHeader}>{title || 'No Header'}</Text>
                </View>
              )}
              stickySectionHeadersEnabled={false}
              // @ts-ignore
              getItemLayout={getItemLayout}
              contentContainerStyle={styles.sectionListContent}
              style={styles.sectionList}
            />
          )}

          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[
                styles.drawerContainer,
                animatedStyle,
                { width: gestureAreaWidth }, // 擴展手勢區域
              ]}
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
    marginRight: 40, // 給按鈕留出更多空間，避免與手勢區域重疊
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
    paddingRight: 50, // 將整個 row 向左移，避免與手勢區域重疊
  },
  speakerIcon: {
    padding: 1,
    marginRight: 150, // 按鈕左移
  },
  errorText: {
    color: '#ff5555',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});