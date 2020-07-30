import React from 'react'

// Components
import RepositoryItem from '../repositoryItem/RepositoryItem'

// Styled components
import { ListWrapper } from './repositoriesList.styles'

const RepositoriesList = ({ repositories }) => (
  <ListWrapper>
    repositories list
    {repositories.nodes.map((repository) => (
      <>
        <RepositoryItem repository={repository} />
        <p key={repository.id}>{repository.name}</p>
      </>
    ))}
  </ListWrapper>
)

export default RepositoriesList
