import React from 'react'
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './Payment.style'

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../../components/HomeButton/HomeButton';
const Payment = ({ history }) => {
    return (
        <View style={styles.container}>
            <HomeButton h={history} />
            {/* <TouchableOpacity onPress={() => history.push('/ordering')}>
                <View >
                    <MaterialIcons name="home" size={32} color="red" />
                </View>
            </TouchableOpacity> */}

            <Text>
                Welcome to the payment section
            </Text>
        </View>
    );
};
export default Payment;