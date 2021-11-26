import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, TextInput, Dimensions, Button, Alert } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import COLORS from '../../constants/colors';
// import styles from './MakeOneWithCalendar.style'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import AppButton from '../../components/Button/Button.component';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const {height, width} = Dimensions.get('window');
        return(
            <SafeAreaView
                style={{flex: 1}}>
                <View
                    style={{flex: 1, backgroundColor: '#FFF'}}>
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
                </View>
                <View
                    style={{flex: 6, 
                            // backgroundColor: 'lightgrey'
                            }}>
                    <View
                        style={{
                            flex: 2,
                            paddingLeft: 17,
                            paddingRight: 17,
                            // backgroundColor: 'yellow'

                        }}>
                            <Text style={{
                                fontSize: 23,
                                fontWeight: 'bold',
                            }}>Create a New Order</Text>
                            <View
                                style={{
                                    marginTop: 1,
                                    padding: 5,
                                }}>
                                <Text style={{
                                    fontSize: 17,
                                    color: 'grey',
                                }}>Want to cater for tomorrow?</Text>
                                <Text style={{
                                    fontSize: 17,
                                    color: 'grey',
                                }}>Call us at ###-###-### instead</Text>
                            </View>
                    </View>
                    <View
                        style={{
                            flex: 9,
                            paddingLeft: 17,
                            paddingRight: 17,
                            paddingTop: 15,
                            // backgroundColor: 'grey',
                        }}>
                        <Text
                            style={{
                                fontSize: 21,
                                fontWeight:'bold',

                            }}>Choose a Opened Time Slot</Text>
                        <View
                            style={{
                                margin: 10,
                                paddingTop: 25
                            }}>
                            <CalendarPicker
                                onDateChange={this.onDateChange}
                                todayBackgroundColor = {COLORS.pastelBlue}
                                selectedDayColor="black"
                                selectedDayTextColor="white"
                                width={375}
                                dayShape="cycle"
                            />
                            {/* <Text>SELECTED DATE:{ startDate }</Text> */}
                        </View>
                    </View>
                </View>
                <View
                    style={{flex: 3,
                        }}>
                    <View
                        style={{
                            flex: 3,
                            paddingLeft: 17,
                            paddingRight: 17,
                            paddingTop: 0,
                            // alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 21,
                                fontWeight:'bold',
                                paddingBottom: 7,
                            }}>
                            Available Time Slots
                        </Text>
                        <View
                            style={{
                                alignItems: 'center',
                                height: 135
                                }}>
                            <ScrollView
                                style={{
                                    // backgroundColor: 'grey',
                                    width: '90%',
                            }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'lightgrey',
                                    padding: 5,
                                    width: "95%",
                                    borderRadius: 7,
                                    alignItems: 'center',
                                    margin: 7,
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 17
                                    }}>2:30 PM EST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'lightgrey',
                                    padding: 5,
                                    width: "95%",
                                    borderRadius: 7,
                                    alignItems: 'center',
                                    margin: 7,
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 17
                                    }}>4:30 PM EST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'lightgrey',
                                    padding: 5,
                                    width: "95%",
                                    borderRadius: 7,
                                    alignItems: 'center',
                                    margin: 7,
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 17
                                    }}>6:30 PM EST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'lightgrey',
                                    padding: 5,
                                    width: "95%",
                                    borderRadius: 7,
                                    alignItems: 'center',
                                    margin: 7,
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 17
                                    }}>10:30 PM EST</Text>
                            </TouchableOpacity>
                        </ScrollView>
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
                                    padding: 13,
                                    width: "30%",
                                    borderRadius: 7,
                                    alignItems: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 17,
                                        color: 'white'
                                    }}>NEXT</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});