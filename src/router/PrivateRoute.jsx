import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Header from '../components/header/Header'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {token ? (
            <Header>
              <Component {...props} />
            </Header>
          ) : (
            <Redirect to={'/auth'} />
          )}
        </>
      )}
    />
  )
}

export default PrivateRoute
