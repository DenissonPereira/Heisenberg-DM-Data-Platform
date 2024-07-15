import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export const Sobre = () => {
  return (
    <ImageBackground
      style={[styles.safe, { overflow: 'hidden' }]}
      source={require('../../assets/images/modelo.png')}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Introdução</Text>
          <Text style={styles.texto}>
            O modelo Dzyaloshinskii-Moriya (DM) descreve interações entre spins em materiais magnéticos. Ele é essencial para entender fenômenos como o efeito Hall de spin e a existência de skyrmions magnéticos.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Características</Text>
          <Text style={styles.texto}>
            - Interação antissemétrica entre spins.
            - Importante em materiais com forte acoplamento spin-órbita.
            - Contribui para a formação de estruturas magnéticas complexas.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitulo}>Aplicações</Text>
          <Text style={styles.texto}>
            - Memórias magnéticas.
            - Dispositivos de spintrônica.
            - Estudo de novas fases magnéticas.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
