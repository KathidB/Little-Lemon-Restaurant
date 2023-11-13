import { initializeTimes } from '../Pages/BookingPage'


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

