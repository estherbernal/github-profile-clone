import React from 'react'

// Styled components
import { Tab, TabsWrapper } from './navigationTabs.styles'
import {
  OverviewIcon,
  PackagesIcon,
  ProjectsIcon,
  RepositoriesIcon,
} from '../icons'

const NavigationTabs = ({ repositoriesCount }) => (
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
    <Tab>
      <PackagesIcon />
      Packages
    </Tab>
  </TabsWrapper>
)

export default NavigationTabs
