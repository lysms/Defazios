import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import styles from './Check.style';
import { Ionicons } from '@expo/vector-icons';


const Check = props => {

  const [checked, setToggleCheck] = useState(props.initial)

  const handleCheckPress = () => {
    setToggleCheck(!checked);
  }

  return (
      <TouchableOpacity onPress={handleCheckPress}>
        <View style={styles.checkItem}>
          <View style={styles.checkContainer}>
            <Pressable 
              style={[styles.checkbox, checked && styles.checkboxChecked]}
              onPress={handleCheckPress}
            >
            { checked && <Ionicons name="checkmark" size={20} color="black"/>}
            </Pressable>
          </View>
          <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default Check;