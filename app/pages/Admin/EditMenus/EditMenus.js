import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './EditMenus.style'
import firebase from '../../../firebase'


import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';



const EditMenus = ({ history }) => {

    const [Menus_Cat, setMenusCat] = useState([]);
    const [Cate, SetCate] = useState([]);
    const [Name, setName] = useState([])



    useEffect(() => {
        const collection = firebase.collection('menu');
        collection.doc('Categories').get()
            .then(result => {

                let value = result.data().categories
                setMenusCat(prevState => [...prevState, ...value]);


            });

        const collection2 = firebase.collection('cateringMenu');
        collection2.doc('Categories').get()
            .then(result => {

                let value = result.data().categories
                SetCate(prevState => [...prevState, ...value]);


            })
    }, [])

    const handleDetails = (data) => {
        let value = []
        value.push(data);
        value.push('menu')
        console.log(value);
        history.push({
            pathname: '/menus_details',
            state: value
        });
    }

    const handleDetailsCate = (data) => {

        let value = []
        value.push(data);
        value.push('cateringMenu')
        console.log(value);
        history.push({
            pathname: '/menus_details',
            state: value
        });
    }

    const handleAdd = (event) => {
        console.log("hi")
    }

    return (
        <View style={styles.container}>


            <View style={styles.container1}>
                <Text style={styles.headerText}>Select a Category to continue</Text>
            </View>

            <View style={styles.AddListContainer}>
                <TouchableOpacity style={styles.AddList} onPress={() => { handleAdd() }}>
                    <Text style={styles.AddText}>Add a new menu</Text>
                    <Entypo name="add-to-list" size={24} color="blue" />
                </TouchableOpacity>

            </View>



            <View style={styles.profile}>
                <View style={styles.subTitleSection}>
                    <Text style={styles.subTitle}>Menus</Text>
                </View>
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


            <View style={styles.profile}>
                <View style={styles.subTitleSection}>
                    <Text style={styles.subTitle}>Catering Menus</Text>
                </View>
                <ScrollView style={styles.cat}>
                    <View>
                        {
                            Cate.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <Text></Text>

                                        <TouchableOpacity onPress={() => handleDetailsCate(item)}>
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



            {/* <View style={styles.container3}></View> */}
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

