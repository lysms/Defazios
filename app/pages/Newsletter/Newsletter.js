import React from 'react';
import styles from './Newsletter.style'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, TextInput, Button, Alert } from 'react-native';

const Newsletter = ({ history }) => {
    const [emailAddress, setEmail] = React.useState('null');
    // const [number, onChangeNumber] = React.useState(null);

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

    return (
        <SafeAreaView
            style={{
                backgroundColor: '#fff',
                flex: 1,
            }}>
            <View
                style={styles.header}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => history.push("/")}
                >
                    <Text style={styles.buttonText}>HOME</Text>
                </TouchableOpacity>
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
                        <Text style={{ color: '#fff', fontWeight: 'bold', }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default Newsletter;

