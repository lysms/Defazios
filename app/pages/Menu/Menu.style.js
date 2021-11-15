import { StyleSheet } from 'react-native';


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
    height: '100%', 
    width: '100%',
    paddingHorizontal: 40
  }, 

  homeBtn: {
    marginVertical: 10
  }
});
