module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~': './src',
          '~/components': './src/components',
          '~/screens': './src/screens',
          '~/constants': './src/constants',
          '~/themes': './src/themes',
        },
      },
    ],
  ],
};
