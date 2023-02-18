import React, { useContext } from 'react'

import { LoginModalContext } from '../../../../contexts/LoginModalContext'

import window_close_icon from '../../../../assets/window_close_icon.png'
import { ExitModalContainer } from './style'

export default function ExitModal() {
  const { exitModal } = useContext(LoginModalContext)

  return (
    <ExitModalContainer onClick={exitModal}>
      <img src={window_close_icon} />
    </ExitModalContainer>
  )
}
