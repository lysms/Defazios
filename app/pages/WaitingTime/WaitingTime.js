import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, View, Dimensions, Button, SafeAreaViewBase } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import styles from './WaitingTime.style';
import HomeButton from '../../components/HomeButton/HomeButton';

const WaitingTime = ({ history }) => {
    return (

        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <HomeButton />
            </View>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', }}>Order ID: #1246</Text>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', }}>Your order will be ready in</Text>
                    <View style={styles.TimeContainer}>
                        <StatusBar style='light-content' />
                        <TouchableOpacity onPress={() => null} style={styles.button}>
                            {/* The time will become dynamic when the database is ready */}
                            <Text style={styles.buttonText}>60 mins</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default WaitingTime;


