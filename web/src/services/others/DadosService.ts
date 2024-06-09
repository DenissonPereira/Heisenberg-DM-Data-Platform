import axios from "axios"
import { BASE_URL } from "../../conf"

export const DadosService = async (nomeTabela: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/magnetizations/${nomeTabela}`)
        return response.data
    } catch (error) {
        console.log('Error ao consultar dados:', error)
        throw error
    }
}