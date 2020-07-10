import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Header = () => {

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.header} colors={['#2e75c6', '#0d1d78']} end={{ x: 0, y: 1 }}
                start={{ x: 1, y: 1 }}>
                <View style={{ width: width }}>
                    <Image resizeMode="contain" style={styles.doctorImage} source={(require('../assets/images/doctor.png'))}></Image>
                </View>

            </LinearGradient>
            <View style={styles.slugContainer}>
                <Text style={styles.slugText}>All you need</Text>
                <Text style={styles.slugText}>is stay at home.</Text>
            </View>
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
        height: height / 3.1,
        width: width,
        backgroundColor: 'blue',
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
        width: width / 1.9,
        position: "absolute",
        top: 290,
        left: 30
    },
    slugText: {
        color: 'white',
        fontSize: width / 20,
        fontFamily: 'POPPINS-MEDIUM'
    },
    slugContainer: {
        position: "absolute",
        top: 85,
        width: width,
        right: 160,
    }

});


export default Header;
