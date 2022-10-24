import styled from 'styled-components'

const WrapperContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // theme
  background-color: ${props => props.theme.colors.opacity};

  @media screen and (max-width: 450px) {
    display: none;
  }
`

export { WrapperContainer }
