import { serveConnection } from "..";
import { IMagnetization } from "../../models";

export async function magnetizationLoadService(setMagnetizacao: (magnetizacao: IMagnetization[]) => void) {
    try {
        const { data } = await serveConnection.get('/magnetizations')
        setMagnetizacao(data)
    } catch (error) {
        console.log('Erro ao acessar API:', error)
    }
}