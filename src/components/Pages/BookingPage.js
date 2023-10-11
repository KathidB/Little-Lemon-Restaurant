import BookingForm from '../data/BookingForm'
import { useState } from 'react'

function BookingPage () {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ])

  return (
    <div className='wrapper'>
      <h2>Booking Page</h2>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </div>
  )
}

export default BookingPage
