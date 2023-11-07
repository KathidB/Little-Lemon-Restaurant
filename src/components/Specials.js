import recipesArray from './data/Recipes'
import delivery from '../assets/images/delivery.svg'

import { Link } from 'react-router-dom'

function Specials () {
  return (
    <section className='wrapper'>
      <div className='specials-header'>
        <h2 className='section-title'>Specials</h2>
        <Link to='/Menu'>
          <button className='lemon-btn'>Online Menu</button>
        </Link>
      </div>
      <div className='specials-cards'>
        {recipesArray.map(food => (
          <div key={food.id} className='specials-card'>
            <img className='specials-img' src={food.img} alt='Top specials' />
            <div className='specials-info'>
              <div className='specials-names'>
                <p className='specials-name'>{food.name}</p>
                <p className='specials-prices'>{food.price}</p>
              </div>
              <p className='specials-desc'>{food.description} </p>
            </div>

            <button className='specials-btn'>
              Order a delivery{' '}
              <img
                style={{ width: '20px' }}
                src={delivery}
                alt='devilery button'
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Specials
