import React, { useEffect, useState } from 'react';
import { Text, View, Button, Linking, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import styles from './SignUp.style'
import { auth } from "../../firebase_auth"
import firebase from "../../firebase"
import HomeButton from '../../components/HomeButton/HomeButton';


const SignIn = ({ history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user.email)

                firebase.collection("users")
                    .where("email", "==", user.email)
                    .get()
                    .then(value => {
                        value.forEach(element => {
                            //console.log(element.data())
                            let token = (element.data().token)
                            console.log(token)
                            if (token === "user") {
                                history.push("/profile")
                            }
                            else {
                                history.push("/adminHome")
                            }
                        });
                    })
                //history.push("/adminHome")
            }
        })
        return unsubscribe;
    }, [])

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                firebase.collection("users")
                    .where("email", "==", email)
                    .get()
                    .then(value => {
                        value.forEach(element => {
                            //console.log(element.data())
                            token = (element.data().token)
                            console.log(token)
                            if (token === "user") {
                                history.push("/profile")
                            }
                            else {
                                history.push("/adminHome")
                            }
                        });
                    })
                console.log("Logged in with: ", user.email)
            })
            .catch(error => alert(error.message))
    }


    return (
        <View style={styles.container}>
            <HomeButton />

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

                {/* <View style={styles.container_create}>
                    <TouchableOpacity onPress={() => history.push('/adminHome')}>
                        <Text style={styles.textsignup}>Admin Login</Text>
                    </TouchableOpacity>
                </View> */}


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