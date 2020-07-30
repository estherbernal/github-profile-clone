import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  h1 {
    margin-bottom: 8px;
  }
  p {
    margin-bottom: 16px;
    a {
      color: #0465d6;
    }
  }
`
export const ErrorMessage = styled.div`
  margin-top: 16px;
  color: #f47e7e;
`

export const Form = styled.form`
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-left: 8px;
      white-space: nowrap;
    }
  }
`
