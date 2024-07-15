import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { useGlobalHDMContext } from '../../contexts/HDMContext';
import FotoPerfil from '../../assets/images/fotoPerfil.png'

export const DadosUsuario = () => {

    const { usuario } = useGlobalHDMContext()

    return (
        <SafeAreaView style={styles.safe}>
             <Image source={FotoPerfil} style={styles.imagem} />
            <Text style={styles.Texto}>
               Olá, {usuario.nome} {usuario.sobrenome}!
            </Text>
            <View style={styles.view}>
                <Text style={styles.textosDados}>E-mail: {usuario.email}</Text>
                <Text style={styles.textosDados}>Telefone: +55 {usuario.telefone}</Text>
                <Text style={styles.textosDados}>País: {usuario.pais}</Text>
                <Text style={styles.textosDados}>Estado: {usuario.estado}</Text>
                <Text style={styles.textosDados}>Cidade: {usuario.cidade}</Text>
            </View>
        </SafeAreaView>
    );
}
