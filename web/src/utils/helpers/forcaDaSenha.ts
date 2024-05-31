export const forcaDaSenha = (senha: string) => {
    const tamanho = senha.length

    if (tamanho > 12) return 'forte'
    if (tamanho >= 7) return 'media'
    if (tamanho > 4) return 'fraca'

    return 'vazia'
}