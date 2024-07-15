import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { logoutService } from "../../services/users/logoutService";
import { useNavigate } from "../../hooks/useNavigate";
import { IUser } from "../../models";
import { useGlobalHDMContext } from "../../contexts/HDMContext";
import { DadosUsuario } from "../../components";

export const Perfil = () => {
  const { navigate } = useNavigate();
  const { setUsuario } = useGlobalHDMContext();

  const handleSair = async () => {
    await logoutService();
    setUsuario({} as IUser);
    navigate("login");
  }

  return (
    <ImageBackground
      style={[styles.safe, { overflow: 'hidden' }]}
      source={require('../../assets/images/bg_perfil.png')}
    >
      <View style={styles.view}>
        <DadosUsuario />
        <View style={styles.viewBotao}>
          <TouchableOpacity onPress={handleSair} style={styles.botao}>
            <Text style={styles.textBotao}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}