import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './MenuItem.style';
import firebase from '../../firebase';
import MenuItemAdd from '../MenuItemAdd/MenuItemAdd';

const MenuItem = props => {

  const [menuItems, setMenuItems] = useState([]);
  const [modalItem, setModalItem] = useState(null)
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setModalItem(null)
  }

  const itemClickHandler = (item, type) => {
    let newModalItem = <MenuItemAdd item={item} show={true} showHandler={toggleModal} type={type} h={props.h}/>
    setModalItem(newModalItem)
  }

  useEffect(() => {
    let tempData = [];
    firebase.firestore().collection(props.menuType).where('category', '==', props.category).get()
      .then(snap => {
        snap.forEach(doc => {
          let d = doc.data();
          tempData.push(d);
        })
        setMenuItems([...tempData]);
      })
      .catch(err => {
        console.error(err);
      })
    
  }, []);

  return (
    <View>
      {modalItem}
      <TouchableOpacity onPress={props.back}>
        <Text style={{ color: '#4A6CC2', marginVertical: 10}}>Return to Categories</Text>
      </TouchableOpacity>

      { 
        menuItems.map((el, i) => {

          if (props.menuType == "menu") {
            return (
              <TouchableOpacity  key={ i } onPress={() => itemClickHandler(menuItems[i], "nm")}>
              {/* <TouchableOpacity  key={ i } onPress={props.handler}> */}

                <View key={ i } style={ styles.item }>
                  <Text style={styles.title}>{ el.name }</Text>
                  <Text>{ el.desc }</Text>
                  <Text style={styles.price}>${ el.cost.toFixed(2) }</Text>
                </View>
              </TouchableOpacity>

            )
          } else if (props.menuType == "cateringMenu" && typeof(menuItems[0].desc) == "undefined") {
            return (
              <TouchableOpacity  key={ i } onPress={() => itemClickHandler(menuItems[i], "hf")}>
                <View style={ styles.item }>
                  <Text style={styles.title}>{ el.name }</Text>
                  <Text style={styles.price}>Half Cost: ${ el.halfCost.toFixed(2) }</Text>
                  <Text style={styles.price}>Full Cost: ${ el.fullCost.toFixed(2) }</Text>
                </View>
              </TouchableOpacity>
            )
  
          } else {
            return (
              <TouchableOpacity  key={ i } onPress={() => itemClickHandler(menuItems[i], "nc")}>
                <View style={ styles.item }>
                  <Text style={styles.title}>{ el.name }</Text><Text>{ el.desc }</Text>
                </View>
              </TouchableOpacity>

            )
          }
        })
      }
    </View>
  );
}

export default MenuItem;