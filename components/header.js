import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import setTiming from '../components/timingAnimation'
import {transform} from '../components/timingAnimation'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const { Value, Clock} = Animated;

const Header = ({ image, text1, text2, customWidth, customLeft }) => {

    const [imageOpacity, setImageOpacity] = useState(new Value(0));
    useEffect(() => {
        setImageOpacity(setTiming(new Clock(), 0, 1));
    }, [])

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.header} colors={['#2e75c6', '#0d1d78']} end={{ x: 0, y: 1 }}
                start={{ x: 1, y: 1 }}>
                <View style={{ width: width }}>
                    <Animated.Image resizeMode="contain" style={{
                        ...styles.doctorImage, width: customWidth, left: customLeft, opacity: imageOpacity, transform: [{ translateX: transform(-50, 0, imageOpacity) }]
                    }} source={image}></Animated.Image>
                </View>

            </LinearGradient>
            <Animated.View style={{...styles.slugContainer, transform: [{ translateX: transform(50, 0, imageOpacity) }]}}>
                <Text style={styles.slugText}>{text1}</Text>
                <Text style={styles.slugText}>{text2}</Text>
            </Animated.View>
            <Image resizeMode="contain" style={styles.virusImage} source={(require('../assets/images/virus.png'))}></Image>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFE',
        alignItems: 'center',
    },

    header: {
        width: 1000,
        height: 1000,
        borderRadius: 1000,
        top: -(940 - width / 2),
        overflow: "hidden",
        alignItems: "center"
    },
    virusImage: {
        width: width,
        position: "absolute",
        top: -20
    },
    doctorImage: {
        position: "absolute",
        top: height/2.62,
    },
    slugText: {
        color: 'white',
        fontSize: width / 20,
        fontFamily: 'POPPINS-MEDIUM'
    },
    slugContainer: {
        position: "absolute",
        top: height/8.94,
        width: width,
        right: width/2.25,
    }

});


export default Header;
