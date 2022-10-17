import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const StyledReset = createGlobalStyle`
  ${reset}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-weight: 300;
    letter-spacing: 1px;
    scrollbar-width: none; /* for Firefox */
    -ms-overflow-style: none; /* for IE, Edge */
    cursor: default;
    user-select: none;
    transition: all 0.5s ease-in-out 0s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }

  ::-webkit-scrollbar {
    display: none;
    appearance: none;
  }

  *.hidden {
    display: none;
  }

  *.disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  div.root {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`

export default StyledReset
