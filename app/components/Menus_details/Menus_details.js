import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert, ScrollView } from 'react-native';
import { useLocation } from 'react-router';
import firebase from '../../firebase'

import styles from './Menus_details.style';
import { AntDesign, Entypo } from '@expo/vector-icons';

const MenusDetails = ({ history }) => {
    const location = useLocation();

    const [Menus, setMenus] = useState([]);

    let final = []
    useEffect(() => {
        let result = location['state'];
        console.log("this is the result\n", result[0]);
        let name = result[1];
        console.log(name)

        firebase.collection(name)
            .where("category", "==", result[0])
            .get()
            .then(value => {
                value.forEach(element => {
                    console.log(element.data())
                    final.push(element.data())
                });

                final.sort(function (a, b) {
                    return a.name > b.name;
                })
                //console.log(final[0])
                setMenus(prevState => [...prevState, ...final]);
            })
    }, [])

    const handleDetails = (data) => {
        console.log(data);

        if (data.hasOwnProperty('fullCost')) {
            data['collection'] = 'cateringMenu'
            history.push({
                pathname: '/menus_sub_catering_item_details',
                state: data
            });
        } else {
            data['collection'] = 'menu'
            history.push({
                pathname: '/menus_sub_item_details',
                state: data
            });
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.title}>Defazio's Pizza</Text>
            </View>
            <TouchableOpacity style={styles.backButton} onPress={() => { history.push('/adminMenus') }}>
                <AntDesign name="back" size={30} color="white" />
                <Text style={styles.goback}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.profile}>
                <ScrollView style={styles.cat}>
                    <View>
                        {
                            Menus.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <Text></Text>
                                        <TouchableOpacity onPress={() => handleDetails(item)}>
                                            <View style={styles.minimenucontainer2}>
                                                <Text style={styles.subitem}>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                )
                            })
                        }

                    </View>

                </ScrollView>
            </View>

            <View style={styles.container2}></View>
        </View>
    );
}

export default MenusDetails;
