import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import SearchResultsMap from '../screens/SearchResultsMap'

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'purple',
            indicatorStyle: {
                backgroundColor: 'purple'
            }
        }}>
            <Tab.Screen name={'map'} component={SearchResultsMap} />
            <Tab.Screen name={'list'} component={SearchResultsScreen} />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
