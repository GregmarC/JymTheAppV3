import React from 'react'
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating, Divider } from 'react-native-elements';
import Entype from 'react-native-vector-icons/Entypo'

const JymBuddy = (props) => {
    return (
        <View>
            <ScrollView style={styles.jymBuddyContainer}>
                <ImageBackground 
                    style={styles.image}
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
                    <View style={{width: 150, alignItems: 'center'}}>
                        <Rating type='custom' tintColor='#fff' ratingColor='purple' ratingBackgroundColor='grey' imageSize={20} fractions={1} startingValue={3.5} />
                    </View>
                    <View style={{width: 110, flexDirection : 'row', justifyContent : 'space-around'}}>
                        <Entype name={'instagram'} size={18} />
                        <Entype name={'linkedin'} size={18} />
                        <Entype name={'facebook'} size={18} />
                    </View>
                </View>

                <Divider style={{marginTop : 10, marginHorizontal : 20}}/>

                {/* Available Locations */}

                <View style={styles.rowSection}>
                    <Text style={styles.subTitleText}>Available Training Locations: </Text>
                    <Text style={styles.rowText}>Online, Trainer's Home, Client's Home, Park</Text>
                </View>

                <Divider style={{marginTop : 5, marginHorizontal : 20}}/>


                {/* Hourly Rate */}

                <View style={styles.rowSection}>
                    <Text style={styles.subTitleText}>Fitness Specialties:</Text>
                    <Text style={styles.rowText}>Weight Loss, Muscle Gain, Tennis</Text>
                </View>

                <Divider style={{marginTop : 5, marginHorizontal : 20}}/>

                <View style={styles.rowSection}>
                    <Text style={styles.subTitleText}>About Me:</Text>
                    <Text style={styles.rowTextAbout}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis molestie nisi. Curabitur at sem et risus sollicitudin interdum non non massa. Curabitur dignissim tempor efficitur. Pellentesque condimentum tincidunt felis. Praesent imperdiet dolor et tortor lobortis pellentesque. In est neque, mattis at tempus non, posuere at sapien. Morbi venenatis, dui sit amet consequat accumsan, urna quam ultrices nulla, quis rutrum purus leo posuere felis. Proin accumsan odio in lacus bibendum dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean id vehicula dolor, a sollicitudin nunc.</Text>
                </View>

                
            </ScrollView>
            <View style={styles.bookSeshBtnContainer}>
                <TouchableOpacity style={styles.bookSeshBtn} onPress={() => console.warn('session btn pressed')}>
                    <Text style={styles.bookSeshBtnText}>Book a Session</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default JymBuddy

const styles = StyleSheet.create({
    jymBuddyContainer : {
        backgroundColor : 'white',
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

