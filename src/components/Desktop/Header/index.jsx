import React from 'react'

import Logo from './Logo'
import SearchBar from './SearchBar'
/* import PlaceAnAd from './PlaceAnAd' */
import Login from './Login'

import { HeaderContainer } from './style'

export default function Header() {
  return (
    <HeaderContainer>
      <div className='aux-div'>
        <Logo />
        <SearchBar />
        <div className='aux-profile-div'>
          {/* <PlaceAnAd /> */}
          <Login />
        </div>
      </div>
    </HeaderContainer>
  )
}
