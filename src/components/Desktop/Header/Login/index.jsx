import React, { useContext } from 'react'

import SignIn from '../../Modal/SignIn'
import SignUp from '../../Modal/SignUp'

import { LoginModalContext } from '../../../../contexts/LoginModalContext'

import login_icon from '../../../../assets/profile_user.svg'

import { LoginButton, LoginButtonTablet } from './style.jsx'

export default function Login() {
  const {
    modalSignInIsVisible,
    setModalSignInIsVisible,
    modalSignUpIsVisible
  } = useContext(LoginModalContext)

  return (
    <>
      <LoginButton onClick={() => setModalSignInIsVisible(true)}>
        Log In
      </LoginButton>
      <LoginButtonTablet onClick={() => setModalSignInIsVisible(true)}>
        <img src={login_icon} alt='login' />
      </LoginButtonTablet>
      {modalSignInIsVisible && !modalSignUpIsVisible && <SignIn />}
      {!modalSignInIsVisible && modalSignUpIsVisible && <SignUp />}
    </>
  )
}
