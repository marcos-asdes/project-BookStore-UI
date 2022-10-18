import styled from 'styled-components'

const FooterContainer = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    z-index: 1;
    background-color: ${props => props.theme.colors.white};
    border-top: 1px solid ${props => props.theme.colors.terciary};
  }
`

export { FooterContainer }
