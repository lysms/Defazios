import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Dimensions, Button, SafeAreaView } from 'react-native';
import { useLocation, Link } from 'react-router-native';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import styles from './WaitingTime.style';
import HomeButton from '../../components/HomeButton/HomeButton';

import db from '../../firebase';

const WaitingTime = () => {

  const location = useLocation();
  let type = location.state?.type;
  let details = location.state?.details;

  const [totalTime, setTotalTime] = useState('')
  
  useEffect(() => {
    if (details) {
      calculateTime(details)
    }
  }, [])

  const calculateTime = items => {
    let counts = {
      pizza: 0, 
      pasta: 0
    }

    let time = {
      max: 0,
      min: 0
    };

    let date = new Date();
    let today = date.getDay().toString();
    let hour = date.getHours();
    let minTime = 30;
    
    items.map(el => {
      if (el.category == "Pizzas") {
        counts.pizza += el.quantity;
      } else if (el.category == "Pasta") {
        counts.pasta += el.quantity;
      }
    })

    let timeOfDay = '';

    if (hour <= 16) {
      timeOfDay = "elevenToFour";
    } else {
      timeOfDay = "fourToClose";
    }
    

    let collection = db.collection('traffic')
    collection.doc(today).get()
      .then(snap => {
        let dayInfo = {...snap.data()};
        const traffic = dayInfo[type][timeOfDay];

        let pastaTime = {
          max: 0,
          min: 0
        };
        let pizzaTime = {
          max: 0,
          min: 0
        };

        if (counts.pasta > 0) {
          if (counts.pasta > 4) {
            pastaTime = {...traffic["pasta"][3]}
          } else {
            pizzaTime = {...traffic["pizza"][counts.pizza - 1]}
          }
        }

        if (counts.pizza > 0) {
          if (counts.pizza > 4) {
            pizzaTime = {...traffic["pizza"][3]}
          } else {
            pizzaTime = {...traffic["pizza"][counts.pizza - 1]}
          }
        }

        if (pastaTime.max > pizzaTime.max) {
          time = {...pastaTime}
        } else {
          time = {...pizzaTime}
        }

        
        let minutes = '';
        let hours = '';

        if (time.min == time.max) {
          hours = Math.floor(time.min / 60);
          minutes = time.min % 60;

          setTotalTime(hours + " hours and " + minutes + " minutes");

        } else {
          let minMin = '';
          let minHour = '';
          
          minHour = Math.floor(time.min / 60);
          minMin = time.min % 60;

          hours = Math.floor(time.max / 60);
          minutes = time.max % 60;

          setTotalTime(minHour + " hours and " + minMin + " minutes to " + hours + "hours and " + minutes + " minutes");
        }

      })
      .catch(err => {
        console.error(err);
      })
  }



  let answer = null;

  if (type == "pickup" || type == "delivery") {
    answer =
    <View>
      <Text style={{ fontSize: 20 }}>Your order will be ready in</Text>
      <View style={styles.TimeContainer}>
        <StatusBar style='light-content' />
        <TouchableOpacity onPress={() => null} style={styles.button}>
            <Text style={styles.buttonText}>{totalTime}</Text>
        </TouchableOpacity>
      </View>
    </View>
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeButton />
      <Text>Create order and see what the expected waiting time is!</Text>

      <View style={styles.contentContainer}>
        <Link to={{pathname:"/menu", state: {type: "waiting", createOrder: true, currentOrder: []}}} >
          <Text>Create Order</Text>
        </Link>

        { answer }
        
      </View>
    </SafeAreaView>
  )

};

export default WaitingTime;


