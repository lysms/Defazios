import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Dimensions, Button } from 'react-native';
import { useLocation, Link } from 'react-router-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import styles from './WaitingTime.style';
import HomeButton from '../../components/HomeButton/HomeButton';

const WaitingTime = () => {

  const location = useLocation();
  let type = location.state?.type;
  let details = location.state?.details;

  let answer = null;

  if (type == "done") {
    answer =
    <View>
      <Text style={{ fontSize: 20 }}>Your order will be ready in</Text>
      <View style={styles.TimeContainer}>
        <StatusBar style='light-content' />
        <TouchableOpacity onPress={() => null} style={styles.button}>
            <Text style={styles.buttonText}>{details.time} mins</Text>
        </TouchableOpacity>
      </View>
    </View>
  }

  return (
    <View style={styles.container}>

      <HomeButton />
      <Text>Create order and see what the expected waiting time is!</Text>

      <View style={styles.contentContainer}>
        <Link to={{pathname:"/menu", state: {type: "waiting", createOrder: true, currentOrder: []}}} >
          <Text>Create Order</Text>
        </Link>

        { answer }
        
      </View>
    </View>
  )
};

export default WaitingTime;


