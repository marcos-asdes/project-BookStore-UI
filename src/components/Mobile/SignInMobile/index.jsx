import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { MobileContext } from '../../../contexts/MobileContext'

import Form from './Form'
import OAuth from '../../Modal/OAuth'

import return_icon from '../../../assets/return_icon.svg'

import { SignInMobileContainer, MobileTitle, ReturnButton } from './style'

export default function SignInMobile() {
  const { mobileSignIn, setMobileSignIn } = useContext(MobileContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!mobileSignIn) {
      navigate('/')
    }
  }, [mobileSignIn])

  console.log(mobileSignIn)
  return (
    <>
      {mobileSignIn && (
        <SignInMobileContainer>
          <ReturnButton onClick={() => setMobileSignIn(false)}>
            <img src={return_icon} alt='return'></img>
          </ReturnButton>
          <MobileTitle>Login to BookStore</MobileTitle>
          <OAuth />
          <div className='aux-div-signin-modal-spacer'>
            <div className='signin-modal-spacer' />
            <p>or</p>
            <div className='signin-modal-spacer' />
          </div>
          <Form />
          <div className='redirect-create-account'>
            <p>No account?</p>
            <Link to='/'>Create one</Link>
          </div>
        </SignInMobileContainer>
      )}
    </>
  )
}
