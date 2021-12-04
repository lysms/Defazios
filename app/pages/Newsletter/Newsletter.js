import React, { useState } from 'react';
import styles from './Newsletter.style'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import HomeButton from '../../components/HomeButton/HomeButton';

const Newsletter = ({ history }) => {
    const [emailAddress, setEmail] = useState('null');
    // const [number, onChangeNumber] = useState(null);

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Successfully Subscribed",
            "If you provided us with a correct email adress",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );

const image = { url: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'}

    return (

        // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={{flex: 1,}}>
            <View style={styles.header}>
                <HomeButton />
            </View>
            <View style={styles.content}>
                <Text style={styles.contentText}>Join our newsletter to keep track of the
                    latest specials, offers, merchandise, and more!</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'space-between',
                    }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email here"
                        onChangeText={(val) => setEmail(val)}
                    />
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={() => console.log({ emailAddress })}
                        onPress={createTwoButtonAlert}
                    >
                        <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'bold', }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        // </ImageBackground>
    )
};

export default Newsletter;

