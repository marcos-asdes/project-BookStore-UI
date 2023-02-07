import styled from 'styled-components'

const LogoContainer = styled.div`
  max-width: 200px;
  min-width: 200px;
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

  @media screen and (min-width: 450.1px) and (max-width: 950px) {
    width: 10%;
    min-height: 45px;
    min-width: 45px;

    img {
      width: 100%;
      height: 100%;
      max-height: 45px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 450px) {
    width: 80%;
    max-width: 200px;

    img {
      width: 100%;
      height: 100%;
      max-height: 45px;
      cursor: pointer;
    }
  }
`

export { LogoContainer }
