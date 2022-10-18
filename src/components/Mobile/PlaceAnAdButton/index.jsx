import React from 'react'

import plus_icon from '../../../assets/plus_icon.svg'

import { PlaceAnAdButtonMobile } from './style'

export default function PlaceAnAdButton() {
  return (
    <PlaceAnAdButtonMobile
      onClick={() => console.log('ativar função de place an ad mobile')}
    >
      <img src={plus_icon} alt='place-an-ad' />
    </PlaceAnAdButtonMobile>
  )
}
