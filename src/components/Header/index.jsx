import React from 'react';
import { Link } from 'react-router-dom';

import PlaceAnAd from './PlaceAnAd';
import Login from './Login';

import bookstore_logotext from '../../assets/bookstore_logotext.png'
import search_outline from '../../assets/search_outline.png'
import { HeaderContainer, Logo, SearchBar, ImgSearchBar } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <div className='aux-div'>
        <Logo>
          <Link to='/'>
            <img src={bookstore_logotext} alt='BookStore'/>
          </Link>
        </Logo>
        <SearchBar>
          <ImgSearchBar style={{ backgroundImage: `url(${search_outline})` }}/>
          <input type='text' placeholder='Search by Title or Author'/>
        </SearchBar>
        <div className='aux-buttons-div'>
          <PlaceAnAd/>
          <Login/>
        </div>
      </div>
    </HeaderContainer>
  );
}
