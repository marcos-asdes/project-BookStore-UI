import styled from 'styled-components'

const OAuthContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px 0;

  .oauth-button {
    width: 40px;
    height: 40px;
    background-color: #efefef;
    border-radius: 20px;
    margin: 0 10px 0 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 65%;
      height: 65%;
      border-radius: 20px;
      border: none;
      cursor: pointer;
    }
  }
`

export { OAuthContainer }
