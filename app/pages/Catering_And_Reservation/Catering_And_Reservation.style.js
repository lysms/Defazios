import {StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 2,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
    button: {
        backgroundColor: 'black',
        marginLeft: '5%',
        marginTop: '5%',
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: '14%',
        marginTop: '35%',
    },
    preOrderBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#e9e9e9',
        padding: 10,
        borderRadius: 6,
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 1
        }
    },
    orderBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 6,
        backgroundColor: "black",
        margin: 10,
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 1
        }
    }

});