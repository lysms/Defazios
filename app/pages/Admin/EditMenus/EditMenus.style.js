import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../constants/colors';

const screen = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    container1: {
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },

    headerText: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    profile: {
        flex: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },


    menucontainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: COLORS.lightGray,
        width: screen.width,
        height: 65,
    },


    createAccount: {

        color: "black",
        justifyContent: 'center',
        alignItems: 'center',

    },


    textcreate: {
        fontSize: 18,
        // width: screen.width / 4,
        textAlign: 'center',
        color: "black",

    },

    textcreate1: {
        fontSize: 18,
        textAlign: 'center',
        color: "black",
        fontWeight: "bold",
    },

    container2: {
        justifyContent: 'center',
        alignItems: 'center',
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

    cat: {
        width: screen.width / 1.2,

    },

    minimenucontainer2: {
        height: screen.height / 14,
        backgroundColor: COLORS.lightGrayBorder,
        alignItems: 'center',
        justifyContent: 'center',

    },

    subitem: {
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
    },

    subTitleSection: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        marginBottom: 10,
    },

    subTitle: {
        fontSize: 22,
    },

    AddListContainer: {
        alignItems: 'flex-end',
        paddingRight: 10,
    },

    AddList: {
        flexDirection: 'row',
    },

    AddText: {
        paddingRight: 7,
        fontSize: 18,
        color: 'blue',
    },
})