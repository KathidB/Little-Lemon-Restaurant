import imageChefOne from '../assets/images/chefsAA.jpg'
import imageChefTwo from '../assets/images/chefsBB.jpg'

const Restaurant = () => {
  return (
    <section className='restaurant-section wrapper'>
      <div className='restaurant-info'>
        <h2 className='section-title'>Little Lemon</h2>
        <p className='restaurant-location'>Chicago</p>
        <p className='restaurant-desc'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className='restaurant-imgs'>
        <img
          className='chefs-img chef-one'
          src={imageChefOne}
          alt='Chefs of the restaurant'
        />
        <img
          className='chefs-img'
          src={imageChefTwo}
          alt='Chefs of the restaurant'
        />
      </div>
    </section>
  )
}

export default Restaurant
