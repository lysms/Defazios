import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Formik } from 'formik';

import styles from './OrderInfo.style';
import COLORS from '../../constants/colors';

const OrderInfo = () =>  {

  return (
    <SafeAreaView style={styles.infoContainer}>
      <View>
        <TouchableOpacity style={styles.returnBtn}>
          <Text style={styles.returnBtnText}>
            Return
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.pageContent}>
        <Text style={styles.pageTitleText}>
          Enter Confirmation Details
        </Text>

        <Text style={styles.infoText}>First Name</Text>
        <TextInput 
          style={styles.infoInput}
          placeholder="First Name"
        />

        <Text style={styles.infoText}>Last Name</Text>
        <TextInput 
          style={styles.infoInput}
          placeholder="Last Name"
        />
            
        <Text style={styles.infoText}>Phone Number</Text>
        <TextInput 
          style={styles.infoInput}
          placeholder="###-###-####"
        />

        <Text style={styles.infoText}>Email Address</Text>
        <TextInput
          style={styles.infoInput}
          placeholder="johndoe@email.com"
        />
        <Text style={styles.infoText}>Special Requests</Text>
        <TextInput
          style={styles.specialRequests}
          multiline={true}
          placeholder="Enter any special requests here"
          />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

export default OrderInfo;