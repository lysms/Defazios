import React from 'react'
import { Text, View, TextInput, Button } from 'react-native';
import styles from './Payment.style'
import { Formik } from 'formik';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../components/HomeButton/HomeButton';

const Payment = ({ history }) => {
  return (
    <View style={styles.container}>
      <HomeButton h={history} />
  
        <Formik
          initialValues={{
            email: '',
            fname: '',
            lname: '',
            specialRequests: ''
          }}
          onSubmit={values => console.log(values)}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <TextInput 
                style={styles.paymentInput}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput 
                style={styles.paymentInput}
                placeholder="First Name"
                onChangeText={handleChange('fname')}
                onBlur={handleBlur('fname')}
                value={values.fname}
              />
              <TextInput 
                style={styles.paymentInput}
                placeholder="Last Name"
                onChangeText={handleChange('lname')}
                onBlur={handleBlur('lname')}
                value={values.lname}
              />
              <TextInput 
                style={styles.paymentInput}
                multiline={true}
                placeholder="Special Requests"
                onChangeText={handleChange('specialRequests')}
                onBlur={handleBlur('specialRequests')}
                value={values.specialRequests}
              />

              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
    </View>
  );
};
export default Payment;