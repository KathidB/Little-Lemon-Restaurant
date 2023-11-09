import { useLocation } from 'react-router-dom'

function ConfirmedBooking () {
  const { state } = useLocation()

  const { date, guests, occasion, selectedTime } = state

  console.log(date)
  console.log(guests)
  console.log(occasion)
  console.log(selectedTime)

  return (
    <>
      <section style={{ textAlign: 'center' }} className='wrapper'>
        <h2 className='section-title'>Booking confirmation</h2>
        <p>
          Booking Confirmation{' '}
          <span style={{ color: 'green', fontWeight: 'bold' }}>
            Successful!
          </span>
        </p>
        <ol
          style={{
            listStyle: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: 0
          }}
        >
          <li>Date: {date}</li>
          <li>Table for: {guests}</li>
          <li>Occasion: {occasion}</li>
          <li>Time: {selectedTime}</li>
        </ol>
        <p>
          Thank you for submitting the form. Your reservation has been
          confirmed, and you're all set!
          <br /> We look forward to welcoming you. If you have any further
          questions or changes, feel free to contact us.
        </p>
        <p style={{ fontWeight: 'bold' }}> Enjoy your experience with us!</p>
      </section>
    </>
  )
}

export default ConfirmedBooking
