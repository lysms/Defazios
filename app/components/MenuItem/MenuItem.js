import React from 'react';
import { View, Text } from 'react-native';
import styles from './MenuItem.style';

const MenuItem = props => {
  return (
    <View style={ styles.item }>
      <Text>Hello I am a menu item: { props.title }</Text>
      <Text> {props.desc} </Text>
    </View>
  );
}

export default MenuItem;