import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert, ScrollView } from 'react-native';
import { useLocation } from 'react-router';
import firebase from '../../firebase'

import styles from './Menus_details.style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Item = ({ history }) => {
    const location = useLocation();

    const [Menus, setMenus] = useState([]);
    const [Category, setCategory] = useState("");
    const [Name, setName] = useState("");

    let final = []
    useEffect(() => {
        let result = location['state'];
        console.log("this is the result\n", result);

        //console.log(result.category)
        setCategory(result.category)
        setName(result.name)
        final.push(result)
        setMenus(prevState => [...prevState, ...final]);

        // firebase.collection("menu")
        //     .where("category", "==", result)
        //     .get()
        //     .then(value => {
        //         value.forEach(element => {
        //             //console.log(element.data())
        //             final.push(element.data())
        //         });
        //         console.log(final[0])
        //         final.sort(function (a, b) {
        //             return parseFloat(a.cost) - parseFloat(b.cost);
        //         })
        //         console.log(final[0])
        //         setMenus(prevState => [...prevState, ...final]);
        //     })
    }, [])

    const handleDetails = (data) => {
        console.log(data);
        let value = [];
        value.push(data)
        value.push('cateringMenu')
        history.push({
            pathname: '/menus_details',
            state: value
        });
    }

    const handleDelete = (data) => {
        console.log("Delete", data);

    }

    const handleEdit = (data) => {
        console.log("Edit", data);

    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.title}>Defazio's Pizza sdfsdfs</Text>
            </View>
            {
                <TouchableOpacity style={styles.backButton} onPress={() => { handleDetails(Category) }}>
                    <AntDesign name="back" size={30} color="white" />
                    <Text style={styles.goback}>Go Back</Text>
                </TouchableOpacity>
            }

            <View style={styles.profile}>
                <ScrollView style={styles.cat}>
                    <View>
                        {
                            Menus.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <Text></Text>


                                        <View style={styles.minimenucontainer2}>
                                            <Text style={styles.subitem}>Category: {item.category}</Text>

                                        </View>
                                        <Text></Text>
                                        <View style={styles.minimenucontainer2}>
                                            <Text style={styles.subitem}>Name: {item.name}</Text>

                                        </View>
                                        <Text></Text>
                                        <View style={styles.minimenucontainer2}>
                                            <Text style={styles.subitem}>Full Cost: ${item.fullCost}</Text>
                                            <Text style={styles.subitem}>Half Cost: ${item.halfCost}</Text>
                                        </View>
                                        <Text></Text>

                                    </View>
                                )
                            })

                        }

                    </View>



                </ScrollView>
                {
                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity style={styles.Button} onPress={() => { handleDelete(Name) }}>
                            <AntDesign name="delete" size={34} color="black" />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => { handleEdit(Name) }}>
                            <AntDesign name="edit" size={34} color="black" />
                        </TouchableOpacity>
                    </View>
                }
            </View>

            <View style={styles.container2}></View>



        </View>
    );
}

export default Item;
