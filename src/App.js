import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'

// Service
import { createApolloClient } from './services/client'

// Components
import GlobalStyle from './GlobalStyles'
import AppRouter from './router/AppRouter'

const App = () => (
  <ApolloProvider client={createApolloClient()}>
    <GlobalStyle />
    <Router>
      <AppRouter />
    </Router>
  </ApolloProvider>
)

export default App
