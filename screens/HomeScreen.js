import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/work.json')} autoPlay loop />
            </View>
            <Text>Wellcome to Home</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
})