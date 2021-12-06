import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';
const screen = Dimensions.get('window')


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },

  container1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container2: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    color: 'red',
    fontWeight: 'bold'
  },

  DetailContainer: {
    // backgroundColor: COLORS.lightGrayText,
    lineHeight: 10,
    paddingHorizontal: 10,
    
  },

  backButton: {
    backgroundColor: 'black',
    borderRadius: 4,
    width: screen.width / 3,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    padding: 2,
    flexDirection: 'row',
  },

  goback: {
    color: 'white',
    fontSize: 17,
    padding: 5,
  },
  addonValue: {
    padding: 5,
    color: 'red',
    lineHeight: 30,
  },

  Value: {
    lineHeight: 30,
    color: 'black',
  },
  ButtonContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',

  },

  Button: {
    padding: screen.width / 8,
    flexDirection: 'row',
    alignItems: 'center'
  },

  scroll: {
    height: screen.height / 2,
  },

  itemContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.lightGrayBorder,
    marginTop: 16,
    padding: 10,
  }


});