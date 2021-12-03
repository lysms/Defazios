import React, { useEffect, useState } from 'react';
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './SignUp.style'
import { auth } from "../../firebase_auth"

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../components/HomeButton/HomeButton';


// To do: Add the function to recceive the input value and authentication on the value input


const SignUp = ({ history }) => {

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Sign up with: ", user.email)
            })
            .catch(error => alert(error.message))
    }



    return (
        <View style={styles.container}>
            <HomeButton h={history} />

            <View style={styles.header}>
                <Text style={styles.innertext}>Sign Up</Text>
            </View>

            <View style={styles.mainbody}>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>First Name</Text>
                    <TextInput placeholder="First Name" style={styles.inputtext} onChangeText={text => setFirstName(text)} value={FirstName} />
                </View>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Last Name</Text>
                    <TextInput placeholder="Last Name" style={styles.inputtext} onChangeText={text => setLastName(text)} value={LastName} />
                </View>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Email</Text>
                    <TextInput placeholder="email" style={styles.inputtext} onChangeText={text => setEmail(text)} value={email} />
                </View>
                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Password</Text>
                    <TextInput placeholder="password" secureTextEntry={true} style={styles.inputtext} onChangeText={text => setPassword(text)} value={password} />
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.createAccount} onPress={handleSignUp}>
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