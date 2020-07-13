import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const DropDownList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.dropDownContainer}>
                <View style={styles.locationContainer}>
                    <MaterialIcons name="location-on" size={24} color="#2e75c6"  size={20} />
                    <Text style={styles.selectedItem}>
                        Indonesia
                    </Text>
                </View>
                <Entypo name="chevron-small-down" size={24} color="#2e75c6" />

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
        top: height/2.92
    },

    dropDownContainer: {
        borderWidth: 2,
        borderColor: '#f1f1f1',
        width: width / 1.1,
        height: height/16.8,
        borderRadius: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10
    },
    locationContainer:{
        flexDirection: 'row',
        alignItems: "center",
    },
    selectedItem:{
        fontWeight: "bold",
        marginLeft: 10
    }
});


export default DropDownList;
