import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function homeScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.header} colors={['#2e75c6', '#0d1d78']} end={{ x: 0, y: 1 }}
                start={{ x: 1, y: 1 }}>
                <View style={{ width: width }}>
                    <Image resizeMode="contain" style={styles.doctorImage} source={(require('../assets/images/doctor.png'))}></Image>
                </View>
            </LinearGradient>

            <Image resizeMode="contain" style={styles.virusImage} source={(require('../assets/images/virus.png'))}></Image>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },

    header: {
        height: height / 3.1,
        width: width,
        backgroundColor: 'blue',
        width: 1000,
        height: 1000,
        borderRadius: 1000,
        top: -(930 - width / 2),
        overflow: "hidden",
        alignItems: "center"
    },
    virusImage: {
        width: width,
        position: "absolute",
        top: -20
    },
    doctorImage: {
        width: width / 1.9,
        position: "absolute",
        top: 290,
        left: 30
    }

});
