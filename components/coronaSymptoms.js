import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import setTiming from '../components/timingAnimation'

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


const { Value, Clock } = Animated;

const CoronaSymptoms = () => {

    const [SymptomsOpacity, setSymptomsOpacity] = useState(new Value(0));

    useEffect(() => {
        setTimeout(() => {
            setSymptomsOpacity(setTiming(new Clock(), 0, 1));      
        }, 100);
    }, [])



    const renderSymptoms = (symptom, i) => {
        return (
            <Animated.View style={{...styles.singleSymptom, opacity: SymptomsOpacity}} key={i}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/shadow.png')} />
                    <Image resizeMode='contain' style={styles.symptomImage} source={symptom.image} />
                </View>
                <Text style={styles.symptoms}>
                    {symptom.symptoms}
                </Text>
            </Animated.View>
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
        top: height/3.04,
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
        height: height/6.84,
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
        height: height/10.85,
        position: "absolute",
        bottom: 6,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
});


export default CoronaSymptoms;
