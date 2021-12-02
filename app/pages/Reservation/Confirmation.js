import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import COLORS from '../../constants/colors';
import styles from './Confirmation.style'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'react-router-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
            <Link to={{pathname:"/"}} style={styles.returnBtn} onPress={()=>Haptics.ImpactFeedbackStyle.Light}>
                <Text style={styles.textInsideReturnBtn}> Return </Text>
            </Link>
        </View>
        <View style={styles.viewForComfirmationTable}>

            <Text style={styles.titleText}> Order Confirmed! </Text>

            <View style={styles.confirmTable}>

                <View style={{alignItems: 'center',}}>
                    <Text style={{fontSize: 19, fontWeight: 'bold',}}>Confirmation Details</Text>
                </View>

                <View style={{justifyContent: 'space-around', marginHorizontal: 3, marginVertical: 7,}}>

                    <View style={styles.infoBoxForLine}>
                        <Text style={styles.infoText}>Name</Text>
                        <Text style={styles.infoText}>Jensen Wang</Text>
                    </View>

                    <View style={styles.infoBoxForLine}>
                        <Text style={styles.infoText}>Date</Text>
                        <Text style={styles.infoText}>December 18, 2021</Text>
                    </View>

                    <View style={styles.infoBoxForLine}>
                        <Text style={styles.infoText}>Time</Text>
                        <Text style={styles.infoText}>3:50 PM EST</Text>
                    </View>

                    <View style={styles.infoBoxForLine}>
                        <Text style={styles.infoText}>ID</Text>
                        <Text style={styles.infoText}>#1234567</Text>
                    </View>

                </View>
            </View>
        </View>
        <View style={styles.viewForReturnBtn}>
            <Link to={{pathname:"/"}} style={styles.l_returnBtn} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
                <Text style={styles.l_textInReturnBtn}> Confirm </Text>
            </Link>
        </View>
      </SafeAreaView>
    );
  }
}