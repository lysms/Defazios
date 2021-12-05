import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './Schedule.style';

const Schedule = props => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  useEffect(() => {
    props.setDate("dateFor", date);
  }, [])

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    props.setDate("dateFor", date);
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
    <View style={styles.schedContainer}>
      <View>
        <Text style={styles.mainText}>Choose Date</Text>
        <Text style={styles.subText}>Want to cater for tomorrow? Call us at 518-271-1111 instead.</Text>
      </View>


      <View style={styles.chooseContainer}>

        <View style={styles.chooseItem}>
          <TouchableOpacity onPress={showDatepicker} style={styles.chooseBtn}>
            <Text style={styles.chooseBtnText}>Choose Date</Text>
          </TouchableOpacity>

          <Text>
            Selected Date: {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}
          </Text>
        </View>

        <View style={styles.chooseItem}>
          <TouchableOpacity onPress={showTimepicker} style={styles.chooseBtn}>
            <Text style={styles.chooseBtnText}>Choose Time</Text>
          </TouchableOpacity>

          <Text>
            Time: {date.getHours() + ":" + date.getMinutes()}
          </Text>
        </View>
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

      <View style={styles.linkContainer}>
        
        <TouchableOpacity onPress={() => props.stepHandler('cart')}>
          <Text style={styles.optionText}>Return to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.stepHandler('info')}>
          <Text style={styles.optionText}>Confirm Order Information</Text>
        </TouchableOpacity>
        
      </View>
    </View>

  )
}

export default Schedule;