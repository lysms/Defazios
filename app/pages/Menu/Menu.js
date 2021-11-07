import React from 'react';
import {View, Text, Button} from 'react-native';
import MenuItem from '../../components/MenuItem/MenuItem';
import MenuCat from '../../components/MenuCat/MenuCat';
import styles from './Menu.style';

const Menu = ({history}) => {

  const cats = [
    {
      "title": "pizza",
      "catNum": "1"
    }, 
    {
      "title": "calzone",
      "catNum": "2"
    }
  ];

  const items = [
    {
      "title": "pizza",
      "desc": "this is the pizza section",
      "itemNum": "1"
    }, 
    {
      "title": "calzone",
      "desc": "this is the calzone section",
      "itemNum": "2"
    }
  ];

  

  return (
    <View>
      
      <Text>Menu Page</Text>

      { cats.map(el => {
        return <MenuCat key={ el.catNum } title={ el.title } />
      })}
      
      <Button title="Go to home page"  onPress={() => history.push('/')}/>
    </View>
  );
};

export default Menu;