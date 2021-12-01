import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert, ScrollView } from 'react-native';
import { useLocation } from 'react-router';
import firebase from '../../firebase'

import styles from './Menus_details.style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const MenusDetails = ({ history }) => {
    const location = useLocation();

    const [Menus, setMenus] = useState([]);

    let final = []
    useEffect(() => {
        let result = location['state'];
        console.log("this is the result\n", result);
        firebase.collection("menu")
            .where("category", "==", result)
            .get()
            .then(value => {
                value.forEach(element => {
                    //console.log(element.data())
                    final.push(element.data())
                });
                console.log(final[0])
                final.sort(function (a, b) {
                    return parseFloat(a.cost) - parseFloat(b.cost);
                })
                console.log(final[0])
                setMenus(prevState => [...prevState, ...final]);

            })

        // setOrder(prevState => [...prevState, ...final]);
        // console.log(Order)
    }, [])

    const handleDetails = (data) => {
        console.log(data);
        history.push({
            pathname: '/menus_sub_item_details',
            state: data
        });
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
