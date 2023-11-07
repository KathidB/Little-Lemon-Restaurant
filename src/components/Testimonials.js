import UserReviews from './data/UserReviews'

function Testimonials () {
  let results = 0

  function renderStars (rate) {
    const stars = '⭐️'.repeat(rate)
    return <p>{stars}</p>
  }

  function calculateAverageRaging () {
    return UserReviews.map(averageRating => (results += averageRating.rate))
  }
  calculateAverageRaging()

  return (
    <section className='testimonials'>
      <div className='wrapper'>
        <h2 className='section-title'>Testimonials</h2>
        <p>Average rating: {(results / UserReviews.length).toFixed(1)}</p>
        <div className='testimonials-cards'>
          {UserReviews ? (
            UserReviews.filter(review => review.rate > 3)
              .slice(0, 4)
              .map(review => (
                <div key={review.id} className='testimonial-card'>
                  <div className='testimonial-rate'>
                    {renderStars(review.rate)}
                  </div>
                  <div className='testimonial-user'>
                    <img
                      className='user-img'
                      src={review.img}
                      alt='User face'
                    />
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
