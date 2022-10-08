import React from 'react'

import SignIn from '../../Modal/SignIn';

import { LoginButton } from './style.jsx';

export default function Login() {
  return (
    <>
      <LoginButton>
        Log in
      </LoginButton>
      <SignIn />
    </>
  )
}

// ajustar posição do SignIn para dentro do botão
