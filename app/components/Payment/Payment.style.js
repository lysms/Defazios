import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  formContainer: {
    // flex: 1,
    width: '100%',
    height: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center'
  },

  formItem: {
    marginVertical: 4,
  },

  paymentInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGrayBorder,
    paddingHorizontal: 5,
    width: '80%',
    paddingLeft: 10
  },

  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  }
});