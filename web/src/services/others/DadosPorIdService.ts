import axios from "axios"
import { BASE_URL } from "../../conf"

export const DadosPorIdService = async (nomeTabela: string, id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/magnetizations/${nomeTabela}/${id}`)
        return response.data
    } catch (error) {
        console.log('Erro ao consultar dados: ', error)
        throw error
    }
}