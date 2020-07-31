import React from 'react'

// Styled components
import { Sticky } from './stickyProfile.styles'

const StickyProfile = ({ username, avatar }) => (
  <Sticky>
    <img src={avatar} alt={username} />
    <p>{username}</p>
  </Sticky>
)

export default StickyProfile
