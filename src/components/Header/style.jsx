import styled from 'styled-components';

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
      width: 20%;
      height: 65%;
      /* background-color: red; */
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  width: 25%;
  max-width: 150px;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  a { 
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      width: 100%;
      max-width: 150px;
      height: 100%;
      max-height: 30px;
      cursor: pointer;
    }
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #d7d7d7;
  background-color: #ffffff;
  
  height: 65%;
  width: 35%;
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
    font-family: "Inter", sans-serif;
    letter-spacing: .1px;
    font-weight: 500;
    font-size: 16px;
    border: 0 none;
    border-radius: 15px;
    /* color: #57aae1; */
/*  background-image: url(./search-outline.png);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 10px;
    padding-left: 1.3em; */
  }
  // I'll fix this component, the internal image not show
`;

export {
  HeaderContainer,
  Logo,
  SearchBar
};