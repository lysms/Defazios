import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
  },

  TimeContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 40,
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
  },

  header: {
    height: windowHeight > 800 ? windowHeight / 100 * 10 : windowHeight / 100 * 12,
  },


})