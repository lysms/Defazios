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

      <Text>Schedule Order</Text>
      

      <Text>Want to cater for tomorrow? Call us at 518-271-1111 instead.</Text>


      <View>
        <Button onPress={showDatepicker} title="Choose Date" />
      </View>

      <View>
        <Button onPress={showTimepicker} title="Choose Time" />
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

      <Text>
        Date: {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}
      </Text>

      <Text>
        Time: {date.getHours() + ":" + date.getMinutes()}
      </Text>
      

      <View style={styles.container4}>
        <TouchableOpacity onPress={() => props.stepHandler('info')}>
          <Text>Confirm Order Information</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={() => props.stepHandler('cart')}>
        <Text>Return to Cart</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Schedule;