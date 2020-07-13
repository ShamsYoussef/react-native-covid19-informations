import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from './screens/splashScreen';
import AboutCovidScreen from './screens/aboutCovid-19'
import homeScreen from './screens/homeScreen';


export default function navigation() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={splashScreen} />
                <Stack.Screen  name="Home" component={homeScreen} />
                <Stack.Screen name="AboutCovid" component={AboutCovidScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

