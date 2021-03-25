import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import dummyfeed from '../../../assets/data/dummyfeed'
import CustomMarker from '../../components/CustomMarker'
import JymBuddyCarouselItem from '../../components/JymBuddyCarouselItem'

const SearchResultsMap = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null)

    return (
        <View style={styles.container}>
            <MapView
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
                <JymBuddyCarouselItem item={dummyfeed[3]} />
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
