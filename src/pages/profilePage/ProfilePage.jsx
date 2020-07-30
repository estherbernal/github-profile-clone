import React from 'react'
import { useParams } from 'react-router'

// Components
import ProfileDetail from '../../components/profileDetail/ProfileDetail'
import ProfileNav from '../../components/profileNav/ProfileNav'
import RepositoriesList from '../../components/repositoriesList/RepositoriesList'

// Styled components
import { Profile } from './profilePage.styles'

// Queries
import { useQuery } from '@apollo/client'
import { USER } from '../../services/queries'

const ProfilePage = () => {
  const { username } = useParams()

  const { loading, error, data } = useQuery(USER, {
    variables: { username, quantity: 100 },
  })

  //si username no existe, da error
  if (error) {
    return <p>{`Error: ${error.message}`}</p>
  }
  if (loading) {
    return <p>Loading</p>
  }

  return (
    <>
      <ProfileNav user={data.user} />
      <Profile>
        <ProfileDetail user={data.user} viewer={data.viewer} />
        <RepositoriesList repositories={data.user.repositories} />
      </Profile>
    </>
  )
}

export default ProfilePage
