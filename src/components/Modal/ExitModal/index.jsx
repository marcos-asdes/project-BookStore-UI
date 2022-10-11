import React from 'react'

import window_close_icon from '../../../assets/window_close_icon.png'
import { ExitModalContainer } from './style'

export default function ExitModal() {
  return (
    <ExitModalContainer>
      <img src={window_close_icon} />
    </ExitModalContainer>
  )
}

// inserir função de fechamento de modal
// colocar imagem no lugar do x
