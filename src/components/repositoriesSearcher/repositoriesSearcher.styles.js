import styled from 'styled-components'
import { Button } from '../styledComponents'

export const Arrow = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: '';
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
  color: #4f5356;
`

export const FilterButton = styled(Button)`
  color: #7a7c80;
  width: fit-content;
  strong {
    font-weight: 400;
    color: black;
    margin: 0 5px;
  }
  &:last-child {
    margin-right: 0;
  }
`

export const SearchWrapper = styled.div`
  padding: 16px 0;
  margin: 0 16px;
  border-bottom: 1px solid #e2e4e8;
  display: flex;
  > * {
    margin-right: 16px;
  }
`
