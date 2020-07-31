import React from 'react'

// Components
import Pagination from '../pagination/Pagination'
import RepositoryItem from '../repositoryItem/RepositoryItem'

// Styled components
import { ListWrapper } from './repositoriesList.styles'

const RepositoriesList = ({ repositories, currentCount }) => (
  <ListWrapper>
    {repositories.map((repository) => (
      <RepositoryItem repository={repository.node} key={repository.node.id} />
    ))}
    {currentCount > 30 && <Pagination />}
  </ListWrapper>
)

export default RepositoriesList
