import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import * as Haptics from 'expo-haptics';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './GoogleButton.style';

const GoogleButton = ({ g }) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={() => {g.push('/'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}>
      <Text>Google</Text>
    </TouchableOpacity>
  )
};

export default HomeButton;


