import React from 'react'

// Components
import Pagination from '../pagination/Pagination'
import RepositoryItem from '../repositoryItem/RepositoryItem'
import RepositoriesSearcher from '../repositoriesSearcher/RepositoriesSearcher'

// Styled components
import { ListWrapper } from './repositoriesList.styles'

const RepositoriesList = ({ repositories }) => {
  return (
    <ListWrapper>
      <RepositoriesSearcher />
      {repositories.nodes.map((repository) => (
        <RepositoryItem repository={repository} key={repository.id} />
      ))}
      <Pagination />
    </ListWrapper>
  )
}

export default RepositoriesList
