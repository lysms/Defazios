import React, { useState } from 'react';
import {  Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';

import styles from './Information.style';
import designs from '../../constants/designs';

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
    <SafeAreaView style={designs.infoContainer}>
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
            
            
            <View style={styles.infoContent}>

              <View>
                <Text style={designs.infoText}>First Name</Text>
                <TextInput 
                  style={designs.infoInput}
                  placeholder="First Name"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />

                <Text style={designs.infoText}>Last Name</Text>
                <TextInput 
                  style={designs.infoInput}
                  placeholder="Last Name"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
                    
                <Text style={designs.infoText}>Phone Number</Text>
                <TextInput 
                  style={designs.infoInput}
                  placeholder="###-###-####"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                />

                <Text style={designs.infoText}>Email Address</Text>
                <TextInput
                  style={designs.infoInput}
                  placeholder="johndoe@email.com"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />

                <Text style={designs.infoText}>Party Size</Text>
                <TextInput
                  style={designs.infoInput}
                  placeholder="2-10"
                  onChangeText={handleChange('size')}
                  onBlur={handleBlur('size')}
                  value={values.size}
                />

                <View style={designs.chooseContainer}>

                  <View style={designs.chooseItem}>
                    <TouchableOpacity onPress={showDatepicker} style={designs.chooseBtn}>
                      <Text style={designs.chooseBtnText}>Choose Date</Text>
                    </TouchableOpacity>

                    <Text>
                      Selected Date: {(date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()}
                    </Text>
                  </View>

                  <View style={designs.chooseItem}>
                    <TouchableOpacity onPress={showTimepicker} style={designs.chooseBtn}>
                      <Text style={designs.chooseBtnText}>Choose Time</Text>
                    </TouchableOpacity>

                  <Text>
                    Time: {date.getHours() + ":" + date.getMinutes()}
                  </Text>
                </View>

                  {show && (                      <DateTimePicker
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


              <View style={designs.linkContainer}>
                <Link to={{pathname:"/reservation"}} onPress={()=>Haptics.ImpactFeedbackStyle.Light}>
                  <Text style={designs.optionText}> Return </Text>
                </Link>

                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={designs.optionText}>Confirm Reservation</Text>
                </TouchableOpacity>
              </View>


            </View>
          )}
        </Formik>
        
      </View>
    </SafeAreaView>
  );

}

export default Information;