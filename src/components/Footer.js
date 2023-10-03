import FooterImg from '../assets/images/restaurant footer.jpg'

function Footer () {
  return (
    <footer className='footer'>
      <div className='wrapper footer-box'>
        <img
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
        </div>
        <div>
          <h3 className='footer-header'>Contact</h3>
          <ul className='list-tyle'>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3 className='footer-header'>Social Media Links</h3>
          <ul className='list-tyle'>
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
