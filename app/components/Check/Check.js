import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Check.style';




const Check = props => {

  const [toggleCheck, setToggleCheck] = useState(props.initial)

  return (
    <View style={styles.checkItem}>
      <CheckBox 
        disabled={false} 
        value={toggleCheck}
        onValueChange={newVal => setToggleCheck(newVal)}
      />
      <TouchableOpacity onPress={() => setToggleCheck(!toggleCheck)}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Check;