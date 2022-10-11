import React from 'react'

import { ExitModalContainer } from './style'

export default function ExitModal() {
  return (
    <ExitModalContainer>
      <div className='exit-modal-left-spacer' />
      <div className='exit-modal' onClick={() => console.log('colocar função de saída aqui')}>
        x
      </div>
    </ExitModalContainer>
  )
}

// inserir função de fechamento de modal
// corrigir div do modal
