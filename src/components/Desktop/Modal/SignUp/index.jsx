import React, { useEffect, useContext } from 'react'

import Wrapper from '../Wrapper'
import ExitModal from '../ExitModal'
import OAuth from '../OAuth'
import Form from './Form'

import { LoginModalContext } from '../../../../contexts/LoginModalContext'
import { AuthContext } from '../../../../contexts/AuthContext'
import { RegisterContext } from '../../../../contexts/RegisterContext'

import { RegisterContainer, Title } from './style'

export default function SignUp() {
  const { modalSignUpIsVisible, clickListener, switchModal } =
    useContext(LoginModalContext)

  const { loading } = useContext(AuthContext)
  const { loadingRegister } = useContext(RegisterContext)

  useEffect(() => {
    if (modalSignUpIsVisible) {
      window.addEventListener('click', clickListener)
    }
  }, [])

  const isEnabledSwitchModal = () => {
    if (loading || loadingRegister) {
      return
    }
    switchModal()
  }

  return (
    <Wrapper>
      <RegisterContainer>
        <ExitModal />
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
            <h1 onClick={isEnabledSwitchModal}>Log In</h1>
          </div>
        </div>
      </RegisterContainer>
    </Wrapper>
  )
}

// criar form e style
