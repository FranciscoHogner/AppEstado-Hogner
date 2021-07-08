import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import GameNavigator from './navigation/GameNavigator';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded) return<AppLoading />;

  return (
    <GameNavigator />
  );
};
