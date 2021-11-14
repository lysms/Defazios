import React, { useState }from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Check from '../Check/Check';
import { Formik } from 'formik';

// need to find out if these are unique or broad specifications
const MenuItemDetail = props => {
  
  const [clear, setClear] = useState(false);

  const handleSubmit = data => {
    console.log('submitted')
    setClear(false)
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
        <Formik
          initialValues={{test: ''}}
          onSubmit={values => console.log(values)}
        >
          {
            ({values}) => (
              <View> 
                <Check title="Regular Crust" initial={clear}/>
                <Button title="Add to Order" onPress={handleSubmit}/> 
              </View>
            )
          }
        </Formik>
      </View>
    </View>
  );
}

export default MenuItemDetail