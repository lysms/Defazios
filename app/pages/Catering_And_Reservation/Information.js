import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './Information.style'

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
          style={{flex: 8,
                  // backgroundColor: 'yellow'
                  padding: 17,
                  justifyContent: 'space-around'
                  }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 5,
            }}>Enter Confirmation Details</Text>
          <Text
            style={styles.infoText}>First Name</Text>
          <TextInput
              style={styles.infoInput}
              placeholder="Enter Your First Name Here"
              />
          <Text
            style={styles.infoText}>Last Name</Text>
          <TextInput
              style={styles.infoInput}
              placeholder="Enter Your Last Name Here"
              />
          <Text
              style={styles.infoText}>Phone Number</Text>
          <TextInput
              style={styles.infoInput}
              placeholder="Enter Your Phone Number Here"
              />
          <Text
            style={styles.infoText}>Address</Text>
          <TextInput
              style={styles.infoInput}
              placeholder="Enter Your Address Here"
              />
          <Text
            style={styles.infoText}>Special Direction</Text>
          <TextInput
            multiline={true}
            style={{
              fontSize: 17,
              padding: 7,
              borderRadius: 6,
              backgroundColor: '#f2f2f2',
              height: 34,
              borderColor: 'lightgrey',
              borderWidth: 1,
              margin: 5,
              width: '97%',
              height: '30%',
            }}
            placeholder="Enter Your Special Direction Here"
            />
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'yellow',
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              padding: 13,
              width: '30%',
              borderRadius: 9,
              marginRight: '5%',
            }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: 'bold',
                color: 'white'
              }}>Continue</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }
}