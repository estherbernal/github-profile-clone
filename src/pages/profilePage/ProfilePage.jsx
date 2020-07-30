import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

// Components
import ProfileDetail from '../../components/profileDetail/ProfileDetail'
import ProfileNav from '../../components/profileNav/ProfileNav'
import RepositoriesList from '../../components/repositoriesList/RepositoriesList'

// Styled components
import { Loader } from '../../components/loader/Loader'
import { Profile, LoadingWrapper, NotFound } from './profilePage.styles'

// Queries
import { useQuery } from '@apollo/client'
import { USER } from '../../services/queries'

const ProfilePage = () => {
  const { username } = useParams()
  const login = localStorage.getItem('login')

  const { loading, error, data } = useQuery(USER, {
    variables: { username, quantity: 30 },
  })

  if (error) {
    return (
      <NotFound>
        <h2>404 - User not found</h2>
        <Link to={`/${login}`}>Return to my profile</Link>
      </NotFound>
    )
  }

  if (loading) {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    )
  }

  return (
    <>
      <ProfileNav user={data.user} />
      <Profile>
        <ProfileDetail user={data.user} login={login} />
        <RepositoriesList repositories={data.user.repositories} />
      </Profile>
    </>
  )
}

export default ProfilePage
