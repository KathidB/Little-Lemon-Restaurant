import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingForm from '../data/BookingForm'

test('Renders the BookingForm heading', () => {
  const availableTimes = ['17:00']
  render(<BookingForm availableTimes={availableTimes} />)

  const headingElement = screen.getByLabelText('Choose Date')

  expect(headingElement).toBeInTheDocument()
})

describe('BookingForm Component', () => {
  test('HTML5 validation is applied', () => {
    render(
      <BookingForm
        availableTimes={['17:00']}
        onDateChange={() => {}}
        submitForm={() => {}}
        formStatus={true}
      />
    )

    // taking input label
    const nameInput = screen.getByLabelText('Name')
    const lastNameInput = screen.getByLabelText('Last name')
    const dateInput = screen.getByLabelText('Choose Date')
    const guestsInput = screen.getByLabelText('Number of guests')

    // checking if required atribute exists
    expect(nameInput).toHaveAttribute('required')
    expect(lastNameInput).toHaveAttribute('required')
    expect(dateInput).toHaveAttribute('required')
    expect(guestsInput).toHaveAttribute('required')
  })

  test('checkValidation function', () => {
    render(
      <BookingForm
        availableTimes={['17:00']}
        onDateChange={() => {}}
        submitForm={() => {}}
        formStatus={true}
      />
    )

    // Impelemted example test data to check the form.
    userEvent.type(screen.getByLabelText('Name'), 'John')
    userEvent.type(screen.getByLabelText('Last name'), 'Doe')
    userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '5' }
    })
    fireEvent.change(screen.getByLabelText('Choose Date'), {
      target: { value: '2023-12-01' }
    })
    fireEvent.change(screen.getByLabelText('Choose Time'), {
      target: { value: '17:00' }
    })
    fireEvent.change(screen.getByLabelText('Occasion'), {
      target: { value: 'Birthday' }
    })

    // Expect the form to be valid
    expect(screen.getByText('Make Reservation')).not.toBeDisabled()

    // Modify the form fields to make it invalid
    userEvent.clear(screen.getByLabelText('Name'))
    userEvent.clear(screen.getByLabelText('Last name'))
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: '0' }
    })

    // Expect the form to be invalid
    expect(screen.getByText('Make Reservation')).toBeDisabled()

    // Test for invalid state
    const invalidState = {
      name: '',
      lastName: '',
      email: { value: 'invalid-email', isTouched: true },
      date: '',
      selectedTime: '',
      guests: 0,
      occasion: 'Choose occasion'
    }

    userEvent.clear(screen.getByLabelText('Name'))
    userEvent.clear(screen.getByLabelText('Last name'))
    fireEvent.change(screen.getByLabelText('Number of guests'), {
      target: { value: invalidState.guests }
    })

    expect(screen.getByText('Make Reservation')).toBeDisabled()
  })
})
