import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import About from './Pages/About'
import Menu from './Pages/Menu'
import OrderOnline from './Pages/OrderOnline'
import Login from './Pages/Login'
import Reservations from './Pages/Reservations'

function Routing () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservations' element={<Reservations />} />
        <Route path='/OrderOnline' element={<OrderOnline />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default Routing
