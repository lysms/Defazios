import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  checkItem: {
    flexDirection: "row",
    alignItems: "center", 
    marginVertical: 2
  },

  checkbox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.lightGrayBorder,
    backgroundColor: 'transparent'
  },

  checkboxChecked: {
    backgroundColor: COLORS.lightGrayBorder
  }, 

  checkContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 10
  }
}) 