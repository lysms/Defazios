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
        fontSize: 20,
        marginLeft: screen.width / 80,
        padding: 10,
        fontWeight: 'bold',
    },

    details: {
        borderWidth: 2,
        marginLeft: screen.width / 21,
        padding: 10,
        width: screen.width / 1.1,
        borderColor: "grey",
        backgroundColor: '#F6F6F6'
    },

    innerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    regularText: {
        padding: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },

    regularText2: {
        padding: 2,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },


    regularText3: {
        padding: 2,
        paddingLeft: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey'

    },

    specialText: {
        color: 'black',
        padding: 2,
        fontSize: 18,
        fontWeight: 'bold'
    },

    createAccount: {
        width: '55%',
        height: 65,
        color: "white",
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    createAccount2: {
        width: '65%',
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

    container4: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 20
    },
})