import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home/Home';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Menu from './pages/Menu/Menu';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/menu" component={Menu}/>
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
