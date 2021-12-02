import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './HomeButton.style';
import { Link } from 'react-router-native';

const HomeButton = () => {
  return (
    <Link style={styles.homeButton} to='/' onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
      <MaterialIcons style={styles.itemicons} name="home" size={32} color="white" />
    </Link>
  )
};

export default HomeButton;


