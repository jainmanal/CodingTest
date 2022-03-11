import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Helper/ScreenDimentions";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#75dafe'
    },
    subContainer: {
        marginTop: SCREEN_HEIGHT / 7,
        backgroundColor: '#3b6c82',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    subContainer1: {
        paddingHorizontal: 20,
        padding: 10,
        marginTop: SCREEN_HEIGHT / 8,
        backgroundColor: '#37e9e9',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    subContainer2: {
        paddingHorizontal: 20,
        padding: 10,
        marginTop: SCREEN_HEIGHT / 8,
        backgroundColor: '#ff8d8a',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    heading: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
        marginTop: 30
    },
    blankContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 26,
        color: '#f2f2f2',
    },
    text1: {
        fontSize: 20,
        color: '#f2f2f2'
    },
    button: {
        padding: 14,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 10
    },
    word: {
        color: '#3b6c82',
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#6392a6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: SCREEN_WIDTH / 10
    },
    buttonContainer1: {
        backgroundColor: '#37e9e9',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: SCREEN_WIDTH / 10
    },
    buttonContainer2: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: SCREEN_WIDTH / 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    buttonText1: {
        color: '#37e9e9',
        fontSize: 18
    },
    buttonText2: {
        color: '#ff8d8a',
        fontSize: 18
    },
    bottoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
        tintColor: '#fff'
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer1: {
        marginBottom: 100,
        alignItems: 'center'
    },
    thumb: {
        height: 100,
        width: 100,
        marginVertical: 10,
        tintColor: '#fff',
    },
    done: {
        fontSize: 28,
        color: '#fff'
    },
    retry:{
        color:'#fff',
        fontSize: 18
    },
    reload:{
        height: 40,
        width:40,
        tintColor:'#fff'
    },
    reTry:{
        color:'#fff'
    }
})
export default styles;
