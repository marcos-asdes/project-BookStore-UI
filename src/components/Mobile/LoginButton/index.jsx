import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { MobileContext } from '../../../contexts/MobileContext'

import login_icon from '../../../assets/profile_user.svg'

import { LoginButtonMobile } from './style'

export default function LoginButton() {
  const { mobileSignIn, setMobileSignIn } = useContext(MobileContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (mobileSignIn) {
      navigate('/sign-in')
    }
  }, [mobileSignIn])

  return (
    <LoginButtonMobile onClick={() => setMobileSignIn(true)}>
      <img src={login_icon} alt='login' />
    </LoginButtonMobile>
  )
}
