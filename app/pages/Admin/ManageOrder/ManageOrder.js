import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './ManageOrder.style'
import firebase from '../../../firebase'
import Details from '../../../components/Order_details/Details'


import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { isEmailIdentifier } from 'firebase-admin/lib/auth/identifier';




const ManageOrder = ({ history }) => {

    const [orderItems, setOrderItems] = useState([]);
    const [state, setState] = useState([]);
    let final = [];

    useEffect(() => {
        firebase.collection('orders')
            .get()
            .then(result => {

                result.forEach(item => {
                    let docs = item.data();
                    let dateFor = docs.dateFor.toDate().toString();
                    let dateOrdered = docs.dateOrdered.toDate().toString();
                    let firstName = docs.firstName;
                    let lastName = docs.lastName;
                    let cost = docs.totalCost;
                    let requests = docs.requests;
                    let quantity = 0;
                    let size = "";
                    let addons = [];

                    dateFor = dateFor.split(' ');

                    let month = 0;
                    let day = dateFor[2];
                    let year = dateFor[3];
                    let time = dateFor[4]
                    switch (dateFor[1]) {
                        case 'Jan':
                            month = 1;
                            break;
                        case 'Feb':
                            month = 2;
                            break;
                        case 'Mar':
                            month = 3;
                            break;
                        case 'Apr':
                            month = 4;
                            break;
                        case 'May':
                            month = 5;
                            break;
                        case 'Jun':
                            month = 6;
                            break;
                        case 'Jul':
                            month = 7;
                            break;
                        case 'Aug':
                            month = 8;
                            break;
                        case 'Sep':
                            month = 9;
                            break;
                        case 'Oct':
                            month = 10;
                            break;
                        case 'Nov':
                            month = 11;
                            break;
                        case 'Dec':
                            month = 12;
                            break;
                        default:
                            month = 0;
                    }

                    let time1 = (month).toString() + '/' + (day) + '/' + (year) + '; ' + time;

                    console.log("This is time \t" + time1)
                    let order = docs.items;

                    // console.log("\n", "This is promise\n")
                    // Promise.all([order]).then((values) => {

                    //     values.forEach((t => {

                    //         t.forEach((x => {
                    //             console.log("\t", x['addOns'])
                    //             size = x["halfOrFull"];
                    //             quantity = x["quantity"];
                    //             let Add = x["addOns"];


                    //             Add.map((x) => {
                    //                 addons.push(x);
                    //             })

                    //         }))

                    //     }))
                    // })



                    if (order != '') {

                        order.map((item, index) => {
                            //console.log(item);
                            let Add = item['addOns']

                            Add.map((x) => {
                                addons.push(x);
                            })


                            size = item['halfOrFull']
                            quantity = item['quantity']
                        })

                    }
                    // order.forEach((t => {
                    //     size = t["halfOrFull"];
                    //     quantity = t["quantity"];
                    //     let Add = t["addOns"];
                    //     console.log(size)
                    //     Add.map((x) => {
                    //         addons.push(x);
                    //     })
                    //     // let order_item = t["item"]

                    // }))
                    //console.log(addons)
                    let temp = [];

                    temp.push(firstName)
                    temp.push(lastName)
                    temp.push(time)
                    temp.push(dateOrdered)
                    temp.push(requests)
                    temp.push(cost)
                    temp.push(addons)
                    temp.push(size)
                    temp.push(quantity)

                    console.log(temp)
                    final.push(temp)
                })
                setOrderItems([...final]);

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
                    {/* <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/')}>
                    <Text style={styles.textcreate}>Home</Text>
                </TouchableOpacity> */}

                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminMenus')}>
                        <Text style={styles.textcreate}>Name</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminOrder')}>
                        <Text style={styles.textcreate}>Prices</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminHome')}>
                        <Text style={styles.textcreate}>Time</Text>
                    </TouchableOpacity>


                </View>




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
                    {

                        orderItems.map((data, i) => {
                            // 0: firstName; 1: lastName; 2: dateFor; 3: dateOrdered; 
                            // 4: requests; 5: cost; 6: addons; 7:size; 8:quantity

                            return (
                                <View>
                                    <Text></Text>
                                    {/* {setState([...data])} */}
                                    <TouchableOpacity onPress={() => handleDetails(data)}>
                                        <View style={styles.minimenucontainer2}>
                                            <Text style={styles.subitem}>{data[0]}, {data[1]}</Text>
                                            <Text style={styles.subitem_price}>${data[5]}</Text>
                                            <Text style={styles.subitem}>{data[2]}</Text>
                                        </View>
                                        {/* <Details name={data} /> */}
                                    </TouchableOpacity>

                                </View>
                            )
                        })
                    }
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

                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/adminNews')}>
                    <Text style={styles.textcreate}>News</Text>
                </TouchableOpacity>
            </View>

        </View>


    );
};

export default ManageOrder;

