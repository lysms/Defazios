import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './MenuItem.style';

const MenuItem = props => {

  const items = [

    {
      "title": "Pizza", 
      "items": [
        {
          "title": 'Large Cheese Pizza (16")',
          "desc": "Tomato sauce, mozzarella cheese, Romano cheese and spices, cooked in an authentic Italian wood-fired oven. Add as many toppings as you want!",
          "price": 16.75,
          "itemNum": "1"
        }, 
        {
          "title": 'Small Cheese Pizza (12")',
          "desc": "Tomato sauce, mozzarella cheese, Romano cheese and spices, cooked in an authentic Italian wood-fired oven. Add as many toppings as you want!",
          "price": 13.50,
          "itemNum": "2"
        }, 
        {
          "title": 'White Clam Pizza (Small 12")',
          "desc": "Fresh garlic, parsley, clams, mozzarella cheese and spices, cooked in an authentic Italian wood-fired oven.",
          "price": 16.50,
          "itemNum": "3"
        }, 
        {
          "title": 'Fra Diavolo Pizza (Large 16")',
          "desc": "Our homemade hot Italian sausages, hot chopped peppers, tomato sauce and mozzarella cheese, cooked in an authentic Italian wood-fired oven.",
          "price": 20.00,
          "itemNum": "4"
        }, 
        {
          "title": '4-Cheese Pizza (Small 12")',
          "desc": "Gorgonzola cheese, mozzarella cheese, fontinella cheese and Romano cheese with fresh chopped garlic and spices, cooked in an authentic Italian wood-fired oven.",
          "price": 18.00,
          "itemNum": "5"
        }
      ]
    }
    
  ];
  
  return (
    <View>
      <TouchableOpacity onPress={props.back}>
        <Text style={{ color: '#4A6CC2', marginVertical: 10}}>Return to Categories</Text>
      </TouchableOpacity>

      { 
        items.map(f => {
          if (f.title == "Pizza") {

            return (
              f.items.map(el => {
                return (
                  <TouchableOpacity  key={ el.itemNum } onPress={props.handler}>
                    <View style={ styles.item }>
                      <Text style={styles.title}>{ el.title }</Text>
                      <Text>{ el.desc }</Text>
                      <Text style={styles.price}>${ el.price.toFixed(2) }</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            )
          }
        })
      }
    </View>
  );
}

export default MenuItem;