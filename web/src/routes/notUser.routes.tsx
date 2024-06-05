import { Route, Routes } from 'react-router-dom'
import { Cadastro, Login, Error } from '../pages'

export const NotUser = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />

        <Route path='*' element={<Error />} />
    </Routes>
  )
}
