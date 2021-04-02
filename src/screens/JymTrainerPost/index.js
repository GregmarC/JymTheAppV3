import Amplify, { API, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'
import { Alert } from 'react-native';
import { TextInput } from 'react-native';
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { createBlog } from '../../graphql/mutations';
import { listBlogs } from '../../graphql/queries'

const JymTrainerPost = (props) => {

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [rate, setRate] = useState('')
    const [image, setImage] = useState('')

    let sampleTrainer = {
        name: name,
        image: image,
        location: location,
        rate: rate,
        latitude: 32.1,
        longitude: 20.5,
        maxClients: 2,
    }

    const resetFields = () => {
        setName('')
        setLocation('')
        setRate('')
        setImage('')
    }

    const listJymTrainers = async () => {
        let jymTrainers = await API.graphql(graphqlOperation(listBlogs));

        console.log("Current Available Jym Trainers: ", jymTrainers.data.listBlogs.items)
    }

    const createJymTrainer = async () => {

        try {

            let newJymTrainer = await API.graphql(graphqlOperation(createBlog, { input: sampleTrainer }));
            resetFields()
            Alert.alert('Thank you. You have successfully created a Jym Buddy Listing!')

        } catch (error) {

            console.log('An error occurred while attempting to create a Jym Trainer: ', error)

        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'lightgrey' }}>
            <View style={styles.container}>
                <View style={styles.listingTitle}>
                    <Feather name="plus-square" size={25} color={'purple'}/>
                    <Text style={{marginLeft: 10, color: 'purple'}}>Create Listing</Text>
                </View>
                <View style={styles.jymPostForm}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder='Name'
                        placeholderTextColor='darkgrey'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setLocation}
                        value={location}
                        placeholder='Location'
                        placeholderTextColor='darkgrey'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setRate}
                        value={rate}
                        placeholder='Rate'
                        placeholderTextColor='darkgrey'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setImage}
                        value={image}
                        placeholder='Profile Image'
                        placeholderTextColor='darkgrey'
                    />
                    {/* <TouchableOpacity style={styles.jymBtn} onPress={() => listJymTrainers()}>
                        <Text style={styles.btnText}>List Jym Trainers</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.jymBtn2} onPress={() => createJymTrainer()}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default JymTrainerPost

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: 'lightgrey',
        height: '100%',
        width: '100%'
    },
    listingTitle: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 15,
        zIndex: 2,
        width: '100%',
    },
    jymPostForm: {
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'darkgrey',
        // borderWidth: 2
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        width: '70%',
        padding: 15,
        marginTop: 15,
        borderRadius: 8
    },
    jymBtn: {
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 15,
        marginTop: 35
    },
    jymBtn2: {
        backgroundColor: 'purple',
        paddingHorizontal: 35,
        paddingVertical: 20,
        borderRadius: 25,
        marginTop: 50
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    }
})
