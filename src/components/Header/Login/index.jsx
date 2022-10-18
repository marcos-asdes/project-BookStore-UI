import React, { useState } from 'react'

import SignIn from '../../Modal/SignIn'

import login_icon from '../../../assets/profile_user.svg'

import { LoginButton, LoginButtonTablet } from './style.jsx'

export default function Login() {
  const [modalSignInIsVisible, setModalSignInIsVisible] = useState(false)

  return (
    <>
      <LoginButton onClick={() => setModalSignInIsVisible(true)}>
        Login
      </LoginButton>
      <LoginButtonTablet onClick={() => setModalSignInIsVisible(true)}>
        <img src={login_icon} alt='login' />
      </LoginButtonTablet>
      {modalSignInIsVisible && (
        <SignIn
          modalSignInIsVisible={modalSignInIsVisible}
          setModalSignInIsVisible={setModalSignInIsVisible}
        />
      )}
    </>
  )
}
