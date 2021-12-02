import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native';
import styles from './Confirmation.style';
import { Link } from 'react-router-native';


const Confirmation = props => {

  const order = props.finalOrder;

  return (
    <View style={styles.container}>

      <View style={styles.container3}>
      </View>

      <View style={styles.container1}>
        <View style={styles.details}>
          <Text style={styles.regularText}>
            Confirmation Details
          </Text>

          <Text style={styles.regularText}>{order.fname + order.lname}</Text>

          <View style={styles.innerText}>

            <Text style={styles.specialText}>
              Date: {(order.dateFor.getMonth() + 1) + "/" + order.dateFor.getDate() + "/" + order.dateFor.getFullYear()}
            </Text>

            <Text style={styles.regularText}>
              Time: {order.dateFor.getHours() + ":" + order.dateFor.getMinutes()}
            </Text>
          </View>

          <Text style={styles.regularText}>Phone Number: {order.phone}</Text>
          <Text style={styles.regularText}>Email: {order.email}</Text>

          <Text style={styles.regularText}>1 Large - Cheese Pizza</Text>

          <Text style={styles.regularText}>Subtotal: ${order.subTotal.toFixed(2)}</Text>

        </View>

      </View>

      <View style={styles.container2}>
      
        <Link to='/' onPress={props.confirmOrder}>
          <Text>
            Confirm Order 
          </Text>
        </Link>
      </View>

      <View style={styles.container3}>
      </View>

    </View>
  );
};

export default Confirmation;