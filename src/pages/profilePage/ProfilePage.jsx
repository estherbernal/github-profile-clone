import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

// Components
import ProfileDetail from '../../components/profileDetail/ProfileDetail'
import ProfileNav from '../../components/profileNav/ProfileNav'
import RepositoriesList from '../../components/repositoriesList/RepositoriesList'
import RepositoriesSearcher from '../../components/repositoriesSearcher/RepositoriesSearcher'

// Styled components
import { Loader } from '../../components/loader/Loader'
import {
  Profile,
  LoadingWrapper,
  Message,
  NotFound,
  RepositoriesContent,
} from './profilePage.styles'

// Queries
import { useQuery } from '@apollo/client'
import { USER, REPOSITORIES_BY_SEARCH } from '../../services/queries'

const ProfilePage = () => {
  const { username } = useParams()
  const login = localStorage.getItem('login')
  const [searchValue, setSearchValue] = useState('')

  /**
   * Requests the user's data to the API
   * using the username from URL params
   * @params {string} username from URL params
   */
  const { loading: userLoading, error: userError, data: userData } = useQuery(
    USER,
    {
      variables: { username },
    }
  )

  /**
   * Requests the user's repositories list to the API
   * @params {string} username from URL params
   * @params {string} searchValue from search input
   */
  const {
    loading: reposLoading,
    error: reposError,
    data: reposData,
  } = useQuery(REPOSITORIES_BY_SEARCH, {
    variables: { query: `${searchValue} user:${username}`, after: '' },
  })

  //gestionar paginado de resultados
  const onChangePage = () => {}

  if (userError) {
    return (
      <NotFound>
        <h2>404 - User not found</h2>
        <Link to={`/${login}`}>Return to my profile</Link>
      </NotFound>
    )
  }

  if (userLoading) {
    return (
      <LoadingWrapper>
        <Loader />
      </LoadingWrapper>
    )
  }

  let totalCount
  let currentCount
  if (userData && reposData) {
    totalCount = userData.user.repositories.totalCount
    currentCount = reposData.search.repositoryCount
  }

  return (
    <>
      <ProfileNav user={userData.user} repositoriesCounter={totalCount} />
      <Profile>
        <ProfileDetail user={userData.user} login={login} />
        <RepositoriesContent>
          <RepositoriesSearcher
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {reposLoading && <Loader />}
          {reposData?.search.repositoryCount > 0 && (
            <>
              {searchValue.length > 0 && (
                <Message>
                  <strong>{currentCount}</strong> results for repositories
                  matching <strong>{searchValue}</strong>
                </Message>
              )}
              <RepositoriesList
                currentCount={currentCount}
                repositories={reposData.search.edges}
                onChangePage={onChangePage}
              />
            </>
          )}

          {(reposError || reposData?.search.repositoryCount === 0) && (
            <Message>
              <strong>{username}</strong> doesn’t have any repositories that
              match.
            </Message>
          )}
        </RepositoriesContent>
      </Profile>
    </>
  )
}

export default ProfilePage
