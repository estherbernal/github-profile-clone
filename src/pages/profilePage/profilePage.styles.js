import styled from 'styled-components'

import { Container } from '../../components/styledComponents'

export const Profile = styled(Container)`
  display: flex;
`

export const LoadingWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFound = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-top: 16px;
    font-weight: 600;
  }
  a {
    color: #0366d6;
  }
`
