import recipesArray from './data/Recipes'
import delivery from '../assets/images/delivery.svg'

import { Link } from 'react-router-dom'

function Specials () {
  return (
    <section className='wrapper special-section'>
      <div className='specials-header'>
        <h2 className='section-title'>Specials</h2>
        <Link to='/Menu' className='lemon-btn specials-menu-btn'>
          Online Menu
        </Link>
      </div>
      <div className='specials-cards'>
        {recipesArray.map(food => (
          <div key={food.id} className='specials-card'>
            <img
              className='specials-img'
              src={food.img}
              alt='Top specials'
              loading='lazy'
            />
            <div className='specials-info'>
              <div className='specials-names'>
                <p className='specials-name'>{food.name}</p>
                <p className='specials-prices'>{food.price}</p>
              </div>
              <p className='specials-desc' aria-label='Food description'>
                {food.description}
              </p>
            </div>

            <Link to='/OrderOnline'>
              {' '}
              <button className='specials-btn'>
                Order a delivery{' '}
                <img
                  style={{ width: '20px' }}
                  src={delivery}
                  alt='devilery button'
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Link to='/Menu' className='lemon-btn specials-mobile-btn'>
        Online Menu
      </Link>
    </section>
  )
}

export default Specials
