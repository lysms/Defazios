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

  formItems: {
    marginBottom: 10
  },

  formItem: {
    marginVertical: 3,
  },

  paymentText: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  paymentInput: {
    fontSize: 17,
    padding: 7,
    borderRadius: 6,
    backgroundColor: colors.lightGrayText,
    height: 34,
    borderColor: colors.lightGray,
    borderWidth: 1,
    margin: 2,
    width: '100%',
  },

  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  optionText: {
    color: colors.blueText
  }
});