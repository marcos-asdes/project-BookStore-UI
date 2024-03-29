import styled from 'styled-components'

const LoginContainer = styled.div`
  width: 350px;
  height: fit-content;
  border-radius: 20px;
  font-size: 0.8em;
  outline: 0;
  overflow: hidden;
  position: relative;
  // theme
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primary};

  .aux-div-signin-modal-spacer {
    width: 100%;
    height: 20px;
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
    width: 100%;
    justify-content: center;
    margin-bottom: 25px;

    .aux-inline-div {
      width: 85%;
      display: inline-flex;

      p {
        font-weight: 500;
        letter-spacing: 0.8px;
        font-size: 12.5px;
        height: 12.5px;
        margin-right: 10px;
        // theme
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.darkGrey};
      }

      h1 {
        font-weight: 500;
        letter-spacing: 0.8px;
        font-size: 12.5px;
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
  }
`

const Title = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22.5px;
  font-weight: 500;
  letter-spacing: 0.1px;
  margin: 30px 0 20px 0;
  // theme
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.primary};
`

export { LoginContainer, Title }
