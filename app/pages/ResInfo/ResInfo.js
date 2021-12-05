import React, { useState } from "react";
import { View } from 'react-native';

import Information from "../Reservation/Information";
import Confirmation from "../Reservation/Confirmation";


const ResInfo = () => {

  const [currentStep, setCurrentStep] = useState('info');
  const [resInfo, setResInfo] = useState({});

  let content = null;
  const orderDetailsHandler = (val) => {
    setResInfo({...val})
    setCurrentStep('confirm')
  }

  if (currentStep == "info") {
    content = <Information setInfoHandler={orderDetailsHandler} />
  } else if (currentStep == "confirm") {
    content = <Confirmation info={resInfo}/>
  }

  return (
    <View>
      { content }
    </View>
  );
}

export default ResInfo