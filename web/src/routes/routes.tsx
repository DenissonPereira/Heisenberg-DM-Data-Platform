import { useGlobalHDMContext } from "../contexts/HDMContext"
import { BrowserRouter } from 'react-router-dom'
import { IsUser } from './isUser.routes'
import { NotUser } from './notUser.routes'

export const RoutesApp = () => {

    const { usuario } = useGlobalHDMContext()

    return (
        <BrowserRouter>
            {usuario.id ? <IsUser /> : <NotUser />}
        </BrowserRouter>
    )
}