import styled from 'styled-components'

const LogoContainer = styled.div`
  width: 25%;
  max-width: 200px;
  height: 65%;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 200px;
      height: 100%;
      max-height: 45px;
      cursor: pointer;
    }
  }
`

export { LogoContainer }
