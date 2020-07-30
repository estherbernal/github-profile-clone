import styled from 'styled-components'

export const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 32px;
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  border: 1px solid;
  border-radius: 6px;
  color: ${(props) => (props.color === 'dark' ? '#cfd0d1' : '#24292e')};
  border-color: ${(props) => (props.color === 'dark' ? '#3f4448' : '#e1e4e8')};
  background-color: ${(props) => (props.color === 'dark' ? '#3f4448' : '#fff')};
  ::placeholder {
    color: ${(props) => (props.color === 'dark' ? '#cfd0d1' : '#7a7c80')};
    opacity: 1;
  }
`
