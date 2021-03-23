import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const SearchParams = (props) => {

    const navigation = useNavigation()
    const [miles, setMiles] = useState(10)

    return (
        <View style={styles.container}>
            <View style={styles.paramRow}>
                <View style={styles.trainerText}>
                    <Text>
                        How many miles from your target workout location would you like to display Jym Buddies?
                    </Text>
                </View>
                <View style={styles.milesCounterContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setMiles(Math.max( 1, miles - 1 ))}>
                        <Text style={{...styles.buttonText, paddingHorizontal: 22}}>-</Text>
                    </TouchableOpacity>
                        <Text style={styles.milesText}>{miles}</Text>
                    <TouchableOpacity style={{...styles.button, paddingHorizontal: 20}} onPress={() => setMiles(miles + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style={styles.searchBtnContainer}>
                <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate('Home', {
                    screen: 'Explore',
                    params: {
                        screen: 'Search Results',
                    },
                })}>
                    <Text style={styles.searchBtnText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchParams

const styles = StyleSheet.create({
    container : {
        padding : 20,
        height: '100%',
        justifyContent: 'center',
    },
    paramRow : {
        flexDirection: 'row',
        width : '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        marginBottom: 200
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
        alignItems: 'center',
    },
    searchBtnContainer : {
        width : '100%',
        alignItems: 'center'
    },
    searchBtn : {
        backgroundColor : 'purple',
        padding : 10,
        position: 'relative',
        bottom : 0,
        justifyContent: 'center',
        flexDirection : 'row',
        width: '30%',
        borderRadius : 15,
    },
    searchBtnText : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18
    }
})
