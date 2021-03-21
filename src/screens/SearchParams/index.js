import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const SearchParams = (props) => {

    const [miles, setMiles] = useState(10)

    return (
        <View style={styles.container}>
            <View style={styles.paramRow}>
                <View style={styles.trainerText}>
                    <Text>
                        How many miles from your target workout location would you like to display Jym Trainers?
                    </Text>
                </View>
                <View style={styles.milesCounterContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setMiles(Math.max( 0, miles - 1 ))}>
                        <Text style={{...styles.buttonText, paddingHorizontal: 22}}>-</Text>
                    </TouchableOpacity>
                        <Text style={styles.milesText}>{miles}</Text>
                    <TouchableOpacity style={{...styles.button, paddingHorizontal: 20}} onPress={() => setMiles(miles + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
    )
}

export default SearchParams

const styles = StyleSheet.create({
    container : {
        padding : 20,
        height: '100%',
        justifyContent: 'center'
    },
    paramRow : {
        flexDirection: 'row',
        width : '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        bottom: 100
    },
    trainerText : {
        width: 150,
    },
    button : {
        paddingVertical: 15,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    buttonText : {
        fontSize: 20,
        fontWeight: 'bold'
    },  
    milesText : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey'
    },
    milesCounterContainer : {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
