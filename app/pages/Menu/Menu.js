import React from 'react';
import {View, Text, Button} from 'react-native';
import AppButton from '../../components/Button/Button.component';

const Menu = ({history}) => {
  return (
    <View>
      <Text>Menu Page</Text>
      <AppButton h={history}/>
      <Button title="Go to home page"  onPress={() => history.push('/')}/>
    </View>
  );
};

export default Menu;