import styled from 'styled-components'

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper-input {
    width: 85%;
    position: relative;
    margin-top: 16px;
    margin-bottom: 16px;

    .input {
      font-size: 15px;
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: 0.8px;
      border: none;
      display: block;
      width: 100%;
      height: 40px;
      background-color: transparent;
      padding: 0 5px;
      // theme
      color: ${props => props.theme.colors.black};
      font-family: ${props => props.theme.fonts.primary};
    }

    /*     
    input:disabled {
      // theme
      background: ${props => props.theme.colors.lightGrey};
    } 
    */

    input:-webkit-autofill {
      box-shadow: 0 0 0 30px white inset;
      -webkit-box-shadow: 0 0 0 30px white inset;
    }

    .focus-input,
    .focus-input-error {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      letter-spacing: 0.8px;
      // theme
      font-family: ${props => props.theme.fonts.primary};
      color: ${props => props.theme.colors.black};
    }

    .focus-input::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      transition: all 0.5s ease-in-out 0s;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      -moz-transition: all 0.5s;
      // theme
      background: ${props => props.theme.colors.secondary};
    }

    .focus-input-error::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      transition: all 0.5s ease-in-out 0s;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      -moz-transition: all 0.5s;
      // theme
      background: ${props => props.theme.colors.alert};
    }

    .focus-input::after,
    .focus-input-error::after {
      font-size: 15px;
      line-height: 1.2;
      content: attr(data-placeholder);
      display: block;
      width: 100%;
      position: absolute;
      top: 16px;
      left: 0;
      padding-left: 5px;
      transition: all 500ms ease-in-out 0s;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      -moz-transition: all 0.5s;
      // theme
      color: ${props => props.theme.colors.darkGrey};
    }

    .input:focus {
      outline: 0;
    }

    .input:focus + .focus-input::after,
    .input:focus + .focus-input-error::after {
      top: -15px;
    }

    .input:focus + .focus-input::before,
    .input:focus + .focus-input-error::before {
      width: 100%;
    }

    .has-value + .focus-input::after,
    .has-value + .focus-input-error::after {
      top: -15px;
    }

    .has-value + .focus-input::before,
    .has-value + .focus-input-error::before {
      width: 100%;
    }
  }

  .alignment-aux-div {
    display: flex;
    justify-content: space-between;
    width: 85%;

    .wrapper-input {
      width: 47.5%;
    }
  }

  .wrapper-login-btn {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0 20px 0;

    .login-btn {
      font-weight: 700;
      font-size: 15px;
      border: none;
      border-radius: 10px;
      line-height: 1.2;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      // theme
      font-family: ${props => props.theme.fonts.primary};
      color: ${props => props.theme.colors.white};
      background: -webkit-linear-gradient(
        to left,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary}
      );
      background: -o-linear-gradient(
        to left,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary}
      );
      background: -moz-linear-gradient(
        to left,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary}
      );
      background: linear-gradient(
        to left,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary}
      );
      background-size: 250%;
      background-position: left;
      transition: background-position 1s;
    }

    .login-btn:hover {
      cursor: pointer;
      background-position: right;
    }
  }
`

export { FormContainer }
