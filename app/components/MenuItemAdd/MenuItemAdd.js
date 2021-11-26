import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './MenuItemAdd.style';
import { AntDesign } from '@expo/vector-icons'; 


const MenuItemAdd = props => {

  let itemCost = 0;

  if (props.type == "nm") {
    itemCost = props.item.cost
  } 
  else if (props.type == "hf") {
    itemCost = props.item.halfCost
  } else if (props.type =="hc") {
    itemCost = props.item.halfCost

  }

  const [itemCount, setItemCount] = useState(1);
  const [totalCost, setTotalCost] = useState(itemCost);
  

  const increaseCountHandler = () => {
    setItemCount(itemCount + 1);
    setTotalCost(totalCost + itemCost);
  }

  const decreaseCountHandler = () => {
    if (itemCount > 1 && totalCost > 0) {
      setItemCount(itemCount - 1);
      setTotalCost(totalCost - itemCost);
    }
  }

  const addToOrderHandler = () => {
    let itemOrder = {
      ...props.item,
      quantity: itemCount, 
      cost: totalCost
    }
    console.log(itemOrder)
  }

  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={props.show}
      onRequestClose={() => {
        props.showHandler
      }} 
    >
      <View style={styles.modalView}>

        <View style={{
          backgroundColor: 'white', 
          paddingTop: 10, 
          paddingHorizontal: 10, 
          borderRadius: 5,
          justifyContent: 'center',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 10

          }}>
          <TouchableOpacity onPress={props.showHandler}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>


          <View style={{
            paddingHorizontal: 15,
            paddingBottom: 5
          }}>
            
            <View style={{
              alignItems: 'center', 
              marginBottom: 10,
              marginTop: 4
            }}>
              <Text>{props.item.name}</Text>
              <Text>Total Cost: ${totalCost.toFixed(2)}</Text>

            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 5}}>
              <TouchableOpacity onPress={decreaseCountHandler}>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
              <View style={{marginHorizontal: 5, borderColor: "gray", borderWidth: 1, paddingHorizontal: 5}}>
                <Text style={{fontSize: 20}}>{itemCount}</Text>
              </View>
              <TouchableOpacity onPress={increaseCountHandler}>
                <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableOpacity>

            </View>

            <View style={{margin: 10}}>
              <Button color="black" title="Add to order" onPress={addToOrderHandler}/>
            </View>
          </View>

        </View>

        </View>

      </Modal>
  );
}

export default MenuItemAdd;