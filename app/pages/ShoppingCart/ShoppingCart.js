import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

import styles from './ShoppingCart.style';
import HomeButton from '../../components/HomeButton/HomeButton';
import { useLocation } from 'react-router-native';


const ShoppingCart = ({ history }) => {

  const location = useLocation();
  const order = location.state?.order;

  let sub = 0;

  const orders = order.map(el => {
    sub += el.cost;
    return (
      <View key={el.id}>
        <Text>{el.name}</Text>
        <Text>Quantity: {el.quantity}</Text>
        <Text>Cost: {el.cost.toFixed(2)}</Text>
      </View>
    )
  })
  
  return (
    <View style={styles.container}>

      <HomeButton h={history} />

      <View style={styles.container3}>
      </View>

      <View style={styles.container1}>
        <Text style={styles.confirm}>Review Order</Text>

        <View style={styles.details}>

            <View style={styles.innerText}>
              <Text style={styles.regularText}>Order #123456</Text>
              <Text style={styles.specialText}>December 19, 2021</Text>
            </View>

            <Text style={styles.regularText2}>4:39pm</Text>
            <Text style={styles.regularText3}>Scheduled for 7:00pm December 21, 2021</Text>
            <View>
              { orders }
            </View>
            <Text style={styles.regularText2}>Subtotal: ${sub.toFixed(2)}</Text>

        </View> 
      </View>


      <View style={styles.container4}>
        <Link to={{pathname:"/menu", state: {type: "cateringMenu", createOrder: true, currentOrder:{order}}}}>
          <Text>Continue Ordering</Text>
        </Link>
        {/* <TouchableOpacity style={styles.createAccount2} onPress={() => history.push('/cateringMenu')}>
          <Text style={styles.textcreate}>Continue to Payment</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.container3}>
      </View>
      <View style={styles.container3}>
      </View>


      <View style={styles.container4}>
        {/* <TouchableOpacity style={styles.createAccount2} onPress={() => history.push('/confirmed')}>
          <Text style={styles.textcreate}>Continue to Payment</Text>
        </TouchableOpacity> */}
        <Link to={{pathname:"/payment", state: {currentOrder:{order}}}}>
          <Text>Continue to Payment</Text>
        </Link>
      </View>

      <View style={styles.container3}>
      </View>
    </View>
  );
};

export default ShoppingCart;