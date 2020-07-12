import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const allSymptoms = [
    {
        image: require('../assets/images/headache.png'),
        symptoms: 'Headache',
    },
    {
        image: require('../assets/images/Cough.png'),
        symptoms: 'Cough',
    },
    {
        image: require('../assets/images/Fever.png'),
        symptoms: 'Fever',

    }
]

const CoronaSymptoms = () => {

    const renderSymptoms = (symptom, i) => {
        return (
            <View style={styles.singleSymptom} key={i}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/shadow.png')} />
                    <Image resizeMode='contain' style={styles.symptomImage} source={symptom.image} />
                </View>
                <Text style={styles.symptoms}>
                   {symptom.symptoms}
               </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.symptomsText}>Symptoms</Text>
            </View>

            <View style={styles.symptomsContainer}>
                {allSymptoms.map((l, i) => {
                    return renderSymptoms(l, i);
                })}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        position: 'absolute',
        width: width,
        top: 255,
    },
    textContainer: {
        width: width / 1.1,
    },
    symptomsText: {
        fontSize: width / 23,
        fontFamily: 'Roboto-Bold'
    },
    symptomsContainer: {

        width: width / 1.1,
        marginTop: 15,
        flexDirection: "row",
        height: 111,
        justifyContent: "space-between"

    },
    singleSymptom: {
        borderRadius: 15,
        width: width / 1.1 / 3.2,
        height: '100%',
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: .2,
        elevation: 2,
        shadowRadius: 16.00,
    },

    symptoms: {
        fontFamily: 'Roboto-Bold',
        fontSize: width / 30,
        color: '#303030',
        marginTop: 5
    },
    symptomImage: {
        width: width / 6,
        height: 70,
        position: "absolute",
        bottom: 6,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});


export default CoronaSymptoms;
