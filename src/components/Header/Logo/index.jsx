import React from 'react'
import { Link } from 'react-router-dom'

import bookstore_logotext from '../../assets/bookstore_logotext.png'

import { LogoContainer } from './style'

export default function Logo() {
  return (
    <LogoContainer>
      <Link to='/'>
        <img src={bookstore_logotext} alt='BookStore'/>
      </Link>
    </LogoContainer>
  )
}
