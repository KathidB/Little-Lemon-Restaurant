import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function ConfirmedBooking () {
  const { state } = useLocation()
  const { name, lastName, email, date, guests, occasion, selectedTime } = state
  const navigate = useNavigate()

  //If someone is trying to acces this component before making a reservation he's automatically moved to reservation page.
  useEffect(() => {
    if (!state) {
      navigate('/BookingPage')
    }
  }, [state, navigate])

  if (!state) {
    return <p>Brak danych rezerwacji. Wróć i dokonaj rezerwacji.</p>
  }

  

  return (
    <>
      <section style={{ textAlign: 'center' }} className='wrapper'>
        <h2 className='section-title'>Booking Confirmation</h2>

        <p>
          <span style={{ color: 'green', fontWeight: 'bold' }}>
            Reservation Successful!
          </span>
        </p>
        <p>
          Hello{' '}
          <span style={{ fontWeight: 'bold' }}>
            {`${name.slice(0, 1).toUpperCase()}${name
              .slice(1)
              .toLowerCase()} ${lastName.slice(0, 1).toUpperCase()}${lastName
              .slice(1)
              .toLowerCase()}`}
          </span>
        </p>
        <ul
          className='booking-info'
          style={{ listStyle: 'none', textAlign: 'center', padding: 0 }}
        >
          <li>
            Date: <span>{date}</span>
          </li>
          <li>
            Time: <span>{selectedTime}</span>
          </li>
          <li>
            Table for: <span>{guests}</span>
          </li>
          <li>
            Occasion: <span>{occasion}</span>
          </li>
          <li>
            Email: <span>{email}</span>
          </li>
        </ul>
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
//B.B
export default ConfirmedBooking