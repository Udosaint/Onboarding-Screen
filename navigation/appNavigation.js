import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../screens/HomeScreen.js'
import OnBoardingScreen from '../screens/OnBoardingScreen.js'

const Stack = createNativeStackNavigator();


export default function appNavigation() {
    return (
        <NavigationContainer initialRouteName='OnBoarding'>
            <Stack.Navigator>
                <Stack.Screen name="OnBoarding" options={{ headerShown: false }} component={OnBoardingScreen} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})