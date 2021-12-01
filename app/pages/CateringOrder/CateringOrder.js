import React, { useState } from 'react';
import { View, Text } from 'react-native';


import ShoppingCart from '../ShoppingCart/ShoppingCart';
import OrderInfo from '../OrderInfo/OrderInfo';
import Payment from '../Payment/Payment';
import Confirmation from '../Confirmation/Confirmation';

import { useLocation } from 'react-router-native'

import styles from './CateringOrder.style';

const CateringOrder = () => {

  const location = useLocation();
  const items = location.state?.order;
  // console.log(items)

  const [fullOrder, setFullOrder] = useState({});
  const [currentStep, setCurrentStep] = useState('cart')

  const setStepHandler = step => {
    setCurrentStep(step);
  }


  let content = null;

  if (currentStep === "cart") {
    content = <ShoppingCart items={items} stepHandler={setStepHandler}/>
  } else if (currentStep === "info" ) {
    content = <OrderInfo stepHandler={setStepHandler}/>
  } else if (currentStep === "payment") {
    content = <Payment stepHandler={setStepHandler}/>
  } else if (currentStep === "confirm") {
    content = <Confirmation />
  }

  return (

    <View style={styles.orderContainer}>
      {content}
    </View>
  );

}

export default CateringOrder; 