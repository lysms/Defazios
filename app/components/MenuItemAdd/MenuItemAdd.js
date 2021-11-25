import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './MenuItemAdd.style';
import { AntDesign } from '@expo/vector-icons'; 


const MenuItemAdd = props => {
  


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
              <Text>{props.title}</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 5}}>
              <TouchableOpacity>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
              <View style={{marginHorizontal: 5, borderColor: "gray", borderWidth: 1, paddingHorizontal: 5}}>
                <Text style={{fontSize: 20}}>1</Text>
              </View>
              <TouchableOpacity>
                <AntDesign name="pluscircle" size={24} color="black" />
              </TouchableOpacity>

            </View>

            <View style={{margin: 10}}>
              <Button color="black" title="Add to order" onPress={() => console.log("button pressed")}/>
            </View>
          </View>

        </View>

        </View>

      </Modal>
  );
}

export default MenuItemAdd;