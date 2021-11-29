import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import { useLocation } from 'react-router';
import styles from './Details.style';


const Detail = (props) => {
    const location = useLocation();
    const { data } = (props.location && props.location.state) || {};

    useEffect(() => {
        console.log("This is the detils page!!!!")
        console.log(location.state);
    })
    return (
        <View style={{ alignItems: 'center' }}>
            <Text>Hello {data}! sdfasdfa df</Text>
        </View>
    );
}

export default Detail;
