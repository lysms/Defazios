import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({

  menuCat: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.offWhite,
    // paddingVertical: 8, 
    paddingLeft: 8, 
    // alignItems: 'center',
    justifyContent: 'center',
    height: 50, 
    
    // borderBottomColor: 'black'
  }, 
  
  menuBtn: {
    color: COLORS.gray20,
  },

  catName: {
    fontWeight: 'bold'
  }
});
