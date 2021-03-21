import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import dummysearch from '../../../assets/data/dummysearch'
import Entype from 'react-native-vector-icons/Entypo'


const WorkoutLocationSearch = (props) => {

    const [inputText, setinputText] = useState('')

    return (
        <View style={styles.container}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Where would you like to workout? I.e. home, nearby park, gym, etc."
                    value={inputText}
                    onChangeText={setinputText}
                    multiline={true}
                />

                <FlatList 
                    data={dummysearch}
                    renderItem={ ({item}) => (
                        <View style={styles.searchRow}>
                            <View style={styles.iconContainer}>
                                <Entype name={'location-pin'} size={30} />
                            </View>
                            <Text style={styles.locationText}>{item.description}</Text>
                        </View>
                    )}
                />
        </View>
    )
}

export default WorkoutLocationSearch

const styles = StyleSheet.create({
    container : {
        margin: 20,
    },
    textInput : {
        fontSize: 20,
        marginBottom: 20,
    },
    searchRow : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    iconContainer : {
        backgroundColor: '#d4d4d4',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText : {

    }
})
