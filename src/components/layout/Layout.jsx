import React from 'react'

// Components
import { Header } from './layout.styles'

// Styled components
import { Input } from '../styledComponents'
import { ReactComponent as GithubIcon } from '../icons/githubIcon.svg'

const Layout = ({ children }) => (
  <div>
    <Header>
      <GithubIcon />
      <Input placeholder={'Search something...'} color={'dark'} />
    </Header>
    {children}
  </div>
)

export default Layout
