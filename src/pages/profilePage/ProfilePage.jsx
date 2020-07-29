import React from 'react'
import { useParams } from 'react-router'

import { useQuery } from '@apollo/client'

// Components
import ProfileDetail from '../../components/profileDetail/ProfileDetail'

// Styled components
import { Profile } from './profilePage.styles'

// Queries
import { USER } from '../../services/queries'

const ProfilePage = () => {
  const { username } = useParams()

  const { loading, error, data } = useQuery(USER, {
    variables: { username, quantity: 30 },
  })

  //si username no existe, da error
  if (error) {
    return <p>{`Error: ${error.message}`}</p>
  }
  if (loading) {
    return <p>Loading</p>
  }

  return (
    <Profile>
      <ProfileDetail user={data.user} viewer={data.viewer} />
      <div>
        repositories list
        {data.user.repositories.nodes.map((repository) => (
          <p key={repository.id}>{repository.name}</p>
        ))}
      </div>
    </Profile>
  )
}

export default ProfilePage
