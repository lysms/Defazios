import React from 'react'
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './Confirmed.style'
import AppButton from '../../components/Button/Button.component';


const Confirmed = ({ history }) => {
    return (
        <View style={styles.container}>


            <View style={styles.container3}>
            </View>

            <View style={styles.container1}>
                <Text style={styles.confirm}>Order Confirmed!</Text>

                <View style={styles.details}>
                    <Text style={styles.regularText}>
                        Confirmation Details
                    </Text>

                    <Text style={styles.regularText}>John Smith</Text>

                    <View style={styles.innerText}>
                        <Text style={styles.regularText}>7:00PM</Text>
                        <Text style={styles.specialText}>December 21, 2021</Text>
                    </View>

                    <Text style={styles.regularText}>999-999-9999</Text>
                    <Text style={styles.regularText}>Johnsmith@email.com</Text>

                    <Text style={styles.regularText}>1 Large - Cheese Pizza</Text>

                    <Text style={styles.regularText}>Subtotal: $17.64</Text>

                </View>

            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/profile')}>
                    <Text style={styles.textcreate}>Return to Profile </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container3}>
            </View>

        </View>
    );
};

export default Confirmed;