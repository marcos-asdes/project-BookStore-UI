import React from 'react'

import plus_icon from '../../../assets/plus_icon.svg'

import { PlaceAnAdContainer, PlaceAnAdMobile } from './style'

export default function PlaceAnAd() {
  return (
    <>
      <PlaceAnAdContainer>Place an ad</PlaceAnAdContainer>
      <PlaceAnAdMobile>
        <img src={plus_icon} alt='place an ad' />
      </PlaceAnAdMobile>
    </>
  )
}

export { PlaceAnAdMobile }

// // refatorar componentes mobile login button e placeAnAd
