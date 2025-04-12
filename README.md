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
or
select device
npx expo run:android --device               

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
├── index.tsx                     # Redirect to /zh-tw or /zh-cn based on saved language or browser
├── _layout.tsx                   # Root layout: detect language and redirect using <Redirect />
├── +not-found.tsx                # Fallback for unknown routes
├── [lang]/                       # Language namespace (zh-tw, zh-cn)
│   ├── _layout.tsx               # Per-language layout (load fonts, language, handle splash, gestures)
│
│   ├── (tabs)/                   # Bottom tab navigation pages
│   │   ├── _layout.tsx           # Tabs layout (BottomTabNavigator)
│   │   ├── index.tsx             # Home screen with language switch + main links
│   │   └── settings.tsx          # Settings screen with language switch and routing sync
│   │   └── travelChat.tsx        # refer to [namespace]/ 
│   ├── hiragana.tsx              # Hiragana page
│   ├── katakana.tsx              # Katakana page
│   ├── kana-comparison.tsx       # Kana comparison page
│   ├── phonetics.tsx             # Phonetics guide
│   ├── n5-concepts.tsx           # N5 concept overview
│   ├── grammar-concepts.tsx      # Grammar explanation screen
│   ├── privacy-policy.tsx        

│   ├── grammar/                  # Grammar section
│   │   ├── _layout.tsx           # Optional nested layout for grammar
│   │   ├── index.tsx             # Grammar menu (e.g. N5/N4 grammar selection)
│   │   └── [level].tsx           # Dynamic grammar page based on selected level

│   ├── words/                    # Vocabulary section
│   │   ├── _layout.tsx           # Optional nested layout for words
│   │   └── menu.tsx              # Words menu entry point
│   ├── screens/  
│   │   └── WordsScreen.tsx

│   ├── [namespace]/              # Shared content namespace (e.g. story / n5chat / travelchat)
│   │   ├── index.tsx             # Render story cards by namespace (uses i18n resources)
│   │   └── [storyTitle].tsx      # Display actual story content based on title

│   ├── hook/                    # Vocabulary section
│   │   ├── useTextToSpeech.ts           

locales/
├── i18n.ts        


│   ├── src/                    
│   │   ├── utils/           
│   │   ├──constants.ts
│   │   ├──deviceCheck.ts
│   │   ├──imageLoader.ts
│   │   ├──languageService.ts
│   │   ├──updateCheck.ts

public/
├── app-ads.txt
├── robots.txt
├── sitemap.xml


## Version update 
Stop APP update checking if https://version-api.pandasappsglobal.workers.dev/ set to STOP_UPDATE_VERSION = '0.0.0'