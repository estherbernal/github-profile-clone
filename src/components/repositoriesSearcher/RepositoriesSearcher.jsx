import React from 'react'

// Styled Components
import { Input } from '../styledComponents'
import {
  Arrow,
  FilterButton,
  SearchWrapper,
} from './repositoriesSearcher.styles'

const RepositoriesSearcher = () => {
  return (
    <SearchWrapper>
      <Input placeholder={'Find a repository...'} />
      <FilterButton>
        Type: <strong>All</strong>
        <Arrow />
      </FilterButton>
      <FilterButton>
        Language: <strong>All</strong>
        <Arrow />
      </FilterButton>
    </SearchWrapper>
  )
}

export default RepositoriesSearcher
