import styled from 'styled-components'

const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 125px;
  margin-bottom: 15px;
  border-radius: 7px;
  font-weight: 500;
  font-size: 14px;
  // theme
  color: ${props => props.theme.colors.terciary};
  font-family: ${props => props.theme.fonts.primary};

  p {
    letter-spacing: 0.5px;
  }

  ion-icon {
    font-size: 35px;
    margin-bottom: 10px;
  }

  &:hover {
    cursor: pointer;
    // theme
    background-color: ${props => props.theme.colors.lightGrey};
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`

export { AsideContainer, IconContainer }
