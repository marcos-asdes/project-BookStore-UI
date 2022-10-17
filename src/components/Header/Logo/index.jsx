import React from 'react'
import { Link } from 'react-router-dom'

import bookstore_logo from '../../../assets/logo_bookstore_1200dpi.svg'

import { LogoContainer } from './style'

export default function Logo() {
  return (
    <LogoContainer>
      <Link to='/'>
        <img src={bookstore_logo} alt='BookStore' />
      </Link>
    </LogoContainer>
  )
}
