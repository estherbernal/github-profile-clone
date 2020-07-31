import React from 'react'

// Styled Components
import { Input } from '../styledComponents'
import {
  Arrow,
  FilterButton,
  SearchWrapper,
} from './repositoriesSearcher.styles'

const RepositoriesSearcher = ({ searchValue, setSearchValue }) => {
  const setValue = ({ target }) => {
    setSearchValue(target.value)
  }
  return (
    <SearchWrapper>
      <Input
        placeholder={'Find a repository...'}
        value={searchValue}
        onChange={setValue}
      />
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
