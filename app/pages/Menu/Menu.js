import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import AppButton from '../../components/Button/Button.component';
import COLORS from '../../constants/colors';


const Menu = ({ history }) => {
  return (
    <View>
      <Text style = {styles.textColor}>Menu Page</Text>
      <AppButton h={history} />

    </View>
  );
};

const styles =  StyleSheet.create({
  textColor : {
    color : COLORS.blueText}

})

export default Menu;