import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        height: Dimensions.get("window").height,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        marginTop: 180
    },
    viewBotao: {
        alignItems: 'center'
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#85F2DA',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    textBotao: {
        color: '#E98BBE',
        fontSize: 20,
        fontWeight: "700"
    }
})