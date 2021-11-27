import React from 'react';
import styles from './Catering_And_Reservation.style';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import AppButton from '../../components/Button/Button.component';

const Catering_And_Reservation = ({history}) => {
    return(
        <SafeAreaView
            style={{flex: 1}}>
            <View
                style={{
                    flexDirection: "column",
                    flex: 1
                }}>
                <AppButton h={history}/>
                {/* <View
                    style={styles.header}>
                        <AppButton h={history} />
                    {/* <TouchableOpacity
                        style={styles.button}
                        onPress={()=>console.log("HOME")}
                    >
                        <Text style={styles.buttonText}>HOME</Text>

                    </TouchableOpaci>ty
                </View> */}

                <View
                    style={{padding: 25,
                            flex: 15}}>
                    <View
                        style={{flex: 11}}>
                        <Text
                            style={{fontSize: 23,
                                    fontWeight: 'bold'}}>Previous Orders</Text>
                        <ScrollView
                            style={{margin: 10,
                                    height: '95%'}}>
                            <View
                                style={styles.preOrderBtn}>
                                <Text
                                    style={{fontSize: 17,
                                            fontWeight: 'bold'}}>October 24, 2021</Text>
                                <Button 
                                    title="Details"/>
                            </View>
                            <View
                                style={styles.preOrderBtn}>
                                <Text
                                    style={{fontSize: 17,
                                            fontWeight: 'bold'}}>September 16, 2021</Text>
                                <Button 
                                    title="Details"/>
                            </View>
                        </ScrollView>
                    </View>
                    <View
                        style={{flex: 3,
                                padding: 15,
                                justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            style={styles.orderBtn}>
                            <Text
                                style={{
                                    fontSize: 21,
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>Create New Reservation</Text>
                        </TouchableOpacity>
                                
    
                        <Link to={{pathname:"/menu", state: {type: "cateringMenu"}}} style={styles.orderBtn}>
                          <Text style={{fontSize: 21,color: 'white',fontWeight: 'bold'}}>
                            Create New Catering Order
                          </Text>
                        </Link>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Catering_And_Reservation;
