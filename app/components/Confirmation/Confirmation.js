import React from 'react'
import { Text, View,TouchableOpacity, ScrollView } from 'react-native';
import styles from './Confirmation.style';
import { Link } from 'react-router-native';


const Confirmation = props => {

  const order = props.finalOrder;
  console.log(order)


  let items = 
    order.items.map(el => {
      return (
        <View key={el.id} style={styles.itemMain}>
          <Text style={styles.itemTitle}>{el.name}</Text>
          <View style={styles.itemNums}>
            <Text>Quantity: {el.quantity}</Text>
            <Text>Cost: {el.cost.toFixed(2)}</Text>
          </View>
        </View>
      )
    })
  
  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <View style={styles.details}>
          <Text style={styles.boldText}>
            Confirmation Details
          </Text>

          <Text style={styles.regularText}>Name: {order.fname} {order.lname}</Text>

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

          <ScrollView>
            { items }
          </ScrollView>
          <Text style={styles.regularText}>Subtotal: ${order.subTotal.toFixed(2)}</Text>

        </View>

      </View>


      <View style={styles.container2}>
        
        <Link to='/'>
          <Text style={styles.optionText}>Cancel Order</Text>
          </Link>
      
        <Link to='/' onPress={props.confirmOrder}>
          <Text style={styles.optionText}>Confirm Order</Text>
        </Link>
      </View>

    </View>
  );
};

export default Confirmation;