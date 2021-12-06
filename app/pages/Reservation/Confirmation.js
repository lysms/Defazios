import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import styles from './Confirmation.style';
import designs from '../../constants/designs';
import * as Haptics from 'expo-haptics';
import { Link } from 'react-router-native';
import db from '../../firebase';


const Confirmation = (props) => {

  const details = props.info;

  const handleReservation = () => {
    db.collection('reservations').add(details);
  }

  return (
    <SafeAreaView style={styles.pageContent}>
      <View style={styles.viewForComfirmationTable}>

        <View style={styles.confirmTable}>
          <View style={{alignItems: 'center',}}>
            <Text style={{fontSize: 19, fontWeight: 'bold',}}>Confirmation Details</Text>
          </View>

          <View style={styles.confirmContainer}>

            <View style={styles.infoBoxForLine}>
              <Text style={styles.infoText}>Name:</Text>
              <Text style={styles.infoText}>{details.firstName} {details.lastName}</Text>
            </View>

            <View style={styles.infoBoxForLine}>
              <Text style={styles.infoText}>Phone Number:</Text>
              <Text style={styles.infoText}>{details.phone}</Text>
            </View>

            <View style={styles.infoBoxForLine}>
              <Text style={styles.infoText}>Email Address:</Text>
              <Text style={styles.infoText}>{details.email}</Text>
            </View>

            <View style={styles.infoBoxForLine}>
              <Text style={styles.infoText}>Date:</Text>
              <Text style={styles.infoText}>
                {details.date.getMonth() + 1}/{details.date.getDate()}/{details.date.getFullYear()}
              </Text>
            </View>

            <View style={styles.infoBoxForLine}>
              <Text style={styles.infoText}>Time:</Text>
              <Text style={styles.infoText}>
                {(24 - details.date.getHours()) + 1}:{details.date.getMinutes()}
              </Text>
            </View>

            <View style={styles.infoBoxForLine}>
              <Text style={styles.infoText}>Party Size: </Text>
              <Text style={styles.infoText}>{details.size}</Text>
            </View>

          </View>
          </View>
      </View>

      <View style={styles.viewForReturnBtn}>
        <Link to={{pathname:"/"}} onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
          <Text style={designs.optionText}>Cancel Reservation</Text>
        </Link>
        <Link to={{pathname:"/"}} onPress={()=>{handleReservation(); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
          <Text style={designs.optionText}>Confirm Reservation</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default Confirmation;