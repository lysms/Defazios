import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuCat: {
    borderWidth: 1,
    borderColor: "black",
  }, 

  menuContainer: {
    // paddingTop: 10,
    paddingBottom: 30,
    width: '100%', 
    height: '100%',
    // justifyContent: 'center', 
    // alignItems: 'center'
  },

  scrollContainer: {
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 40
  }, 

  header: {
    height: windowHeight > 800 ? windowHeight / 100 * 10 : windowHeight / 100 * 12,
  },

  menuContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  orderBtn: {
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
    width: '80%',
  },
  textInsideOrderBtn: {
    fontSize: 16,
    color: 'white',
}
});
