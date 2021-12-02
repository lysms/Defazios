import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';


import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import Payment from '../../components/Payment/Payment';
import Confirmation from '../../components/Confirmation/Confirmation';
import Schedule from '../../components/Schedule/Schedule';

import { useLocation } from 'react-router-native'

import styles from './CateringOrder.style';

const CateringOrder = () => {

  const location = useLocation();
  const items = location.state?.order;

  const [fullOrder, setFullOrder] = useState({});
  const [currentStep, setCurrentStep] = useState('cart');


  useEffect(() => {
    setFullOrder(prevState => ({...prevState, items: items}))

  }, [])
  console.log(fullOrder);

  const setStepHandler = step => {
    setCurrentStep(step);
  }

  const addToFinalOrderHandler = (property, item) => {
    if (property == "info") {
      setFullOrder(prevState => ({...prevState, ...item}));
    } else {
      setFullOrder(prevState => ({...prevState, [property]: item}));
    }
    console.log(fullOrder);
  }

  let content = null;

  if (currentStep === "cart") {
    content = <ShoppingCart items={items} stepHandler={setStepHandler} addToFinal={addToFinalOrderHandler}/>
  } else if (currentStep === "schedule") {
    content = <Schedule stepHandler={setStepHandler}/>
  } else if (currentStep === "info" ) {
    content = <OrderInfo stepHandler={setStepHandler} addToFinal={addToFinalOrderHandler}/>
  } else if (currentStep === "payment") {
    content = <Payment stepHandler={setStepHandler}/>
  } else if (currentStep === "confirm") {
    content = <Confirmation finalOrder={fullOrder} />
  }

  return (

    <View style={styles.orderContainer}>
      {content}
    </View>
  );

}

export default CateringOrder; 