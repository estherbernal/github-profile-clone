import React from 'react'

// Components
import { Header } from './layout.styles'

// Styled components
import { Input } from '../styledComponents'
import { GithubIcon } from '../icons'

const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <GithubIcon />
        <Input placeholder={'Search something...'} color={'dark'} />
      </Header>
      {children}
    </div>
  )
}

export default Layout
