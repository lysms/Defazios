import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './pages/Home/Home';
import Newsletter from './pages/Newsletter/Newsletter';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Menu from './pages/Menu/Menu';
import Catering_And_Reservation from './pages/Catering_And_Reservation/Catering_And_Reservation';
import MakeOneWithCalendar from './pages/Catering_And_Reservation/MakeOneWithCalendar';

export default function App() {
  return (
    // <NativeRouter>
    //   <View style={styles.container}>

    //     <Switch>
    //       <Route exact path="/" component={Home}/>
    //       <Route exact path="/menu" component={Menu}/>
    //     </Switch>
    //   </View>
    // </NativeRouter>
    // <Home />
    // <Newsletter />
    // <Catering_And_Reservation />
    <MakeOneWithCalendar />
    // <makeOneWithCalendar />
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
