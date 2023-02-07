import React, { useEffect } from 'react'

import Wrapper from '../Wrapper'
import ExitModal from '../ExitModal'
import OAuth from '../OAuth'
import Form from './Form'

import { RegisterContainer, Title } from './style'

export default function SignUp(props) {
  const {
    modalSignUpIsVisible,
    setModalSignUpIsVisible,
    setModalSignInIsVisible
  } = props

  useEffect(() => {
    if (modalSignUpIsVisible) {
      window.addEventListener('click', clickListener)
    }
  }, [])

  function clickListener(e) {
    const classNameString = e.target.className
    if (typeof classNameString === 'string') {
      const classNameArray = classNameString.split(' ')
      if (classNameArray.includes('exit-modal')) {
        setModalSignUpIsVisible(false)
        window.removeEventListener('click', clickListener)
      }
    }
  }

  function switchModal() {
    setModalSignInIsVisible(true)
    setModalSignUpIsVisible(false)
  }

  return (
    <Wrapper>
      <RegisterContainer>
        <ExitModal
          clickListener={clickListener}
          setModalSignInIsVisible={setModalSignInIsVisible}
          setModalSignUpIsVisible={setModalSignUpIsVisible}
        />
        <Title>Create account</Title>
        <OAuth />
        <div className='aux-div-signup-modal-spacer'>
          <div className='signup-modal-spacer' />
          <p>or</p>
          <div className='signup-modal-spacer' />
        </div>
        <Form />
        <div className='redirect-login'>
          <div className='aux-inline-div'>
            <p>Already have an account?</p>
            <h1 onClick={switchModal}>Log In</h1>
          </div>
        </div>
      </RegisterContainer>
    </Wrapper>
  )
}

// criar form e style
