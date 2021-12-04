import { StyleSheet, Dimensions } from 'react-native';
import COLORS from "../../constants/colors"
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
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 26,
        color: 'red',
        fontWeight: 'bold',
        marginTop: 8,
    },

    DetailContainer: {
        backgroundColor: 'lightgrey',
        height: screen.height / 1.3,
        padding: 15,
        marginTop: 10,
    },

    cat: {
        width: screen.width / 1.2,

    },
    profile: {
        flex: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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

    minimenucontainer2: {
        height: 'auto',
        backgroundColor: COLORS.lightGrayBorder,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,

    },

    minimenucontainer3: {
        height: 'auto',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,

    },

    subitem: {
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
        height: 'auto'
    },



    ButtonContainer: {
        flexDirection: 'row',
        flex: 4,
        padding: 10,
    },

    Button: {
        padding: screen.width / 8,
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

})