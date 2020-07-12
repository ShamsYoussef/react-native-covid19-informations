import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native';

import Header from '../components/header';
import DropDownList from '../components/dropDownList'
import CaseUpdate from '../components/caseUpdate'
import SpreadOfVirus from '../components/spreadOfVirus'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const HomeScreen = ({ navigation }) => {

    const image = require('../assets/images/doctor.png')
    return (
        <View style={styles.container}>
            <Header image={image} text1="All you need" text2="is stay at home." customWidth={width / 1.9} customLeft={30}></Header>
            <DropDownList></DropDownList>
            <CaseUpdate></CaseUpdate>
            <SpreadOfVirus navigation={navigation}></SpreadOfVirus>
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

export default HomeScreen;
