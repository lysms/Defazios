import React, { useState } from 'react';
import {SafeAreaView, View, Text, ScrollView, TouchableOpacity} from 'react-native';

import MenuItem from '../../components/MenuItem/MenuItem';
import MenuCat from '../../components/MenuCat/MenuCat';
import MenuItemDetail from '../../components/MenuItemDetail/MenuItemDetail';

import styles from './Menu.style';

const Menu = () => {

  const [step, setStep] = useState('categories');

  
  const filterItemsHandler = () => {
    setStep('items');
  }

  const itemDetailHandler = () => {
    setStep('itemDetail');
  }

  const catHandler = () => {
    setStep('categories');
  }

  
  let menuType = <MenuCat />

  if (step == "categories") {
    menuType = <MenuCat handler={filterItemsHandler}/>
  }
  else if (step == "items") {
    menuType = <MenuItem handler={itemDetailHandler} back={catHandler}/>
  }
  else if (step == "itemDetail") {
    menuType = <MenuItemDetail back={filterItemsHandler}/>
  }

  return (
    <SafeAreaView style={styles.menuContainer}>
      <Text>Menu</Text>
      <ScrollView style={styles.scrollContainer}>
        { menuType }
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;