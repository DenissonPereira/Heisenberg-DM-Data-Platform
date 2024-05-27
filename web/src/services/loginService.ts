import { SGBDSTORE_TOKEN, SGBDSTORE_USER } from "../core";
import { IUser } from "../models";
import { serveConnection } from "./serveConnection";

export async function loginService(login: string, senha: string, setUsuario: (usuario: IUser) => void) {
    try {
        const { data } = await serveConnection.post('/login', {
            login: login,
            senha: senha
        });

        if (!data.usuario) {
            return data?.usuario;
        } else {
            await localStorage.setItem(SGBDSTORE_USER, JSON.stringify(data.usuario));
            await localStorage.setItem(SGBDSTORE_TOKEN, data.token);
            setUsuario(data.usuario);
            return data;
        }
    } catch (erro) {
        console.log(erro);
        return;
    }
}
