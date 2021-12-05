import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../constants/colors'
const screen = Dimensions.get('window')


export default StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  },

  pageContent: {
    justifyContent: 'space-between',
    height: '90%'
  },

  container1: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  confirm: {
    fontSize: 20,
    marginLeft: screen.width / 80,
    padding: 10,
    fontWeight: 'bold',
  },

  details: {
    borderWidth: 2,
    marginLeft: screen.width / 21,
    padding: 10,
    width: screen.width / 1.1,
    borderColor: "grey",
    backgroundColor: '#F6F6F6'
  },

  innerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  regularText: {
    padding: 2,
    fontSize: 18,
    fontWeight: 'bold'
  },

  regularText2: {
    padding: 2,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },


  regularText3: {
    padding: 2,
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey'

  },

  specialText: {
    color: 'black',
    padding: 2,
    fontSize: 18,
    fontWeight: 'bold'
  },

  createAccount: {
    width: '55%',
    height: 65,
    color: "white",
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },

  createAccount2: {
    width: '65%',
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
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },

  optionText: {
    color: COLORS.blueText
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
  }
})