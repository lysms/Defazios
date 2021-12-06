import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './Booked.style'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import db from '../../../firebase';

const Tap = createBottomTabNavigator();

const Booked = ({ history }) => {

  const [orderItems, setOrderItems] = useState([]);
  
  let orders = []
  useEffect(() => {
    
    db.collection('reservations').get()
      .then(snap => {
        
        snap.forEach(res => {
          let data = res.data();
          let newObj = {
            fname: data.firstName,
            lname: data.lastName,
            dateFor: data.date.toDate().toString(),
            datePlaced: data.datePlaced.toDate().toString(),
            email: data.email,
            phone: data.phone,
            size: data.size
          }

          orders.push(newObj)
          console.log(orders)

        })

        setOrderItems([...orders])
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  return (
    <View style={styles.container}>


      <View style={styles.container1}>
          <Text style={styles.headerText}>View Reservations</Text>
      </View>

      <View style={styles.minimenucontainer}>

        <TouchableOpacity style={styles.createAccount2}>
            <Text style={styles.textcreate2}>Name</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccount2} >
            <Text style={styles.textcreate2}>Date</Text>
        </TouchableOpacity>


    </View>


      <View style={styles.profile}>
        <ScrollView style={styles.orderHistory}>
        {
          orderItems.length > 0 ?

            orderItems.map((data, i) => {

              return (
                <View key={i}>
                  <Text></Text>
                  <TouchableOpacity onPress={() => handleDetails(data)}>
                    <View style={styles.minimenucontainer2}>
                      <Text key={i - 1} style={styles.subitem}>{data.fname}, {data.lname}</Text>

                      <Text key={i + 1} style={styles.subitem}>{data.dateFor.substring(0, 10)} {data.dateFor.substring(15, 21)} {data.dateFor.substring(34, 39)}</Text>

                    </View>
                  </TouchableOpacity>

                </View>
              )
            }) : <View></View>
        }
        </ScrollView>
      </View>


        <View style={styles.container3}></View>
        <View style={styles.container3}></View>
        {/* Footer component */}

        <View style={styles.menucontainer}>
            {/* <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/')}>
                <Text style={styles.textcreate}>Home</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminMenus')}>
                <Text style={styles.textcreate}>Menus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminOrder')}>
                <Text style={styles.textcreate}>Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminHome')}>
                <Text style={styles.textcreate}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminReservation')}>
                <Text style={styles.textcreate1}>Booked</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminNews')}>
                <Text style={styles.textcreate}>News</Text>
            </TouchableOpacity> */}
        </View>

    </View>


  );
};

export default Booked;

