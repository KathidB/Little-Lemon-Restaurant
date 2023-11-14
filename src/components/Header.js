import HeaderImg from '../assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className='header'>
      <div className='wrapper header-box'>
        <div className='header-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <img
            className='header-mobile-img'
            src={HeaderImg}
            alt='Restaurant food'
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link to='/BookingPage'>
            <button className='lemon-btn'>Reserve a Table</button>
          </Link>
        </div>
        <img className='header-img' src={HeaderImg} alt='Restaurant food' />
      </div>
    </header>
  )
}

export default Header
