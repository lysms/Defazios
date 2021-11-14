import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './EditMenus.style'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Tap = createBottomTabNavigator();

const EditMenus = ({ history }) => {
    return (
        <View style={styles.container}>


            <View style={styles.container1}>
                <Text style={styles.headerText}>Welcome to edit the menus. </Text>
            </View>


            <View style={styles.profile}>
                <ScrollView style={styles.orderHistory}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
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
                    <Text style={styles.textcreate1}>Menus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminOrder')}>
                    <Text style={styles.textcreate}>Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminHome')}>
                    <Text style={styles.textcreate}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminReservation')}>
                    <Text style={styles.textcreate}>Booked</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminNews')}>
                    <Text style={styles.textcreate}>News</Text>
                </TouchableOpacity>
            </View>

        </View>


    );
};

export default EditMenus;

