import { useState } from "react"
import { useNavigate } from "react-router"
import { loginService } from "../services/loginService"
import { useGlobalHDMContext } from "../contexts/HDMContext"

export const useHandleLogin = () => {
    const navigate = useNavigate()

    const { setUsuario } = useGlobalHDMContext()
    const [login, setLogin] = useState<string>('')
    const [senha, setSenha] = useState<string>('')

    async function handleLogin() {
        event?.preventDefault()
        const data = await loginService(login, senha, setUsuario)
        console.log(data)

        if (data.usuario) navigate('/home')
        else alert(data)
    }

    return {login, setLogin, senha, setSenha, handleLogin, navigate}
}