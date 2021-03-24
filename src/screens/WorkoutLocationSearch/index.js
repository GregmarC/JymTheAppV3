import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import dummysearch from '../../../assets/data/dummysearch'
import Entype from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import constant from '../../constants'
import SuggestionRow from './SuggestionRow'



const WorkoutLocationSearch = (props) => {

    const navigation = useNavigation()

    const [inputText, setinputText] = useState('')

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where would you like to workout?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    navigation.navigate('Jym Distance')
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: constant.placesKey,
                    language: 'en',
                }}
                suppressDefaultStyles
                renderRow={ (item) => <SuggestionRow item={item} /> }
            />
        </View>
    )
}

export default WorkoutLocationSearch

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        backgroundColor: 'white'
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
        color: 'black',
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
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
