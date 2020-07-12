import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Prevention = () => {

    const SinglePrevention = () => {
        return (
            <View style={styles.singlePrevention}>
                <View>
                    <Image style={{ position: 'absolute', left: -1 }} source={require('../assets/images/reventationShadow.png')}></Image>
                    <Image style={styles.image} resizeMode='contain' source={require('../assets/images/wear-mask.png')}></Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.PreventionTitle}>Wear face mask</Text>
                    <Text style={styles.PreventionBody}>
                        Since the start of the coronavirus outbreak
                        some places have fully embraced wearing face
                        masks, and anyone caught without one risks
                        becoming a social pariah.
                </Text>

                    <View style={{ alignItems: "flex-end" }}>
                        <Entypo name="chevron-small-right" size={26} color="#2e75c6" />
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.PreventionContainer}>
                <Text style={styles.PreventionText}>Prevention</Text>
            </View>

            <View style={styles.listConatiner}>
                <SinglePrevention />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: "center",
        position: 'absolute',
        width: width,
        top: 425
    },

    PreventionContainer: {
        width: width / 1.1,
        marginBottom: 10,

    },
    PreventionText: {
        fontSize: width / 23,
        fontFamily: 'Roboto-Bold',
        marginBottom:5
    },
    listConatiner: {
        backgroundColor: '#FFF',
        width: width / 1.1,
        height: height / 2.7
    },
    singlePrevention: {
        backgroundColor: '#FFF',
        height: 136,
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: .2,
        elevation: 2,
        shadowRadius: 16.00,

    },
    textContainer: {
        flexDirection: 'column',
        position: 'absolute',
        width: width / 1.9,
        left: 130,
        justifyContent: "center",
        height: '100%'

    },
    PreventionTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: width / 25,
        color: '#303030',
        marginBottom: 5

    },
    PreventionBody: {
        fontSize: width / 36,
        fontFamily: "Roboto-Regular",
        lineHeight: 15,
        marginBottom: 10,


    },
    image: {

        width: width / 2.6,
        height: 157,
        position: 'absolute',
        top: -10
    }

});


export default Prevention;
