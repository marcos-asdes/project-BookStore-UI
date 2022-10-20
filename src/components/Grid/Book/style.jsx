import styled from 'styled-components'

const BookContainer = styled.div`
  width: 120px;
  height: fit-content;
  font-family: ${props => props.theme.fonts.secondary};
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.4em;

  h1 {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    letter-spacing: 0.1px;
    margin-top: 5px;
    cursor: pointer;
  }

  h2 {
    font-weight: 300;
    letter-spacing: 0.1px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }

  h3 {
    font-size: 14px;
    letter-spacing: 0.1px;
    cursor: pointer;
    font-weight: 500;
  }

  img {
    align-self: center;
    width: 100%;
    height: 150px;
    min-width: 100px;
    min-height: 125px;
    cursor: pointer;
    border-radius: 7.5px;
    margin-bottom: 2.5px;
  }

  @media screen and (max-width: 450px) {
    width: 160px;

    h1,
    h3 {
      font-size: 16px;
    }

    h2 {
      font-size: 14px;
    }

    img {
      height: 200px;
    }
  }
`

export { BookContainer }
