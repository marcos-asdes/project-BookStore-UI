import React from 'react'
/* import { Link } from 'react-router-dom' */

import shopping_cart from '../../../../assets/shopping_cart.svg'

import { CartContainer } from './style'

export default function Cart() {
  return (
    <CartContainer>
      {/* <Link to='/your-cart'> */}
      <div className='cart-aux'>
        <img src={shopping_cart} alt='cart' />
        <span>Cart</span>
      </div>
      {/* </Link> */}
    </CartContainer>
  )
}
