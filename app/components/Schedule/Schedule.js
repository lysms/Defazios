import React, { useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';

import styles from './Schedule.style';

const Schedule = props => {

  const [currentDate, setCurrentDate] = useState('');

  const dateChangeHandler = date => {
    setCurrentDate(date)
  }

  return (
    <View>

      <TouchableOpacity onPress={() => props.stepHandler('cart')}>
        <Text>Return to Cart</Text>
      </TouchableOpacity>

      <CalendarPicker 
        onDateChange={dateChangeHandler}
      />

      <Text>
        {currentDate.toString() }
      </Text>

      <View style={styles.container4}>
        <TouchableOpacity onPress={() => props.stepHandler('info')}>
          <Text>Confirm Order Information</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Schedule;