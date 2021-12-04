import { StyleSheet, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    header: {
        height: windowHeight > 800 ? windowHeight / 100 * 10 : windowHeight / 100 * 12,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight > 800 ? windowHeight / 100 * 65 : windowHeight / 100 * 75,
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
        padding: 13,
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
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});