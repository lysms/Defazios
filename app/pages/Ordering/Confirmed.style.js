import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
    },

    container1: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    confirm: {
        fontSize: 30,
        marginLeft: screen.width / 80,
        padding: 10,
        fontWeight: 'bold',
    },

    details: {
        borderWidth: 2,
        marginLeft: screen.width / 21,
        padding: 10,
        width: screen.width / 1.1,
        borderColor: "grey"
    },

    innerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    regularText: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },

    specialText: {
        color: 'black',
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },

    createAccount: {
        width: '50%',
        height: 65,
        color: "white",
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    textcreate: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },

    container2: {
        justifyContent: 'center',
        alignItems: 'center',

        padding: 20
    },
    container3: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
})