import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import JymTrainerPost from '../screens/JymTrainerPost'

const Stack = createStackNavigator()

const AppointmentNavigator = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Become a Jym Trainer'}
                component={JymTrainerPost}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AppointmentNavigator
