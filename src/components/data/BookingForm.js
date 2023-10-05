import { useState } from 'react'

function BookingForm () {
  const [date, setDate] = useState('')
  const [selectTime, setSelectTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00']

  return (
    <>
      <form>
        <label htmlFor='res-date'>Choose Date</label>
        <input
          value={date}
          onChange={e => setDate(e.target.value)}
          type='date'
          id='res-date'
        />

        <label htmlFor='res-time'>Choose Time</label>
        <select
          value={selectTime}
          onChange={e => setSelectTime(e.target.value)}
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
