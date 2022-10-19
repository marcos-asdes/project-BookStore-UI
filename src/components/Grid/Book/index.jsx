import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

export default function Book(props) {
  const { title, author, imageURL, price } = props

  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    imageURL: PropTypes.string,
    price: PropTypes.string
  }

  return (
    <BookContainer>
      <img src={imageURL} alt={title} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{price}</h3>
    </BookContainer>
  )
}

const BookContainer = styled.div`
  width: 120px;
  height: fit-content;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* background-color: red; */
  line-height: 1.2em;

  h1 {
    font-weight: 700;
    letter-spacing: 0.1px;
    margin-top: 5px;
    cursor: pointer;
    /* background-color: green; */
  }

  h2 {
    letter-spacing: 0.1px;
    cursor: pointer;
    /* background-color: blue; */
  }

  h3 {
    letter-spacing: 0.1px;
    cursor: pointer;
    /* background-color: yellow; */
    font-weight: 500;
  }

  img {
    align-self: center;
    width: 100px;
    height: 125px;
    min-width: 100px;
    min-height: 125px;
    cursor: pointer;
  }
`
