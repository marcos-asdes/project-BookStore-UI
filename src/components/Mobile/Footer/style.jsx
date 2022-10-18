import styled from 'styled-components'

const FooterContainer = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    z-index: 1;
    background-color: ${props => props.theme.colors.white};
    border-top: 1px solid ${props => props.theme.colors.terciary};

    .aux-buttons-div {
      width: 200px;
      height: 45px;
    }
  }
`

const SearchButton = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }
`

export { FooterContainer, SearchButton }
