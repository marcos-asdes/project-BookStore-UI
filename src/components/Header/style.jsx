import styled from 'styled-components'

const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #d7d7d7;
  z-index: 1;
  background-color: #ffffff;

  .aux-div {
    display: flex;
    width: 90%;
    height: 60px;
    align-items: center;
    justify-content: space-around;
  
    .aux-buttons-div {
      display: flex;
      width: 20%;
      height: 65%;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
    }
  }
`

export {
  HeaderContainer
}