import React, { useState } from 'react'

import SignIn from '../../Modal/SignIn';

import { LoginButton } from './style.jsx';

export default function Login() {
  const [modalSignInIsVisible, setModalSignInIsVisible] = useState(false)

  return (
    <>
      <LoginButton onClick={() => setModalSignInIsVisible(true)}>
        Log in
      </LoginButton>
      { modalSignInIsVisible && (
        <SignIn modalSignInIsVisible={modalSignInIsVisible} setModalSignInIsVisible={setModalSignInIsVisible}/>
      )}
    </>
  )
}
