import styled from 'styled-components'

const ImgSearchBar = styled.div`
  width: 25px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 25px;
  margin: 0 0 0 7.5px;
`

const SearchBarContainer = styled.div`
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
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.1px;
    font-weight: 500;
    font-size: 16px;
    border: 0 none;
    border-radius: 15px;
  }
`

export { ImgSearchBar, SearchBarContainer }
