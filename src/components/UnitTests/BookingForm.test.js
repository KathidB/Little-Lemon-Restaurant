import { render, screen } from '@testing-library/react'
import BookingForm from '../data/BookingForm'

test('Renders the BookingForm heading', () => {
  const availableTimes = ['2023-10-11', '2023-10-12', '2023-11-11']
  render(<BookingForm availableTimes={availableTimes} />)

  const labelElement = screen.getByText('Choose Date')

  expect(labelElement).toBeInTheDocument()
})
