import { StyleSheet, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    header: {
        height: windowHeight > 800 ? windowHeight / 100 * 9 : windowHeight / 100 * 10,
    },
    returnBtn: {
        backgroundColor: 'black',
        width: windowWidth / 100 * 24,
        padding: 13,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 9,
        marginLeft: windowWidth / 100 * 5,
        marginTop: windowHeight > 800 ? windowHeight / 100 * 1.8: windowHeight / 100 * 2,
    },
    textInsideReturnBtn: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    viewForContact: {
        height: windowHeight > 800 ? windowHeight / 100 * 10: windowHeight / 100 * 11,
        paddingHorizontal: 17,
    },
    viewForCalendar: {
        height: windowHeight > 800 ? windowHeight / 100 * 37: windowHeight / 100 * 43,
        paddingHorizontal: 17,
    },
    viewForSlot: {
        height: windowHeight > 800 ? windowHeight / 100 * 27: windowHeight / 100 * 22,
        paddingHorizontal: 17,
    },
    buttonInScrollView: {
        backgroundColor: 'lightgrey',
        padding: 5,
        width: "95%",
        borderRadius: 7,
        alignItems: 'center',
        margin: 7,
        shadowOffset: {
            height: 2,
            width: 1
        },
    },
    textInBtnInScroll: {
        fontWeight: 'bold',
        fontSize: 17
    },
    nextBtn: {
        backgroundColor: 'black',
        padding: 13,
        width: "30%",
        borderRadius: 7,
        alignItems: 'center',
    },
    textInNextBtn: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
});