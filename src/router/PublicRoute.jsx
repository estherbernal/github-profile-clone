import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')
  const login = localStorage.getItem('login')
  return (
    <Route
      {...rest}
      render={(props) => (
        <>{!token ? <Component {...props} /> : <Redirect to={`/${login}`} />}</>
      )}
    />
  )
}

export default PublicRoute
