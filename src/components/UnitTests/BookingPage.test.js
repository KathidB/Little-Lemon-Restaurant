import { initializeTimes } from '../Pages/BookingPage'

test('initializeTimes should return a valid time', async () => {
  const result = await initializeTimes()

  // Oczekiwane godziny w minutach w zakresie od "17:00" do "23:00"
  const validMinutesRange = [
    1020, 1050, 1110, 1140, 1200, 1230,
    1260, 1290, 1350, 1380, 1440, 1470, 1500
  ]

  // Sprawdzenie, czy wynik zawiera się w zakresie oczekiwanych minut
  expect(validMinutesRange).toContain(result)
})
