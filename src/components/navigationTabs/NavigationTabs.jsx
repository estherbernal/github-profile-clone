import React from 'react'
import { useParams } from 'react-router'

// Styled components
import { Tab, TabsWrapper } from './navigationTabs.styles'
import {
  OverviewIcon,
  PackagesIcon,
  ProjectsIcon,
  RepositoriesIcon,
} from '../icons'

const NavigationTabs = ({ repositoriesCount }) => {
  const { username } = useParams()
  const login = localStorage.getItem('login')
  return (
    <TabsWrapper>
      <Tab>
        <OverviewIcon />
        Overview
      </Tab>
      <Tab active>
        <RepositoriesIcon />
        Repositories <span>{repositoriesCount}</span>
      </Tab>
      <Tab>
        <ProjectsIcon />
        Projects
      </Tab>
      {login === username && (
        <Tab>
          <PackagesIcon />
          Packages
        </Tab>
      )}
    </TabsWrapper>
  )
}

export default NavigationTabs
