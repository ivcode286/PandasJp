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


In the output, you'll find options to open the app in a

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
├── _layout.tsx                # 根佈局，包含 Tabs
├── (tabs)/                    # Bottom Tab 頁面
│   ├── index.tsx              # HomeScreen
│   └── settings.tsx           # Settings Tab 入口
├── hiragana.tsx               # HiraganaScreen
├── katakana.tsx               # KatakanaScreen
├── kana-comparison.tsx        # KanaComparisonScreen
├── phonetics.tsx              # PhoneticsScreen
├── n5-concepts.tsx            # N5ConceptsScreen
├── grammar-concepts.tsx       # GrammarConceptsScreen
├── grammar/                   # Grammar 相關頁面
│   ├── _layout.tsx            # Grammar 的嵌套佈局
│   ├── index.tsx              # GrammarMenu
│   └── [level].tsx            # GrammarScreen (動態路由)
├── words/                     # Words 相關頁面
│   ├── _layout.tsx            # Words 的嵌套佈局
│   └── menu.tsx               # 指向screens/WordsScreen.tsx    
├── story/                     # Story 相關頁面
│   ├── _layout.tsx            # Story 的嵌套佈局
│   ├── index.tsx              # N5StoryMenu
│   └── [storyTitle].tsx       # N5StoryScreen
├── n5chat/              # Conversation 相關頁面
│   ├── _layout.tsx            # Conversation 的嵌套佈局
│   ├── index.tsx              # N5ConversationMenu
├── screens/             
│   ├── WordsScreen.tsx 
├── components/  
│   ├── ContentMenu.tsx        # Story source namce spaces settings


 
