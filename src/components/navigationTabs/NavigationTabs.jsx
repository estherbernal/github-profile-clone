import React from 'react'
import { useParams } from 'react-router'

// Styled components
import { Tab, TabsWrapper } from './navigationTabs.styles'
import { ReactComponent as OverviewIcon } from '../icons/overviewIcon.svg'
import { ReactComponent as PackagesIcon } from '../icons/packagesIcon.svg'
import { ReactComponent as ProjectsIcon } from '../icons/projectsIcon.svg'
import { ReactComponent as RepositoriesIcon } from '../icons/repositoriesIcon.svg'

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
