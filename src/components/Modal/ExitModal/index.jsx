import React from 'react'
import PropTypes from 'prop-types'

import window_close_icon from '../../../assets/window_close_icon.png'
import { ExitModalContainer } from './style'

export default function ExitModal(props) {
  const { setModalSignInIsVisible, clickListener } = props

  ExitModal.propTypes = {
    setModalSignInIsVisible: PropTypes.func,
    clickListener: PropTypes.func
  }

  function exitModal() {
    setModalSignInIsVisible(false)
    window.removeEventListener('click', clickListener)
  }

  return (
    <ExitModalContainer onClick={exitModal}>
      <img src={window_close_icon} />
    </ExitModalContainer>
  )
}
