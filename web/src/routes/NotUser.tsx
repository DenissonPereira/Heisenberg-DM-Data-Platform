import { Route, Routes } from 'react-router-dom'
import { Cadastro, Login } from '../pages'

export const NotUser = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />

        <Route path='*' element={<Login />} />
    </Routes>
  )
}
