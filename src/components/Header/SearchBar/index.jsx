import React from 'react'

import search_outline from '../../../assets/search_outline.svg'

import { SearchBarContainer, ImgSearchBar } from './style'

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <ImgSearchBar style={{ backgroundImage: `url(${search_outline})` }} />
      <input type='text' placeholder='Search by Title or Author' />
    </SearchBarContainer>
  )
}
