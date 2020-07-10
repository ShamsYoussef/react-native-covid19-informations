import React from 'react'
import { StyleSheet, View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const caseSections = [
    {
        borderColor: '#FF8748',
        circleColor: '#ffede4',
        status: 'Infected',
        number: '1046'

    },
    {
        borderColor: '#FF4848',
        circleColor: '#ffd9d9',
        status: 'Deaths',
        number: '87'

    },
    {
        borderColor: '#36C12C',
        circleColor: '#d5f9d2',
        status: 'Recovered',
        number: '46'

    }
]

const CaseUpdate = () => {

    /**case update that contain each status and its number */

    const CaseSection = (section, i) => {
        return (
            <View style={styles.caseSectionContainer} key={i}>
                <View style={{ ...styles.circleContainer, backgroundColor: section.circleColor }}>
                    <View style={{ ...styles.smallCircle, backgroundColor: section.circleColor, borderColor: section.borderColor }}>
                    </View>
                </View>
                <Text style={{ ...styles.numberText, color: section.borderColor }}>{section.number}</Text>
                <Text style={styles.statusText}>{section.status}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View>
                    <Text style={styles.casesText}>Case Update</Text>
                    <Text style={styles.dateText}>Newest update March 28</Text>
                </View>
                <TouchableOpacity style={styles.seeMoreContainer}>
                    <Text style={styles.seeMoreText}>See details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.numbersContainer}>
                {caseSections.map((l, i )=> {
                    return CaseSection(l, i);
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
        top: 330,
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
    dateText: {
        fontSize: width / 30,
        fontFamily: 'Roboto-Regular'
    },
    seeMoreText: {
        color: '#3382CC',
        fontSize: width / 30,
        fontFamily: 'Roboto-Medium'

    },
    numbersContainer: {
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
        flexDirection: "row"

    },
    caseSectionContainer: {
        borderRadius: 15,
        width: width / 1.1 / 3,
        height: '100%',
        backgroundColor: '#FFF',
        alignItems: "center",
        justifyContent: "center"
    },
    circleContainer: {
        width: 23,
        height: 23,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    smallCircle: {

        width: 12,
        height: 12,
        borderRadius: 50,
        borderWidth: 2.5,

    },
    numberText: {
        fontFamily: 'Roboto-Regular',
        fontSize: width / 10,
        paddingVertical: 10
    },
    statusText: {
        fontFamily: 'Roboto-Medium',
        fontSize: width / 30,
        color: '#959595'
    }
});


export default CaseUpdate;
