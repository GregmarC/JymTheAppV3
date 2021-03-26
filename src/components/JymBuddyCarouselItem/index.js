import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { ScrollView, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Rating, AirbnbRating, Divider } from 'react-native-elements';
import Entype from 'react-native-vector-icons/Entypo'
import buffKarp from '../../../assets/images/buffKarp.jpg'
import logan from '../../../assets/images/logan.jpeg'


const JymBuddyCarouselItem = (props) => {

    console.log(props.item)

    const { image, name, location, rate, id } = props.item

    const width = useWindowDimensions().width;

    const navigation = useNavigation()

    const goToJymBuddyPage = () => {
        navigation.navigate('Jym Buddy Details', {id: id})
    }

    return (
        <TouchableOpacity onPress={() => goToJymBuddyPage()} style={{ ...styles.jymBuddyContainer, width: width - 60 }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={image}
                >
                </Image>
            </View>
            <View style={styles.ratingAndSocialContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.imageTitle}>{name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Entype name={'location-pin'} size={18} color='black' />
                            <Text style={styles.imageSubTitle}>{location}</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.imageSubTitlePrice}>{`(${rate})`}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Rating readonly type='custom' tintColor='purple' ratingColor='white' ratingBackgroundColor='grey' imageSize={20} fractions={1} startingValue={3.5} />
                </View>
                <View style={{ width: 110, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Entype name={'instagram'} size={18} />
                    <Entype name={'linkedin'} size={18} />
                    <Entype name={'facebook'} size={18} />
                </View>
            </View>
            <Divider style={{ marginTop: 10, marginHorizontal: 20 }} />
        </TouchableOpacity>
    )
}

export default JymBuddyCarouselItem

const styles = StyleSheet.create({
    jymBuddyContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 20,
        flexDirection: 'row',
        borderRadius: 15,
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    imageContainer: {
        width: '50%',
        backgroundColor: 'purple',
        borderRadius: 20,
        overflow: 'hidden'
    },
    transparentBlock: {
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    ratingAndSocialContainer: {
        width: '50%',
        flexDirection: 'column',
        marginRight: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 110,
        borderRadius: 20,
        resizeMode: 'contain',
        borderRadius: 15,
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageSubTitle: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
    },
    imageSubTitlePrice: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
    },
    rowSection: {
        padding: 10
    },
    rowText: {
        color: 'grey',
        fontSize: 10.8,
        marginTop: 5,
        marginLeft: 10
    },
    rowTextAbout: {
        color: 'grey',
        fontSize: 13,
        marginTop: 5,
        marginLeft: 10,
        lineHeight: 25
    },
    rowBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5
    },
    subTitleText: {
        fontSize: 12,
        color: 'purple',
        fontWeight: '500'
    },
    btnContainer: {
        backgroundColor: 'purple',
        padding: 5,
        borderRadius: 15
    },
    textBtn: {
        color: 'white',
    },
    bookSeshBtnContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bookSeshBtn: {
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 20
    },
    bookSeshBtnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

