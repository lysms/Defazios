import React from 'react'
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './Profile.style'


import { MaterialIcons, AntDesign } from '@expo/vector-icons';


// To do: Add the function to recceive the input value and authentication on the value input


const Profile = ({ history }) => {
    return (
        <View style={styles.container}>

            {/* Name  ->   Current Order + waiting time  ->  Order history(in one weeks) */}
            {/* At the top => will be able to view the overall menus  (can be direct to the menus page.) */}

            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => history.push('menu')}>
                    <Text>View Menus</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>First name, Last name</Text>
            </View>


            <View>
                <Text>
                    Current Order + Waiting Time
                </Text>
            </View>




            <View>
                <Text>
                    Order History section
                </Text>
            </View>




            <Text> This is profile page</Text>


            <View style={styles.container3}>
                <Text>Hello</Text>
            </View>


            <TouchableOpacity onPress={() => history.push('/signin')}>
                <Text>Create Account?</Text>
            </TouchableOpacity>

            <View style={styles.container3}></View>

        </View>


    );
};

export default Profile;

