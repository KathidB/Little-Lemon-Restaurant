import React, { useState } from 'react'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setEmail('')
    setPassword('')
    setIsTouched(false)
  }

  return (
    <div style={{ background: '#495E57' }} className='login-form '>
      <div className='wrapper'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => {
                setIsTouched(true)
              }}
              required
            />
            {password.length < 8 &&
            password.length !== 0 &&
            isTouched === true ? (
              <span style={{ color: 'tomato' }}>
                Password at least 8 characters long
              </span>
            ) : null}
          </div>
          <button
            className='login-btn'
            type='submit'
            disabled={password.length < 8}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
