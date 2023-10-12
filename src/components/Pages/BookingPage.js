import BookingForm from '../data/BookingForm'
import { useEffect, useReducer } from 'react'
import { fetchAPI } from '../data/bookingsAPI'

function BookingPage () {
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  )

  function updateTimes () {
    return fetchAPI()
  }

  // pobierz dane z bookignForm - dokłądnie "date"
  // potem upewnij sie, ze dynamicznie zmienia się availableTimes

  useEffect(() => {
    function updateTimes () {
      return fetchAPI()
    }
    updateTimes()
  }, [availableTimes])

  function initializeTimes () {
    let today = new Date().toISOString().split('T')[0]
    return fetchAPI(today)
  }

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
