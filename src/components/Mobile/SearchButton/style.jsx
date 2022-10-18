import styled from 'styled-components'

const SearchButtonMobile = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: flex;
    width: 45px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
`

export { SearchButtonMobile }
