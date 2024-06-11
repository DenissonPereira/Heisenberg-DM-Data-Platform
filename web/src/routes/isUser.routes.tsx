import { Route, Routes } from 'react-router-dom'
import { Home, Error, Dados, Docs, Graficos } from '../pages'

export const IsUser = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/graficos' element={<Graficos />} />
        <Route path='/dados' element={<Dados />} />
        <Route path='/docs' element={<Docs />} />

        <Route path='*' element={<Error />} />
    </Routes>
  )
}
