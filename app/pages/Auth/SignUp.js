import React from 'react'
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './SignUp.style'


import { MaterialIcons, AntDesign } from '@expo/vector-icons';


// To do: Add the function to recceive the input value and authentication on the value input


const SignUp = ({ history }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => history.push('/')}>
                <View style={styles.item}>
                    <MaterialIcons style={styles.itemicons} name="home" size={32} color="white" />
                </View>
            </TouchableOpacity>

            <View style={styles.header}>
                <Text style={styles.innertext}>Sign Up</Text>
            </View>


            <View style={styles.mainbody}>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>First Name</Text>
                    <TextInput placeholder="First Name" style={styles.inputtext} />
                </View>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Last Name</Text>
                    <TextInput placeholder="Last Name" style={styles.inputtext} />
                </View>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Email Address</Text>
                    <TextInput placeholder="email" style={styles.inputtext} />
                </View>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Password</Text>
                    <TextInput placeholder="password" secureTextEntry={true} style={styles.inputtext} />
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/menu')}>
                        <Text style={styles.textcreate}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.container3}>
            </View>


            {/* <Button title="Login with Google" onPress={() => Linking.openURL('https://reactnativecode.com')} /> */}


        </View>


    );
};

export default SignUp;

const { height } = Dimensions.get('screen');