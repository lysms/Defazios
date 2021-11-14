import React from 'react';
import {SafeAreaView, View, Text, ScrollView, TouchableOpacity} from 'react-native';
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
    },
    {
      "title": "dessert",
      "catNum": "3"
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
    <SafeAreaView style={styles.menuContainer}>
      
      <Text>Menu Page</Text>


      <ScrollView style={styles.scrollContainer}>
        { cats.map(el => {
          return <TouchableOpacity key={ el.catNum } onPress={() => history.push('/food')}><MenuCat title={ el.title }/></TouchableOpacity>
        })}
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Menu;