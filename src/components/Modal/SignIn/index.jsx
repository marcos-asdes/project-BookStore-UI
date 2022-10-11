import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import OAuth from '../OAuth'
import ExitModal from '../ExitModal'
import Form from './Form'

export default function SignIn() {
  return (
    <SignInWrapper>
      <LoginContainer>
        <ExitModal/>
        <Title>Log in to BookStore</Title>
        <OAuth/>
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer'/>
          <p>or</p>
          <div className='signin-modal-spacer'/>
        </div>
        <Form/>
        <div className='redirect-create-account'>
          <p>No account?</p>
          <Link to='/'>Create one</Link>
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
  width: 350px;
  height: fit-content;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: .8em;
  outline: 0;
  overflow: hidden;
  position: relative;
 
  .aux-div-signin-modal-spacer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
      font-size: 1.25em;
      color: #7B807E;
    }

    .signin-modal-spacer {
      width: 35%;
      height: 1px;
      background-color: #D7D7D7;
    }
  }


  .redirect-create-account {
    display: flex;
    margin: 12px 0 25px 22.5px;

    p {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      letter-spacing: .8px;
      color: #7B807E;
      font-size: 12.5px;
      height: 12.5px;
      width: 32%;
    }

    a {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      letter-spacing: .8px;
      font-size: 12.5px;
      width: 85%;
      display: flex;
      left: 0;
      justify-content: flex-start;
      align-items: flex-start;
      color: #209CEE;
      cursor: pointer;
    }
  }
`

const Title = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
  margin: 30px 0 30px 0;
  color: #000000;
`
