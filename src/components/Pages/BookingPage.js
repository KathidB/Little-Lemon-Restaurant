import BookingForm from '../data/BookingForm'
import { useReducer, useState } from 'react'

function BookingPage () {
  // const [availableTimes, setAvailableTimes] = useState([
  //   '17:00',
  //   '18:00',
  //   '19:00',
  //   '20:00',
  //   '21:00'
  // ])

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  )

  function updateTimes (state, action) {
    if (action.type === '17:00') return { time: '17:00' }
    if (action.type === '18:00') return { time: '18:00' }
    return state
  }

  function initializeTimes () {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00'
    ];
  }

  console.log(availableTimes)

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
