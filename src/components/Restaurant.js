import imageChefOne from '../assets/images/chefsAA.jpg'
import imageChefTwo from '../assets/images/chefsBB.jpg'

const Restaurant = () => {
  return (
    <section className='restaurant-section wrapper'>
      <div className='restaurant-info'>
        <h2 className='section-title'>Little Lemon</h2>
        <p className='restaurant-location'>Chicago</p>
        <p className='restaurant-desc'>
          Located in the heart of Chicago, Little Lemon is your gateway to a
          culinary journey through Mediterranean and Italian flavors. Our
          specialties include the refreshing Greek Salad, classic Bruschetta,
          and the irresistible Lemon Dessert. Explore the world of flavors at
          Little Lemon Chicago. Join us today for an unforgettable culinary
          adventure!
        </p>
      </div>
      <div className='restaurant-imgs'>
        <img
          className='chefs-img chef-one'
          src={imageChefOne}
          alt='Chefs of the restaurant'
        />
        <img
          className='chefs-img chef-two'
          src={imageChefTwo}
          alt='Chefs of the restaurant'
        />
      </div>
    </section>
  )
}

export default Restaurant
