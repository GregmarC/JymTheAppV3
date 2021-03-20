import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import dummyfeed from '../../../assets/data/dummyfeed'
import JymBuddyListItem from '../../components/JymBuddyListItem'

const SearchResultsScreen = (props) => {

    const renderItem = ({ item }) => (
        <JymBuddyListItem item={item} />
    )

    return (
        <View>
            <FlatList
                data = {dummyfeed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default SearchResultsScreen

const styles = StyleSheet.create({})
