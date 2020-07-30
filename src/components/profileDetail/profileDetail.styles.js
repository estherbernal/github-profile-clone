import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 25%;
  position: relative;
  top: -32px;
  padding: 0 16px;
`

export const AvatarWrapper = styled.div`
  position: relative;
  z-index: 5;
`

export const Avatar = styled.img`
  width: 100%;
  border: 1px solid #e1e4e8;
  border-radius: 50%;
`
export const Connections = styled.div`
  color: #586069;
  margin: 16px 0;
  display: flex;
  justify-content: flex-start;
  flex-flow: wrap;

  svg {
    path {
      fill: #586069;
    }
  }
  span {
    margin: 0 3px;
    strong {
      color: black;
      font-weight: 600;
    }
    ::after {
      margin-left: 3px;
      content: '·';
    }
    :last-child::after {
      content: '';
    }
  }
`

export const UserStatus = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 50%;
  background-color: white;
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5%;
  top: 75%;
`

export const Headings = styled.div`
  padding: 16px 0;
  p {
    padding-top: 16px;
  }
`

export const MoreInfo = styled.div`
  color: #586069;
  p {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
      path {
        fill: #586069;
      }
    }
  }
`
