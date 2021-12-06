import React, { useEffect, useState } from 'react';
import styles from './Home.style'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Vibration, TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';
import { auth } from "../../firebase_auth"
import firebase from "../../firebase"

const image = { uri: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" };

const Home = ({ history }) => {


  const [Logged, setLogged] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLogged(true)
      }
    })
    return unsubscribe;
  }, [])

  const checkStatus = () => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.email)

        firebase.collection("users")
          .where("email", "==", user.email)
          .get()
          .then(value => {
            value.forEach(element => {
              let token = (element.data().token)
              if (token === "user") {
                history.push("/profile")
              }
              else {
                history.push("/adminHome")
              }
            });
          })
      }
    })
    return unsubscribe;
  }

  return (

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.homeContainer}>
        <View
          style={styles.upperview}>
          <Text style={styles.titleText}>Welcome to DeFazio's</Text>
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
              () => { history.push('/catering'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Catering</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/reservation'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Reservations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/waiting'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Wait Time Calculator</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/newsletter'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Newsletter</Text>
          </TouchableOpacity> */}

          {
            Logged === true ? <TouchableOpacity
              style={styles.button}
              onPress={() => { checkStatus(); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }}
            >
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity> :
              <TouchableOpacity
                style={styles.button}
                onPress={
                  () => { history.push('/signin'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
                }
              >
                <Text style={styles.buttonText}>Sign Up / Sign In</Text>
              </TouchableOpacity>
          }


          {/* <TouchableOpacity
            style={styles.button}
            onPress={
              () => { history.push('/signin'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) }
            }
          >
            <Text style={styles.buttonText}>Sign Up / Sign In</Text>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
