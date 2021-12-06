import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window')


export default StyleSheet.create({

  pageContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  container3: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderBottomWidth: 3,
    borderStyle: 'dashed',

  },

  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  },

  currentOrder: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 2,
    padding: 2,
  },

  TimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    padding: 10
  },

  currentOrderText: {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 20,
  },
  Profile: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 2,
    padding: 2,
  },
  ProfileInfoText: {
    color: 'grey',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
  },


  button: {
    borderWidth: 5,
    borderColor: '#B9AAFF',
    width: screen.width / 3.5,
    height: screen.height / 7,
    borderRadius: screen.width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    color: '#B9AAFF',
  },



  subTitle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },

  subTitle2: {
    padding: 4,
    marginLeft: 25,
  },

  subTitleText: {
    fontSize: 19,
  },

  subItems: {
    width: '75%',
  },

  editContainer: {
    width: '100%'
  },

  menucontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 30,
    flex: 2
  },
  editBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    flex: 1

  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  createAccount: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 10,
    backgroundColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1
    },
    minWidth: '30%'
    // width: '10%',
    // marginHorizontal: '10%'
  },

  textcreate: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  orderHistory: {
    height: screen.height / 5,
  },

  mainbody: {
    fontSize: 19,
    fontWeight: "bold",
    paddingBottom: 5,
    paddingTop: 7
  },

  mainform: {
    padding: 2
  },

  inputtext: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 45,
    paddingVertical: 5,
    paddingHorizontal: 10
  },


  container10: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },



});