import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.offWhite,
    paddingVertical: 10, 
    paddingHorizontal: 20
  },

  title: {
    paddingVertical: 5, 
    fontWeight: 'bold'
  }, 
  
  price: {
    paddingTop: 5
  }
});
