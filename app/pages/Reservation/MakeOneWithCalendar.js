import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import COLORS from '../../constants/colors';
import styles from './MakeOneWithCalendar.style'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'react-router-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MakeOneWithCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const {height, width} = Dimensions.get('window');
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.header}>
                    <Link to={{pathname:"/reservation"}} style={styles.returnBtn} onPress={()=>Haptics.ImpactFeedbackStyle.Light}>
                        <Text style={styles.textInsideReturnBtn}> Return </Text>
                    </Link>
                </View>
                <View style={styles.viewForContact}>
                    <Text style={{fontSize: 23, fontWeight: 'bold',}}> Create a New Order </Text>
                    <Text style={{fontSize: 17, color: 'grey', marginHorizontal: 7}}>Want to cater for tomorrow?</Text>
                    <Text style={{fontSize: 17, color: 'grey', marginHorizontal: 7}}>Call us at ###-###-### instead</Text>
                </View>
                <View style={styles.viewForCalendar}>
                    <Text style={{fontSize: 23, fontWeight:'bold', marginHorizontal: 5}}>Choose a Opened Time Slot</Text>
                    <CalendarPicker
                        onDateChange={this.onDateChange}
                        todayBackgroundColor = {COLORS.pastelBlue}
                        selectedDayColor="black"
                        selectedDayTextColor="white"
                        width={windowWidth / 100 * 96}
                        dayShape="cycle"
                    />
                    {/* <Text>SELECTED DATE:{ startDate }</Text> */}
                </View>
                <View style={styles.viewForSlot}>
                    <Text style={{fontSize: 23, fontWeight:'bold', marginHorizontal: 5,}}> Available Time Slots </Text>
                        <ScrollView style={{width: '100%',}}>
                        <TouchableOpacity style={styles.buttonInScrollView} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                            <Text style={styles.textInBtnInScroll}>2:30 PM EST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonInScrollView} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                            <Text style={styles.textInBtnInScroll}>4:30 PM EST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonInScrollView} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                            <Text
                                style={styles.textInBtnInScroll}>6:30 PM EST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonInScrollView} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                            <Text style={styles.textInBtnInScroll}>10:30 PM EST</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View
                    style={{marginTop: 13, justifyContent: 'center', alignItems: 'center',}}>
                        <Link to={{pathname:"/information"}} style={styles.nextBtn} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
                                <Text style={styles.textInNextBtn}> NEXT </Text>
                        </Link>
                </View>
            </SafeAreaView>
    );
  }
}

export default MakeOneWithCalendar;