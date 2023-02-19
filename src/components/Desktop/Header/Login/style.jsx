import styled from 'styled-components'

const LoginButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  height: 50px;
  box-shadow: 0 0 0 0;
  outline: 0;
  border-radius: 2.5px;
  letter-spacing: 0.1px;
  font-weight: 700;
  line-height: 1em;
  font-size: 18px;
  cursor: pointer;
  flex-wrap: wrap;
  transition: all 100ms;
  -webkit-transition: all 100ms;
  -o-transition: all 100ms;
  -moz-transition: all 100ms;
  // theme
  border: 1px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primary};

  img {
    width: 20%;
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    // theme
    border: 1px solid ${props => props.theme.colors.primary};
  }

  /*
  @media screen and (max-width: 2400px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  } 
  */
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

const ProfileButton = styled.div`
  position: relative;
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  .profile-button {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 2.5px;
    padding: 3px 7px 3px 7px;
    cursor: pointer;
    transition: all 100ms;
    -webkit-transition: all 100ms;
    -o-transition: all 100ms;
    -moz-transition: all 100ms;
    // theme
    border: 1px solid ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primary};
  }

  .profile-aux {
    height: 14px;
    width: fit-content;
    letter-spacing: 0.1px;
    font-weight: 400;
    line-height: 1em;
    font-size: 14px;
    cursor: pointer;
  }

  .profile-name {
    height: 18px;
    letter-spacing: 0.1px;
    font-weight: 500;
    line-height: 1em;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    // text-overflow: ellipsis;
  }

  .profile-modal {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display: none;
    padding: 10px 7px 7px 5px;
    letter-spacing: 0.1px;
    font-weight: 400;
    line-height: 1em;
    font-size: 14px;
    // theme
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.secondary};
    border: 1px solid ${props => props.theme.colors.white};
  }

  .profile-button:hover {
    // theme
    border: 1px solid ${props => props.theme.colors.primary};
  }

  .profile-modal:hover {
    display: block;
    // theme
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }

  .profile-button:hover + .profile-modal {
    display: block;
    // theme
    border: 1px solid ${props => props.theme.colors.lightGrey};
  }

  .profile-modal-aux {
    display: flex;
    align-items: center;
    height: 20px;
    width: fit-content;
    margin: 2px 0 2px 0;
    cursor: pointer;
  }

  .profile-modal-aux:hover {
    text-decoration: underline;
    transition: all 100ms;
    -webkit-transition: all 100ms;
    -o-transition: all 100ms;
    -moz-transition: all 100ms;
    // theme
    color: ${props => props.theme.colors.black};
  }

  .profile-modal-spacer {
    width: 100%;
    height: 1px;
    margin: 5px 0 5px 0;
    display: flex;
    align-items: center;
    // theme
    background-color: ${props => props.theme.colors.mediumGrey};
  }
`

export { LoginButton, LoginButtonTablet, ProfileButton }
