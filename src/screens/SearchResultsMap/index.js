import React, { useState, useEffect, useRef } from 'react'
import { FlatList, useWindowDimensions } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import dummyfeed from '../../../assets/data/dummyfeed'
import CustomMarker from '../../components/CustomMarker'
import JymBuddyCarouselItem from '../../components/JymBuddyCarouselItem'

const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const flatList = useRef()
    const map = useRef()
    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef( ({ viewableItems }) => {
        if( viewableItems.length > 0){
            const selectedPlace = viewableItems[0].item
            setSelectedPlaceId(selectedPlace.id)
        }
    })
    
    const width = useWindowDimensions().width;

    useEffect(() => {

        if( !selectedPlaceId || !flatList ){
            return
        }

        const index = dummyfeed.findIndex(jymBuddy => jymBuddy.id === selectedPlaceId)
        flatList.current.scrollToIndex({ index: index, animated: false })
        const selectedJymBuddy = dummyfeed[index]
        const selectedJymBuddyLocation = {
            latitude: selectedJymBuddy.coordinate.latitude,
            longitude: selectedJymBuddy.coordinate.longitude,
            latitudeDelta: .5,
            longitudeDelta: .5,
        }
        map.current.animateToRegion(selectedJymBuddyLocation)

    }, [selectedPlaceId])

    return (
        <View style={styles.container}>
            <MapView
                ref={map}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 28.3279,
                    longitude: -16.51248,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {dummyfeed.map((item) => 
                    <CustomMarker 
                        coordinate={item.coordinate} 
                        rate={item.rate}
                        isSelected={item.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(item.id)}
                    /> 
                )}
            </MapView>

            <View style={{position: 'absolute', bottom: 10, width: '100%'}}>
                <FlatList
                    ref={flatList} 
                    data={dummyfeed}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <JymBuddyCarouselItem item={item} />}
                    snapToInterval={ width - 60 }
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
}

export default SearchResultsMap

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    map : {
        height: '100%',
        width: '100%'
    },
})
