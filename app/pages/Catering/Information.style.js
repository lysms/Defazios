import {StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
    infoText: {
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 5,
    },
    infoInput: {
        fontSize: 17,
        padding: 7,
        borderRadius: 6,
        backgroundColor: COLORS.lightGrayText,
        height: 34,
        borderColor: COLORS.lightGray,
        borderWidth: 1,
        margin: 5,
        width: '97%',
    }
});