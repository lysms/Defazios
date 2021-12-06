import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../constants/colors';

const screen = Dimensions.get('window')


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%'

  },

  container1: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  headerText2: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "black"
  },

  profile: {
    flex: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  text: {
    textAlign: 'center',
  },

  menucontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.lightGrayText,
    width: screen.width,
    height: 65,
  },


  createAccount: {

    color: "black",
    justifyContent: 'center',
    alignItems: 'center',

  },


  textcreate: {
    fontSize: 18,
    // width: screen.width / 4,
    textAlign: 'center',
    color: "black",

  },

  textcreate1: {
    fontSize: 18,
    textAlign: 'center',
    color: "black",
    fontWeight: "bold",
  },

  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container4: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    // width: screen.width / 3.8,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },

  buttonText: {
    color: "white",
    fontWeight: '700',
    fontSize: 18,
  },

  contentContainer: {
    height: '92%',
    justifyContent: 'space-between'
  }
})