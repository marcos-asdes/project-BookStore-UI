import styled from 'styled-components'

const PlaceAnAdContainer = styled.button`
  width: 55%;
  height: 45px;
  box-shadow: 0 0 0 0;
  outline: 0;
  border-radius: 17.5px;
  letter-spacing: 0.1px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  // theme
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primary};

  @media screen and (max-width: 2400px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`

const PlaceAnAdTablet = styled.div`
  display: none;

  @media screen and (min-width: 450px) and (max-width: 950px) {
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

export { PlaceAnAdContainer, PlaceAnAdTablet }
