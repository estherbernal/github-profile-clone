import styled from 'styled-components'

export const TabsWrapper = styled.nav`
  width: 75%;
  height: 100%;
  overflow-x: auto;
  display: flex;
`

export const Tab = styled.a`
  cursor: pointer;
  padding: 16px;
  font-size: 14px;
  line-height: 30px;
  color: #1b1f23;
  text-align: center;
  white-space: nowrap;
  background-color: initial;
  border: 0;
  border-bottom: 2px solid rgba(209, 213, 218, 0);
  transition: border-bottom-color 0.36s ease-in;

  font-weight: ${(props) => (props.active ? '600' : '400')};
  border-bottom-color: ${(props) => (props.active ? '#f9826c' : 'none')};

  svg {
    margin: 0 8px;
    position: relative;
    top: 3px;
    path {
      fill: ${(props) => (props.active ? '#1b2025' : '#949da5')};
    }
  }
  span {
    display: inline-block;
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #24292e;
    text-align: center;
    background-color: rgba(209, 213, 218, 0.5);
    border: 1px solid transparent;
    border-radius: 2em;
  }
`
