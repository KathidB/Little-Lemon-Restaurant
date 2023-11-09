import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import About from './Pages/About'
import Menu from './Pages/Menu'
import OrderOnline from './Pages/OrderOnline'
import Login from './Pages/Login'
import BookingPage from './Pages/BookingPage'
import ConfirmedBooking from './ConfirmedBooking'

function Routing () {
  let test = 'Test'
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/BookingPage' element={<BookingPage test={test} />} />
        <Route path='/OrderOnline' element={<OrderOnline />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ConfirmedBooking' element={<ConfirmedBooking />} />
      </Routes>
    </>
  )
}

export default Routing
