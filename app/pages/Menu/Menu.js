import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, ScrollView } from 'react-native';
import { useLocation, Link } from 'react-router-native';
import * as Haptics from 'expo-haptics';
// import COLORS from '../constants/colors';
import MenuItem from '../../components/MenuItem/MenuItem';
import MenuCat from '../../components/MenuCat/MenuCat';
import MenuItemDetail from '../../components/MenuItemDetail/MenuItemDetail';
import HomeButton from '../../components/HomeButton/HomeButton';

import styles from './Menu.style';

import firebase from '../../firebase';

const Menu = ({history}) => {

  // allows us to add props to a link
  const location = useLocation();
  let type = location.state?.type;
  if (!type) {
    type = "menu";
  }
  const [order, setOrder] = useState([])

  const isOrdering = location.state?.createOrder;
  let goToCartBtn = '';

  if (isOrdering) {
    goToCartBtn = 
    <Link to={{pathname:"/shoppingCart", state: {type: "done", order: order}}} style={styles.orderBtn} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
      <Text style={styles.textInsideOrderBtn}>Go to Cart</Text>
    </Link>
  } else {
    goToCartBtn = null
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
    
  }, []);

  
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
  const baseMenuItemHandler = () => {
    console.log('item clicked')
  }
  const addItemToOrderHandler = item => {
    setOrder([...order, item]);
  }

  let menuStep = <MenuCat />

  if (step == "categories") {
    menuStep = <MenuCat handler={filterItemsHandler} menu={currentCategories}/>
  }
  else if (step == "items") {
    menuStep = <MenuItem add={addItemToOrderHandler} handler={baseMenuItemHandler} back={catHandler} category={detail} menuType={currentMenuType} h={catHandler}/>
  }
  else if (step == "itemDetail") {
    menuStep = <MenuItemDetail back={filterItemsHandler}/>
  }

  return (
    <SafeAreaView style={styles.menuContainer}>
      <View style={styles.header}>
        <HomeButton h={history}/>
      </View>

      <View style={styles.menuContent}>
        <ScrollView style={styles.scrollContainer}>
          { menuStep }
        </ScrollView>

        {goToCartBtn}

      </View>

    </SafeAreaView>
  );
};

export default Menu;