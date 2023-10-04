import UserReviews from './data/UserReviews'

function Testimonials () {
  function renderStars (rate) {
    const stars = '⭐️'.repeat(rate)
    return <p>{stars}</p>
  }

  return (
    <section className='testimonials'>
      <div className='wrapper'>
        <h2 className='section-title'>Testimonials</h2>
        <div className='testimonials-cards'>
          {UserReviews ? (
            UserReviews.map(review => (
              <div key={review.id} className='testimonial-card'>
                <div className='testimonial-rate'>
                  {renderStars(review.rate)}
                </div>
                <div className='testimonial-user'>
                  <img className='user-img' src={review.img} alt='User face' />
                  <p>
                    {review.name} {review.lastName}
                  </p>
                </div>
                <p className='user-review'>{review.review}</p>
              </div>
            ))
          ) : (
            <p>Data pending...</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
