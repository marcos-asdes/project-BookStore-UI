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
  border-bottom: 1px solid ${props => props.theme.colors.quaternary};

  .aux-div {
    display: flex;
    width: 90%;
    height: 60px;
    align-items: center;
    justify-content: space-around;

    .aux-buttons-div {
      display: flex;
      width: 20%;
      min-width: 100px;
      height: 45px;
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
