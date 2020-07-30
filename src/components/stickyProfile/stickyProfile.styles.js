import styled from 'styled-components'

export const Sticky = styled.div`
  opacity: 0;
  width: 25%;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  transition: all 0.2s ease;
  img {
    width: 32px;
    border-radius: 50%;
  }
  p {
    margin: 8px;
    font-weight: 600;
  }
`
