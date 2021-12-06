import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  pageContent: {
    height: '100%',
    justifyContent: 'center',
  },

  infoText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  infoBoxForLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 7,
  },
  header: {
    height: windowHeight > 800 ? windowHeight / 100 * 9 : windowHeight / 100 * 10,
  },
  returnBtn: {
    backgroundColor: 'black',
    width: windowWidth / 100 * 24,
    padding: 13,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 9,
    marginLeft: windowWidth / 100 * 5,
    marginTop: windowHeight > 800 ? windowHeight / 100 * 1.8: windowHeight / 100 * 2,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
        height: 2,
        width: 1
    },
  },
  textInsideReturnBtn: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  viewForComfirmationTable: {
    // height: windowHeight > 800 ? windowHeight / 100 * 71 : windowHeight / 100 * 70,
    // paddingTop: 80, 
    // height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  confirmTable: {
    width: '90%',
    height: windowHeight > 800 ? windowHeight / 100 * 28 : windowHeight / 100 * 35,
    padding: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 3,
    marginTop: 5,
    backgroundColor: COLORS.lightGrayText,
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
        height: 3,
        width: 2
    },
  },
  viewForReturnBtn: {
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: windowHeight > 800 ? windowHeight / 100 * 4 : windowHeight / 100 * 6,
    paddingBottom: 90
  },
  l_returnBtn: {
    backgroundColor: 'black',
    padding: 13,
    // width: "30%",
    borderRadius: 7,
    alignItems: 'center',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
        height: 2,
        width: 1
    },
  },
  l_textInReturnBtn: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },

  confirmContainer: {
    justifyContent: 'space-around',
    marginHorizontal: 3,   
    marginTop: 7,
    marginBottom: 20
  }
});