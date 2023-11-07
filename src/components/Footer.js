import FooterImg from '../assets/images/restaurant footer.jpg'
// import FooterLogo from '../assets/images/footer-logo.png'

import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer className='footer'>
      <div className='wrapper footer-box'>
        <img
          className='footer-logo'
          style={{ height: '250px', width: '200px' }}
          src={FooterImg}
          alt='View of the inside of the restaurant'
        />
        <div>
          <h3 className='footer-header'>
            Doormat <br /> Navigation
          </h3>
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
        <div>
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
        <div>
          <h3 className='footer-header'>Social Media Links</h3>
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

export default Footer
