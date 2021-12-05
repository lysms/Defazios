import React, { useState } from 'react';
import {  Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './Information.style'
import * as Haptics from 'expo-haptics';
import { Link } from 'react-router-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';


const Information = props => {

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

  const handleFormSubmit = values => {
    let curDate = new Date();
    let newObj = {
      ...values, 
      datePlaced: curDate, 
      date: date
    }
    props.setInfoHandler(newObj);
  }


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Link to={{pathname:"/reservation"}} style={styles.returnBtn} onPress={()=>Haptics.ImpactFeedbackStyle.Light}>
          <Text style={styles.textInsideReturnBtn}> Return </Text>
        </Link>
      </View>
      <View style={styles.viewForInput}>

        <Text style={styles.textForTitle}>Enter Confirmation Details</Text>
        <Formik
          initialValues={{
            size: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
          }}
          onSubmit={values => handleFormSubmit(values)}
        >

          {({handleChange, handleBlur, handleSubmit, values}) => (

            <View>

              <Text style={styles.infoText}>First Name</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="First Name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />

              <Text style={styles.infoText}>Last Name</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="Last Name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
                  
              <Text style={styles.infoText}>Phone Number</Text>
              <TextInput 
                style={styles.infoInput}
                placeholder="###-###-####"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />

              <Text style={styles.infoText}>Email Address</Text>
              <TextInput
                style={styles.infoInput}
                placeholder="johndoe@email.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Text style={styles.infoText}>Party Size</Text>
              <TextInput
                style={styles.infoInput}
                placeholder="2-10"
                onChangeText={handleChange('size')}
                onBlur={handleBlur('size')}
                value={values.size}
              />

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

              <TouchableOpacity onPress={handleSubmit}>
                <Text>Confirm Reservation</Text>
              </TouchableOpacity>

            </View>
          )}
        </Formik>
        
      </View>
    </SafeAreaView>
  );

}

export default Information;