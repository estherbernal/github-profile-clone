import React from 'react'

// Components
import {
  FollowersIcon,
  LocationIcon,
  StatusIcon,
  StarIcon,
  UrlIcon,
} from '../icons'

// Styled components
import { Button } from '../styledComponents'
import {
  Avatar,
  AvatarWrapper,
  ButtonsWrapper,
  Connections,
  Headings,
  MoreInfo,
  ProfileContainer,
  UserStatus,
} from './profileDetail.styles'

const ProfileDetail = ({ user, login }) => (
  <ProfileContainer>
    <AvatarWrapper>
      <Avatar src={user.avatarUrl} alt={user.login} />
      <UserStatus>
        <StatusIcon />
      </UserStatus>
    </AvatarWrapper>
    <Headings>
      <h1>{user.name}</h1>
      <h2>{user.login}</h2>
      {user.bio && <p>{user.bio}</p>}
    </Headings>
    <div>
      {user.login === login ? (
        <Button>Edit profile</Button>
      ) : (
        <ButtonsWrapper>
          <Button>Follow</Button>
          <Button width={'fit-content'}>...</Button>
        </ButtonsWrapper>
      )}
      <Connections>
        <FollowersIcon />
        <span>
          <strong>{user.followers.totalCount}</strong>
          followers
        </span>
        <span>
          <strong>{user.following.totalCount}</strong> following
        </span>
        <StarIcon />
        <span>
          <strong>{user.starredRepositories.totalCount}</strong>
        </span>
      </Connections>
      <MoreInfo>
        {user.location && (
          <p>
            <LocationIcon />
            {user.location}
          </p>
        )}
        {user.websiteUrl && (
          <p>
            <UrlIcon />
            {user.websiteUrl}
          </p>
        )}
      </MoreInfo>
    </div>
    <div></div>
  </ProfileContainer>
)

export default ProfileDetail
