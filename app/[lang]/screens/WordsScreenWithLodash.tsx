// WordsScreenWithLodash.tsx - Screen component for displaying words grouped by letter with alphabet index bar
import React, { useEffect, useState, useCallback, memo } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    StyleSheet,
    SectionList,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Platform,
    ScrollView,
    Dimensions,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { LEVELS } from '@/src/utils/constants';
import { IoniconsWeb } from '@/components/ui/IoniconsWeb';
import useTextToSpeech from '@/hooks/useTextToSpeech';
import debounce from 'lodash.debounce';

// Define Word interface
interface Word {
    wordId: number;
    letter: string;
    letterOrder: number;
    words: string;
    pron: string;
    meaning: string;
}

// Define Section interface
interface Section {
    title: string;
    data: Word[];
    letterOrder: number;
}

// Create ref for SectionList
export const sectionListRef = React.createRef<SectionList<Word>>();
// Global sections array
export let globalSections: Section[] = [];

// Constants for layout
const SECTION_HEADER_HEIGHT = 40;
const ITEM_HEIGHT = 140;
const ITEM_MARGIN = 8;
const INDEX_BAR_WIDTH = 40;

// Group words by letter
const groupWordsByLetter = (words: Word[]): Section[] => {
    const groups: { [letter: string]: { order: number; words: Word[] } } = {};
    words.forEach((word) => {
        const letter = word.letter;
        if (!letter) {
            console.warn(`Invalid letter for wordId: ${word.wordId}`, word);
        }
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

// Configure item layout for SectionList
const getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => ITEM_HEIGHT + ITEM_MARGIN,
    getSectionHeaderHeight: () => SECTION_HEADER_HEIGHT,
});

// Scroll to specific section
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

// Memoized Word Item component
const WordItem = memo(({ item, onSpeak }: { item: Word; onSpeak: (pron: string) => void }) => {
    return (
        <View style={[styles.item, { pointerEvents: 'box-none' }]}>
            <View style={styles.wordRow}>
                <Text style={styles.wordId}>{item.wordId}</Text>
                <Text style={styles.words}>{item.words}</Text>
            </View>
            <Text style={styles.meaning}>{item.meaning}</Text>
            <View style={[styles.row, { pointerEvents: 'box-none' }]}>
                <Text style={styles.reading}>{item.pron}</Text>
                <TouchableOpacity
                    onPress={() => {
                        console.log(`Speaker button pressed for wordId: ${item.wordId}, pron: ${item.pron}, platform: ${Platform.OS}`);
                        onSpeak(item.pron);
                    }}
                    style={[styles.speakerIcon, { zIndex: 12 }]}
                    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                    activeOpacity={0.7}
                >
                    <IoniconsWeb name="volume-high" size={24} color="#ffcc00" />
                </TouchableOpacity>
            </View>
        </View>
    );
});

// WordsScreenWithLodash component
export default function WordsScreenWithLodash({
    level: staticLevel,
    sections: staticSections,
}: {
    level?: string;
    sections?: Section[];
}) {
    // Hooks
    const { level: paramLevel, lang } = useLocalSearchParams();
    const router = useRouter();
    const { t } = useTranslation(['words', 'common', 'home']);
    const { speak } = useTextToSpeech();
    const [sections, setSections] = useState<Section[]>(staticSections || []);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [retryCount, setRetryCount] = useState(0);

    // Determine level
    const level = staticLevel || paramLevel || '';
    const levelString = Array.isArray(level) ? level[0] : level;
    const effectiveLang = typeof lang === 'string' ? lang : 'zh-tw';

    // Map level to translation key
    const levelToTranslationKey: { [key: string]: string } = {
        [LEVELS.N5]: 'words_n5',
        [LEVELS.N4]: 'words_n4',
        [LEVELS.N3]: 'words_n3',
        [LEVELS.N2]: 'words_n2',
        [LEVELS.N1]: 'words_n1',
        [LEVELS.N5_KANJI]: 'kanji_n5',
    };

    // Get header title
    const headerTitle = levelString && levelToTranslationKey[levelString]
        ? t(`home:menu.${levelToTranslationKey[levelString]}`, 'Words')
        : 'Words';

    // Debounced speak function with retry logic
    const debouncedSpeak = useCallback(
        debounce((text: string) => {
            if (isSpeaking && retryCount < 2) {
                console.log(`TTS skipped: already speaking, text: ${text}, retryCount: ${retryCount}`);
                setTimeout(() => {
                    setRetryCount((prev) => prev + 1);
                    debouncedSpeak(text);
                }, 1000);
                return;
            }
            if (isSpeaking && retryCount >= 2) {
                console.log(`TTS max retries reached for text: ${text}`);
                setRetryCount(0);
                setIsSpeaking(false);
                return;
            }
            setIsSpeaking(true);
            setRetryCount(0);
            console.log(`Debounced speak called with: ${text}`);
            try {
                speak(text);
                console.log(`TTS initiated for: ${text}`);
                // Simulate completion for non-Promise speak
                setTimeout(() => {
                    console.log(`TTS assumed completed for: ${text}`);
                    setIsSpeaking(false);
                }, 2000); // Adjust based on typical speech duration
            } catch (error) {
                console.error(`TTS error for text: ${text}`, error);
                setIsSpeaking(false);
                if (retryCount < 2) {
                    console.log(`Retrying TTS for text: ${text}, retryCount: ${retryCount + 1}`);
                    setTimeout(() => {
                        setRetryCount((prev) => prev + 1);
                        debouncedSpeak(text);
                    }, 1000);
                } else {
                    console.log(`TTS max retries reached for text: ${text}`);
                    setRetryCount(0);
                }
            }
        }, 500, { leading: true, trailing: false }),
        [speak, isSpeaking, retryCount]
    );

    // Handle back navigation
    const handleBackPress = () => {
        if (Platform.OS === 'web' && !router.canGoBack()) {
            router.replace(`/${effectiveLang}/(tabs)`);
        } else {
            router.back();
        }
    };

    // Load words data
    useEffect(() => {
        console.log(`Current Level in WordsScreenWithLodash: ${level}, Platform: ${Platform.OS}`);
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
                else if (level === LEVELS.N4) key = 'n4';
                else if (level === LEVELS.N3) key = 'n3';
                else if (level === LEVELS.N2) key = 'n2';
                else if (level === LEVELS.N1) key = 'n1';
                else {
                    console.error(`Invalid level: ${level}`);
                    setSections([]);
                    return;
                }
                const words = t(`words:${key}`, { returnObjects: true }) as Word[];
                if (!Array.isArray(words)) {
                    console.error(`t('words:${key}') did not return an array:`, words);
                    setSections([]);
                    return;
                }
                const groupedSections = groupWordsByLetter(words);
                setSections(groupedSections);
                globalSections = groupedSections;
            };
            loadWords();
        } else {
            globalSections = staticSections;
        }
    }, [level, t, staticSections]);

    // Get alphabet index items
    const indexItems = sections.map((section) => section.title);

    // Render component
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
                    <View style={styles.headerButton} />
                </View>

                <View style={styles.contentWrapper}>
                    {sections.length === 0 ? (
                        <Text style={styles.errorText}>
                            {t('common:noData', { level: levelString || 'undefined' })}
                        </Text>
                    ) : (
                        <>
                            <SectionList<Word>
                                ref={sectionListRef}
                                sections={sections}
                                keyExtractor={(item, index) => item.wordId + index.toString()}
                                renderItem={({ item }) => (
                                    <WordItem item={item} onSpeak={debouncedSpeak} />
                                )}
                                renderSectionHeader={({ section: { title } }) => (
                                    <View style={styles.headerContainer}>
                                        <Text style={styles.sectionHeader}>{title || 'No Header'}</Text>
                                    </View>
                                )}
                                stickySectionHeadersEnabled={false}
                                //@ts-ignore
                                getItemLayout={getItemLayout}
                                contentContainerStyle={styles.sectionListContent}
                                style={styles.sectionList}
                                extraData={sections}
                                initialNumToRender={200} // Increased for large dataset
                                maxToRenderPerBatch={100} // Increased batch size
                                windowSize={61} // Increased render window
                                removeClippedSubviews={false} // Ensure touch stability
                                onEndReached={() => console.log('Reached end of list')}
                                onEndReachedThreshold={0.5}
                            />
                            <ScrollView style={styles.indexBar} contentContainerStyle={styles.indexBarContent}>
                                {indexItems.map((letter) => (
                                    <TouchableOpacity
                                        key={letter}
                                        style={styles.indexItem}
                                        onPress={() => scrollToSection(letter)}
                                    >
                                        <Text style={styles.indexLetter}>{letter}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </>
                    )}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

// Styles
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
        zIndex: 10,
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
        marginRight: INDEX_BAR_WIDTH,
    },
    sectionListContent: {
        paddingBottom: 80,
        backgroundColor: '#121212',
    },
    indexBar: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: INDEX_BAR_WIDTH,
        height: '100%',
        backgroundColor: '#1e1e1e',
    },
    indexBarContent: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    indexItem: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    indexLetter: {
        fontSize: 16,
        color: '#ffcc00',
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: 'rgba(30, 30, 30, 1)',
        paddingVertical: 16,
        paddingHorizontal: 12,
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
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: '#ffcc00',
    },
    wordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    wordId: {
        fontSize: 16,
        color: '#b0b0b0',
        marginRight: 4,
    },
    words: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        flex: 1,
    },
    reading: {
        fontSize: 18,
        color: '#ffffff',
        flex: 1,
        marginRight: 8,
    },
    meaning: {
        fontSize: 16,
        color: '#b0b0b0',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10,
    },
    speakerIcon: {
        padding: 10,
        zIndex: 12,
    },
    errorText: {
        color: '#ff5555',
        fontSize: 16,
        textAlign: 'center',
        padding: 20,
    },
});