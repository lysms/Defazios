import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import styles from './ShoppingCart.style';
import HomeButton from '../HomeButton/HomeButton';
import {  AntDesign } from '@expo/vector-icons';



const ShoppingCart = (props) => {

  const [items, setItems] = useState([]);

  const handleDelete = item => {
    let temp = [...items]
    temp.splice(item, 1)
    setItems([...temp]);
    props.editItems(temp.splice(item, 1))
  }

  let sub = 0;
  const order = props.items;

  useEffect(() => {

    setItems([...order])
    
  }, [])


  return (
    <View style={styles.container}>

      <HomeButton />

      <View style={styles.pageContent}>
        <View style={styles.container1}>
          <Text style={styles.confirm}>Review Order</Text>


          <View style={styles.details}>
            <ScrollView>
              { items.map((el, i) => {
                sub += el.cost;
                return (
                  <View key={el.id} style={styles.itemMain}>
                    <Text style={styles.itemTitle}>{el.name}</Text>
                    <View style={styles.cartItemInfo}>
                      <View style={styles.itemNums}>
                        <Text>Quantity: {el.quantity}</Text>
                        <Text>Cost: {el.cost.toFixed(2)}</Text>
                      </View>
                      <TouchableOpacity onPress={() => handleDelete(i)}>
                          <AntDesign name="delete" size={20} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  )
              }) 
            }
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