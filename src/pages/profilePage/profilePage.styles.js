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

export const RepositoriesContent = styled.div`
  width: 75%;
`

export const Message = styled.div`
  margin-left: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e1e4e8 !important;
`
