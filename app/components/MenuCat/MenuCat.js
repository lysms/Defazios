import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './MenuCat.style';

const MenuCat = props => {
  
  return (
    <View style={ styles.menuCat }>
      <Text style={styles.menuBtn}>{props.title}</Text>
    </View>
   
  );
}
  // <Button title={  } style={ styles.menuBtn }/>
export default MenuCat;