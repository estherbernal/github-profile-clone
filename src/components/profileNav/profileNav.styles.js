import styled from 'styled-components'
import { Container } from '../styledComponents'

export const NavWrapper = styled.div`
  margin-top: 16px;
  padding: 8px 24px 0;
  border-bottom: 1px solid #e1e4e8;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
`

export const FlexContainer = styled(Container)`
  display: flex;
`
