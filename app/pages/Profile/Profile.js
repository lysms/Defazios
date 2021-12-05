import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './Profile.style'
import { auth } from "../../firebase_auth"
import firebase from "../../firebase"

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import HomeButton from '../../components/HomeButton/HomeButton';


// To do: Add the function to recceive the input value and authentication on the value input

const Profile = ({ history }) => {

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Change, setChange] = useState(false)
    const [Phone, setPhone] = useState("")
    const [UpdateFirst, setUpdateFirst] = useState("")
    const [UpdateLast, setUpdateLast] = useState("")
    const [UpdatePhone, setUpdatePhone] = useState("")


    let email = auth.currentUser.email
    console.log(email)
    firebase.collection("users")
        .where("email", "==", email)
        .get()
        .then(value => {
            value.forEach(element => {
                //console.log(element.data())

                setFirstName(element.data().firstName)
                setLastName(element.data().lastName)
                setPhone(element.data().phone)

            });
        })
    let info = {
        first: FirstName,
        last: LastName,
        phone: Phone
    }


    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                history.push("/");
            })
            .catch(error => alert(error.message))
    }
    const callEdit = (data) => {
        setChange(true)
        console.log(data)
        setUpdateFirst(data.first)
        setUpdateLast(data.last)
        setUpdatePhone(data.phone)
    }

    const handleEdit = (data) => {
        let info = {
            first: UpdateFirst,
            last: UpdateLast,
            phone: UpdatePhone
        }
        console.log(info)
        let id = ""
        var query = firebase.collection("users")
        query = query.where("email", "==", auth.currentUser.email)
        query = query.where("firstName", "==", FirstName)
        query = query.where("lastName", "==", LastName)

        query.get().then(value => {
            value.forEach(element => {
                id = element.id
            })
            console.log(id)

            firebase.collection("users").doc(id).update({
                firstName: UpdateFirst,
                lastName: UpdateLast,
                phone: UpdatePhone
            });

            history.push("/")

        })

    }
    return (
        <View style={styles.container} blurRadius={1}>

            {/* Name  ->   Current Order + waiting time  ->  Order history(in one weeks) */}
            {/* At the top => will be able to view the overall menus  (can be direct to the menus page.) */}

            <HomeButton />
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>USER PROFILE</Text>
            </View>

            <View>
            </View>
            {/* 
                info to display:
                    first name
                    last name
                    email
                    phone number
            */}
            <View style={styles.Profile}>
                <Text style={styles.ProfileInfoText}>
                    First Name{" "}: {info.first} {"\n"}
                    Last Name{"  "}: {info.last} {"\n"}
                    Email{""}: {auth.currentUser?.email}{"\n"}
                    Phone# : {info.phone}
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.editBtn}>
                    <TouchableOpacity style={styles.createAccount} onPress={() => callEdit(info)}>
                        <Text style={styles.textcreate}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.editBtn}>
                    <TouchableOpacity style={styles.createAccount} onPress={handleSignOut}>
                        <Text style={styles.textcreate}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.menucontainer}>
                    <TouchableOpacity style={styles.createAccount} onPress={() => history.push('/shoppingCart')}>
                        <Text style={styles.textcreate}>Browse Menus</Text>
                    </TouchableOpacity>
                </View> */}
            </View>

            <View>
                {
                    Change === true ?
                        <View>
                            <View style={styles.mainform}>
                                <Text style={styles.mainbody}>First Name: </Text>
                                <TextInput placeholder="Veggie Lasagna" style={styles.inputtext} onChangeText={text => setUpdateFirst(text)} value={UpdateFirst} />
                            </View>

                            <View style={styles.mainform}>
                                <Text style={styles.mainbody}>Last Name: </Text>
                                <TextInput placeholder="15" style={styles.inputtext} onChangeText={text => setUpdateLast(text)} value={UpdateLast} />
                            </View>
                            <View style={styles.mainform}>
                                <Text style={styles.mainbody}>Description:</Text>
                                <TextInput placeholder="Excellent taste..." style={styles.inputtext} onChangeText={text => setUpdatePhone(text)} value={UpdatePhone} />
                            </View>
                            <View style={styles.container10}>
                                <TouchableOpacity style={styles.createAccount} onPress={() => handleEdit(info)}>
                                    <Text style={styles.textcreate}>Submit</Text>
                                </TouchableOpacity>
                            </View>

                        </View> : <View></View>
                }
            </View>
            <View style={styles.container3}></View>

        </View>


    );
};

export default Profile;

