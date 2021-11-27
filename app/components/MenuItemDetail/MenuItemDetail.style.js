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
    borderColor: COLORS.lightGrayBorder,
    height: 100, 
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10
  }


});
