import {StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
    
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 18,
        // backgroundColor: 'black',

    },
    contentText: {
        width: '80%',
        fontSize: 21,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        width: 200,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },
    submitButton: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 2,
        width: 85,
        borderRadius: 10,
        fontSize: 17,
        backgroundColor: 'black',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});