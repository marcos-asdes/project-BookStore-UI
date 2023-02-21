import React, { useEffect, useContext } from 'react'

import Wrapper from '../Wrapper'
import ExitModal from '../ExitModal'
import OAuth from '../OAuth'
import Form from './Form'

import { LoginModalContext } from '../../../../contexts/LoginModalContext'
import { AuthContext } from '../../../../contexts/AuthContext'

import { LoginContainer, Title } from './style'

export default function SignIn() {
  const { modalSignInIsVisible, clickListener, switchModal } =
    useContext(LoginModalContext)

  const { loading } = useContext(AuthContext)

  useEffect(() => {
    if (modalSignInIsVisible) {
      window.addEventListener('click', clickListener)
    }
  }, [])

  const isEnabledSwitchModal = () => {
    if (loading) {
      return
    }
    switchModal()
  }

  return (
    <Wrapper>
      <LoginContainer>
        <ExitModal />
        <Title>Login to BookStore</Title>
        <OAuth />
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer' />
          <p>or</p>
          <div className='signin-modal-spacer' />
        </div>
        <Form />
        <div className='redirect-create-account'>
          <div className='aux-inline-div'>
            <p>No account?</p>
            <h1 onClick={isEnabledSwitchModal}>Create one</h1>
          </div>
        </div>
      </LoginContainer>
    </Wrapper>
  )
}
