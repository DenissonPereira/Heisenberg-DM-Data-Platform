import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export const Docs = () => {
  return (
    <ImageBackground
      style={[styles.safe, { overflow: 'hidden' }]}
      source={require('../../assets/images/sobre.png')}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Sobre Mim</Text>
          <Text style={styles.texto}>
            Meu nome é Denisson Pereira, sou aluno de doutorado em Física na Universidade Federal de Sergipe, especializado na linha de pesquisa de magnetismo. Minha trajetória acadêmica é focada no estudo das propriedades magnéticas de materiais, buscando compreender e desenvolver novas tecnologias baseadas em fenômenos magnéticos. Durante meu doutorado, tenho trabalhado em diversos projetos de pesquisa que visam explorar as interações magnéticas em diferentes materiais e suas possíveis aplicações em dispositivos tecnológicos avançados.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Projeto HDM</Text>
          <Text style={styles.texto}>
            O projeto HDM é uma iniciativa open source que tem como objetivo criar uma plataforma acessível para pesquisadores que trabalham com o modelo Dzyaloshinskii-Moriya.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

