import { StyleSheet, Dimensions } from 'react-native';

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
        backgroundColor: "#BEBEBE",
        width: screen.width,
        height: 65,
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