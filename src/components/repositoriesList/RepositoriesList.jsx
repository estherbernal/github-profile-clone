import React from 'react'

// Components
import Pagination from '../pagination/Pagination'
import RepositoryItem from '../repositoryItem/RepositoryItem'

// Styled components
import { ListWrapper } from './repositoriesList.styles'

const RepositoriesList = ({ repositories, onChangePage, currentCount }) => {
  return (
    <ListWrapper>
      {repositories.map((repository) => (
        <RepositoryItem repository={repository.node} key={repository.node.id} />
      ))}
      {currentCount > 30 && <Pagination onChangePage={onChangePage} />}
    </ListWrapper>
  )
}

export default RepositoriesList
