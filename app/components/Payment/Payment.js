import React from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './Payment.style'
import { Formik } from 'formik';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../HomeButton/HomeButton';
import { useLinkProps } from '@react-navigation/native';

const Payment = (props, { history }) => {
  return (
    <View style={styles.container}>
      <HomeButton/>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Payment Information</Text>

          <Formik
            initialValues={{
              name: '',
              cardNumber: '',
              cvv: '',
              streetAddress: '',
              state: '',
              city: '',
              zipcode: '',
              exp: ''
            }}
            onSubmit={values => console.log(values)}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View style={styles.formItems}>

                  <View style={styles.formItem}>
                    <Text style={styles.paymentText}>Full Name</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="Full Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                  </View>

                  <View style={styles.formItem}>
                    <Text style={styles.paymentText}>Credit Card Number</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="####-####-####-####"
                      onChangeText={handleChange('cardNumber')}
                      onBlur={handleBlur('cardNumber')}
                      value={values.cardNumber}
                    />
                  </View>

                  <View style={styles.formItem}>
                    <Text style={styles.paymentText}>Expiration Date</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="##/##"
                      onChangeText={handleChange('exp')}
                      onBlur={handleBlur('exp')}
                      value={values.exp}
                    />
                  </View>

                  <View style={styles.formItem}>
                    <Text style={styles.paymentText}>CVV</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="###"
                      onChangeText={handleChange('cvv')}
                      onBlur={handleBlur('cvv')}
                      value={values.cvv}
                    />
                  </View>
                  <Text style={styles.formTitle}>Billing Address</Text>

                  <View style={styles.formItem}>
                    <Text style={styles.paymentText}>Street Address</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="999 Rainbow Rd"
                      onChangeText={handleChange('streetAddress')}
                      onBlur={handleBlur('streetAddress')}
                      value={values.streetAddress}
                    />
                  </View>

                  <View style={styles.formItem}>  
                    <Text style={styles.paymentText}>State</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="New York"
                      onChangeText={handleChange('state')}
                      onBlur={handleBlur('state')}
                      value={values.state}
                    />
                  </View>
                  <View style={styles.formItem}>
                    <Text style={styles.paymentText}>City</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="Troy"
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      value={values.city}
                    />
                  </View>

                  <View style={styles.formItem}>
                    <Text style={styles.paymentText}>Zipcode</Text>
                    <TextInput 
                      style={styles.paymentInput}
                      placeholder="12180"
                      onChangeText={handleChange('zipcode')}
                      onBlur={handleBlur('zipcode')}
                      value={values.zipcode}
                    />
                  </View>
                </View>

                
                <View style={styles.linkContainer}>
                  <TouchableOpacity onPress={() => props.stepHandler('info')}>
                    <Text style={styles.optionText}>Return to order information</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {handleSubmit(); props.stepHandler('confirm')}}>
                    <Text style={styles.optionText}>Confirm Payment</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
    </View>
  );
};
export default Payment;