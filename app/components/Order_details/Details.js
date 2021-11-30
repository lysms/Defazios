import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { useLocation } from 'react-router';

import styles from './Details.style';


const Detail = ({ history }) => {
    const location = useLocation();
    //console.log(location)
    // const { data } = (props.location && props.location.state) || {};
    //const [OrderDetails, setOrderDetails] = useState([]);
    const [Order, setOrder] = useState([])
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
        console.log(Order)
    }, [])

    return (
        <View style={{ alignItems: 'center', padding: 10 }}>
            <View style={styles.container1}>
                <Text style={styles.headerText}>Welcome to view all the order. </Text>
            </View>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Button
                title="Press meok"
                onPress={() => history.push('/adminOrder')}
            />
            {
                Order.map((x, i) => {
                    // 0: firstName; 1: lastName; 2: dateFor; 3: dateOrdered; 
                    // 4: requests; 5: cost; 6: addons; 7:size; 8:quantity

                    return (
                        <View>
                            <Text>{x}</Text>
                            {/* {setState([...data])} */}

                            {/* <View style={styles.minimenucontainer2}>
                                <Text style={styles.subitem}>{x[0]}, {x[1]}</Text>
                                <Text style={styles.subitem_price}>${x[5]}</Text>
                                <Text style={styles.subitem}>{x[2]}</Text>
                            </View> */}
                            {/* <Details name={data} /> */}


                        </View>
                    )
                })
            }




        </View>
    );
}

export default Detail;
