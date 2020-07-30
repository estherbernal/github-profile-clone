import styled from 'styled-components'

export const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: ' ';
    display: block;
    width: 32px;
    height: 32px;
    margin: 8px;
    border-radius: 50%;
    border: 2px solid #cfd0d1;
    border-color: #cfd0d1 transparent #cfd0d1 transparent;
    animation: animation 1.2s linear infinite;
  }

  @keyframes animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
