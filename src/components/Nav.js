import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/Logo.svg'
import hamOpen from '../assets/images/hamOpen.png'
import hamClose from '../assets/images/hamClose.png'

function Nav () {
  const [open, setOpen] = useState('hamburger-display-none')

  const hamburgerMenu = () => {
    setOpen(prevState =>
      prevState === 'hamburger-display-none'
        ? 'hamburger-display-flex'
        : 'hamburger-display-none'
    )
  }
  // hamburger-display-none
  return (
    <nav className='menu wrapper'>
      <Link to='/'>
        <img src={Logo} alt='Little Lemon Logo' />
      </Link>

      <ul className={`${'nav list-tyle'} ${open}`} onClick={hamburgerMenu}>
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

      <button
        style={{ background: 'none', border: 'none' }}
        className='hamburger-btn'
        onClick={hamburgerMenu}
      >
        {open === 'hamburger-display-none' ? (
          <img
            style={{ width: '40px' }}
            src={hamOpen}
            alt='open hamburger menu icon'
          />
        ) : (
          <img
            style={{ width: '40px' }}
            src={hamClose}
            alt='open hamburger menu icon'
          />
        )}
      </button>
    </nav>
  )
}
// Written by B.B.
export default Nav
