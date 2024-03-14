[
  {
    scripts: {
      android: 'react-native run-android',
      androidm: 'source ~/.zshrc &&  npx react-native run-android',
      ios: 'react-native run-ios',
      ioss: "react-native run-ios --device 'Sujal’s iPhone14'",
      start: 'react-native start',
      test: 'jest',
      lint: 'eslint .',
      postinstall: 'jetifier -r',
      images: 'node scripts/images.js',
      fonts: 'node scripts/fonts.js',
      link: 'react-native-asset',
      clean: 'react-native-clean-project',
      pod: 'npx pod-install',
      'ios-bundle':
        'react-native bundle --dev false --entry-file index.js --platform ios --bundle-output ios/main.jsbundle --assets-dest ios/res',
      'android-bundle':
        'react-native bundle --dev false --entry-file index.js --platform android --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res',
      'release-bundle':
        'react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/ && rm -rf android/app/src/main/res/drawable-* && rm -rf android/app/src/main/res/raw/* && cd android && ./gradlew bundleRelease && cd ..',
      'release-apk':
        'react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/ && rm -rf android/app/src/main/res/drawable-* && rm -rf android/app/src/main/res/raw/* && cd android && ./gradlew assembleRelease && cd ..',
      'clear-cache':
        'watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/ && npm cache clean --force && npm install && npm start -- --reset-cache',
      'clean-gradle': 'cd android &&./gradlew clean',
    },
  },
];
