import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../constants/colors';

const screen = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    container1: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    profile: {
        flex: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },


    menucontainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: COLORS.lightGrayText,
        width: screen.width,
        height: 65,
    },

    createAccount2: {
        color: "black",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: COLORS.lightGray,
        borderBottomWidth: 1,
    
    },

    textcreate2: {
        fontSize: 22,
        fontWeight: 'bold',
        // width: screen.width / 4,
        textAlign: 'center',
        color: "black",
    
      },
    
    minimenucontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: screen.width,
      },

    minimenucontainer2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // width: screen.width / 1.07,
        // width: '90%',
        // height: 'auto',
        borderColor: COLORS.lightGrayText,
        backgroundColor: COLORS.lightGrayText,
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 3
      },

      subitem: {
        width: screen.width / 3,
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'capitalize',
      },


    createAccount: {

        color: "black",
        justifyContent: 'center',
        alignItems: 'center',

    },


    textcreate: {
        fontSize: 18,
        // width: screen.width / 4,
        textAlign: 'center',
        color: "black",

    },

    textcreate1: {
        fontSize: 18,
        textAlign: 'center',
        color: "black",
        fontWeight: "bold",
    },

    container2: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container3: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container4: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20
    },
})