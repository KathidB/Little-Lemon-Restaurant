import Logo from '../assets/images/Logo.svg'

function Nav () {
  return (
    <nav className='menu wrapper'>
      <a href='/'>
        <img src={Logo} alt='Little Lemon Logo' />
      </a>
      <ul className='nav list-tyle'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Menu</a>
        </li>
        <li>
          <a href='/'>Reservations</a>
        </li>
        <li>
          <a href='/'>Order Online</a>
        </li>
        <li>
          <a href='/'>Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
