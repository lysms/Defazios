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

              <Text>Full Name</Text>
              <TextInput 
                style={styles.paymentInput}
                placeholder="Full Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />

              <Text>Credit Card Number</Text>
              <TextInput 
                style={styles.paymentInput}
                placeholder="####-####-####-####"
                onChangeText={handleChange('cardNumber')}
                onBlur={handleBlur('cardNumber')}
                value={values.cardNumber}
              />

              <Text>CVV</Text>
              <TextInput 
                style={styles.paymentInput}
                placeholder="###"
                onChangeText={handleChange('cvv')}
                onBlur={handleBlur('cvv')}
                value={values.cvv}
              />

              <Text>Billing Address</Text>
              <Text>Street Address</Text>
              <TextInput 
                style={styles.paymentInput}
                placeholder="999 Rainbow Rd"
                onChangeText={handleChange('streetAddress')}
                onBlur={handleBlur('streetAddress')}
                value={values.streetAddress}
              />

              <Text>State</Text>
              <TextInput 
                style={styles.paymentInput}
                placeholder="New York"
                onChangeText={handleChange('state')}
                onBlur={handleBlur('state')}
                value={values.state}
              />

              <Text>City</Text>
              <TextInput 
                style={styles.paymentInput}
                placeholder="Troy"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
              />

              <Text>Zipcode</Text>
              <TextInput 
                style={styles.paymentInput}
                placeholder="Troy"
                onChangeText={handleChange('zipcode')}
                onBlur={handleBlur('zipcode')}
                value={values.zipcode}
              />

              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
    </View>
  );
};
export default Payment;