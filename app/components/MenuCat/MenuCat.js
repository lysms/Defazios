import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import styles from './MenuCat.style';

const MenuCat = props => {
  return (
    <View style={{ marginTop: 20 }}>
    {/* {console.log(props.menu)} */}
      {/* { 
        props.menu.map(el => {
            return (
              <TouchableOpacity key={ el.id } onPress={props.handler}>
                <View style={styles.menuCat}>
                  <Text style={styles.catName}>{el.category}</Text>
                </View>
              </TouchableOpacity>
            )
          })
      } */}
    </View>
   
  );
}

export default MenuCat;