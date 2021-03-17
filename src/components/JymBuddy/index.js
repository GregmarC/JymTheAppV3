import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const JymBuddy = (props) => {
    return (
        <View>
        {/* Jym Buddy Pic */}
            <ImageBackground 
                style={styles.image}
                source={require('../../../assets/images/buffKarp.jpg')}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.imageTitle}>Magi Buff Karp</Text>
                    <Text style={styles.imageSubTitle}>New York, New York</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default JymBuddy

const styles = StyleSheet.create({
    image : {
        width: '100%',
        height: 350,
        resizeMode : 'cover',
    },
    titleContainer : {
        position : 'absolute',
        bottom : 20,
        left : 10
    },
    imageTitle : {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    imageSubTitle : {
        color : 'white',
        fontSize : 15,
        fontWeight : 'bold',
        position : 'relative',
        left : 20
    }
})

