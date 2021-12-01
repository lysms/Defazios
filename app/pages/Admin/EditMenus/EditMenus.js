import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './EditMenus.style'
import firebase from '../../../firebase'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Tap = createBottomTabNavigator();

const EditMenus = ({ history }) => {

    const [Menus_Cat, setMenusCat] = useState([])
    const [Name, setName] = useState([])

    let fullmenus = {};

    let Antipasto = {};
    let B = [];
    let myName = new Set();


    useEffect(() => {
        const collection = firebase.collection('menu');
        collection.doc('Categories').get()
            .then(result => {

                let value = result.data().categories
                setMenusCat(prevState => [...prevState, ...value]);


            })

    }, [])

    const handleDetails = (data) => {
        console.log(data);
        history.push({
            pathname: '/menus_details',
            state: data
        });
    }

    return (
        <View style={styles.container}>


            <View style={styles.container1}>
                <Text style={styles.headerText}>Select a Category to continue</Text>
            </View>


            <View style={styles.profile}>
                <ScrollView style={styles.cat}>
                    <View>
                        {
                            Menus_Cat.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <Text></Text>

                                        <TouchableOpacity onPress={() => handleDetails(item)}>
                                            <View style={styles.minimenucontainer2}>
                                                <Text style={styles.subitem}>{item}</Text>


                                            </View>

                                        </TouchableOpacity>

                                    </View>
                                )
                            })
                        }

                    </View>

                </ScrollView>
            </View>



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

