import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './HomeButton.style';

const HomeButton = ({ h }) => {
  return (
    <TouchableOpacity style={styles.homeButton} onPress={() => {h.push('/'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}}>
      <MaterialIcons style={styles.itemicons} name="home" size={32} color="white" />
    </TouchableOpacity>
  )
};

export default HomeButton;


