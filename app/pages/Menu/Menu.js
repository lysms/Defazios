import React from 'react';
import {View, Text, Button} from 'react-native';

const Menu = ({history}) => {
  return (
    <View>
      <Text>Menu Page</Text>
      <Button title="Go to home page"  onPress={() => history.push('/')}/>
    </View>
  );
};

export default Menu;