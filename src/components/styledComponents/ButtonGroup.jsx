import styled from 'styled-components'

export const ButtonGroup = styled.div`
  display: flex;
  border-left: 0;
  justify-content: center;
  button {
    border-radius: 0;
    &:first-child {
      border-radius: 6px 0 0 6px;
    }
    &:last-child {
      border-left: 1px;
      border-radius: 0 6px 6px 0;
    }
  }
`
