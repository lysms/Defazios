import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  paymentInput: {
    borderWidth: 1,
    borderColor: colors.lightGrayBorder,
    paddingHorizontal: 5,
    width: '80%'
  }
});