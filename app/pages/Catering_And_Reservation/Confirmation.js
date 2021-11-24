import React, { Component } from 'react';
import COLORS from '../../constants/colors';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './Confirmation.style'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1}}>
        <View
          style={{
            flex: 1
          }}>
            <TouchableOpacity
                style={{
                    backgroundColor: 'black',
                    width: '19%',
                    padding: 13,
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderRadius: 9,
                    margin: 17,
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Return</Text>
            </TouchableOpacity>
        </View>
        <View
            style={{
                flex: 8,
                // backgroundColor: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text
                style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    // marginLeft: 17,
                }}>
                Order Confirmed!
            </Text>
            <View
                style={{
                    width: '90%',
                    height: '40%',
                    padding: 13,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'grey',
                    margin: 3,
                    marginTop: 5,
                    backgroundColor: COLORS.lightGrayText
                }}>
                <View
                    style={{
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 19,
                            fontWeight: 'bold',
                        }}>Confirmation Details</Text>
                </View>
                <View
                    style={{
                        justifyContent: 'space-between',
                        // backgroundColor: 'blue',
                        marginTop: 7,
                    }}>
                    <View
                        style={styles.infoBoxForLine}>
                    <Text
                        style={styles.infoText}>Name</Text>
                    <Text
                        style={styles.infoText}>Jensen Wang</Text>
                    </View>
                    <View
                        style={styles.infoBoxForLine}>
                    <Text
                        style={styles.infoText}>Date</Text>
                    <Text
                        style={styles.infoText}>December 18, 2021</Text>
                    </View>
                    <View
                        style={styles.infoBoxForLine}>
                    <Text
                        style={styles.infoText}>Time</Text>
                    <Text
                        style={styles.infoText}>3:50 PM EST</Text>
                    </View>
                    <View
                        style={styles.infoBoxForLine}>
                    <Text
                        style={styles.infoText}>ID</Text>
                    <Text
                        style={styles.infoText}>#1234567</Text>
                    </View>
                </View>
            </View>
        </View>
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'black',
                        width: '38%',
                        padding: 11,
                        borderRadius: 7,
                        marginTop: 5,
                    }}
                >
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 19}}>Return Home</Text>
                </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}