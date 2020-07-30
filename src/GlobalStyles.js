import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    outline: none;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 14px; 
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  h1{
    font-size: 26px;
    line-height: 1.25;
  }

  h2{
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #666;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  #root {
    height: 100%;
    
    a {
      text-decoration: none;
    }
  }
`

export default GlobalStyle
