import {StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  infoContainer: {
    flex: 1,
    paddingTop: 40
  },
  returnBtn: {
    backgroundColor: 'black',
    width: '19%',
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    margin: 17
  },
  returnBtnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  pageContent: {
    padding: 17,
    justifyContent: 'space-around'
  },

  pageTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  },

  infoContent: {
    height: '93%',
    justifyContent: 'space-between'
  },

  requests: {
    fontSize: 17,
    padding: 7,
    borderRadius: 6,
    backgroundColor: COLORS.lightGrayText,
    height: 34,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    margin: 5,
    width: '97%',
    height: '30%',
  },

  infoText: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 5,
  },
  infoInput: {
    fontSize: 17,
    padding: 7,
    borderRadius: 6,
    backgroundColor: COLORS.lightGrayText,
    height: 34,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    margin: 5,
    width: '97%',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  btn: {
    backgroundColor: 'black',
    padding: 13,
    width: '30%',
    borderRadius: 9,
    marginRight: '5%'
  }, 

  btnText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white'
  },

  optionText: {
    color: COLORS.blueText
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 20
  },
});