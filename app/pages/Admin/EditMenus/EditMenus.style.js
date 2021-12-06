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
        backgroundColor: COLORS.lightGrayText,
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
    },

    mainbody: {
        fontSize: 19,
        fontWeight: "bold",
        paddingBottom: 5,
        paddingTop: 7,

    },

    inputtext: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        height: 45,
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    inputtext2: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        height: 95,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlignVertical: "top",
    },
    mainform: {
        padding: 2
    },

    container10: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    container8: {
        flex: 0.1,
        marginTop: 30,
    },
    container11: {
        flex: 60,
        padding: 10,
    },
    headerText1: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red'
    },
    subheader: {
        fontSize: 20,
        marginTop: -10,
        color: 'black'
    },

    submit: {
        borderWidth: 2,
        backgroundColor: "black",
        width: screen.width / 4,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    textsubmit: {
        color: 'white',
        fontSize: 20,
    },

    picker: {
        height: 50,
        width: screen.width / 1.04,

    },

    add_cat_pick: {
        borderWidth: 2,
        borderRadius: 10,
    }
})