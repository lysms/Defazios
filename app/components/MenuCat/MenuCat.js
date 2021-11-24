import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './MenuCat.style';

const MenuCat = props => {

  return (
    <View style={{ marginTop: 20 }}>
      { 
        props.menu.map((el, i) => {
          return (
            <TouchableOpacity key={ i } onPress={() => props.handler(el)}>
              <View style={styles.menuCat}>
                <Text style={styles.catName}>{el}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </View>
   
  );
}

export default MenuCat;