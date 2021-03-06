import React, {useEffect} from 'react'
import { StyleSheet, Image, View } from 'react-native'

export default function splashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 2900);
    }, [])

    return (
        <View style={styles.animationContainer}>
            <Image
                resizeMode='contain'
                style={{ height: 300, width: 300 }}
                source={require('../assets/images/animation_500.gif')} />
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#14289e',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});