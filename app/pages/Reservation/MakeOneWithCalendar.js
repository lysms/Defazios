import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, TouchableOpacity, TextInput, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import styles from './MakeOneWithCalendar.style'
import * as Haptics from 'expo-haptics';
import { Link } from 'react-router-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MakeOneWithCalendar = () => {


  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [hours, setHours] = useState(date.getHours());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    setHours(currentDate.getHours())
    setMinutes(currentDate.getMinutes())
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Link to={{pathname:"/reservation"}} style={styles.returnBtn} onPress={()=>Haptics.ImpactFeedbackStyle.Light}>
          <Text style={styles.textInsideReturnBtn}>Return</Text>
        </Link>
      </View>

      <View style={styles.viewForCalendar}>
        <View>

          <View>
              <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
           <Text>Selected date: {date.getMonth() + 1}/{date.getDate()}</Text>

          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>

          <Text>Selected time: {hours}:{minutes}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View> 
      </View>
      
      <View style={{marginTop: 13, justifyContent: 'center', alignItems: 'center',}}>
        <Link to={{pathname:"/information"}} style={styles.nextBtn} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
          <Text style={styles.textInNextBtn}> NEXT </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default MakeOneWithCalendar;