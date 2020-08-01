import React from 'react'

// Components
import { ReactComponent as FollowersIcon } from '../icons/followersIcon.svg'
import { ReactComponent as LocationIcon } from '../icons/locationIcon.svg'
import { ReactComponent as StatusIcon } from '../icons/statusIcon.svg'
import { ReactComponent as StarIcon } from '../icons/starIcon.svg'
import { ReactComponent as UrlIcon } from '../icons/urlIcon.svg'

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
