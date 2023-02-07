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
  height: 45px;
  width: 45%;
  // theme
  border: 1px solid ${props => props.theme.colors.terciary};
  background-color: ${props => props.theme.colors.white};

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
    letter-spacing: 0.1px;
    font-weight: 400;
    font-size: 16px;
    border: 0 none;
    border-radius: 15px;
    // theme
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.black};
  }

  input::placeholder {
    // theme
    color: ${props => props.theme.colors.terciary};
  }

  @media screen and (min-width: 450px) and (max-width: 950px) {
    width: 50%;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`

export { ImgSearchBar, SearchBarContainer }
