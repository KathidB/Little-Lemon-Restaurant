import { useContext, useReducer, useState } from 'react'
import { BookingContext } from '../data/BookingContext'
import BookingForm from '../data/BookingForm'
import { fetchAPI, submitAPI } from '../data/bookingsAPI'
import { useNavigate } from 'react-router-dom'

export function initializeTimes () {
  let today = new Date().toISOString().split('T')[0]
  return fetchAPI(today)
}

export function updateTimes (state, action) {
  const newDate = action.date
  return fetchAPI(newDate)
}

function BookingPage () {
  const [formStatus, setFormStatus] = useState(null)
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const { setBookingData } = useContext(BookingContext)
  const navigate = useNavigate()

  function handleDateChange (newDate) {
    dispatch({ date: newDate })
  }

  async function submitForm (
    name,
    lastName,
    email,
    date,
    guests,
    occasion,
    selectedTime
  ) {
    try {
      const submissionResult = await submitAPI(
        name,
        lastName,
        email.value,
        date,
        guests,
        occasion,
        selectedTime
      )

      if (submissionResult === true) {
        setFormStatus(true)
        setBookingData({
          name,
          lastName,
          email,
          date,
          guests,
          occasion,
          selectedTime
        })
        navigate('/ConfirmedBooking')
      } else {
        setFormStatus(false)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  return (
    <div className='booking-page'>
      <div className='wrapper'>
        <h2 style={{ textAlign: 'center' }}>Booking Page</h2>
        <BookingForm
          submitForm={submitForm}
          availableTimes={availableTimes}
          dispatch={dispatch}
          onDateChange={handleDateChange}
          formStatus={formStatus}
        />
      </div>
    </div>
  )
}
//B.B
export default BookingPage
