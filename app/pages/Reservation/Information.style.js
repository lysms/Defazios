import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    infoText: {
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 3
    },
    infoInput: {
        fontSize: 17,
        padding: 7,
        borderRadius: 6,
        backgroundColor: COLORS.lightGrayText,
        height: 34,
        borderColor: COLORS.lightGray,
        borderWidth: 1,
        margin: 7,
        width: '97%',
    },
    infoInputForMutli: {
        fontSize: 17,
        padding: 7,
        borderRadius: 6,
        backgroundColor: COLORS.lightGrayText,
        height: 34,
        borderColor: COLORS.lightGray,
        borderWidth: 1,
        margin: 7,
        width: '97%',
        height: '30%',
    },
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
    viewForInput: {
        height: windowHeight > 800 ? windowHeight / 100 * 75 : windowHeight / 100 * 77,
        padding: 17,
        justifyContent: 'space-around'
    },
    textForTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    viewForComfirm: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmBtn: {
        backgroundColor: 'black',
        padding: 13,
        width: "30%",
        borderRadius: 7,
        alignItems: 'center',
    },
    textInConfirmBtn: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    }
});