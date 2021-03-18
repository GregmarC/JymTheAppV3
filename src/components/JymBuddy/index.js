import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating, Divider } from 'react-native-elements';
import Entype from 'react-native-vector-icons/Entypo'

const JymBuddy = (props) => {
    return (
        <View style={styles.jymBuddyContainer}>
            <ImageBackground 
                style={styles.image}
                source={require('../../../assets/images/buffKarp.jpg')}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.imageTitle}>Magi Buff Karp</Text>
                    <View style={{flexDirection : 'row'}}>
                        <Entype name={'location-pin'} size={18} style={{marginLeft: 10}} color='white'/>
                        <Text style={styles.imageSubTitle}>New York, New York</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.ratingAndSocialContainer}>
                <View style={{width: 150, alignItems: 'center'}}>
                    <Rating type='custom' tintColor='lightgrey' ratingColor='purple' ratingBackgroundColor='grey' imageSize={20} fractions={1} startingValue={3.5} />
                </View>
                <View style={{width: 110, flexDirection : 'row', justifyContent : 'space-around'}}>
                    <Entype name={'instagram'} size={18} />
                    <Entype name={'linkedin'} size={18} />
                    <Entype name={'facebook'} size={18} />
                </View>
            </View>

            <Divider style={{marginTop : 10, marginHorizontal : 20}}/>

            {/* Reviews and Rating */}

            {/* Social links */}

            {/* Available Locations */}

            {/* Hourly Rate */}

            {/* Fitness Focuses */}

            {/* Bio */}
        </View>
    )
}

export default JymBuddy

const styles = StyleSheet.create({
    jymBuddyContainer : {
        backgroundColor : 'lightgrey',
        height: '100%',
    },
    ratingAndSocialContainer : {
        width: '100%',
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginTop : 10,
    },
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
        fontWeight: 'bold',
        marginBottom : 5
    },
    imageSubTitle : {
        color : 'white',
        fontSize : 15,
        fontWeight : 'bold',
        marginLeft : 5
    }
})

