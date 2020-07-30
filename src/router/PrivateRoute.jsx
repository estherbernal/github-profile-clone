import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Layout from '../components/layout/Layout'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token')
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {token ? (
            <Layout>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect to={'/auth'} />
          )}
        </>
      )}
    />
  )
}

export default PrivateRoute
