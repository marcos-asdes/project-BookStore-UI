import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import OAuth from '../OAuth'
import ExitModal from '../ExitModal'
import Form from './Form'

import { SignInWrapper, LoginContainer, Title } from './style'

export default function SignIn(props) {
  const { modalSignInIsVisible, setModalSignInIsVisible } = props

  SignIn.propTypes = {
    modalSignInIsVisible: PropTypes.bool,
    setModalSignInIsVisible: PropTypes.func
  }

  useEffect(() => {
    if (modalSignInIsVisible) {
      window.addEventListener('click', clickListener)
    }
  }, [])

  function clickListener(e) {
    const classNameString = e.target.className
    if (typeof classNameString === 'string') {
      const classNameArray = classNameString.split(' ')
      if (classNameArray.includes('exit-modal')) {
        setModalSignInIsVisible(false)
        window.removeEventListener('click', clickListener)
      }
    }
  }

  return (
    <SignInWrapper className='exit-modal'>
      <LoginContainer>
        <ExitModal clickListener={clickListener} 
        setModalSignInIsVisible={setModalSignInIsVisible}/>
        <Title>Log in to BookStore</Title>
        <OAuth/>
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer'/>
          <p>or</p>
          <div className='signin-modal-spacer'/>
        </div>
        <Form/>
        <div className='redirect-create-account'>
          <p>No account?</p>
          <Link to='/'>Create one</Link>
        </div>
      </LoginContainer>
    </SignInWrapper>
  )
}
