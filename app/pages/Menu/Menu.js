import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, ScrollView } from 'react-native';
import { useLocation, Link } from 'react-router-native';
import * as Haptics from 'expo-haptics';
import MenuItem from '../../components/MenuItem/MenuItem';
import MenuCat from '../../components/MenuCat/MenuCat';
import HomeButton from '../../components/HomeButton/HomeButton';

import styles from './Menu.style';

import db from '../../firebase';

const Menu = () => {

  // allows us to add props to a link
  const location = useLocation();
  let type = location.state?.type;
  if (!type) {
    type = "menu";
  }

  const [order, setOrder] = useState([])

  const isOrdering = location.state?.createOrder;
  const prevOrder = location.state?.currentOrder.order;
  
  let goToCartBtn = '';

  if (isOrdering) {
    if (type == "cateringMenu") {
      goToCartBtn = 
      <Link to={{pathname:"/cateringOrder", state: {type: "done", order: order}}} style={styles.orderBtn} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
        <Text style={styles.textInsideOrderBtn}>Go to Cart</Text>
      </Link>
    } else if (type == "waiting") {
      goToCartBtn = 
      <View style={styles.waitBtns}>
        <Link to={{pathname:"/waiting", state: {type: "pickup", details: order}}} style={styles.orderBtn} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
          <Text style={styles.textInsideOrderBtn}>Calculate Pick-Up</Text>
        </Link>

        <Link to={{pathname:"/waiting", state: {type: "delivery", details: order}}} style={styles.orderBtn} onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
          <Text style={styles.textInsideOrderBtn}>Calculate Delivery</Text>
        </Link>
      </View>
    }

  } else {
    goToCartBtn = null
  }

  let coll = type;
  if (type == "waiting") {
    coll = "menu";
  }

  // state
  const [step, setStep] = useState('categories');
  const [currentMenuType, setCurrentMenuType] = useState(coll);
  const [currentMenu, setCurrentMenu] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [detail, setDetail] = useState(null)


  useEffect(() => {

    if (isOrdering && prevOrder) {
      setOrder([...prevOrder]);
    }
    // gets the categories from the current collection
    const collection = db.collection(currentMenuType);
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
    menuStep = <MenuItem ordering={isOrdering} add={addItemToOrderHandler} handler={baseMenuItemHandler} back={catHandler} category={detail} menuType={currentMenuType} h={catHandler}/>
  }
  else if (step == "itemDetail") {
    menuStep = <MenuItemDetail back={filterItemsHandler}/>
  }

  return (
    <SafeAreaView style={styles.menuContainer}>
      <View style={styles.header}>
        <HomeButton />
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