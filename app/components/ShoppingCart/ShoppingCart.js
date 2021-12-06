import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import styles from './ShoppingCart.style';
import HomeButton from '../HomeButton/HomeButton';


const ShoppingCart = (props) => {

  const order = props.items
  let sub = 0;

  const orders = order.map(el => {
    sub += el.cost;
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

      <HomeButton />

      <View style={styles.pageContent}>
        <View style={styles.container1}>
          <Text style={styles.confirm}>Review Order</Text>


          <View style={styles.details}>
            <ScrollView>
              { orders }
            </ScrollView>
            <Text style={styles.regularText2}>Subtotal: ${sub.toFixed(2)}</Text>
          </View> 
        </View>

        <View style={styles.container4}>
          <Link to={{pathname:"/menu", state: {type: "cateringMenu", createOrder: true, currentOrder:{order}}}}>
            <Text style={styles.optionText}>Continue Ordering</Text>
          </Link>
        
          <TouchableOpacity onPress={() => {props.stepHandler('schedule'); props.addToFinal("subTotal", sub)}}>
            <Text style={styles.optionText}>Choose Date</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCart;