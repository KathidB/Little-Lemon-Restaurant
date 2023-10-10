import { useState } from 'react'

function BookingForm ({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  function handleSubmit (e) {
    e.preventDefault()
    console.log(date)
    console.log(guests)
    console.log(occasion)
    console.log(availableTimes)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='res-date'>Choose Date</label>
        <input
          value={date}
          onChange={e => setDate(e.target.value)}
          type='date'
          id='res-date'
        />

        <label htmlFor='res-time'>Choose Time</label>
        <select
          value={availableTimes}
          onChange={e => setAvailableTimes([e.target.value])}
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
          id='occastion'
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type='submit' value='Make Your Reservation' />
      </form>
    </>
  )
}
export default BookingForm
