import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    innertext: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold'
    },

    item: {
        padding: 9,
        paddingTop: 25,
    },

    itemicons: {
        borderRadius: 30,
        borderWidth: 1,
        width: 55,
        height: 55,
        borderColor: 'white',
        backgroundColor: 'grey',
        paddingTop: 11,
        paddingStart: 11,


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
        padding: 5
    },

    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    container_create: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 20
    },

    container3: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    createAccount: {
        width: '50%',
        height: 60,
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

    signup: {
        width: '50%',
        height: 30,
        color: "white",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    textsignup: {
        fontSize: 15,
        color: "black",
        padding: 2
    }
});