import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home/Home';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Menu from './pages/Menu/Menu';
import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
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
