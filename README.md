# HelloAgain Rewards App

This is a React Native application for managing and displaying rewards. Users can view available rewards, collect them, and manage their collected rewards.

## Project Description

The HelloAgain Rewards App is a mobile application built with React Native. It allows users to:

- View a list of available rewards
- Collect rewards
- View their collected rewards
- Remove collected rewards

The app uses Redux for state management and react-native-size-matters for responsive sizing across different devices.

## Project Structure

```
helloagain/
├── src/
│   ├── components/
│   │   ├── CollectedRewardCard.js
│   │   ├── RewardCard.js
│   │   └── index.js
│   ├── constants/
│   │   ├── actionTypes.js
│   │   └── index.js
│   ├── screens/
│   │   └── RewardsScreen.js
│   ├── themes/
│   │   ├── index.js
│   │   └── style.js
│   └── store.js
```

## Packages and Dependencies

- React Native
- Redux
- React Redux
- SWR (for data fetching)
- Axios
- react-native-size-matters

## Configuration

Before running the app, make sure you have the following configured:

1. Node.js and npm (or Yarn) installed
2. React Native CLI installed globally
3. Android Studio (for Android development)
4. Xcode (for iOS development, macOS only)
5. An Android or iOS emulator, or a physical device for testing

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/nassimmiled/helloagain
   cd helloagain
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Install pods for iOS (macOS only):
   ```
   cd ios && pod install && cd ..
   ```

## Running the App

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Development

1. Start the Metro bundler:

   ```
   npm start
   # or
   yarn start
   ```

2. In a new terminal, run the app on your preferred platform (see "Running the App" section above).

3. To modify the app, edit the files in the `src/` directory. The main screen is in `src/screens/RewardsScreen.js`.

4. To add new components, create them in the `src/components/` directory and export them from `src/components/index.js`.

5. To modify the app's theme, edit the files in the `src/themes/` directory.

6. To add new actions or reducers, update the `src/store.js` file and add new action types in `src/constants/actionTypes.js`.

## Troubleshooting

If you encounter any issues, please refer to the [React Native Troubleshooting](https://reactnative.dev/docs/troubleshooting) guide.

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
