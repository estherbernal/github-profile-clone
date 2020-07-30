import React from 'react'

// Components
import NavigationTabs from '../navigationTabs/NavigationTabs'
import StickyProfile from '../stickyProfile/StickyProfile'

// Styled components
import { NavWrapper, FlexContainer } from './profileNav.styles'

const ProfileNav = ({ user }) => {
  return (
    <NavWrapper>
      <FlexContainer>
        <StickyProfile username={user.login} avatar={user.avatarUrl} />
        <NavigationTabs repositoriesCount={user.repositories.totalCount} />
      </FlexContainer>
    </NavWrapper>
  )
}

export default ProfileNav
