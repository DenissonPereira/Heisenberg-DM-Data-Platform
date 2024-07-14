import React, { useState, useEffect } from "react";
import { ImageBackground, Text, View, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { styles } from "./styles";
import { DadosService } from "../../services/others";

interface Dado {
    id: number;
    temperatura: number;
    magnetizacao: number;
    energia: number;
    suscetibilidade: number;
    inverso: number;
}

export const Dados = () => {
    const [anisotropia, setAnisotropia] = useState("0");
    const [dados, setDados] = useState<Dado[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DadosService(`anisotropia_${anisotropia.replace('.', '_')}`);
                setDados(response);
            } catch (error) {
                console.log("Error ao consultar dados:", error);
            }
        };
        fetchData();
    }, [anisotropia]);

    return (
        <ImageBackground
            style={[styles.safe, { overflow: 'hidden' }]}
            source={require('../../assets/images/bg_padrao.png')}
        >
            <ScrollView>
                <View style={styles.container}>
                    <RNPickerSelect
                        onValueChange={(value) => setAnisotropia(value)}
                        items={[
                            { label: 'Anisotropia = 0', value: '0' },
                            { label: 'Anisotropia = 0.8', value: '0.8' },
                            { label: 'Anisotropia = 1.0', value: '1.0' },
                            { label: 'Anisotropia = 2.0', value: '2.0' },
                            { label: 'Anisotropia = 3.0', value: '3.0' },
                            { label: 'Anisotropia = 3.38', value: '3.38' }
                        ]}
                        style={pickerSelectStyles}
                        value={anisotropia}
                    />
                    <View style={styles.dataContainer}>
                        {dados.length > 0 ? (
                            dados.map((dado) => (
                                <View key={dado.id} style={styles.dataRow}>
                                    <Text style={styles.dataLabel}>Temperatura: {dado.temperatura}</Text>
                                    <Text>Magnetização: {dado.magnetizacao}</Text>
                                    <Text>Energia: {dado.energia}</Text>
                                    <Text>Suscetibilidade: {dado.suscetibilidade}</Text>
                                    <Text>Inverso: {dado.inverso}</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.noDataText}>Nenhum dado disponível</Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
    },
};


