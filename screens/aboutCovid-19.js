import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import Header from '../components/header';
import CoronaSymptoms from '../components/coronaSymptoms'
import Prevention from '../components/Prevention'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const AboutCovidScreen = () => {

    const image = require('../assets/images/coronaDoctor.png')
    return (
        <View style={styles.container}>
            <Header image={image} text1="Get to know" text2="About Covid-19." customWidth={width / 1.2} customLeft={-60}></Header>
            <CoronaSymptoms/>
            <Prevention />

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
});

export default AboutCovidScreen;
