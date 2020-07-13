import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Image, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

import setTiming from '../components/timingAnimation'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height;



const preventionItem = [
    {
        id: 1,
        title: 'Wear face mask',
        body: 'Since the start of the coronavirus outbreak some places have fully embraced wearing face masks, and anyone caught without one risks becoming a social pariah.',
        image: require('../assets/images/wear-mask.png'),
    },
    {
        id: 2,
        title: 'Wash your hands',
        body: 'These diseases include gastrointestinal infections, such as Salmonella, and respiratory infections, such as influenza.',
        image: require('../assets/images/clean-your-hand.png'),
    },
    {
        id: 3,
        title: 'Cover While Coughing',
        body: 'These diseases include gastrointestinal infections, such as Salmonella, and respiratory infections, such as influenza.',
        image: require('../assets/images/cover-cough-sneezs.png'),

    },
]

const { Value, Clock } = Animated;

const Prevention = () => {
    const [preventionOpacity, setPreventionOpacity] = useState(new Value(0));

    useEffect(() => {

        setTimeout(() => {
            setPreventionOpacity(setTiming(new Clock(), 0, 1));
        }, 200);
    }, [])




    const SinglePrevention = ({ item }) => {
        return (
            <Animated.View style={{ ...styles.singlePrevention, opacity: preventionOpacity }}>
                <View>
                    <Image style={styles.shadowImage} source={require('../assets/images/reventationShadow.png')}></Image>
                    <Image style={styles.image} resizeMode='contain' source={item.item.image}></Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.PreventionTitle}>{item.item.title}</Text>
                    <Text style={styles.PreventionBody}>{item.item.body}</Text>

                    <View style={{ alignItems: "flex-end" }}>
                        <Entypo name="chevron-small-right" size={26} color="#2e75c6" />
                    </View>
                </View>
            </Animated.View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.PreventionContainer}>
                <Text style={styles.PreventionText}>Prevention</Text>
            </View>

            <View style={styles.listConatiner}>

                <FlatList
                    data={preventionItem}
                    renderItem={item => <SinglePrevention item={item} />}
                    keyExtractor={(item, index) => (item.id).toString()}
                    showsVerticalScrollIndicator={false}
                />

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
        top: height/1.83
    },

    PreventionContainer: {
        width: width / 1.1,
        marginBottom: 5,

    },
    PreventionText: {
        fontSize: width / 23,
        fontFamily: 'Roboto-Bold',
        marginBottom: 0
    },
    listConatiner: {
        width: width / 1.1,
        height: height / 2.5,
    },
    singlePrevention: {
        backgroundColor: '#fff',
        height: height/5.588,
        width: '99%',
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: .2,
        elevation: 2,
        shadowRadius: 16.00,
        marginTop: 10

    },
    textContainer: {
        flexDirection: 'column',
        position: 'absolute',
        width: width / 1.9,
        left: width/2.76,
        justifyContent: "center",
        height: '100%',
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
        lineHeight: 16,
        marginBottom: 10,
    },
    image: {
        width: width / 2.6,
        height: height/4.84,
        position: 'absolute',
        top: -10
    },
    shadowImage: {
        position: 'absolute',
        left: -1
    }

});


export default Prevention;
