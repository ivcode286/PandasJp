# Welcome to your Expo app 👋
This is an Expo project created with create-expo-app.
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
 
 -Run on expo web or expo go
  npm start


--- 
Web Producton build in local
(i)npx expo start --clear          (clears Metro Bundler’s cache error like: Unable to resolve module ./app/navigation/TabNavigator from App.tsx)
(ii)npx expo export --platform web


---
IOS BUILD
npx eas build --platform ios --profile production

submit to testflight
npx eas submit --platform ios --latest

or build auto submit
npx eas build --platform ios --profile production --auto-submit


----
custom development build/bareflow

 -Run on Android by android simulator
npm run android

-build android
eas build --platform android --profile development  

eas build:list (download apk)
adb install C://xxxxx.apk

-generate static content
npm run export:web  



- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



## File Structure
app/
├── index.tsx                     # Redirects to /zh-tw or /zh-cn based on saved language or browser
├── _layout.tsx                   # Root layout: detects language and redirects using <Redirect />
├── +not-found.tsx                # Fallback for unknown routes
├── [lang]/                       # Language namespace (e.g., zh-tw, zh-cn)
│   ├── _layout.tsx               # Per-language layout: loads fonts, language, handles splash, gestures
│   │
│   ├── (tabs)/                   # Bottom tab navigation pages
│   │   ├── _layout.tsx           # Tabs layout with BottomTabNavigator
│   │   ├── index.tsx             # Home screen with language switch and main links
│   │   ├── settings.tsx          # Settings screen with language switch and routing sync
│   │   ├── travelChat.tsx        # Refers to [namespace]/
│   │
│   ├── hiragana.tsx              # Hiragana page
│   ├── katakana.tsx              # Katakana page
│   ├── kana-comparison.tsx       # Kana comparison page
│   ├── phonetics.tsx             # Phonetics guide
│   ├── n5-concepts.tsx           # N5 concept overview
│   ├── grammar-concepts.tsx      # Grammar explanation screen
│   ├── privacy-policy.tsx        # Privacy policy page
│   │
│   ├── grammar/                  # Grammar section
│   │   ├── _layout.tsx           # Optional nested layout for grammar
│   │   ├── index.tsx             # Grammar menu (e.g., N5/N4 grammar selection)
│   │   ├── [level].tsx           # Dynamic grammar page based on selected level
│   │
│   ├── words/                    # Vocabulary section
│   │   ├── _layout.tsx           # Optional nested layout for words
│   │   ├── menu.tsx              # Words menu entry point
│   │
│   ├── screens/                  # Screens section
│   │   ├── WordsScreen.tsx       # Vocabulary screen
│   │
│   ├── [namespace]/              # Shared content namespace (e.g., story, n5chat, travelchat)
│   │   ├── index.tsx             # Renders story cards by namespace using i18n resources
│   │   ├── [storyTitle].tsx      # Displays story content based on title
│   │
│   ├── hook/                     # Custom hooks
│   │   ├── useTextToSpeech.ts    # Text-to-speech utility hook
│
locales/
├── i18n.ts                       # Internationalization configuration
│
src/
├── utils/                        # Utility functions
│   ├── constants.ts              # Application constants
│   ├── deviceCheck.ts            # Device compatibility checks
│   ├── imageLoader.ts            # Image loading utilities
│   ├── languageService.ts        # Language management service
│   ├── updateCheck.ts            # Update checking utilities
│
public/
├── app-ads.txt                   # Ads configuration
├── robots.txt                    # Robots configuration
├── sitemap.xml                   # Sitemap for SEO


## Version update 
Stop APP update checking if https://version-api.pandasappsglobal.workers.dev/ set to STOP_UPDATE_VERSION = '0.0.0'
