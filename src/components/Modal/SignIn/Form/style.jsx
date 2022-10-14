import styled from 'styled-components'

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper-input {
    width: 85%;
    position: relative;
    border-bottom: 2px solid #adadad;

    :first-child {
      margin-top: 10px;
      margin-bottom: 32.5px;
    }

    :nth-child(2) {
      margin-bottom: 20px;
    }

    :last-child {
      margin-bottom: 20px;
    }

    .input {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      color: #000;
      line-height: 1.2;
      letter-spacing: 0.8px;
      border: none;
      display: block;
      width: 100%;
      height: 40px;
      background-color: transparent;
      padding: 0 5px;
    }

    .focus-input,
    .focus-input-error {
      font-family: 'Inter', sans-serif;
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      color: #000;
      letter-spacing: 0.8px;
    }

    .focus-input::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #209cee;
    }

    .focus-input-error::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #ff0000;
    }

    .focus-input::after,
    .focus-input-error::after {
      font-size: 15px;
      color: #999999;
      line-height: 1.2;
      content: attr(data-placeholder);
      display: block;
      width: 100%;
      position: absolute;
      top: 16px;
      left: 0;
      padding-left: 5px;
      transition: all 400ms ease-in-out 0s;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
    }

    .input:focus {
      outline: 0;
    }

    .input:focus + .focus-input::after,
    .input:focus + .focus-input-error::after {
      top: -17px;
    }

    .input:focus + .focus-input::before,
    .input:focus + .focus-input-error::before {
      width: 100%;
    }

    .has-value + .focus-input::after,
    .has-value + .focus-input-error::after {
      top: -17px;
    }

    .has-value + .focus-input::before,
    .has-value + .focus-input-error::before {
      width: 100%;
    }
  }

  a {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    letter-spacing: 0.8px;
    font-size: 12.5px;
    width: 85%;
    display: flex;
    left: 0;
    justify-content: flex-start;
    align-items: flex-start;
    color: #209cee;
    cursor: pointer;
  }

  .wrapper-login-btn {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;
    margin-top: 25px;

    .login-btn {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 15px;
      border: none;
      border-radius: 10px;
      color: #fff;
      line-height: 1.2;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;

      background: -webkit-linear-gradient(to left, #209cee, #209cee);
      background: -o-linear-gradient(to left, #209cee, #209cee);
      background: -moz-linear-gradient(to left, #209cee, #209cee);
      background: linear-gradient(to left, #209cee, #209cee);
    }

    .login-btn:hover {
      cursor: pointer;
    }
  }
`

export { FormContainer }
