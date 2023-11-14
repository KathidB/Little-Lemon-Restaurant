import FooterImg2 from '../assets/images/footer-logo2.webp'

import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer className='footer'>
      <div className='wrapper footer-box'>
        <div className='footer-item'>
          <img
            width='114'
            height='200'
            className='footer-logo'
            src={FooterImg2}
            alt='Restaurant logo in the footer section'
          />
        </div>
        <div className='footer-item'>
          <h3 className='footer-header'>Navigation</h3>
          <ul className='footer-nav list-tyle'>
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
        </div>
        <div className='footer-item'>
          <h3 className='footer-header'>Contact</h3>
          <ul className='list-tyle'>
            <li>Chicago Berkley St.</li>
            <li>+01 123412345</li>
            <li>
              {' '}
              <a
                style={{ textDecoration: 'none', color: 'black' }}
                href={`mailto:${'littlelemon@lemon.com'}`}
              >
                @LittleLemon
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h3 className='footer-header'>Social Media</h3>
          <ul className='list-tyle social-media'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
//BB
export default Footer
