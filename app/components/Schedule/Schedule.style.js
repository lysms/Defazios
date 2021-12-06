import { StyleSheet, Dimensions } from 'react-native';
import { withRouter } from 'react-router';
import COLORS from '../../constants/colors';
export default StyleSheet.create({

  schedContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: '96%'
  },

  mainText: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 20
  },

  chooseContainer: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    width: '100%'
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

  optionText: {
    color: COLORS.blueText
  },

  subText: {
    fontSize: 18,
    color: COLORS.darkGrayText
  }
})