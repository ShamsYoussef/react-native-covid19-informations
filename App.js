import React from 'react'
import Navigation from './navigation';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function App() {
  let [fontsLoaded] = useFonts({
    'POPPINS-MEDIUM': require('./assets/fonts/Poppins-Medium.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigation></Navigation>
    )
  }
}

