import styled from 'styled-components'

const LoginButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 35%;
  height: 45px;
  box-shadow: 0 0 0 0;
  outline: 0;
  border-radius: 17.5px;
  letter-spacing: 0.1px;
  font-weight: 700;
  line-height: 1em;
  cursor: pointer;
  flex-wrap: wrap;
  // theme
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primary};

  img {
    width: 20%;
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 2400px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`

const LoginButtonTablet = styled.div`
  display: none;

  @media screen and (min-width: 450px) and (max-width: 950px) {
    display: flex;
    width: 45px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
`

export { LoginButton, LoginButtonTablet }
