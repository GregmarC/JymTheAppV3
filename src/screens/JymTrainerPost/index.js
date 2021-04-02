import Amplify, { API, graphqlOperation } from 'aws-amplify';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { createBlog } from '../../graphql/mutations';
import { listBlogs } from '../../graphql/queries'

const JymTrainerPost = (props) => {

    const sampleTrainer = {
        name: 'test',
        image: 'fijejafjeio',
        location: 'feiojaoj',
        rate: '50',
        latitude: 32.4,
        longitude: 32.1,
        maxClients: 3
    }

    const listJymTrainers = async () => {
        let jymTrainers = await API.graphql(graphqlOperation(listBlogs));

        console.log("Current Available Jym Trainers: ", jymTrainers.data.listBlogs.items.length)
    }

    const createJymTrainer = async () => {

        try {

            let newJymTrainer = await API.graphql(graphqlOperation(createBlog, {input: sampleTrainer}));
            console.warn('New Jym Trainer successfully created') 

        } catch (error) {

            console.log('An error occurred while attempting to create a Jym Trainer: ', error)

        }
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'lightgrey' }}>
            <View style={styles.container}>
                <View style={styles.jymPostForm}>
                    <TouchableOpacity style={styles.jymBtn} onPress={() => listJymTrainers()}>
                        <Text style={styles.btnText}>List Jym Trainers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.jymBtn2} onPress={() => createJymTrainer()}>
                        <Text style={styles.btnText}>Create Jym Trainer</Text>
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
    jymPostForm: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jymBtn : {
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 15,
    },
    jymBtn2 : {
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 15,
        marginTop: 30
    },
    btnText : {
        color: 'white',
        fontWeight: 'bold',
    }
})
