import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Dimensions, Button } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import styles from './WaitingTime.style';
import HomeButton from '../../components/HomeButton/HomeButton';

const WaitingTime = ({ history }) => {
    return (
        <View style={styles.container}>
            <HomeButton />
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

export default WaitingTime;


