import React from 'react'
import { StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native'


const HomeScreen = (props) => {
    return (
        <View style={styles.homeContainer}>
            <ImageBackground 
                source={require('../../../assets/images/jymWelcome.jpeg')} 
                style={styles.backgroundImage}>
                    <Text style={styles.title}>Jym The App</Text>
            </ImageBackground>
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} onPress={() => console.warn('Button was pressed')}>
                    <Text style={styles.buttonText}>Find a Jym Buddy</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} onPress={() => console.warn('Button was pressed')}>
                    <Text style={styles.buttonText}>Become a Jym Trainer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homeContainer : {
        height: '100%',
        backgroundColor: 'lightgrey'
    },
    backgroundImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    title : {
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
        width: '60%',
        textAlign: 'center',
        position : 'relative',
        top : '10%',
        right : '5%',
        backgroundColor : 'rgba(0, 0, 0, 0.3)',
        borderRadius : 15,
        overflow : 'hidden'
    },
    buttonContainer : {
        marginTop: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button : {
        width: 250,
        height: 50,
        backgroundColor: 'purple',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    buttonText : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})


