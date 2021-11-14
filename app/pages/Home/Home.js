import React from 'react';
import styles from './Home.style'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Vibration, TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';

const image = { uri: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" };

const Home = ({ history }) => {
  return (

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView
        style={{
          // backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          style={styles.upperview}>
          <Text style={styles.titleText}>Welcome to DaFazio's</Text>
        </View>
        <View
          style={styles.viewForSelecting}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/menu'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { console.log("Catering"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Catering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { console.log("Make a Reservation"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Make a Reservation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/waiting'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Wait Time Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/newsletter'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Newsletter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/signin'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Sign Up / Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;