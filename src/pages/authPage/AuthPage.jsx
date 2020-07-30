import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import { useLazyQuery } from '@apollo/client'

// Queries
import { ME } from '../../services/queries'

const AuthPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const [onLogin, onLoginResponse] = useLazyQuery(ME)

  const history = useHistory()

  const validateToken = (e) => {
    e.preventDefault()
    if (inputValue.length !== 40) {
      setErrorMessage('Invalid Token')
    } else {
      localStorage.setItem('token', inputValue)
      onLogin()
    }
  }

  if (onLoginResponse.loading) {
    return <p>Loading</p>
  }
  if (onLoginResponse.error && !errorMessage) {
    console.log(onLoginResponse.error)
    setErrorMessage('Invalid Token')
  }
  if (onLoginResponse.data) {
    history.push('/')
  }
  return (
    <form onSubmit={validateToken}>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <button type={'submit'}>Go</button>
      <span>{errorMessage}</span>
    </form>
  )
}

export default AuthPage
