import recipesArray from './data/Recipes'
import delivery from '../assets/images/delivery.svg'

function Specials () {
  return (
    <section className='wrapper'>
      <div className='specials-header'>
        <h2 className='specials-title'>Specials</h2>
        <button className='lemon-btn'>Online Menu</button>
      </div>
      <div className='specials-cards'>
        {recipesArray.map(food => (
          <div key={food.id} className='specials-card'>
            <img className='specials-img' src={food.img} alt='Top specials' />
            <div className='specials-info'>
              <div className='specials-price'>
                <h2>{food.name}</h2>
                <p>{food.price}</p>
              </div>
              <p>{food.description} </p>
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
