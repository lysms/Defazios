import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './MenuItemAdd.style';
import { AntDesign } from '@expo/vector-icons'; 


const MenuItemAdd = props => {

  const [itemCount, setItemCount] = useState(1);
  // HALF COST FULL  COST
  const [totalCost, setTotalCost] = useState(0);
  const [itemCost, setItemCost] = useState(0)
  const [toggleButton, setToggleButton] = useState(false);
  const [buttonColorOne, setButtonColorOne] = useState('black');
  const [buttonColorTwo, setButtonColorTwo] = useState('white');


  useEffect(() => {
    if (props.type == "nm") {
      setItemCost(props.item.cost)
      setTotalCost(props.item.cost)
    } 
    else if (props.type == "hf") {
      setItemCost(props.item.halfCost)
      setTotalCost(props.item.halfCost)

    } 
    else if (props.type =="nc") {
      setItemCost(props.item.halfCost)
      setTotalCost(props.item.halfCost)
    }

  }, [])

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

    let horf = "";

    if (toggleButton) {
      horf = "full";
    } else {
      horf = "half";
    }

    let itemOrder = {
      ...props.item,
      quantity: itemCount, 
      cost: totalCost, 
      halfOrFull: horf
    }
    console.log(itemOrder)
    props.h()
    props.showHandler();
  }
  
  const toggleHalfHandler = () => {
    setToggleButton(!toggleButton)

    if (toggleButton) {
      setButtonColorOne("black");
      setButtonColorTwo("white");
      
      if (props.type == "hf") {
        setItemCost(props.item.halfCost)
        setTotalCost(props.item.halfCost)
      }

    } else {
      setButtonColorOne("white");
      setButtonColorTwo("black");

      if (props.type == "hf") {
        setItemCost(props.item.fullCost)
        setTotalCost(props.item.fullCost)
      }
    }
    setItemCount(1);
  }

  let choice = null;

  if (props.type == "hf") {
    choice = 
    <View style={styles.hfContainer}>
      <TouchableOpacity style={{backgroundColor: buttonColorOne,...styles.hfBtn}} onPress={toggleHalfHandler} >
        <Text style={{color: buttonColorTwo}}>Half</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleHalfHandler} style={{backgroundColor: buttonColorTwo, ...styles.hfBtn}}>
        <Text style={{color: buttonColorOne}}>Full</Text>
      </TouchableOpacity>
    </View>
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

        <View style={styles.modalContainer}>
          
          <TouchableOpacity onPress={props.showHandler}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>


          <View style={styles.modalInfo}>
            
            <View style={styles.modalInfoMain}>
              <Text>{props.item.name}</Text>
              {choice}
              <Text>Total Cost: ${totalCost.toFixed(2)}</Text>
            </View>

            <View style={styles.modalQuantity}>
              <TouchableOpacity onPress={decreaseCountHandler}>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
              <View style={styles.itemCount}>
                <Text style={styles.itemCountText}>{itemCount}</Text>
              </View>
              <TouchableOpacity onPress={increaseCountHandler}>
                <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View style={styles.addOrderBtn}>
              <Button color="black" title="Add to order" onPress={addToOrderHandler}/>
            </View>

          </View>
        </View>
      </View>
    </Modal>
  );
}

export default MenuItemAdd;