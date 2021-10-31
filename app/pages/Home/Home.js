import React from 'react';
import styles from './Home.style'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

const Home = ({history}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={styles.titleText}>Welcome to DaFazio's</Text>
        </View>
        <View
        style={{
          backgroundColor: '#fff',
          flex: 4,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>console.log("Menu")}
          >
          <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>console.log("Catering")}
          >
          <Text style={styles.buttonText}>Catering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>console.log("Make a Reservation")}
          >
          <Text style={styles.buttonText}>Make a Reservation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>console.log("Wait Time Calculator")}
          >
          <Text style={styles.buttonText}>Wait Time Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>console.log("Newsletter")}
          >
          <Text style={styles.buttonText}>Newsletter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

export default Home;