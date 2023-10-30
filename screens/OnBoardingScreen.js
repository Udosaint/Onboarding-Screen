import { StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

import React from 'react'
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnBoardingScreen() {

    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Home');
    }

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                bottomBarHighlight={false}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Subscribe to this channel to boost your productivity',
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/work.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interruption',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/achieve.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'By achieving higher goals, we help you build productivity',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    doneButton: {
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50

    }
})