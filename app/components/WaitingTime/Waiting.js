import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const AppButton = ({ h }) => {
    return (
        <View style={styles.container} blurRadius={1}>
            <View style={styles.TimeContainer}>
                <StatusBar style='light-content' />
                <TouchableOpacity onPress={() => null} style={styles.button}>
                    {/* The time will become dynamic when the database is ready */}
                    <Text style={styles.buttonText}>60 mins</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },

    TimeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        padding: 10
    },

    button: {
        borderWidth: 5,
        borderColor: '#B9AAFF',
        width: screen.width / 3.5,
        height: screen.height / 7,
        borderRadius: screen.width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },


    buttonText: {
        fontSize: 24,
        color: '#B9AAFF',
    },


})

export default AppButton


