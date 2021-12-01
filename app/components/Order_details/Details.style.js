import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },

    container1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container2: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 26,
        color: 'red',
        fontWeight: 'bold'
    },

    DetailContainer: {
        backgroundColor: 'lightgrey',
    },

    backButton: {
        backgroundColor: 'black',
        borderRadius: 16,
        width: screen.width / 3,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
        padding: 2,
        flexDirection: 'row',
    },

    goback: {
        color: 'white',
        fontSize: 17,
        padding: 5,
    }


})