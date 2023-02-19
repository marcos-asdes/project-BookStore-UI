import React, { useContext } from 'react'

import SignIn from '../../Modal/SignIn'
import SignUp from '../../Modal/SignUp'

import { LoginModalContext } from '../../../../contexts/LoginModalContext'
import { AuthContext } from '../../../../contexts/AuthContext'

import login_icon from '../../../../assets/profile_user.svg'

import { LoginButton, LoginButtonTablet, ProfileButton } from './style.jsx'

export default function Login() {
  const {
    modalSignInIsVisible,
    setModalSignInIsVisible,
    modalSignUpIsVisible
  } = useContext(LoginModalContext)

  const { user, logout } = useContext(AuthContext)

  return (
    <>
      {!user ? (
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
      ) : (
        <ProfileButton>
          <span className='profile-button'>
            <span className='profile-aux'>Hello,</span>
            <span className='profile-name'>{user.name}</span>
          </span>
          <div className='profile-modal'>
            <div className='profile-your-orders'>Your orders</div>
            <div className='profile-logout' onClick={logout}>
              Log out
            </div>
          </div>
        </ProfileButton>
      )}
    </>
  )
}
