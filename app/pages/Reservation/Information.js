import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import COLORS from '../../constants/colors';
import styles from './Information.style'
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
            <Link to={{pathname:"/makeOneWithCalendar"}} style={styles.returnBtn} onPress={()=>Haptics.ImpactFeedbackStyle.Light}>
                <Text style={styles.textInsideReturnBtn}> Return </Text>
            </Link>
        </View>
        <View style={styles.viewForInput}>

          	<Text style={styles.textForTitle}>Enter Confirmation Details</Text>

          	<Text style={styles.infoText}>First Name</Text>
          	<TextInput style={styles.infoInput} placeholder="Enter Your First Name Here"/>

          	<Text style={styles.infoText}>Last Name</Text>
			<TextInput style={styles.infoInput} placeholder="Enter Your Last Name Here"/>

          	<Text style={styles.infoText}>Phone Number</Text>
          	<TextInput style={styles.infoInput} placeholder="Enter Your Phone Number Here"/>

          	<Text style={styles.infoText}>Address</Text>
          	<TextInput style={styles.infoInput} placeholder="Enter Your Address Here"/>

          	<Text style={styles.infoText}>Special Direction</Text>
          	<TextInput	multiline={true} style={styles.infoInputForMutli} placeholder="Enter Your Special Direction Here"/>
			
        </View>
        <View style={styles.viewForComfirm}>
			<Link to={{pathname:"/confirmation"}} style={styles.confirmBtn} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
				<Text style={styles.textInConfirmBtn}> Confirm </Text>
			</Link>
        </View>
      </SafeAreaView>
    );
  }
}