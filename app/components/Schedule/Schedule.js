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
    <View style={styles.schedContainer}>

      <Text>Schedule Order</Text>
      

      <Text>Want to cater for tomorrow? Call us at 518-271-1111 instead.</Text>

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
      
      <TouchableOpacity onPress={() => props.stepHandler('cart')}>
        <Text>Return to Cart</Text>
      </TouchableOpacity>
    </View>

  )
}

export default Schedule;