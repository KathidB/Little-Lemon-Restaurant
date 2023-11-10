import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent

import BookingForm from '../data/BookingForm';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['17:00'];
  render(<BookingForm availableTimes={availableTimes} />);

  const headingElement = screen.getByLabelText('Choose Date');

  expect(headingElement).toBeInTheDocument();
});

test('submitting form with valid data calls submitForm', () => {
  const availableTimes = ['12:00 PM']; // Adjust the availableTimes to match the options in your form
  const mockSubmitForm = jest.fn();
  render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

  // Simulate user input
  userEvent.type(screen.getByLabelText('Name'), 'John');
  userEvent.type(screen.getByLabelText('Last name'), 'Doe');
  userEvent.type(screen.getByLabelText('Email'), 'john.doe@example.com');
  userEvent.type(screen.getByLabelText('Number of guests'), '5');

  // Select valid date
  const validDate = new Date();
  validDate.setDate(validDate.getDate() + 7);
  userEvent.type(screen.getByLabelText('Choose Date'), validDate.toISOString().split('T')[0]);

  // Select valid time
  userEvent.selectOptions(screen.getByLabelText('Choose Time'), '12:00 PM');

  // Select valid occasion
  userEvent.selectOptions(screen.getByLabelText('Occasion'), 'Birthday');

  // Click the submit button
  fireEvent.click(screen.getByText('Make Reservation'));

  // Verify that submitForm is called with the correct arguments
  expect(mockSubmitForm).toHaveBeenCalledWith('John', 'Doe', 'john.doe@example.com', expect.any(String), 5, 'Birthday', '12:00 PM');
});

// Add similar tests for invalid cases
