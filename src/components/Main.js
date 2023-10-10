import Specials from './Specials'
import Testimonials from './Testimonials'
import Restaurant from './Restaurant'
import Header from './Header'
import BookingPage from './Pages/BookingPage'
import { useState } from 'react'

function Main () {
  return (
    <main>
      <Header />
      <Specials />
      <Testimonials />
      <Restaurant />
      <BookingPage />
    </main>
  )
}

export default Main
