import BookingForm from '../data/BookingForm'
import { useReducer } from 'react'
import { fetchAPI } from '../data/bookingsAPI'

export function initializeTimes () {
  let today = new Date().toISOString().split('T')[0]
  return fetchAPI(today)
}

//DOKUMENTACJA:
function BookingPage () {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  //Function accepts action - as a result of dispatch from hangleDateChange.
  //That date is passed to API and API returns a list of hours.
  //That hours are used to populate availableTimes and that is used to map hours in
  // the booking form. So hours are different everytime user changes the date of table reservation.

  function updateTimes (state, action) {
    const newDate = action.date
    return fetchAPI(newDate)
  }

  // This function accepts the date selected by the user in a form. The selected date is then passed
  // to the onDateChange(newDate) function used in the BookingPage component. When the user changes the date,
  // the function dispatches that date to the updateTimes function. This process occurs every time the date is changed.
  function handleDateChange (newDate) {
    dispatch({ date: newDate })
  }

  // This function accepts an action, which is the result of a dispatch from handleDateChange.
  // The date from the action is then passed to the API, which returns a list of available hours.
  // These hours are used to populate the availableTimes state, which is then used to map the available hours
  // in the booking form. As a result, the hours are different every time the user changes the date for table reservation.
  // APP Written by B.B. if uploaded by someone else then it was stolen. Thanks.

  return (
    <div className='wrapper'>
      <h2>Booking Page</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onDateChange={handleDateChange}
      />
    </div>
  )
}
// Written by B.B. if uploaded by someone else then it was stolen. Thanks.
export default BookingPage
