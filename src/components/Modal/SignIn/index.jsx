import React from 'react'

import google_logo from '../../../assets/google_logo.png'
import facebook_logo from '../../../assets/facebook_logo.png'
import github_logo from '../../../assets/github_logo.png'

import styled from 'styled-components'

export default function SignIn() {
  return (
    <SignInWrapper>
      <LoginContainer>
        <div className='aux-div-exit-modal'>
          <div className='exit-modal-left-spacer'/>
          <div className='exit-modal'>x</div>
        </div>
        <div className='signin-modal-title'>Log in to BookStore</div>
        <OAuth>
          <div className='oauth-button'>
            <img src={google_logo} alt='google_logo'/>
          </div>
          <div className='oauth-button'>
            <img src={facebook_logo} alt='facebook-logo'/>
          </div>
          <div className='oauth-button'>
            <img src={github_logo} alt='github_logo'/>
          </div>
        </OAuth>
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer'/>
          <p>or</p>
          <div className='signin-modal-spacer'/>
        </div>
        <div>
          <input></input>
          <input></input>
        </div>
        <div>Forgot password?</div>
        <button>Log in</button>
        <div>
          <p>No account?</p>
          <p>Create one</p>
        </div>
      </LoginContainer>
    </SignInWrapper>
  )
}

const SignInWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.33);
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: .8em;
  outline: 0;

  .aux-div-exit-modal {
    width: 100%;
    height: 30px;
    display: flex;

    .exit-modal-left-spacer {
      width: calc(100% - 30px);
      height: 100%;
    }

    .exit-modal {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 15px;
      height: 15px;
      margin: 15px 15px 0 0;
      font-size: 15px;
      color: #8A8A8A;
      cursor: pointer;
    }
  }
 
  .signin-modal-title {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.1px;
    margin: 0 0 15px 0;
  }

  .aux-div-signin-modal-spacer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
      font-size: 1.25em;
      color: #2d2d2d;
    }

    .signin-modal-spacer {
      width: 40%;
      height: 1px;
      background-color: #EFEFEF;
    }
  }
`

const OAuth = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .oauth-button {
    width: 40px;
    height: 40px;
    background-color: #efefef;
    border-radius: 20px;
    margin: 0 10px 0 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 65%;
      height: 65%;
      border-radius: 20px;
      border: none;
      cursor: pointer;
    }
  }
`

/*   width: 30%;
  height: 100%;
  box-shadow: 0 0 0 0;
  border: 1px solid #209CEE;
  color: #209CEE;
  background-color: white;
  outline: 0;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  letter-spacing: .1px;
  font-size: .8em;
  font-weight: 500; */