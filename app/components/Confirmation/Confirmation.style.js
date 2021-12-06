import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
const screen = Dimensions.get('window')


export default StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff'
  },

  container1: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  confirm: {
    fontSize: 30,
    marginLeft: screen.width / 80,
    padding: 10,
    // fontWeight: 'bold',
  },

  details: {
    borderWidth: 1,
    marginLeft: screen.width / 21,
    padding: 10,
    width: screen.width / 1.1,
    borderColor: "grey",
    backgroundColor: colors.lightGrayText
  },

  innerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  regularText: {
    fontSize: 18,
    // fontWeight: 'bold'
  },

  specialText: {
    color: 'black',
    fontSize: 18,
    // fontWeight: 'bold'
  },

  createAccount: {
    width: '50%',
    height: 65,
    color: "white",
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },

  textcreate: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25
  },
  container3: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemMain: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginVertical: 3
  },

  itemTitle: {
    fontWeight: 'bold'
  },

  itemNums: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  boldText: {
    fontWeight: 'bold', 
    fontSize: 20
  },

  optionText: {
    color: colors.blueText
  },

  caterScroll: {
    marginTop: 10
  }
})