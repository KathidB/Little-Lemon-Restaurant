import { render, screen } from '@testing-library/react'
import BookingForm from '../data/BookingForm'

test('Renders the BookingForm heading', () => {
  // provading data for component to work.
  const availableTimes = ['17:00']
  render(<BookingForm availableTimes={availableTimes} />)

  //simple test checking if component includes text .

  const headingElement = screen.getByText('Choose Date')

  expect(headingElement).toBeInTheDocument()
})
