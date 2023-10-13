import BookingForm from '../data/BookingForm'
import { useReducer } from 'react'
import { fetchAPI } from '../data/bookingsAPI'

function BookingPage () {
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  )

  function updateTimes (action) {
    console.log(action);
    // console.log(state);
    const newDate = action.date // Pobierz nową datę z akcji
    return fetchAPI(newDate) // Użyj wybranej daty do aktualizacji dostępnych czasów
  }

  function initializeTimes () {
    let today = new Date().toISOString().split('T')[0]
    return fetchAPI(today)
  }

  function handleDateChange (newDate) {
    console.log(newDate)
    // Wywołaj funkcję dispatch, aby zaktualizować dostępne czasy w reducerze
    setAvailableTimes({ date: newDate })
  }

  return (
    <div className='wrapper'>
      <h2>Booking Page</h2>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        onDateChange={handleDateChange}
      />
    </div>
  )
}

export default BookingPage
