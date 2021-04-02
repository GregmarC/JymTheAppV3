import Auth from '@aws-amplify/auth'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = (props) => {

    const logOut = () => {
        Auth.signOut();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logOutBtn} onPress={() => logOut()}>
                <Text style={styles.btnText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'   
    },
    logOutBtn : {
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText : {
        color: 'white',
        fontWeight: 'bold'
    }
})
