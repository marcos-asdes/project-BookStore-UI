import React from 'react'

import PlaceAnAdMobile from '../PlaceAnAdButton'
import LoginButtonMobile from '../LoginButton'
import SearchButtonMobile from '../SearchButton'

import { FooterContainer } from './style'

export default function Footer() {
  return (
    <FooterContainer>
      <SearchButtonMobile />
      <PlaceAnAdMobile />
      <LoginButtonMobile />
    </FooterContainer>
  )
}
