import React from 'react'

import login_icon from '../../../assets/profile_user.svg'

import { LoginButtonMobile } from './style'

export default function LoginButton() {
  return (
    <LoginButtonMobile
      onClick={() => console.log('ativar função de login mobile')}
    >
      <img src={login_icon} alt='login' />
    </LoginButtonMobile>
  )
}
