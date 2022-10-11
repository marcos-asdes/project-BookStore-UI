import styled from 'styled-components'

const ExitModalContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;

  .exit-modal-left-spacer {
    width: calc(100% - 30px);
    height: 100%;
  }

  .exit-modal {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 15px;
    height: 15px;
    margin: 15px 15px 0 0;
    font-size: 15px;
    color: #7B807E;
    cursor: pointer;
  }
  
`

export {
  ExitModalContainer
}