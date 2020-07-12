import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from './screens/splashScreen';
import AboutCovidScreen from './screens/aboutCovid-19'
import homeScreen from './screens/homeScreen';


export default function navigation() {

    const Stack = createStackNavigator();

    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    });

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AboutCovid" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={splashScreen} />
                <Stack.Screen options={{ cardStyleInterpolator: forFade }} name="Home" component={homeScreen} />
                <Stack.Screen name="AboutCovid" component={AboutCovidScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
