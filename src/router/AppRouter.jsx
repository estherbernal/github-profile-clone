import React from 'react'
import { Switch, withRouter } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import AuthPage from '../pages/authPage/AuthPage'
import ProfilePage from '../pages/profilePage/ProfilePage'

const AppRouter = () => (
  <Switch>
    <PublicRoute path={'/'} component={AuthPage} exact />
    <PrivateRoute path={'/:username'} component={ProfilePage} exact />
  </Switch>
)

export default withRouter(AppRouter)
