import React, { useState } from 'react'

import SignIn from '../../Modal/SignIn'
import SignUp from '../../Modal/SignUp'

import login_icon from '../../../../assets/profile_user.svg'

import { LoginButton, LoginButtonTablet } from './style.jsx'

export default function Login() {
  const [modalSignInIsVisible, setModalSignInIsVisible] = useState(false)
  const [modalSignUpIsVisible, setModalSignUpIsVisible] = useState(false)

  return (
    <>
      <LoginButton onClick={() => setModalSignInIsVisible(true)}>
        Log In
      </LoginButton>
      <LoginButtonTablet onClick={() => setModalSignInIsVisible(true)}>
        <img src={login_icon} alt='login' />
      </LoginButtonTablet>
      {modalSignInIsVisible && !modalSignUpIsVisible && (
        <SignIn
          modalSignInIsVisible={modalSignInIsVisible}
          setModalSignInIsVisible={setModalSignInIsVisible}
          setModalSignUpIsVisible={setModalSignUpIsVisible}
        />
      )}
      {!modalSignInIsVisible && modalSignUpIsVisible && (
        <SignUp
          modalSignUpIsVisible={modalSignUpIsVisible}
          setModalSignInIsVisible={setModalSignInIsVisible}
          setModalSignUpIsVisible={setModalSignUpIsVisible}
        />
      )}
    </>
  )
}
