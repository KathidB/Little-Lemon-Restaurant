import Logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav className='menu wrapper'>
      <Link to='/'>
        <img src={Logo} alt='Little Lemon Logo' />
      </Link>
      <ul className='nav list-tyle'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Menu'>Menu</Link>
        </li>
        <li>
          <Link to='/BookingPage'>Reservations</Link>
        </li>
        <li>
          <Link to='/OrderOnline'>Order Online</Link>
        </li>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
