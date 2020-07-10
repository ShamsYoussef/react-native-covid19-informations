import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';

const width = Dimensions.get('window').width

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
const SpreadOfVirus = () => {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.casesText}>Spread of Virus</Text>
                </View>
                <TouchableOpacity style={styles.seeMoreContainer}>
                    <Text style={styles.seeMoreText}>See details</Text>
                </TouchableOpacity>
            </View>

            <ImageBackground resizeMode='contain' source={require('../assets/images/virusSpread.png')} style={styles.imageContainer}>
                {dotsLocation.map((l, i) => {
                    return <View style={{ ...styles.spreadDots, top: l.top, left: l.left }} key={i}></View>
                })}
            </ImageBackground>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        position: 'absolute',
        width: width,
        top: 550,
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
        height: 134,
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
        width: 7,
        height: 7,
        backgroundColor: 'red',
        position: "absolute",
        opacity: .5,
        borderRadius: 50
    }

});


export default SpreadOfVirus;
