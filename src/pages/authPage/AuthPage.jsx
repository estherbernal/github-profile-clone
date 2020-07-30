import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Styled components
import { Content, ErrorMessage, Form } from './authPage.styles'
import { Button, Input } from '../../components/styledComponents'

// Queries
import { useLazyQuery } from '@apollo/client'
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
    localStorage.setItem('login', onLoginResponse.data.viewer.login)
    history.push(`/${onLoginResponse.data.viewer.login}`)
  }
  return (
    <Content>
      <div>
        <h1>Insert your GitHub API token</h1>
        <p>
          To generate your token or for more information,
          <a
            href={
              'https://docs.github.com/es/enterprise/2.19/user/github/authenticating-to-github/creating-a-personal-access-token'
            }
            target={'_blank'}
          >
            click here
          </a>
          .
        </p>
      </div>
      <Form onSubmit={validateToken}>
        <div>
          <Input
            value={inputValue}
            placeholder={'Write your token...'}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          <Button width={'fit-content'} type={'submit'}>
            Validate Token
          </Button>
        </div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Form>
    </Content>
  )
}

export default AuthPage
