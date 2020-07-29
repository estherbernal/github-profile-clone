import React from 'react'

// Components
// Styled components
import { Button } from '../styledComponents/Button'
import { ProfileContainer } from './profileDetail.styles'

const ProfileDetail = ({ user, viewer }) => {
  return (
    <ProfileContainer>
      <img src={user.avatarUrl} />
      <h1>{user.name}</h1>
      <h2>{user.login}</h2>
      {user.bio && <p>{user.bio}</p>}
      <div>
        {user.login === viewer.login ? (
          <Button>Edit profile</Button>
        ) : (
          <>
            <Button>Follow</Button>
            <Button>...</Button>
          </>
        )}
        <ul>
          <li>{user.followers.totalCount} followers</li>
          <li>{user.following.totalCount} following</li>
          <li>{user.starredRepositories.totalCount}</li>
        </ul>
        {user.location && <p>{user.location}</p>}
        {user.websiteUrl && <p>{user.websiteUrl}</p>}
      </div>
      <div></div>
    </ProfileContainer>
  )
}

export default ProfileDetail
