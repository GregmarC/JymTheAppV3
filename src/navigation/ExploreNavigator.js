import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/Home'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import SearchResultsTabNavigator from './SearchResultsTabNavigator'

const Stack = createStackNavigator()

const ExploreNavigator = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={'Search Results'}
                component={SearchResultsTabNavigator}
                options={{
                    title: "Find your Jym Buddy",
                }}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigator
