export const InputesValidate = (palavra: string, tamanho: number) => {
    if (palavra.length >= tamanho) return true
    else return false
}