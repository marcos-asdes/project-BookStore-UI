import React from 'react'

import { WrapperContainer } from './style'

export default function Wrapper({ children }) {
  return <WrapperContainer className='exit-modal'>{children}</WrapperContainer>
}
