import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions, Button } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import COLORS from '../../constants/colors';

import AppButton from '../Button/Button.component';
const Waiting = ({ history }) => {
    return (
        <View style={styles.container}>
            <AppButton h={history} />
            <View style={styles.contentContainer}>

                <Text style={{ fontSize: 20 }}>Your order will be ready in</Text>
                <View style={styles.TimeContainer}>
                    <StatusBar style='light-content' />
                    <TouchableOpacity onPress={() => null} style={styles.button}>
                        {/* The time will become dynamic when the database is ready */}
                        <Text style={styles.buttonText}>60 mins</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15
    },

    TimeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        padding: 10
    },

    button: {
        borderWidth: 5,
        // borderColor: '#B9AAFF',
        borderColor: COLORS.blueText,
        // width: screen.width / 3.5,
        // height: screen.height / 7,
        width: 125, 
        height: 125,
        borderRadius: 62.5,
        justifyContent: 'center',
        alignItems: 'center',
    },


    buttonText: {
        fontSize: 24,
        // color: '#B9AAFF',
        color: COLORS.blueText
    },

    contentContainer: {
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: '50%',
        height: '100%', 
        width: '100%'
    }


})

export default Waiting


