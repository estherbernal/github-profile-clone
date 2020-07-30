import React from 'react'

// Styled components
import { Button, ButtonGroup } from '../styledComponents'
import { PaginationWrapper } from './pagination.styles'

const Pagination = () => {
  return (
    <PaginationWrapper>
      <ButtonGroup>
        <Button disabled>Previous</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </PaginationWrapper>
  )
}

export default Pagination
