import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './Admin_Home.style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { auth } from '../../../firebase_auth'

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../../components/HomeButton/HomeButton';

const Tap = createBottomTabNavigator();

const Admin_Home = ({ history }) => {


    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                history.push("/");
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <HomeButton />

            <View style={styles.container1}>
                <Text style={styles.headerText}>Welcome, Admin </Text>
                <Text style={styles.headerText2}>{auth.currentUser?.email}</Text>
            </View>


            <View style={styles.profile}>
            </View>


            <View style={styles.container3}></View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
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
                    <Text style={styles.textcreate1}>Profile</Text>
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

export default Admin_Home;

