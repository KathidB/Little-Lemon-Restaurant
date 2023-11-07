import { useState } from 'react'
import vertiburger from '../../assets/images/vertiburger.jpg'

function BookingForm ({ availableTimes, onDateChange }) {
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [selectedTime, setSelectedTime] = useState(availableTimes[0])

  function handleSubmit (e) {
    e.preventDefault()
    console.log(date)
    console.log(guests)
    console.log(occasion)
    console.log(selectedTime)
  }

  console.log()

  // Dodaj obsługę zmiany daty i wywołaj przekazaną funkcję `onDateChange`
  function handleDateChange (e) {
    const newDate = e.target.value
    setDate(newDate)
    onDateChange(newDate)
  }

  return (
    <div className='booking-form'>
      <form className='form' onSubmit={handleSubmit}>
        <label data-testid='chooseDate' htmlFor='res-date'>
          Choose Date<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          required
          value={date}
          onChange={handleDateChange}
          type='date'
          id='res-date'
        />
        <label htmlFor='res-time'>Choose Time</label>
        <select
          value={selectedTime}
          onChange={e => setSelectedTime(e.target.value)}
          id='res-time'
        >
          {availableTimes.map(times => (
            <option key={times}>{times}</option>
          ))}
        </select>

        <label htmlFor='guests'>Number of guests</label>
        <input
          value={guests}
          onChange={e => setGuests(e.target.value)}
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
        />

        <label htmlFor='occasion'>Occasion</label>
        <select
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
          id='occasion'
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input className='submit-form' type='submit' value='Make Your Reservation' />
      </form>

      <img className='booking-burger' src={vertiburger} alt='huge burger' />
    </div>
  )
}
//BB
export default BookingForm
