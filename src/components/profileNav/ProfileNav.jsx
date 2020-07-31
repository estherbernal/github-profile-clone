import React from 'react'

// Components
import NavigationTabs from '../navigationTabs/NavigationTabs'
import StickyProfile from '../stickyProfile/StickyProfile'

// Styled components
import { NavWrapper, FlexContainer } from './profileNav.styles'

const ProfileNav = ({ user, repositoriesCounter }) => {
  return (
    <NavWrapper>
      <FlexContainer>
        <StickyProfile username={user.login} avatar={user.avatarUrl} />
        <NavigationTabs repositoriesCount={repositoriesCounter} />
      </FlexContainer>
    </NavWrapper>
  )
}

export default ProfileNav
