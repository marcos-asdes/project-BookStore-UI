import React from 'react'

import plus_icon from '../../../assets/plus_icon.svg'

import { PlaceAnAdContainer, PlaceAnAdTablet } from './style'

export default function PlaceAnAd() {
  return (
    <>
      <PlaceAnAdContainer>Place an ad</PlaceAnAdContainer>
      <PlaceAnAdTablet>
        <img src={plus_icon} alt='place an ad' />
      </PlaceAnAdTablet>
    </>
  )
}
