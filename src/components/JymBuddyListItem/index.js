import React from 'react'
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating, Divider } from 'react-native-elements';
import Entype from 'react-native-vector-icons/Entypo'

const JymBuddyListItem = (props) => {
    return (
        <View style={styles.jymBuddyContainer}>
            <ImageBackground 
                style={styles.image}
                imageStyle={{borderRadius : 15}}
                source={require('../../../assets/images/buffKarp.jpg')}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.imageTitle}>Magi Buff Karp</Text>
                    <View style={{flexDirection : 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Entype name={'location-pin'} size={18} color='white'/>
                            <Text style={styles.imageSubTitle}>New York, New York</Text>
                        </View>
                        <View>
                            <Text style={styles.imageSubTitlePrice}>($20-50 per session)</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.ratingAndSocialContainer}>
                <View style={{position: 'relative', left : 8}}>
                    <Rating type='custom' tintColor='#fff' ratingColor='purple' ratingBackgroundColor='grey' imageSize={20} fractions={1} startingValue={3.5} />
                </View>
                <View style={{width: 110, flexDirection : 'row', justifyContent : 'space-around'}}>
                    <Entype name={'instagram'} size={18} />
                    <Entype name={'linkedin'} size={18} />
                    <Entype name={'facebook'} size={18} />
                </View>
            </View>

            <Divider style={{marginTop : 10, marginHorizontal : 20}}/>
        </View>
    )
}

export default JymBuddyListItem

const styles = StyleSheet.create({
    jymBuddyContainer : {
        backgroundColor : 'white',
        padding: 20
    },
    ratingAndSocialContainer : {
        width: '100%',
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginTop : 10,
    },
    image : {
        width: '100%',
        aspectRatio : 3 / 2,
        borderRadius : 20,
        resizeMode : 'cover',
    },
    titleContainer : {
        position : 'absolute',
        bottom : 20,
        width : '100%'
    },
    imageTitle : {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom : 5,
        marginLeft : 5
    },
    imageSubTitle : {
        color : 'white',
        fontSize : 15,
        fontWeight : 'bold',
        marginLeft : 5
    },
    imageSubTitlePrice : {
        color : 'white',
        fontSize : 12,
        fontWeight : 'bold',
    },
    rowSection : {
        padding : 10
    },
    rowText : {
        color : 'grey',
        fontSize : 10.8,
        marginTop : 5,
        marginLeft : 10
    },
    rowTextAbout : {
        color : 'grey',
        fontSize : 13,
        marginTop : 5,
        marginLeft : 10,
        lineHeight : 25
    },
    rowBtns : {
        flexDirection : 'row', 
        justifyContent : 'space-around', 
        marginTop: 5
    },
    subTitleText : {
        fontSize : 12,
        color : 'purple',
        fontWeight : '500'
    },
    btnContainer : {
        backgroundColor : 'purple',
        padding : 5,
        borderRadius : 15
    },
    textBtn : {
        color : 'white',
    },
    bookSeshBtnContainer : {
        position : 'absolute',
        bottom : 0,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    bookSeshBtn : {
        backgroundColor : 'purple',
        padding : 20,
        borderRadius : 20
    },
    bookSeshBtnText : {
        color : 'white',
        fontSize : 15,
        fontWeight : 'bold'
    }
})

