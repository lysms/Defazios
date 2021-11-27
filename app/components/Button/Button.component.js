import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Button } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const AppButton = ({ h }) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={() => {h.push('/'); console.log("back to home")}}>
      <MaterialIcons style={styles.itemicons} name="home" size={32} color="white" />
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({

  homeButton: { // home button will be used to redirect back to home
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 45,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'black'
  },
})

export default AppButton


