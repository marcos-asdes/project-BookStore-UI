import styled from 'styled-components'

const GridContainer = styled.section`
  width: calc(100% - 140px);
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 30px;
  margin-left: 140px;
  margin-right: 10px;
  justify-content: space-evenly;

  @media screen and (min-width: 450px) and (max-width: 950px) {
    width: 100%;
    margin: 0 20px 0 20px;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0 10px 0 10px;
    justify-content: space-evenly;
  }
`

export { GridContainer }
