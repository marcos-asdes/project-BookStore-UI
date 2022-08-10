import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <div className='aux-div'>
        <Logo>
          <Link to='/'>BookStore</Link>
        </Logo>
        <SearchBar>
          <input type='text' placeholder='Search by Title or Author'/>
        </SearchBar>
        <div className='aux-buttons-div'>
          <PlaceAnAd>Place an ad</PlaceAnAd>
          <Login>Log in</Login>
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #d7d7d7;
  z-index: 1;
  background-color: #ffffff;
  .aux-div {
    display: flex;
    width: 90%;
    height: 60px;
    align-items: center;
    justify-content: space-around;
    /* background-color: blue; */
    .aux-buttons-div {
      display: flex;
      width: 25%;
      height: 50%;
      /* background-color: red; */
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  width: 15%;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  a { 
    color: #209CEE; 
    font-family: 'Abhaya Libre', serif;
    font-weight: 700;
    font-size: 2em;
    letter-spacing: 0.1px;
  }
  a:hover {
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #d7d7d7;
  background-color: #ffffff;
  height: 65%;
  width: 30%;
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  input {
    height: 100%;
    width: 95%;
    padding-left: 5%;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    border: 0 none;
    border-radius: 15px;
/*  background-image: url(./search-outline.png);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 10px;
    padding-left: 1.3em; */
  }
  // I'll fix this component, the internal image not show
`;

const PlaceAnAd = styled.button`
  width: 60%;
  height: 100%;
  box-shadow: 0 0 0 0;
  border: 1px solid #209CEE;
  background-color: #209CEE;
  color: white;
  outline: 0;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-size: .8em;
  font-weight: 500;
`;

const Login = styled.button`
  width: 30%;
  height: 100%;
  box-shadow: 0 0 0 0;
  border: 1px solid #209CEE;
  color: #209CEE;
  outline: 0;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-size: .8em;
  font-weight: 500;
`;
