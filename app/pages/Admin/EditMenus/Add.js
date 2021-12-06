import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Button, Linking, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './EditMenus.style'
import firebase from '../../../firebase'
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';





const Add = ({ history }) => {

    const [selectedCollection, setSelectedCollection] = useState("menu");
    const [selectedCategory, setSelectedCategory] = useState("Pizzas");
    const [Name, setName] = useState("");
    const [Desc, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Time, setTime] = useState("");

    const [HalfPrice, setHalfPrice] = useState("");



    const handleSubmit = (CollectionName) => {
        console.log(CollectionName);
        let newData = {}
        if (CollectionName === 'menu') {

            newData = {
                category: selectedCategory,
                cost: parseInt(Price),
                desc: Desc,
                image: null,
                name: Name,
                time: parseInt(Time)

            };

        } else {
            if (selectedCategory === 'Dessert') {
                newData = {
                    category: selectedCategory,
                    desc: Desc,
                    fullCost: parseInt(Price),
                    halfCost: parseInt(HalfPrice),
                    name: Name
                }
            } else {
                newData = {
                    category: selectedCategory,
                    fullCost: parseInt(Price),
                    halfCost: parseInt(HalfPrice),
                    name: Name
                }
            }
        }
        console.log(newData);
        firebase.collection(CollectionName).add(newData)
        Alert.alert("You successfully submit the new item into menus");
        history.push({
            pathname: '/adminMenus'
        });
    };



    const message = "Hello world";
    return (
        <View style={styles.container}>


            <View style={styles.container8}>
                <TouchableOpacity style={styles.backButton} onPress={() => { history.push('/adminMenus') }}>
                    <AntDesign name="back" size={30} color="white" />
                    <Text style={styles.goback}>Go Back</Text>
                </TouchableOpacity>

            </View>



            <View style={styles.container1}>
                <Text style={styles.headerText1}>Defazio's Pizza</Text>
                <Text style={styles.subheader}>Add an Item</Text>
            </View>
            <View style={styles.container11}>

                <ScrollView>
                    <View>
                        <Text style={styles.mainbody}>Collection: </Text>

                        <View style={styles.add_cat_pick}>
                            <Picker selectedValue={selectedCollection}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => setSelectedCollection(itemValue)}>
                                <Picker.Item label="Menu" value="menu" />
                                <Picker.Item label="Catering" value="cateringMenu" />
                            </Picker>
                        </View>
                    </View>
                    {
                        selectedCollection === 'menu' ? <View>
                            <View>
                                <Text style={styles.mainbody}>Category: </Text>

                                <View style={styles.add_cat_pick}>
                                    <Picker selectedValue={selectedCategory}
                                        style={styles.picker}
                                        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}>
                                        <Picker.Item label="Popular" value="Popular" />
                                        <Picker.Item label="Limited Features" value="Limited Features" />
                                        <Picker.Item label="Antipasto" value="Antipasto" />
                                        <Picker.Item label="Pizzas" value="Pizzas" />
                                        <Picker.Item label="Calzones" value="Calzones" />
                                        <Picker.Item label="Pasta" value="Pasta" />
                                        <Picker.Item label="Stromboil" value="Stromboil" />
                                        <Picker.Item label="DeFazio's Merchandise and Gifts" value="DeFazio's Merchandise and Gifts" />
                                        <Picker.Item label="Side Orders" value="Side Orders" />
                                        <Picker.Item label="Pizza Kit" value="Pizza Kit" />
                                        <Picker.Item label="Breakfast / Lunch Features" value="Breakfast / Lunch Features" />
                                        <Picker.Item label="Beverages" value="Beverages" />
                                        <Picker.Item label="DeFazio's Homemade Import Store Goods" value="DeFazio's Homemade Import Store Goods" />
                                        <Picker.Item label="Gift Cards" value="Gift Cards" />
                                        <Picker.Item label="Desserts" value="Desserts" />
                                    </Picker>
                                </View>
                            </View>

                            <View style={styles.mainbody}>
                                <View style={styles.mainform}>
                                    <Text style={styles.mainbody}>Name: </Text>
                                    <TextInput placeholder="Four Season Pizza (Large 16'')" style={styles.inputtext} onChangeText={text => setName(text)} value={Name} />
                                </View>
                                <View style={styles.mainform}>
                                    <Text style={styles.mainbody}>Description:</Text>
                                    <TextInput placeholder="Excellent taste..." style={styles.inputtext2} onChangeText={text => setDescription(text)} value={Desc} />
                                </View>
                                <View style={styles.mainform}>
                                    <Text style={styles.mainbody}>Price: </Text>
                                    <TextInput placeholder="15" style={styles.inputtext} onChangeText={text => setPrice((text))} value={Price} />
                                </View>
                                <View style={styles.mainform}>
                                    <Text style={styles.mainbody}>Cooking Time:</Text>
                                    <TextInput placeholder="20" style={styles.inputtext} onChangeText={text => setTime((text))} value={Time} />
                                </View>

                                <View style={styles.container10}>
                                    <TouchableOpacity style={styles.submit} onPress={() => handleSubmit(selectedCollection)}>
                                        <Text style={styles.textsubmit}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> :
                            <View>
                                <View>
                                    <Text style={styles.mainbody}>Category: </Text>

                                    <View style={styles.add_cat_pick}>
                                        <Picker selectedValue={selectedCategory}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}>
                                            <Picker.Item label="Appetizers" value="Appetizers" />
                                            <Picker.Item label="Penne Pasta with Sauce" value="Penne Pasta with Sauce" />
                                            <Picker.Item label="Salads" value="Salads" />
                                            <Picker.Item label="Specialty Pasta & Baked Dishes" value="Specialty Pasta & Baked Dishes" />
                                            <Picker.Item label="Extras" value="Extras" />
                                            <Picker.Item label="Dessert" value="Dessert" />
                                        </Picker>
                                    </View>
                                </View>

                                <View style={styles.mainbody}>
                                    <View style={styles.mainform}>
                                        <Text style={styles.mainbody}>Name: </Text>
                                        <TextInput placeholder="Veggie Lasagna" style={styles.inputtext} onChangeText={text => setName(text)} value={Name} />
                                    </View>

                                    <View style={styles.mainform}>
                                        <Text style={styles.mainbody}>Full Price: </Text>
                                        <TextInput placeholder="15" style={styles.inputtext} onChangeText={text => setPrice((text))} value={Price} />
                                    </View>

                                    <View style={styles.mainform}>
                                        <Text style={styles.mainbody}>Half Price: </Text>
                                        <TextInput placeholder="15" style={styles.inputtext} onChangeText={text => setHalfPrice((text))} value={HalfPrice} />
                                    </View>

                                    {selectedCategory === 'Dessert' ? <View style={styles.mainform}>
                                        <Text style={styles.mainbody}>Description:</Text>
                                        <TextInput placeholder="Excellent taste..." style={styles.inputtext2} onChangeText={text => setDescription(text)} value={Desc} />
                                    </View> : <View></View>}


                                    <View style={styles.container10}>
                                        <TouchableOpacity style={styles.submit} onPress={() => handleSubmit(selectedCollection)}>
                                            <Text style={styles.textsubmit}>Submit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                    }
                </ScrollView>
            </View>

            {/* {
                <View>
                    <Text>{selectedCollection}</Text>
                    <Text>{selectedCategory}</Text>
                    <Text>{Name}</Text>
                    <Text>{Desc}</Text>
                    <Text>{Price}</Text>
                    <Text>{HalfPrice}</Text>
                    <Text>{Time}</Text>
                </View>
            } */}





            <View style={styles.container3}></View>
            {/* Footer component */}



        </View>


    );
};

export default Add;

