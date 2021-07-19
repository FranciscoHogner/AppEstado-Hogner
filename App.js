import AppLoading from 'expo-app-loading';
import GameNavigator from './navigation/GameNavigator';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded) return<AppLoading />;

  return (
    <Provider store={store}><GameNavigator /></Provider>
  );
};
