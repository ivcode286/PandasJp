// src/components/HomeContent.tsx
import React, { useCallback } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    StatusBar,
    Platform,
} from 'react-native';
import { Link, useRouter, Href } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { debounce } from 'lodash';
import { GRAMMAR_LEVELS } from '@/src/utils/constants';

const LANGUAGE_KEY = 'app_language';

type MenuItem = {
    title: string;
    href: Href;
};

type HomeContentProps = {
    lang: string;
    langPrefix: string;
    isRoot?: boolean;
};

export default function HomeContent({ lang, langPrefix, isRoot = false }: HomeContentProps) {
    const { t, i18n } = useTranslation('home');
    const router = useRouter();
    const isWeb = Platform.OS === 'web';

    const getLangHref = useCallback(
        (path: string): Href =>
            `${langPrefix}${path.startsWith('/') ? path : `/${path}`}` as Href,
        [langPrefix]
    );

    const getMenuTitle = (title: string) => {
        if (Platform.OS !== 'web') {
            return title.split(' - ')[0];
        }
        return title;
    };

    const menuItems: MenuItem[] = [
        { title: getMenuTitle(t('menu.hiragana')), href: getLangHref('/hiragana') },
        { title: getMenuTitle(t('menu.katakana')), href: getLangHref('/katakana') },
        { title: getMenuTitle(t('menu.kana_comparison')), href: getLangHref('/kana-comparison') },
        { title: getMenuTitle(t('menu.phonetics')), href: getLangHref('/phonetics') },
        { title: getMenuTitle(t('menu.words_n5')), href: getLangHref('/words/n5') },
        { title: getMenuTitle(t('menu.kanji_n5')), href: getLangHref('/words/n5-kanji') },
        { title: getMenuTitle(t('menu.n5_concepts')), href: getLangHref('/n5-concepts') },
        { title: getMenuTitle(t('menu.grammar_concepts')), href: getLangHref('/grammar-concepts') },
        {
            title: getMenuTitle(t('menu.n5_basic_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N5_BASIC_GRAMMAR}`),
        },
        {
            title: getMenuTitle(t('menu.n5_advance_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N5_ADVANCE_GRAMMAR}`),
        },
        { title: getMenuTitle(t('menu.n5_chat')), href: getLangHref('/n5chat') },
        { title: getMenuTitle(t('menu.story')), href: getLangHref('/story') },
    ];

    const secondMenuItems: MenuItem[] = [
        { title: getMenuTitle(t('menu.words_n4')), href: getLangHref('/words/n4') },
        {
            title: getMenuTitle(t('menu.n4_basic_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N4_BASIC_GRAMMAR}`),
        },
        {
            title: getMenuTitle(t('menu.n4_advance_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N4_ADVANCE_GRAMMAR}`),
        },
    ];

    const thirdMenuItems: MenuItem[] = [
        { title: getMenuTitle(t('menu.words_n3')), href: getLangHref('/words/n3') },
        {
            title: getMenuTitle(t('menu.n3_basic_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N3_BASIC_GRAMMAR}`),
        },
        {
            title: getMenuTitle(t('menu.n3_advance_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N3_ADVANCE_GRAMMAR}`),
        },
    ];

    const fourthMenuItems: MenuItem[] = [
        { title: getMenuTitle(t('menu.words_n2')), href: getLangHref('/words/n2') },
        {
            title: getMenuTitle(t('menu.n2_basic_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N2_BASIC_GRAMMAR}`),
        },
        {
            title: getMenuTitle(t('menu.n2_advance_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N2_ADVANCE_GRAMMAR}`),
        },
    ];

    const fifthMenuItems: MenuItem[] = [
        { title: getMenuTitle(t('menu.words_n1')), href: getLangHref('/words/n1') },
        {
            title: getMenuTitle(t('menu.n1_basic_one_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N1_BASIC_ONE_GRAMMAR}`),
        },
        {
            title: getMenuTitle(t('menu.n1_basic_two_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N1_BASIC_TWO_GRAMMAR}`),
        },
        {
            title: getMenuTitle(t('menu.n1_advance_one_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N1_ADVANCE_ONE_GRAMMAR}`),
        },
        {
            title: getMenuTitle(t('menu.n1_advance_two_grammar')),
            href: getLangHref(`/grammar/${GRAMMAR_LEVELS.N1_ADVANCE_TWO_GRAMMAR}`),
        },
    ];

    const changeLanguage = useCallback(
        debounce(async (lang: 'zh-TW' | 'zh-CN') => {
            console.log('Changing language to:', lang);
            await i18n.changeLanguage(lang);
            const newLangPath = lang === 'zh-CN' ? 'zh-cn' : 'zh-tw';
            await AsyncStorage.setItem(LANGUAGE_KEY, newLangPath);
            router.replace(`/${newLangPath}/(tabs)`);
        }, 300),
        [router, i18n]
    );

    const canonicalUrl = isRoot ? 'https://pandasapps.com/' : `https://pandasapps.com/${lang}/`;
    const zhTwUrl = 'https://pandasapps.com/zh-tw/';
    const zhCnUrl = 'https://pandasapps.com/zh-cn/';

    return (
        <SafeAreaView style={styles.safeArea}>
            {isWeb && (
                <>
                    <title>{`${t('title')} - ${t('app_name')}`}</title>
                    <meta name="description" content={t('meta_description')} />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={canonicalUrl} />
                    <link rel="alternate" hrefLang="zh-Hant" href={zhTwUrl} />
                    <link rel="alternate" hrefLang="zh-Hans" href={zhCnUrl} />
                    <link rel="alternate" hrefLang="x-default" href={zhTwUrl} />
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": t('title'),
                            "description": t('meta_description'),
                            "image": "https://pub-5af902f85cb74a518bdc799bfc956441.r2.dev/cover-example.jpg",
                            "datePublished": "2025-04-19",
                            "author": {
                                "@type": "Organization",
                                "name": "PandasJP",
                                "url": "https://pandasapps.com"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "PandasJP",
                                "url": "https://pandasapps.com"
                            }
                        })}
                    </script>
                </>
            )}

            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>{t('title')}</Text>
                        <View style={styles.languageContainer}>
                            <TouchableOpacity
                                onPress={() => changeLanguage('zh-TW')}
                                style={styles.languageButton}
                            >
                                <Text
                                    style={[
                                        styles.languageText,
                                        i18n.language === 'zh-TW' && styles.languageTextSelected,
                                    ]}
                                >
                                    {t('language.traditional_chinese')}
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.languageDivider}> | </Text>
                            <TouchableOpacity
                                onPress={() => changeLanguage('zh-CN')}
                                style={styles.languageButton}
                            >
                                <Text
                                    style={[
                                        styles.languageText,
                                        i18n.language === 'zh-CN' && styles.languageTextSelected,
                                    ]}
                                >
                                    {t('language.simple_chinese')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {isWeb && <Text style={styles.introText}>{t('intro')}</Text>}

                    <Text style={styles.n5Header}>{t('n5title')}</Text>
                    {menuItems.map((item, idx) => (
                        <Link href={item.href} key={idx} asChild>
                            <TouchableOpacity style={styles.card}>
                                <Text style={styles.cardText}>• {item.title}</Text>
                            </TouchableOpacity>
                        </Link>
                    ))}

                    <Text style={styles.n4Header}>{t('n4title')}</Text>
                    {secondMenuItems.map((item, idx) => (
                        <Link href={item.href} key={idx} asChild>
                            <TouchableOpacity style={styles.card}>
                                <Text style={styles.cardText}>• {item.title}</Text>
                            </TouchableOpacity>
                        </Link>
                    ))}

                    <Text style={styles.n4Header}>{t('n3title')}</Text>
                    {thirdMenuItems.map((item, idx) => (
                        <Link href={item.href} key={idx} asChild>
                            <TouchableOpacity style={styles.card}>
                                <Text style={styles.cardText}>• {item.title}</Text>
                            </TouchableOpacity>
                        </Link>
                    ))}

                    <Text style={styles.n4Header}>{t('n2title')}</Text>
                    {fourthMenuItems.map((item, idx) => (
                        <Link href={item.href} key={idx} asChild>
                            <TouchableOpacity style={styles.card}>
                                <Text style={styles.cardText}>• {item.title}</Text>
                            </TouchableOpacity>
                        </Link>
                    ))}

                    <Text style={styles.n4Header}>{t('n1title')}</Text>
                    {fifthMenuItems.map((item, idx) => (
                        <Link href={item.href} key={idx} asChild>
                            <TouchableOpacity style={styles.card}>
                                <Text style={styles.cardText}>• {item.title}</Text>
                            </TouchableOpacity>
                        </Link>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121212',
    },
    container: {
        flex: 1,
        padding: 10,
        paddingTop: StatusBar.currentHeight || 0,
    },
    scrollContent: {
        paddingBottom: 80,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        flex: 1,
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    languageButton: {
        padding: 4,
    },
    languageText: {
        fontSize: 16,
        color: '#ffffff',
        marginRight: 2,
    },
    languageTextSelected: {
        color: '#1E88E5',
        fontWeight: 'bold',
    },
    languageDivider: {
        fontSize: 16,
        color: '#ffffff',
        paddingHorizontal: 4,
    },
    card: {
        backgroundColor: '#1e1e1e',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        ...(Platform.OS === 'web'
            ? { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }
            : {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }),
    },
    cardText: {
        fontSize: 18,
        color: '#ffffff',
    },
    introText: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 20,
        textAlign: 'center',
    },
    n5Header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginVertical: 10,
        textAlign: 'left',
    },
    n4Header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginVertical: 10,
        textAlign: 'left',
    },
});