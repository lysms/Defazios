import {StyleSheet } from 'react-native';
import COLORS from './colors';

export default StyleSheet.create({
  optionText: {
    color: COLORS.blueText
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  infoText: {
    fontSize: 18,
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

  chooseContainer: {
    paddingTop: 40,
    paddingBottom: 30,
    width: '100%'
  },

  infoContainer: {
    flex: 1,
    paddingTop: 40,
  },

  chooseItem: {
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },

  chooseBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    backgroundColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
        height: 2,
        width: 1
    },
    elevation: 2,
    marginBottom: 2, 
    width: '100%'
  },

  chooseBtnText: {
    color: 'white',
  },
});