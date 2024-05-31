import { isAxiosError } from "axios";
import { serveConnection } from "./serveConnection";
import { ICadastro } from "../models";


export async function cadastroService(usuario: ICadastro): Promise<void> {
    try {
        const response = await serveConnection.post('usuario/cadastro', usuario)
        console.log('Usuario cadastrado com sucesso: ', response.data)
    } catch (error) {
        if (isAxiosError(error)) {
            alert(error.response?.data.msg)
            console.error('Erro ao cadastrar usuário: ', error.code, error.message);
        }
        throw error;
    }
}