import React, { createElement, useEffect, useState } from 'react';
import {SafeAreaView, View, Text, ScrollView } from 'react-native';
import { useLocation } from 'react-router-native'


import AppButton from '../../components/Button/Button.component';
// import COLORS from '../constants/colors';
import MenuItem from '../../components/MenuItem/MenuItem';
import MenuCat from '../../components/MenuCat/MenuCat';
import MenuItemDetail from '../../components/MenuItemDetail/MenuItemDetail';

import styles from './Menu.style';

import firebase from '../../firebase';

const Menu = ({history}) => {

  // allows us to add props to a link
  const location = useLocation();
  let type = location.state?.type;
  if (!type) {
    type = "menu";
  }

  // state
  const [step, setStep] = useState('categories');
  const [currentMenuType, setCurrentMenuType] = useState(type);
  const [currentMenu, setCurrentMenu] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [detail, setDetail] = useState(null)


  useEffect(() => {
    // gets the categories from the current collection
    const collection = firebase.firestore().collection(currentMenuType);
    collection.doc('Categories').get()
      .then(snap => {
        const catList = snap.data().categories
        setCurrentCategories([...catList])
      })
      .catch(err => {
        console.error(err)
      })
    

    collection.onSnapshot((querySnapShot) => {
      let tempData = []
      querySnapShot.forEach(res => {
        const d = res.data();
        let newitem = {
          name: d.name, 
          hcost: d.halfCost,
          fcost: d.fullCost,
          category: d.category, 
          id: res.id
        }
        tempData.push(newitem)
      })
      setCurrentMenu(prevData => [...prevData, ...tempData])
    });
    
  }, [])

  
  const filterItemsHandler = (category) => {
    setStep('items');
    setDetail(category)
  }
  const itemDetailHandler = () => {
    setStep('itemDetail');
  }
  const catHandler = () => {
    setStep('categories');
  }

  
  let menuStep = <MenuCat />

  if (step == "categories") {
    menuStep = <MenuCat handler={filterItemsHandler} menu={currentCategories}/>
  }
  else if (step == "items") {
    menuStep = <MenuItem handler={itemDetailHandler} back={catHandler} category={detail} menuType={currentMenuType}/>
  }
  else if (step == "itemDetail") {
    menuStep = <MenuItemDetail back={filterItemsHandler}/>
  }

  return (
    <SafeAreaView style={styles.menuContainer}>
      <View style={styles.homeBtn}>
        <AppButton h={history}/>
      </View>
      <ScrollView style={styles.scrollContainer}>
        { menuStep }
      </ScrollView>
    </SafeAreaView>

  );
};

export default Menu;