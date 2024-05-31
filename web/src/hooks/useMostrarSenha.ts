import { useState } from "react"

export const useMostrarSenha = () => {

    const [verSenha, setVerSenha] = useState<boolean>(false)

    const mostrarSenha = () => {
        if (verSenha === false) setVerSenha(true)
        else setVerSenha(false)
    }

    return {verSenha, setVerSenha, mostrarSenha}
}