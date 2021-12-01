import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    // height: '50%'
    flex: 1,
    height: '100%'
    
  }, 

  modalView: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
  },

  modalContainer: {
    backgroundColor: 'white', 
    paddingTop: 10, 
    paddingHorizontal: 10, 
    borderRadius: 5,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10
  },

  hfContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },

  hfBtn: {
    marginHorizontal: 2,
        paddingVertical: 3,
        paddingHorizontal: 5
  },

  modalInfo: {
    paddingHorizontal: 15,
    paddingBottom: 5
  },

  modalInfoMain: {
    alignItems: 'center', 
    marginBottom: 10,
    marginTop: 4
  },

  modalQuantity: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 5
  },

  itemCount: {
    marginHorizontal: 5, 
    borderColor: "gray", 
    borderWidth: 1, 
    paddingHorizontal: 5
  },

  itemCountText: {
    fontSize: 20
  },

  addOrderBtn: {
    margin: 10
  }


});