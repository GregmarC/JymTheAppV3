import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'

const CustomMarker = (props) => {
    const { coordinate, rate, isSelected, onPress } = props

    return (
        <Marker coordinate={coordinate} onPress={onPress}>
            <View style={{...styles.marker, backgroundColor: isSelected ? 'black' : 'white'}}>
                <Text style={{...styles.markerText, color: isSelected ? 'white' : 'black'}}>{rate}</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker

const styles = StyleSheet.create({
    marker : {
       padding: 5,
       borderRadius: 20,
       borderColor: 'grey',
       borderWidth: 1 
    },
    markerText : {
        fontWeight: 'bold',
    }
})
