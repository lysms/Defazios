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
    paddingTop: 25,
  },

  button: {
    borderWidth: 4,
    borderColor: COLORS.blueText,

    width: 200, 
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },


  buttonText: {
    fontSize: 24,
    color: COLORS.blueText,
    textAlign: 'center'
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%', 
    width: '100%'
  },

  header: {
    height: windowHeight > 800 ? windowHeight / 100 * 10 : windowHeight / 100 * 12,
  },

  headingText: {
    fontSize: 20,
    color: COLORS.darkGrayText,
    paddingHorizontal: 20,
    textAlign: 'center'
  },

  pageContent: {
    
  },

  btnOutline: {
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
    marginHorizontal: '10%'
  },

  btnText: {
    color: 'white'
  }

})