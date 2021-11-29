import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    width: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fffafa',
    textAlign: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    width: "65%",
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  upperview: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: windowHeight / 100 * 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewForSelecting: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: windowHeight / 100 * 60,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
