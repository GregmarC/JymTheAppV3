import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResultsScreen'

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'purple',
            indicatorStyle: {
                backgroundColor: 'purple'
            }
        }}>
            <Tab.Screen name={'list'} component={SearchResultsScreen} />
            <Tab.Screen name={'map'} component={SearchResultsScreen} />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
