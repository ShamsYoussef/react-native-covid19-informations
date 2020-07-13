import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import setTiming from '../components/timingAnimation';
import { transform } from '../components/timingAnimation'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const dotsLocation = [
    {
        top: 20,
        left: 20,
    },
    {
        top: 50,
        left: 50,
    },
    {
        top: 70,
        left: 70,
    },
    {
        top: 70,
        left: 50,
    },
    {
        top: 20,
        left: 150,
    },
    {
        top: 30,
        left: 160,
    }

]


const { Value, Clock } = Animated;

const SpreadOfVirus = (props) => {

    const [spreadOpacity, setSpredOpacity] = useState(new Value(0));

    useEffect(() => {
        setSpredOpacity(setTiming(new Clock(), 0, 1));
    }, [])

    const seeMoreHandler = () => {
        props.navigation.navigate('AboutCovid')
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.casesText}>Spread of Virus</Text>
                </View>
                <TouchableOpacity onPress={seeMoreHandler} style={styles.seeMoreContainer}>
                    <Text style={styles.seeMoreText}>See details</Text>
                </TouchableOpacity>
            </View>

            <Animated.View style={{ transform: [{ translateX: transform(-50, 0, spreadOpacity) }]}} >
                <ImageBackground resizeMode='contain' source={require('../assets/images/virusSpread.png')} style={styles.imageContainer}>
                    {dotsLocation.map((l, i) => {
                        return <Animated.View style={{ ...styles.spreadDots, top: l.top, left: l.left, opacity: spreadOpacity }} key={i}></Animated.View>
                    })}
                </ImageBackground>
            </Animated.View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        position: 'absolute',
        width: width,
        top: height/1.38,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width / 1.1,

    },
    seeMoreContainer: {
        justifyContent: "flex-end"
    },
    casesText: {
        fontSize: width / 23,
        fontFamily: 'Roboto-Bold'
    },
    seeMoreText: {
        color: '#3382CC',
        fontSize: width / 30,
        fontFamily: 'Roboto-Medium'

    },
    imageContainer: {
        height: height/5.67,
        backgroundColor: '#FFF',
        width: width / 1.1,
        borderRadius: 15,
        marginTop: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: .2,
        elevation: 2,
        shadowRadius: 16.00,

    },
    spreadDots:
    {
        width: width/51.4,
        height: width/51.4,
        backgroundColor: 'red',
        position: "absolute",
        opacity: .5,
        borderRadius: 50
    }

});


export default SpreadOfVirus;
