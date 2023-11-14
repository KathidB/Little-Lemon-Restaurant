import FooterImg2 from '../assets/images/footer-logo2.webp'

import { Link } from 'react-router-dom'

function Footer () {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
              <Link to='/' onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/About' onClick={scrollToTop}>
                About
              </Link>
            </li>
            <li>
              <Link to='/Menu' onClick={scrollToTop}>
                Menu
              </Link>
            </li>
            <li>
              <Link to='/BookingPage' onClick={scrollToTop}>
                Reservations
              </Link>
            </li>
            <li>
              <Link to='/OrderOnline' onClick={scrollToTop}>
                Order Online
              </Link>
            </li>
            <li>
              <Link to='/Login' onClick={scrollToTop}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-item'>
          <h3 className='footer-header'>Contact</h3>
          <ul className='list-tyle'>
            <li>Chicago Berkley St.</li>
            <li>+01 123412345</li>
            <li>
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
      <p
        style={{
          fontSize: '8px',
          textAlign: 'center',
          margin: '0 auto'
        }}
      >
        @Bogusz Web Design
      </p>
    </footer>
  )
}

export default Footer
