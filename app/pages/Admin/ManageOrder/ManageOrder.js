import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './ManageOrder.style'
import firebase from '../../../firebase'
import Details from '../../../components/Order_details/Details'


const ManageOrder = ({ history }) => {

    const [orderItems, setOrderItems] = useState([]);
    const [DateFor, setDateFor] = useState("")
    const [DateOrdered, setDateOrdered] = useState("");
    const [Email, setEmail] = useState("")
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Phone, setPhone] = useState("")
    const [Item, setItem] = useState([])
    const [SpecialRequests, setSpecialRequests] = useState("")
    const [SubTotal, setSubTotal] = useState(0)

    let final = [];

    useEffect(() => {
        firebase.collection('orders')
            .get()
            .then(result => {

                result.forEach(item => {
                    let data = item.data();
                    setFname(data.fname)
                    setLname(data.lname)
                    setPhone(data.phone)
                    setSpecialRequests(data.specialRequests)
                    setSubTotal(parseInt(data.subTotal))
                    setItem(data.items)
                    setDateFor(data.dateFor.toDate().toString())
                    setDateOrdered(data.dateOrdered.toDate().toString())
                    setEmail(data.email)

                    let value = {
                        lname: data.lname,
                        fname: data.fname,
                        dateFor: data.dateFor.toDate().toString(),
                        dateOrdered: data.dateOrdered.toDate().toString(),
                        specialRequests: data.specialRequests,
                        items: data.items,
                        email: data.email,
                        phone: data.phone,
                        subTotal: data.subTotal,
                    }
                    final.push(value)

                })
                // console.log(final)
                setOrderItems([...final]);

            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const handleDetails = (data) => {
        console.log("you click");
        console.log(data);
        history.push({
            pathname: '/order_details',
            state: data
        });
    }



    return (
        <View style={styles.container}>


            <View style={styles.container1}>
                <Text style={styles.headerText}>Welcome to view all the order. </Text>
            </View>


            <View style={styles.profile}>

                <View style={styles.minimenucontainer}>

                    <TouchableOpacity style={styles.createAccount2}>
                        <Text style={styles.textcreate2}>Name</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.createAccount2} >
                        <Text style={styles.textcreate2}>Time</Text>
                    </TouchableOpacity>


                </View>

                <ScrollView>

                    {
                        orderItems.length > 0 ?

                            orderItems.map((data, i) => {

                                return (
                                    <View key={i}>
                                        <Text></Text>
                                        <TouchableOpacity onPress={() => handleDetails(data)}>
                                            <View style={styles.minimenucontainer2}>
                                                <Text key={i - 1} style={styles.subitem}>{data.fname}, {data.lname}</Text>

                                                <Text key={i + 1} style={styles.subitem}>{data.dateFor.substring(0, 10)} {data.dateFor.substring(15, 21)} {data.dateFor.substring(34, 39)}</Text>

                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                )
                            }) : <View></View>
                    }
                </ScrollView>
            </View>


            <View style={styles.container3}></View>
            <View style={styles.container3}></View>
            {/* Footer component */}

            <View style={styles.menucontainer}>
                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminMenus')}>
                    <Text style={styles.textcreate}>Menus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminOrder')}>
                    <Text style={styles.textcreate1}>Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminHome')}>
                    <Text style={styles.textcreate}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminReservation')}>
                    <Text style={styles.textcreate}>Booked</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminNews')}>
                    <Text style={styles.textcreate}>News</Text>
                </TouchableOpacity> */}
            </View>

        </View>


    );
};

export default ManageOrder;

