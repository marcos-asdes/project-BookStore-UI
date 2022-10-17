import React from 'react'
import { Link } from 'react-router-dom'

import bookstore_logo from '../../../assets/logo_bookstore_1200dpi.svg'
import bookstore_logo_image from '../../../assets/logo_bookstore_image_200px.svg'

import { LogoContainer } from './style'

export default function Logo() {
  return (
    <LogoContainer>
      <Link to='/'>
        <picture>
          <source
            media='(min-width: 450.1px) and (max-width: 950px)'
            srcSet={bookstore_logo_image}
          />
          <img src={bookstore_logo} alt='BookStore' />
        </picture>
      </Link>
    </LogoContainer>
  )
}
