import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import WorkoutLocationSearch from '../screens/WorkoutLocationSearch';
import SearchParams from '../screens/SearchParams';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={"Workout Location Search"}
                    component={WorkoutLocationSearch}
                    options={{
                        title: "Workout Location"
                    }}
                />

                <Stack.Screen
                    name={"Jym Distance"}
                    component={SearchParams}
                    options={{
                        title: "Jym Buddy Distance"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
