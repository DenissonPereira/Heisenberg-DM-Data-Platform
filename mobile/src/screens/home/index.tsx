import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { styles } from './styles';
export const Home = () => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bgHome.png")}
        style={styles.imageBackground}
      >
      </ImageBackground>
    </View>
  );
};
