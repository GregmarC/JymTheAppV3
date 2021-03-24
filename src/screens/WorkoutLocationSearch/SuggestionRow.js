import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Entype from 'react-native-vector-icons/Entypo'

const SuggestionRow = ({item}) => {
    return (
        <View style={styles.searchRow}>
            <View style={styles.iconContainer}>
                <Entype name={'location-pin'} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
        </View>
    )
}

export default SuggestionRow

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        color: 'black',
    },
    iconContainer: {
        backgroundColor: '#d4d4d4',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText: {

    }
})
