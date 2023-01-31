import React, { useEffect } from 'react'

import Wrapper from '../Wrapper'
import ExitModal from '../ExitModal'
import OAuth from '../OAuth'
import Form from './Form'

import { LoginContainer, Title } from './style'

export default function SignIn(props) {
  const {
    modalSignInIsVisible,
    setModalSignInIsVisible,
    setModalSignUpIsVisible
  } = props

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

  function switchModal() {
    setModalSignInIsVisible(false)
    setModalSignUpIsVisible(true)
  }

  return (
    <Wrapper>
      <LoginContainer>
        <ExitModal
          clickListener={clickListener}
          setModalSignInIsVisible={setModalSignInIsVisible}
        />
        <Title>Login to BookStore</Title>
        <OAuth />
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer' />
          <p>or</p>
          <div className='signin-modal-spacer' />
        </div>
        <Form />
        <div className='redirect-create-account'>
          <div className='inline-div'>
            <p>No account?</p>
            <h1 onClick={switchModal}>Create one</h1>
          </div>
        </div>
      </LoginContainer>
    </Wrapper>
  )
}
