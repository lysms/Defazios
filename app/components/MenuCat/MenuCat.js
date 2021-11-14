import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import styles from './MenuCat.style';

const MenuCat = props => {
  const cats = [
    {
      "title": "Popular",
      "catNum": "1"
    }, 
    {
      "title": "Limited Features",
      "catNum": "2"
    },
    {
      "title": "Antipasto",
      "catNum": "3"
    },
    {
      "title": "Pizzas",
      "catNum": "4"
    },
    {
      "title": "Calzones",
      "catNum": "5"
    },
    {
      "title": "Pasta",
      "catNum": "6"
    },
    {
      "title": "Stromboli",
      "catNum": "7"
    },
    {
      "title": "Side Orders",
      "catNum": "8"
    },
    {
      "title": "Pizza Kit",
      "catNum": "9"
    },
    {
      "title": "Breakfast/ Lunch Features",
      "catNum": "10"
    },
    {
      "title": "Beverages",
      "catNum": "11"
    },
    {
      "title": "Desserts",
      "catNum": "12"
    },
    {
      "title": "Fall Features",
      "catNum": "13"
    }
  ];
  
  return (
    <View>
      
      { 
        cats.map(el => {
            return (
              <TouchableOpacity key={ el.catNum } onPress={props.handler}>
                <View style={styles.menuCat}>
                  <Text style={styles.catName}>{el.title}</Text>
                </View>
              </TouchableOpacity>
            )
          })
      }
    </View>
   
  );
}

export default MenuCat;