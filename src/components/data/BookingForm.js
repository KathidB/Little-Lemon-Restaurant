import { useState } from 'react'
import vertiburger from '../../assets/images/vertiburger.jpg'

function BookingForm ({ availableTimes, onDateChange, submitForm, formStatus }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState({
    value: '',
    isTouched: false
  })
  const [date, setDate] = useState('')
  const [selectedTime, setSelectedTime] = useState(availableTimes[0])
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Choose occasion')

  // we get todays date, and then add one year to it,
  // to set max date user can reserve a table.
  const today = new Date().toISOString().split('T')[0]
  const nextYear = new Date()
  nextYear.setFullYear(nextYear.getFullYear() + 1)
  const nextYearDate = nextYear.toISOString().split('T')[0]

  function isEmailValid (email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  }

  function handleSubmit (e) {
    e.preventDefault()
    submitForm(
      name,
      lastName,
      email.value,
      date,
      guests,
      occasion,
      selectedTime
    )
    if (formStatus === true) {
      clearForm()
    }
  }

  function handleDateChange (e) {
    const newDate = e.target.value
    setDate(newDate)
    setSelectedTime('')
    onDateChange(newDate)
  }

  function checkValidation () {
    return (
      name &&
      lastName &&
      isEmailValid(email.value) &&
      date &&
      selectedTime !== '' &&
      typeof selectedTime !== 'object' &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== 'Choose occasion'
    )
  }

  const clearForm = () => {
    setName('')
    setLastName('')
    setEmail({
      value: '',
      isTouched: false
    })
    setDate('')
    setSelectedTime(availableTimes[0])
    setGuests(1)
    setOccasion('Choose occasion')
  }

  return (
    <div className='booking-form'>
      <form className='form' onSubmit={handleSubmit}>
        <label data-testid='Name' htmlFor='name'>
          Name
        </label>
        <input
          aria-label='Enter your name'
          value={name}
          onChange={e => setName(e.target.value)}
          type='text'
          placeholder='Name'
          id='name'
          maxLength={30}
          required
        />

        <label data-testid='Last name' htmlFor='lastName'>
          Last name
        </label>
        <input
          aria-label='Enter your last name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type='text'
          placeholder='Last name'
          id='lastName'
          maxLength={30}
          required
        />

        <label data-testid='Email' htmlFor='email'>
          Email
        </label>
        <input
          aria-label='Enter your email'
          value={email.value}
          type='email'
          placeholder='Email'
          id='email'
          maxLength={40}
          onChange={e =>
            setEmail(prevEmail => ({ ...prevEmail, value: e.target.value }))
          }
          onBlur={() => setEmail({ ...email, isTouched: true })}
        />
        {!isEmailValid(email.value) && email.isTouched ? (
          <p style={{ padding: 0, margin: 0, color: 'tomato' }}>
            Provide valid email address
          </p>
        ) : null}

        <label data-testid='Choose Date' htmlFor='res-date'>
          Choose Date
        </label>
        <input
          aria-label='Choose date of your reservation'
          required
          value={date}
          type='date'
          id='res-date'
          min={today}
          max={nextYearDate}
          onChange={handleDateChange}
        />

        {date.slice(0, 4) > nextYearDate.slice(0, 4) ? (
          <p style={{ padding: 0, margin: 0, color: 'tomato' }}>
            Max one year ahead.
          </p>
        ) : null}

        <label data-testid='Choose Time' htmlFor='res-time'>
          Choose Time
        </label>
        <select
          aria-label='Choose time of your reservation'
          value={selectedTime}
          onChange={e => setSelectedTime(e.target.value)}
          id='res-time'
        >
          {availableTimes.map(times => (
            <option key={times}>{times}</option>
          ))}
        </select>

        <label data-testid='Number of guests' htmlFor='guests'>
          Number of guests
        </label>
        <input
          aria-label='Number of Guests'
          required
          value={guests}
          onChange={e => setGuests(e.target.value)}
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
        />
        {!(guests >= 1 && guests <= 10) ? (
          <p style={{ padding: 0, margin: 0, color: 'tomato' }}>
            Choose between 1 to 10 guests.
          </p>
        ) : null}

        <label data-testid='Occasion' htmlFor='occasion'>
          Occasion
        </label>
        <select
          aria-label='Choose the occasion'
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
          id='occasion'
        >
          <option value='Choose occasion'>Choose occasion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Other'>Other</option>
        </select>
        <button
          className='login-btn form-btn'
          type='submit'
          disabled={!checkValidation()}
          aria-label='Submit your reservation'
        >
          Make Reservation
        </button>
        {formStatus === false ? (
          <p style={{ textAlign: 'center', color: 'tomato' }}>
            Form send failed. Try again.
          </p>
        ) : null}
      </form>

      <img
        className='booking-burger'
        src={vertiburger}
        alt='Delicious  burger'
      />
    </div>
  )
}
//BB
export default BookingForm
