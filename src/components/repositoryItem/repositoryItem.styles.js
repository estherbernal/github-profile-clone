import styled from 'styled-components'

export const Actions = styled.div`
  width: 16%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  svg {
    transform: scale(0.85);
    path {
      fill: #586069;
    }
  }
  button {
    font-size: 12px;
  }
`

export const Card = styled.div`
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid #e2e4e8;
  display: flex;

  h3 {
    font-size: 20;
    font-weight: 600;
    color: #0366d6;
  }
`

export const Column = styled.div`
  width: 100%;
`

export const ColorLabel = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: inline-block;
  margin-right: 3px;
`

export const Description = styled.div`
  margin-top: 8px;
`

export const DescriptionItem = styled.span`
  font-size: 12px;
  color: #586069;
  margin-right: 16px;
`
