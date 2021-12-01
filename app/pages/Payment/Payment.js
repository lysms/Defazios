import React from 'react'
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './Payment.style'
import { Formik } from 'formik';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../components/HomeButton/HomeButton';
import { useLinkProps } from '@react-navigation/native';

const Payment = (props, { history }) => {
  return (
    <View style={styles.container}>
      <HomeButton h={history} />
      <View>
        <TouchableOpacity onPress={() => props.stepHandler('info')}>
          <Text>Return to order information</Text>
        </TouchableOpacity>
      </View>

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
              zipcode: ''
            }}
            onSubmit={values => console.log(values)}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>

                <View style={styles.formItem}>
                  <Text>Full Name</Text>
                  <TextInput 
                    style={styles.paymentInput}
                    placeholder="Full Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                </View>

                <View style={styles.formItem}>
                  <Text>Credit Card Number</Text>
                  <TextInput 
                    style={styles.paymentInput}
                    placeholder="####-####-####-####"
                    onChangeText={handleChange('cardNumber')}
                    onBlur={handleBlur('cardNumber')}
                    value={values.cardNumber}
                  />
                </View>

                <View style={styles.formItem}>
                  <Text>CVV</Text>
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
                  <Text>Street Address</Text>
                  <TextInput 
                    style={styles.paymentInput}
                    placeholder="999 Rainbow Rd"
                    onChangeText={handleChange('streetAddress')}
                    onBlur={handleBlur('streetAddress')}
                    value={values.streetAddress}
                  />
                </View>

                <View style={styles.formItem}>  
                  <Text>State</Text>
                  <TextInput 
                    style={styles.paymentInput}
                    placeholder="New York"
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    value={values.state}
                  />
                </View>
                <View style={styles.formItem}>
                  <Text>City</Text>
                  <TextInput 
                    style={styles.paymentInput}
                    placeholder="Troy"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                  />
                </View>

                <View style={styles.formItem}>
                  <Text>Zipcode</Text>
                  <TextInput 
                    style={styles.paymentInput}
                    placeholder="Troy"
                    onChangeText={handleChange('zipcode')}
                    onBlur={handleBlur('zipcode')}
                    value={values.zipcode}
                  />
                </View>

                <Button onPress={() => {handleSubmit; props.stepHandler('confirm')}} title="Confirm Payment" />
              </View>
            )}
          </Formik>
        </View>
    </View>
  );
};
export default Payment;