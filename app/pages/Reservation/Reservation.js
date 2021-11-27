import React from 'react';
import styles from './Reservation.style';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import * as Haptics from 'expo-haptics';
import HomeButton from '../../components/HomeButton/HomeButton';

const reservation = ({history}) => {
    return(
        <SafeAreaView
            style={{flex: 1}}>
            <View
                style={{
                    flexDirection: "column",
                    flex: 1
                }}>
                <View style={styles.header}>
                    <HomeButton h={history}/>
                </View>
                <View style={styles.viewForPreView}>
                    <Text
                        style={styles.titleForPreView}>Previous Orders</Text>
                    <ScrollView style={styles.scrollviewForPreView}>
                        <View style={styles.preOrderBtn}>
                            <Text style={styles.textInsidePreOrderBtn}>October 24, 2021</Text>
                            <Button title="Details" onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}/>
                        </View>
                        <View style={styles.preOrderBtn}>
                            <Text style={styles.textInsidePreOrderBtn}>September 16, 2021</Text>
                            <Button title="Details" onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}/>
                        </View>
                    </ScrollView>
                </View>
                <View
                    style={styles.viewForOrderBtn}>    
                    <Link to={{pathname:"/makeOneWithCalendar", state: {type: "calendar"}}} style={styles.orderBtn} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
                        <Text style={styles.textInsideOrderBtn}> Create New Reservation </Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default reservation;
