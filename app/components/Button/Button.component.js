import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Button, Dimensions } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AppButton = ({ h }) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={() => {h.push('/'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}>
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
    marginLeft: windowWidth / 100 * 5,
    marginTop: windowHeight > 800 ? windowHeight / 100 * 1.8: windowHeight / 100 * 2,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'black'
  },
})

export default AppButton


