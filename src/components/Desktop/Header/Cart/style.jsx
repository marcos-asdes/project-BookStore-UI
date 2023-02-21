import styled from 'styled-components'

const CartContainer = styled.div`
  height: 50px;
  width: fit-content;
  display: flex;
  align-items: center;
  transition: all 100ms;
  -webkit-transition: all 100ms;
  -o-transition: all 100ms;
  -moz-transition: all 100ms;
  padding: 0px 7px 0px 7px;
  border-radius: 2.5px;
  cursor: pointer;
  // theme
  border: 1px solid ${props => props.theme.colors.white};

  &:hover {
    // theme
    border: 1px solid ${props => props.theme.colors.primary};
  }

  .cart-aux {
    display: flex;
    align-items: flex-end;

    &:hover {
      cursor: pointer;
    }

    img {
      height: 40px;
    }

    img:hover {
      cursor: pointer;
    }

    span {
      height: 20px;
      font-size: 16px;
      font-weight: 500;
      line-height: 1em;
      letter-spacing: 0.1px;
      // theme
      color: ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.fonts.primary};
    }

    span:hover {
      cursor: pointer;
    }
  }
`

export { CartContainer }
