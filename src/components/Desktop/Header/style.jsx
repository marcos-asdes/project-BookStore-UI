import styled from 'styled-components'

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  // theme
  background-color: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.terciary};

  .aux-div {
    display: flex;
    width: 90%;
    height: 60px;
    align-items: center;
    justify-content: space-evenly;

    .aux-profile-div {
      display: flex;
      min-width: 100px;
      height: fit-content;
      align-items: center;
      justify-content: center;
      gap: 10px;

      @media screen and (max-width: 450px) {
        display: none;
      }
    }
  }
`

export { HeaderContainer }
