import { useGlobalHDMContext } from "../contexts/HDMContext"
import { BrowserRouter } from 'react-router-dom'
import { IsUser } from './IsUser'
import { NotUser } from './NotUser'

export const RoutesApp = () => {

    const { usuario } = useGlobalHDMContext()

    return (
        <BrowserRouter>
            {usuario.id ? <IsUser /> : <NotUser />}
        </BrowserRouter>
    )
}