import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating, Divider } from 'react-native-elements';
import Entype from 'react-native-vector-icons/Entypo'
import buffKarp from '../../../assets/images/buffKarp.jpg'
import logan from '../../../assets/images/logan.jpeg'


const JymBuddyListItem = (props) => {

    console.log(props.item)

    const { image, name, location, rate, id } = props.item

    const navigation = useNavigation()

    const goToJymBuddyPage = () => {
        navigation.navigate('Jym Buddy Details', {id: id})
    }

    return (
        <TouchableOpacity style={styles.jymBuddyContainer} onPress={() => goToJymBuddyPage()}>
            <View style={styles.imageContainer}>
                <ImageBackground 
                    style={styles.image}
                    imageStyle={{borderRadius : 15, resizeMode : 'contain'}}
                    source={image}
                >
                </ImageBackground>
                <View style={styles.titleContainer}>
                    <Text style={styles.imageTitle}>{name}</Text>
                    <View style={{flexDirection : 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Entype name={'location-pin'} size={18} color='white'/>
                            <Text style={styles.imageSubTitle}>{location}</Text>
                        </View>
                        <View>
                            <Text style={styles.imageSubTitlePrice}>{`(${rate} per session)`}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.transparentBlock}></View>
            </View>
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
        </TouchableOpacity>
    )
}

export default JymBuddyListItem

const styles = StyleSheet.create({
    jymBuddyContainer : {
        backgroundColor : 'white',
        padding: 20
    },
    imageContainer : {
        width: '100%',
        backgroundColor: 'purple',
        borderRadius : 20
    },
    transparentBlock : {
        position : 'absolute',
        bottom : 0,
        height: 80,
        width : '100%',
        backgroundColor : 'rgba(0, 0, 0, 0.3)',
        zIndex : 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
        resizeMode : 'center',
    },
    titleContainer : {
        position : 'absolute',
        bottom : 20,
        width : '100%',
        zIndex : 100
    },
    imageTitle : {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom : 5,
        marginLeft : 5,
        zIndex: 1
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

