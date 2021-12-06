import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert, ScrollView } from 'react-native';
import { useLocation } from 'react-router';
import firebase from "../../firebase"

import styles from './Details.style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Detail = ({ history }) => {
    const location = useLocation();
    let final = {}
    let result = location['state'];
    final = result;

    // Function to handle the delete workflow for the Firebase Database
    const handleDelete = () => {
        let firstName = final.fname
        let lastName = final.lname
        let cost = final.subTotal
        let specialRequests = final.specialRequests
        let id = "";
        var query = firebase.collection("orders")
        query = query.where("fname", "==", firstName)
        query = query.where("lname", "==", lastName)
        query = query.where("subTotal", "==", cost)
        query = query.where("specialRequests", "==", specialRequests)

        query.get().then(value => {
            value.forEach(element => {
                id = element.id
            })
            firebase.collection("orders").doc(id).delete();
            history.push({
                pathname: '/adminOrder',
            });
            Alert.alert("You have successfully deleted this order");
        })

    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
            </View>
            <TouchableOpacity style={styles.backButton} onPress={() => { history.push('/adminOrder') }}>
                <AntDesign name="back" size={20} color="white" />
                <Text style={styles.goback}>Go Back</Text>
            </TouchableOpacity>

            <View style={styles.container2}></View>
            <ScrollView style={styles.scroll}>
                <View style={styles.DetailContainer}>

                    {
                        <View>
                            <Text style={styles.Value}>Name: {final.fname} {final.lname}</Text>
                            <Text style={styles.Value}>Email: {final.email}</Text>
                            <Text style={styles.Value}>Phone: {final.phone}</Text>
                            <Text style={styles.Value}>Scheduled for: {final.dateFor}</Text>
                            <Text style={styles.Value}>Date Ordered: {final.dateOrdered}</Text>
                            
                            {
                                final.items.length > 0 ?
                                    final.items.map((value, index) => {
                                        return (
                                            <View key={index} style={styles.itemContainer}>
                                                <Text>Item {index + 1}</Text>
                                                <Text style={styles.Value}>Category: {value.category}</Text>
                                                <Text style={styles.Value}>Name: {value.name}</Text>
                                                <Text style={styles.Value}>Cost: {value.cost}</Text>
                                                <Text style={styles.Value}>Half or Full: {value.halfOrFull}</Text>
                                                <Text style={styles.Value}>Quantity: {value.quantity}</Text>
                                            </View>
                                        )
                                    })
                                    : <View></View>
                            }
                            <View>
                                {/* <Text style={styles.Value}>Add ons: </Text> */}
                                {/* {
                                Order[0][0].length > 0 ?
                                    Order[0][0].map((value, index) => {
                                        return (
                                            <Text style={styles.addonValue}>{value}</Text>)
                                    }) : <View></View>
                            } */}
                            </View>
                            
                            
                        </View>
                    }
                </View>
            </ScrollView>

            {
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.Button} onPress={() => { handleDelete() }}>
                        <Text>Delete Order</Text>
                        <AntDesign name="delete" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            }
            <View style={styles.container2}></View>
            <View style={styles.container1}></View>
        </View>
    );
}

export default Detail;
