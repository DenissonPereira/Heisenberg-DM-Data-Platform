import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    safe: {
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    image: {
        objectFit: 'contain',
        width: 200,
        height: 100,
    },
    view: {
        gap: 20,
        alignItems: 'center'
    },
    input: {
        width: 280,
        height: 40,
    },
    viewLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E9E9E9',
        padding: 10
    },
    touch: {
        padding: 0,
        margin: 0
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#FF99CC',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    textButton: {
        color: 'white',
        fontSize: 20
    },
    esqueceu: {
        marginLeft: 180
    },
    textEsqueceu: {
        fontSize: 12,
        textDecorationLine: "underline",
        color: '#8EEFE0'
    }
})