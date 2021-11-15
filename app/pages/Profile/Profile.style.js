import { StyleSheet, Dimensions } from 'react-native';

const screen = Dimensions.get('window')


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    container3: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerSection: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderBottomWidth: 3,
        borderStyle: 'dashed',

    },

    headerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24
    },

    currentOrder: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 2,
        padding: 2,
    },

    TimeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        padding: 10
    },

    currentOrderText: {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 20,
    },
    Profile : {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 2,
        padding: 2,
    },
    ProfileInfoText: {
        color: 'grey',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
    },


    button: {
        borderWidth: 5,
        borderColor: '#B9AAFF',
        width: screen.width / 3.5,
        height: screen.height / 7,
        borderRadius: screen.width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 20,
        color: '#B9AAFF',
    },



    subTitle: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },

    subTitle2: {
        padding: 4,
        marginLeft: 25,
    },

    subTitleText: {
        fontSize: 19,
    },

    subItems: {
        width: '75%',
    },



    menucontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        flex : 2
    },
    editBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        flex : 1
        
    },

    createAccount: {
        width: '50%',
        height: 60,
        color: "white",
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },

    textcreate: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: 'center'
    },

    orderHistory: {
        height: screen.height / 5,
    }


});