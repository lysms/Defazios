import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    borderWidth: 1,
    borderColor: "black",
  },

  btn: {
    borderRadius: 10
  },

  detailHeader: {
    fontWeight: 'bold', 
    marginVertical: 10
  },

  specialRequests: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    height: 100, 
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10
  }


});
