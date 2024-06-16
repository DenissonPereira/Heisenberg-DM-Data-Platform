import React from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from './styles';
import { logoutService } from '../../services/users/logoutService';
import { useGlobalHDMContext } from '../../contexts/HDMContext';
import { IUser } from '../../models';
import { useNavigate } from '../../hooks/useNavigate';

export const Home = () => {

  const { setUsuario } = useGlobalHDMContext()
  const { navigate } = useNavigate()

  const sair = async () => {
    logoutService();
    setUsuario({} as IUser)
    navigate('login')

  }

  return (
    <View>
      <Text style={styles.Texto}>
        Home Screen
      </Text>
      <Button onPress={sair} title="sair" />
    </View>
  );
}
