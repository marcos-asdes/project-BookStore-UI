import React from 'react'

import search_icon_footer from '../../../assets/search_icon_footer.svg'

import { SearchButtonMobile } from './style'

export default function SearchButton() {
  return (
    <SearchButtonMobile
      onClick={() => console.log('ativar função de search mobile')}
    >
      <img src={search_icon_footer} alt='search' />
    </SearchButtonMobile>
  )
}
