import { KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useRef, useState } from "react";
import { loginService } from "../../services/users/loginService";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { useGlobalHDMContext } from "../../contexts/HDMContext";

export const Login = () => {

    const { setUsuario } = useGlobalHDMContext();

    const login = useRef<string>('');
    const senha = useRef<string>('');

    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);

    async function handleLogin() {
        const result = await loginService(login.current, senha.current, setUsuario);
        if (!result?.status) {
            return Alert.alert('Erro', `${result?.msg}`);
        }
        if (result?.usuario) {
            setUsuario(result.usuario);
            return result;
        }
    }

    const mostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    }

    return (
        <ImageBackground
            style={[styles.safe, { overflow: 'hidden' }]}
            source={require('../../assets/images/bg_login.png')}
        >
            <KeyboardAvoidingView style={styles.text}>
                <View style={styles.view}>
                    <View style={styles.viewLogin}>
                        <FontAwesome5 name='user-alt' size={15} color={'#FF99CC'} />
                        <TextInput
                            keyboardType="email-address"
                            style={styles.input}
                            placeholder="Login"
                            onChangeText={(text) => login.current = text}
                        />
                    </View>
                    <View style={styles.viewLogin}>
                        <TouchableOpacity onPress={mostrarSenha} style={styles.touch}>
                            <Entypo name={senhaVisivel ? 'eye' : 'eye-with-line'} size={15} color={'#FF99CC'} />
                        </TouchableOpacity>
                        <TextInput
                            keyboardType="visible-password"
                            style={styles.input}
                            placeholder="Senha"
                            onChangeText={(text) => senha.current = text}
                            secureTextEntry={!senhaVisivel}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.esqueceu}
                    >
                        <Text style={styles.textEsqueceu}>Esqueceu a sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.botao}
                    >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}
