import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

const AppButton = props => {
  return (
    <View style={styles[props.type]}>
      <Button title={props.text} />
    </View>
  )
};
// export default function AppButton(props) {
//   const { onPress, title = 'Save' } = props;
//   return (
//     <Pressable style={styles.button} onPress={onPress}>
//       <Text style={styles.text}>{title}</Text>
//     </Pressable>
//   );
// }


const styles = StyleSheet.create({
  
  home: { // home button will be used to redirect back to home
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'black'
  },
  regular: { // regular buttons will be used for  
    width: 'flex',
    height: 'flex',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#000000',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    backgroundColor: 'transparent',
  },
})

export default AppButton


