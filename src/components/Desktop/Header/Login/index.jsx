import React, { useContext } from 'react'

import SignIn from '../../Modal/SignIn'
import SignUp from '../../Modal/SignUp'

import { LoginModalContext } from '../../../../contexts/LoginModalContext'
import { AuthContext } from '../../../../contexts/AuthContext'

import login_icon from '../../../../assets/profile_user.svg'
import arrow_down from '../../../../assets/arrow_down.svg'

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
            <div className='profile-aux'>
              <span className='profile-text'>Hello,</span>
              <span className='profile-name'>{user.name}</span>
            </div>
            <img src={arrow_down} alt='arrow_down' />
          </span>
          <div className='profile-modal'>
            <div className='profile-modal-aux'>Your account</div>
            <div className='profile-modal-aux'>Your orders</div>
            <div className='profile-modal-spacer' />
            <div className='profile-modal-aux' onClick={logout}>
              Log out
            </div>
          </div>
        </ProfileButton>
      )}
    </>
  )
}
