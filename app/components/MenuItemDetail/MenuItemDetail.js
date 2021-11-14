import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



// need to find out if these are unique or broad specifications
const MenuItemDetail = props => {
  

  const onSubmit = data => {
    console.log('submitted')
  }

  return (
    <View>
      <TouchableOpacity onPress={props.back}>
        <Text>Go back to items</Text>
      </TouchableOpacity>
      <View>
        <Text>Large Cheese Pizza (16")</Text>
        <Text>Tomato sauce, mozzarella cheese, Romano cheese and spices, cooked in an authentic Italian wood-fired oven. Add as many toppings as you want!</Text>
      </View>
      
      <View>
        
      </View>
    </View>
  );
}

export default MenuItemDetail