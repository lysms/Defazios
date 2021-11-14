import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './pages/Home/Home';
import Newsletter from './pages/Newsletter/Newsletter';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Menu from './pages/Menu/Menu';
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import Profile from './pages/Profile/Profile'
import Confirmed from './pages/Ordering/Confirmed'
import ShoppingCart from './pages/Ordering/ShoppingCart'
import Payment from './pages/Ordering/Payment/Payment'


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/newsletter" component={Newsletter} />
          <Route exact path="/confirmed" component={Confirmed} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </View>
    </NativeRouter>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
