import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  margin: 16px 0 32px 0;
  button {
    width: fit-content;
    color: #0966d6;

    &:disabled {
      color: rgba(3, 102, 214, 0.5);
      cursor: default;
    }
  }
`
