import { Route, Routes } from 'react-router-dom'
import { Home, Error, Docs, Graficos, Sobre } from '../pages'

export const IsUser = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/graficos' element={<Graficos />} />
        <Route path='/docs' element={<Docs />} />
        <Route path='/sobre' element={<Sobre />} />

        <Route path='*' element={<Error />} />
    </Routes>
  )
}
