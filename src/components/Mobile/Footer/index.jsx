import React from 'react'

import { PlaceAnAdMobile } from '../../Header/PlaceAnAd'
import { LoginButtonMobile } from '../../Header/Login'

import { FooterContainer, SearchButton } from './style'

import search_icon_footer from '../../../assets/search_icon_footer.svg'

export default function Footer() {
  return (
    <FooterContainer>
      <SearchButton>
        <img src={search_icon_footer} alt='search-icon' />
      </SearchButton>
      <div className='aux-buttons-div'>
        <PlaceAnAdMobile />
        <LoginButtonMobile />
      </div>
    </FooterContainer>
  )
}
