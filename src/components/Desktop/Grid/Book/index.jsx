import React from 'react'

import { BookContainer } from './style'

export default function Book(props) {
  let { title, authors, imageURL, price } = props

  if (price) {
    if (price === '0') {
      price = 'Free'
    } else {
      price = 'R$ ' + parseFloat(price).toFixed(2).replace('.', ',')
    }
  }

  let authorName
  if (authors.length === 0) {
    authorName = ''
  } else {
    authorName = authors[0].author.name
  }

  return (
    <BookContainer>
      <img src={imageURL} alt={title} />
      <h1>{title}</h1>
      <h2>{authorName}</h2>
      <h3>{price}</h3>
    </BookContainer>
  )
}
