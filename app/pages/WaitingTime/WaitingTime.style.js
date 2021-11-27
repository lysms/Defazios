import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const screen = Dimensions.get('window')

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 15
  },

  TimeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      padding: 10
  },

  button: {
      borderWidth: 5,
      // borderColor: '#B9AAFF',
      borderColor: COLORS.blueText,
      // width: screen.width / 3.5,
      // height: screen.height / 7,
      width: 125, 
      height: 125,
      borderRadius: 62.5,
      justifyContent: 'center',
      alignItems: 'center',
  },


  buttonText: {
      fontSize: 24,
      // color: '#B9AAFF',
      color: COLORS.blueText
  },

  contentContainer: {
      alignItems: 'center',
      // justifyContent: 'center',
      marginTop: '50%',
      height: '100%', 
      width: '100%'
  }


})