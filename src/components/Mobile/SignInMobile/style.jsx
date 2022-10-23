import styled from 'styled-components'

const SignInMobileContainer = styled.section`
  width: 100vw;
  height: 100vh;
  font-size: 0.8em;
  outline: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  // theme
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primary};

  .aux-div-signin-modal-spacer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
      font-size: 1.25em;
      // theme
      color: ${props => props.theme.colors.darkGrey};
    }

    .signin-modal-spacer {
      width: 32.5%;
      height: 2px;
      // theme
      background-color: ${props => props.theme.colors.mediumGrey};
    }
  }

  .redirect-create-account {
    display: flex;
    margin: 12px 0 25px 22.5px;

    p {
      font-weight: 500;
      letter-spacing: 0.8px;
      font-size: 12.5px;
      height: 12.5px;
      width: 32%;
      // theme
      font-family: ${props => props.theme.fonts.primary};
      color: ${props => props.theme.colors.darkGrey};
    }

    a {
      font-weight: 500;
      letter-spacing: 0.8px;
      font-size: 12.5px;
      width: 85%;
      display: flex;
      left: 0;
      justify-content: flex-start;
      align-items: flex-start;
      cursor: pointer;
      // theme
      color: ${props => props.theme.colors.secondary};
      font-family: ${props => props.theme.fonts.primary};
    }
  }
`

const MobileTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22.5px;
  font-weight: 500;
  letter-spacing: 0.1px;
  margin: 30px 0 30px 0;
  // theme
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.primary};
`

const ReturnButton = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  margin: 25px 0 0 25px;

  img {
    width: 100%;
    height: 100%;
  }
`

export { SignInMobileContainer, MobileTitle, ReturnButton }
