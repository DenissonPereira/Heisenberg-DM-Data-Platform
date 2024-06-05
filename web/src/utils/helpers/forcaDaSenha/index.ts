import { Tamanho } from "../.."

export const forcaDaSenha = (senha: string) => {
    const tamanho = senha.length

    if (tamanho > Tamanho.Forte) return 'forte'
    if (tamanho >= Tamanho.media) return 'media'
    if (tamanho > Tamanho.Fraca) return 'fraca'

    return 'vazia'
}