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
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5
    }}>

      <TouchableOpacity style={{
        backgroundColor: buttonColorOne,
        marginHorizontal: 2,
        paddingVertical: 3,
        paddingHorizontal: 5
      }} onPress={toggleHalfHandler} >
        <Text style={{color: buttonColorTwo}}>Half</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleHalfHandler} style={{
        backgroundColor: buttonColorTwo,
        marginHorizontal: 2,
        paddingVertical: 3,
        paddingHorizontal: 5
      }}>
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
              {choice}
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