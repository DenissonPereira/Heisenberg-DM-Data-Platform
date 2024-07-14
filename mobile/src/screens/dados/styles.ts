import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        height: Dimensions.get("window").height,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        marginTop: 180,
        alignItems: 'center',
    },
    dataContainer: {
        marginTop: 20,
        width: '100%',
    },
    dataRow: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
    },
    dataLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    noDataText: {
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 10,
    },
});

