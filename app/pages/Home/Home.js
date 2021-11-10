import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Home.style'

const Home = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title="Go to menu page" onPress={() => history.push('/menu')} />
      <Button title="Go to Authentication page" onPress={() => history.push('/signin')} />
    </View>
  );
};

export default Home;