import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import AuthPage from './pages/authPage/AuthPage'
import HomePage from './pages/homePage/HomePage'
import ProfilePage from './pages/profilePage/ProfilePage'

const App = () => (
  <Router>
    <Switch>
      <Route path={'/'} component={HomePage} exact />
      <Route path={'/auth'} component={AuthPage} exact />
      <Route path={'/:username'} component={ProfilePage} exact />
    </Switch>
  </Router>
)

export default App
