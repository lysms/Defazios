import React from 'react';
import { Button } from 'react-native';
import styles from './MenuCat.style';

const MenuCat = props => {
  
  return (
    <Button title={ props.title } style={ styles.menuBtn }/>
  );
}

export default MenuCat;