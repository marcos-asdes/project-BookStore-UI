import React from 'react'

import window_close_icon from '../../../../assets/window_close_icon.png'
import { ExitModalContainer } from './style'

export default function ExitModal(props) {
  const { setModalSignInIsVisible, setModalSignUpIsVisible, clickListener } =
    props

  function exitModal() {
    setModalSignInIsVisible(false)
    setModalSignUpIsVisible(false)
    window.removeEventListener('click', clickListener)
  }

  return (
    <ExitModalContainer onClick={exitModal}>
      <img src={window_close_icon} />
    </ExitModalContainer>
  )
}
