function ConfirmedBooking () {
  return (
    <>
      <section style={{ textAlign: 'center' }} className='wrapper'>
        <h2 className='section-title'>Booking confirmation</h2>
        <p>
          Booking Confirmation{' '}
          <span style={{ color: 'green', fontWeight: 'bold' }}>
            Successful!
          </span>
        </p>
        <p>
          Thank you for submitting the form. Your reservation has been
          confirmed, and you're all set!
          <br /> We look forward to welcoming you. If you have any further
          questions or changes, feel free to contact us.
        </p>
        <p style={{ fontWeight: 'bold' }}> Enjoy your experience with us!</p>
      </section>
    </>
  )
}

export default ConfirmedBooking
