import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './pages/Home/Home';
import Newsletter from './pages/Newsletter/Newsletter';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Menu from './pages/Menu/Menu';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Profile from './pages/Profile/Profile';

import Admin_Home from './pages/Admin/Admin_Home/Admin_Home' ;
import Booked from './pages/Admin/Booked/Booked';
import EditMenus from './pages/Admin/EditMenus/EditMenus';
import EditNewsLetter from './pages/Admin/EditNewsLetter/EditNewsLetter';
import ManageOrder from './pages/Admin/ManageOrder/ManageOrder';

import Reservation from './pages/Reservation/Reservation';
import MakeOneWithCalendar from './pages/Reservation/MakeOneWithCalendar';

import OrderDetails from "./components/Order_details/Details";
import MenusDetails from "./components/Menus_details/Menus_details";
import MenusSubItemsDetails from "./components/Menus_details/Item";
import MenusSubCateringItemsDetails from "./components/Menus_details/Item_catering";
import AddMenus from './pages/Admin/EditMenus/Add';

import Information from './pages/Reservation/Information';
import Confirmation from './pages/Reservation/Confirmation';

import { initializeApp } from 'firebase/app';

import WaitingTime from './pages/WaitingTime/WaitingTime';

import Catering from './pages/Catering/Catering';
import CateringOrder from './pages/CateringOrder/CateringOrder';

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
          <Route exact path="/waiting" component={WaitingTime} />
          <Route exact path="/adminHome" component={Admin_Home} />
          <Route exact path="/adminReservation" component={Booked} />
          <Route exact path="/adminMenus" component={EditMenus} />
          <Route exact path="/adminNews" component={EditNewsLetter} />
          <Route exact path="/adminOrder" component={ManageOrder} />
          <Route exact path="/catering" component={Catering} />
          <Route exact path="/reservation" component={Reservation} />
          <Route exact path="/cateringOrder" component={CateringOrder} />
          <Route exact path="/makeOneWithCalendar" component={MakeOneWithCalendar} />
          <Route exact path="/order_details" component={OrderDetails} />
          <Route exact path="/menus_details" component={MenusDetails} />
          <Route exact path="/menus_sub_item_details" component={MenusSubItemsDetails} />
          <Route exact path="/menus_sub_catering_item_details" component={MenusSubCateringItemsDetails} />
          <Route exact path="/addMenus" component={AddMenus} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/confirmation" component={Confirmation} />

        </Switch>
      </View>
    </NativeRouter>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
