import { initializeTimes } from '../Pages/BookingPage'
import { updateTimes } from '../Pages/BookingPage' // Zaimportuj funkcję updateTimes z odpowiedniej ścieżki

test('if initializeTimes function retuns expected times included in expectedTimes array', () => {
  const expectedTimes = [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:30',
    '21:30',
    '22:00',
    '22:30',
    '23:00'
  ]

  const returnedTimes = initializeTimes()
  const checkIfTimesMatch = returnedTimes.map(time =>
    expectedTimes.includes(time)
  )
  // chechIfTimesMatch besomes an object with boolean values. if one of those values is true then test is passsed.

  expect(checkIfTimesMatch.some(Boolean)).toBe(true)
})

test('updateTimes should return the same value as provided in the state', () => {
  // Get the initial data using the `initializeTimes` function, default state hours
  const initialState = initializeTimes()

  // Use today's date to get a new date for the test
  const today = new Date().toISOString().split('T')[0]

  // Call the `updateTimes` function with today's date
  const result = updateTimes(initialState, { date: today })

  // Compare the result with the initial state!
  expect(result).toEqual(initialState)
})

//BB
