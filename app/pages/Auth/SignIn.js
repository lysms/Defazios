import React, { useEffect, useState } from 'react';
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './SignUp.style'
import { auth } from "../../firebase_auth"
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../components/HomeButton/HomeButton';


// To do: Add the function to recceive the input value and authentication on the value input


const SignIn = ({ history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                history.push("/adminHome")
            }
        })
        return unsubscribe;
    }, [])

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in with: ", user.email)
            })
            .catch(error => alert(error.message))
    }


    return (
        <View style={styles.container}>
            <HomeButton h={history} />
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
                    <Text style={styles.mainbody}>Email</Text>
                    <TextInput placeholder="Email" style={styles.inputtext} onChangeText={text => setEmail(text)} value={email} />
                </View>


                <View style={styles.mainform}>
                    <Text style={styles.mainbody}>Password</Text>

                    <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputtext} onChangeText={text => setPassword(text)} value={password} />
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

                <View style={styles.container_create}>
                    <TouchableOpacity onPress={() => history.push('/adminHome')}>
                        <Text style={styles.textsignup}>Admin Login</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.container2}>
                    <TouchableOpacity style={styles.createAccount} onPress={handleLogin}>
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