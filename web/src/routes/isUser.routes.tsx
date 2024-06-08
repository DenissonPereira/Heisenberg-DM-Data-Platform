import { Route, Routes } from 'react-router-dom'
import { Home, Error, Dados, Docs } from '../pages'

export const IsUser = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dados' element={<Dados />} />
        <Route path='/docs' element={<Docs />} />

        <Route path='*' element={<Error />} />
    </Routes>
  )
}
