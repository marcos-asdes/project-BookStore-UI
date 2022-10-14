import styled from 'styled-components'

const AsideContainer = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 120px;
    margin-bottom: 15px;
    border-radius: 7px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    color: #209cee;

    p {
      letter-spacing: 0.5px;
    }

    ion-icon {
      font-size: 28px;
      margin-bottom: 10px;
    }
  }

  .icon-container:hover {
    cursor: pointer;
    background-color: #d7d7d7;
    color: #57aae1;
  }
`

export { AsideContainer }
