import { StyleSheet, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  header: {
    height: windowHeight > 800 ? windowHeight / 100 * 10 : windowHeight / 100 * 12,
  },
  viewForPreView: {
    height: windowHeight > 800 ? windowHeight / 100 * 70 : windowHeight / 100 * 70,
    paddingHorizontal: 17,
    paddingVertical: 7,
  },
  titleForPreView: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  scrollviewForPreView: {
    margin: 10,
    height: '95%'
  },
  textInsidePreOrderBtn: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  preOrderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: '#e9e9e9',
    padding: 10,
    borderRadius: 6,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
        height: 2,
        width: 1
    },
  },
  cateringContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: 'space-between'
  },
  viewForOrderBtn: {
    height: windowHeight > 800 ? windowHeight / 100 * 20 : windowHeight / 100 * 18,
  },
  orderBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    backgroundColor: "black",
    marginHorizontal: 10,
    marginTop: windowHeight > 800 ? windowHeight / 100 * 3 : windowHeight / 100 * 4,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
        height: 2,
        width: 1
    },
    width: '80%',
    marginHorizontal: '10%',
  },
  textInsideOrderBtn: {
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold',
  }

});