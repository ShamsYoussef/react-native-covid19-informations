import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/header';
import DropDownList from '../components/dropDownList'
import CaseUpdate from '../components/caseUpdate'
import SpreadOfVirus from '../components/spreadOfVirus'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function homeScreen() {
    return (
        <View style={styles.container}>

            <Header></Header>
            <DropDownList></DropDownList>
            <CaseUpdate></CaseUpdate>
            <SpreadOfVirus></SpreadOfVirus>






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
