import React from 'react'
import PropTypes from 'prop-types'

import { BookContainer } from './style'

export default function Book(props) {
  let { title, author, imageURL, price } = props

  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    imageURL: PropTypes.string,
    price: PropTypes.string
  }

  price = price.replace('.', ',')

  return (
    <BookContainer>
      <img src={imageURL} alt={title} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{'R$ ' + price}</h3>
    </BookContainer>
  )
}
