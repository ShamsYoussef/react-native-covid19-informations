import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from './screens/splashScreen';
import homeScreen from './screens/homeScreen';
import { fromLeft } from 'react-navigation-transitions';


export default function navigation() {

    const Stack = createStackNavigator();

    const forFade = ({ current }) => ({
        cardStyle: {
          opacity: current.progress,
        },
      });

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={splashScreen} />
                <Stack.Screen options={{ cardStyleInterpolator: forFade }} name="Home" component={homeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
