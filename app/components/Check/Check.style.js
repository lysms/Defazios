import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  checkItem: {
    flexDirection: "row",
    alignItems: "center"
  },

  checkbox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#D0D0D0'
  }, 

  checkContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 10
  }
}) 