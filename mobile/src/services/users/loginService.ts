import AsyncStorage from "@react-native-async-storage/async-storage";
import { DMBDSTORE_TOKEN, DMBDSTORE_USER } from "../../core";
import { IUser } from "../../models";
import { serveConnection } from "../connection/serveConnection";

export async function loginService(login: string, senha: string, setUsuario: (usuario: IUser) => void) {
    try {
        const { data } = await serveConnection.post('/login', {
            login: login,
            senha: senha
        });

        if (!data.usuario) {
            return data?.usuario;
        } else {
            await AsyncStorage.setItem(DMBDSTORE_USER, JSON.stringify(data.usuario));
            await AsyncStorage.setItem(DMBDSTORE_TOKEN, data.token);
            setUsuario(data.usuario);
            return data;
        }
    } catch (erro) {
        console.log(erro);
        return;
    }
}