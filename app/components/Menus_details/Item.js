import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button, Alert, ScrollView, TextInput } from 'react-native';
import { useLocation } from 'react-router';
import firebase from '../../firebase'

import styles from './Menus_details.style';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Item = ({ history }) => {
    const location = useLocation();

    const [Menus, setMenus] = useState([]);
    const [Category, setCategory] = useState("");
    const [Name, setName] = useState("");
    const [UpdateName, setUpdateName] = useState("");
    const [Change, setChange] = useState(false)
    const [Dec, setDec] = useState("")
    const [Price, setPrice] = useState(0);
    const [Collection, setCollection] = useState("");


    let final = []
    useEffect(() => {
        let result = location['state'];
        console.log("this is the result\n", result);

        //console.log(result.category)
        if (result.hasOwnProperty('desc')) {
            setDec(result.desc);
        }
        setCollection(result.collection)
        setCategory(result.category)
        setName(result.name)
        final.push(result)
        setMenus(prevState => [...prevState, ...final]);


    }, [])

    const handleDetails = (data) => {
        let value = []
        value.push(data);
        value.push('menu')
        console.log(value);
        history.push({
            pathname: '/menus_details',
            state: value
        });
    }

    const handleDelete = (data) => {
        console.log("Delete", data, Collection);
        let id = "";
        firebase.collection(Collection)
            .where("name", "==", data)
            .get()
            .then(value => {
                value.forEach(element => {

                    id = element.id
                })
                console.log(id)

                firebase.collection(Collection).doc(id).delete();
                let values = [];
                values.push(Category)
                values.push(Collection)
                history.push({
                    pathname: '/menus_details',
                    state: values
                });
                Alert.alert("You have successfully delete this menu item!");
            })
    }

    const callEdit = (data) => {
        console.log("Edit", data, Collection, Change);
        setChange(true)
    }

    const handleEdit = (data) => {
        let id = "";
        firebase.collection(Collection)
            .where("name", "==", data)
            .get()
            .then(value => {
                value.forEach(element => {

                    id = element.id
                })
                console.log(id)
                let newData = {
                    category: Category,
                    collection: Collection,
                    name: UpdateName,
                    cost: Price,
                    desc: Dec,
                    image: null,
                    time: 0,
                }

                firebase.collection(Collection).doc(id).update({
                    name: UpdateName,
                    cost: Price,
                    desc: Dec
                });

                console.log(newData)

                let values = []
                values.push(Category);
                values.push(Collection)

                history.push({
                    pathname: '/menus_details',
                    state: values
                });


                Alert.alert("You have successfully update the menus")
            })

        // firebase.collection(Collection).doc(ID).update({
        //     name: UpdateName,
        //     cost: Price,
        //     desc: Dec
        // });


    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.title}>Defazio's Pizza sdfsdfs</Text>
            </View>
            {
                <TouchableOpacity style={styles.backButton} onPress={() => { handleDetails(Category) }}>
                    <AntDesign name="back" size={30} color="white" />
                    <Text style={styles.goback}>Go Back</Text>
                </TouchableOpacity>
            }

            <View style={styles.profile}>
                <ScrollView style={styles.cat}>
                    <View>
                        {
                            Menus.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <Text></Text>


                                        {/* <View style={styles.minimenucontainer2}>
                                            <Text style={styles.subitem}>Category: {item.category}</Text>

                                        </View> */}
                                        <Text></Text>
                                        <View style={styles.minimenucontainer2}>
                                            <Text style={styles.subitem}>Name: {item.name}</Text>

                                        </View>
                                        <Text></Text>
                                        <View style={styles.minimenucontainer2}>
                                            <Text style={styles.subitem}>Price: ${item.cost}</Text>

                                        </View>
                                        <Text></Text>

                                        {
                                            Dec.length > 0 ? <View style={styles.minimenucontainer2}>
                                                <Text style={styles.subitem}>Description: {item.desc}</Text>

                                            </View> : <View></View>
                                        }

                                    </View>
                                )
                            })

                        }

                    </View>

                    <View>
                        {
                            Change === true ?
                                <View>
                                    <View style={styles.mainform}>
                                        <Text style={styles.mainbody}>Name: </Text>
                                        <TextInput placeholder="Veggie Lasagna" style={styles.inputtext} onChangeText={text => setUpdateName(text)} value={UpdateName} />
                                    </View>

                                    <View style={styles.mainform}>
                                        <Text style={styles.mainbody}>Price: </Text>
                                        <TextInput placeholder="15" style={styles.inputtext} onChangeText={text => setPrice(parseInt(text))} value={Price} />
                                    </View>
                                    <View style={styles.mainform}>
                                        <Text style={styles.mainbody}>Description:</Text>
                                        <TextInput placeholder="Excellent taste..." style={styles.inputtext2} onChangeText={text => setDec(text)} value={Dec} />
                                    </View>
                                    <View style={styles.container10}>
                                        <TouchableOpacity style={styles.submit} onPress={() => handleEdit(Name)}>
                                            <Text style={styles.textsubmit}>Submit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> : <View></View>
                        }
                    </View>


                </ScrollView>
                {
                    <View style={styles.ButtonContainer}>
                        <TouchableOpacity style={styles.Button} onPress={() => { handleDelete(Name) }}>
                            <AntDesign name="delete" size={34} color="black" />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Button} onPress={() => { callEdit(Name) }}>
                            <AntDesign name="edit" size={34} color="black" />
                        </TouchableOpacity>

                    </View>
                }
            </View>

            <View style={styles.container2}></View>



        </View>
    );
}

export default Item;
