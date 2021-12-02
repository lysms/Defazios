import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { useLocation } from 'react-router';
import firebase from "../../firebase"

import styles from './Details.style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Detail = ({ history }) => {
    const location = useLocation();

    const [Order, setOrder] = useState([])
    const [Items, setItems] = useState([])
    let final = []
    useEffect(() => {
        //console.log("\nThis is the result data !!!!");
        let result = location['state'];
        console.log("this is the result\n", result);

        for (const element of result) {
            //console.log(element);
            final.push(element);
        }

        console.log("Testing: \n")
        console.log(final);
        // this.setOrderDetails([...final]);
        console.log("This is final")
        // console.log(OrderDetails);
        //setOrder([...final]);
        setOrder(prevState => [...prevState, ...final]);
        console.log(final[0])
        setItems(prevState => [...prevState, ...final[0]]);
    }, [])

    const handleDelete = () => {
        let firstName = Order[1]
        let lastName = Order[2]
        let cost = Order[6]
        console.log("Delete", firstName, lastName, cost);
        let id = "";
        var query = firebase.collection("orders")
        query = query.where("firstName", "==", firstName)
        query = query.where("lastName", "==", lastName)
        query = query.where("totalCost", "==", cost)

        query.get().then(value => {
            value.forEach(element => {

                id = element.id
            })
            firebase.collection("orders").doc(id).delete();

            history.push({
                pathname: '/adminOrder',

            });
            Alert.alert("You have successfully delete this order");
        })
        // firebase.collection(Collection)
        //     .where("name", "==", data)
        //     .get()
        //     .then(value => {
        //         value.forEach(element => {

        //             id = element.id
        //         })
        //         console.log(id)

        //         firebase.collection(Collection).doc(id).delete();
        //         let values = [];
        //         values.push(Category)
        //         values.push(Collection)
        //         history.push({
        //             pathname: '/menus_details',
        //             state: values
        //         });
        //         Alert.alert("You have successfully delete this menu item!");
        //     })
    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.title}>Defazio's Pizza</Text>
            </View>
            <TouchableOpacity style={styles.backButton} onPress={() => { history.push('/adminOrder') }}>
                <AntDesign name="back" size={30} color="white" />
                <Text style={styles.goback}>Go Back</Text>
            </TouchableOpacity>

            <View style={styles.container2}></View>
            <View style={styles.DetailContainer}>
                {
                    // 0: items (array); 1: first; 2: last; 3: Datefor; 
                    // 4: DateOrdered; 5: requests; 6: costs

                    <View>
                        <Text style={styles.Value}>Name: {Order[1]}, {Order[2]}</Text>


                        {
                            Items.length > 0 ?
                                <View>
                                    <Text style={styles.Value}>Items: {Items[2]}</Text>
                                    <Text style={styles.Value}>Size: {Items[1]}</Text>
                                    <Text style={styles.Value}>Quantity: {Items[3]}</Text>
                                    <View>
                                        <Text style={styles.Value}>Add ons: </Text>
                                        {
                                            Items[0].length > 0 ?
                                                Items[0].map((value, index) => {
                                                    return (
                                                        <Text key={index} style={styles.addonValue}>{value}</Text>)
                                                }) : <Text style={styles.addonValue}>None</Text>
                                        }
                                    </View>

                                </View> : <View></View>
                        }
                        {/* <Text style={styles.Value}>Items: {Order[0][2]}</Text>
                        <Text style={styles.Value}>Size: {Order[0][1]}</Text>
                        <Text style={styles.Value}>Quantity: {Order[0][3]}</Text>

                        <View>
                            <Text style={styles.Value}>Add ons: </Text>
                            {
                                Order[0][0].length > 0 ?
                                    Order[0][0].map((value, index) => {
                                        return (
                                            <Text style={styles.addonValue}>{value}</Text>)
                                    }) : <View></View>
                            }
                        </View> */}
                        <Text style={styles.Value}>Order Date For: {Order[3]}</Text>
                        <Text style={styles.Value}>Ordered Date: {Order[4]}</Text>
                        <Text style={styles.Value}>Price: ${Order[6]}</Text>
                        <Text style={styles.Value}>Special Requests: "{Order[5]}"</Text>
                    </View>

                }
            </View>
            {
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.Button} onPress={() => { handleDelete() }}>
                        <AntDesign name="delete" size={34} color="black" />

                    </TouchableOpacity>


                </View>
            }

            <View style={styles.container1}></View>



        </View>
    );
}

export default Detail;
