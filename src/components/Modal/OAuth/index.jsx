import React from 'react'

import { OAuthContainer } from './style'

import google_logo from '../../../assets/google_logo.png'
import facebook_logo from '../../../assets/facebook_logo.png'
import github_logo from '../../../assets/github_logo.png'

export default function OAuth() {
  return (
    <OAuthContainer>
          <div className='oauth-button'>
            <img src={google_logo} alt='google_logo'/>
          </div>
          <div className='oauth-button'>
            <img src={facebook_logo} alt='facebook-logo'/>
          </div>
          <div className='oauth-button'>
            <img src={github_logo} alt='github_logo'/>
          </div>
    </OAuthContainer>
  )
}

// criar toda lógica de oauth para as 3 formas, front e back
// trocar as imagens de png para svg, melhora a qualidade
