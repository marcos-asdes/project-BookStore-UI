import styled from 'styled-components'

const OAuthContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  .oauth-button {
    width: 40px;
    height: 40px;
    background-color: #EFEFEF;
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

export {
  OAuthContainer
};
