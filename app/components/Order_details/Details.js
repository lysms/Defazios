import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { useLocation } from 'react-router';

import styles from './Details.style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

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
                        <Text>Name: {Order[1]}, {Order[2]}</Text>
                        <Text>Text: {Order[0]}</Text>
                        <Text>{Order[0]}</Text>
                        <Text>{Order[0]}</Text>
                        <Text>{Order[0]}</Text>
                        <Text>Items: {Order[0]}</Text>
                        <Text>{Order[0]}</Text>
                        <Text>{Order[0]}</Text>
                        <Text>{Order[0]}</Text>
                        <Text>Price: ${Order[5]}</Text>
                        <Text>Special Requests: "{Order[4]}"</Text>
                    </View>

                }
            </View>

            <View style={styles.container1}></View>



        </View>
    );
}

export default Detail;
