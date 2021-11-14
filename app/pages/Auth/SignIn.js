import React from 'react'
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './SignUp.style'
import AppButton from '../../components/Button/Button.component';


import { MaterialIcons, AntDesign } from '@expo/vector-icons';


// To do: Add the function to recceive the input value and authentication on the value input


const SignIn = ({ history }) => {
    return (
        <View style={styles.container}>
            <AppButton h={history} />
            {/* <TouchableOpacity onPress={() => history.push('/')}>
                <View style={styles.item}>
                    <MaterialIcons style={styles.itemicons} name="home" size={32} color="white" />
                </View>
            </TouchableOpacity> */}

            <View style={styles.header}>
                <Text style={styles.innertext}>Sign In</Text>
            </View>


            <View style={styles.mainbody}>

                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Email Address</Text>
                    <TextInput placeholder="email" style={styles.inputtext} />
                </View>


                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Password</Text>
                    <TextInput placeholder="password" secureTextEntry={true} style={styles.inputtext} />
                </View>

                <View style={styles.container_create}>
                    <TouchableOpacity onPress={() => history.push('/signup')}>
                        <Text style={styles.textsignup}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container_create}>
                    <TouchableOpacity onPress={() => history.push('/signup')}>
                        <Text style={styles.textsignup}>Create Account?</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.container2}>
                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/profile')}>
                        <Text style={styles.textcreate}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>


            <View style={styles.container3}>
            </View>


            {/* <Button title="Login with Google" onPress={() => Linking.openURL('https://reactnativecode.com')} /> */}


        </View>


    );
};

export default SignIn;

const { height } = Dimensions.get('screen');