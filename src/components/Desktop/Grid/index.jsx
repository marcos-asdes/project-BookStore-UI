import React from 'react'

import Book from './Book'

import { GridContainer } from './style'

import { nSeed } from './seed'

export default function Grid() {
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  const newSeed = shuffleArray(nSeed)

  return (
    <GridContainer>
      {newSeed.map(e => {
        return (
          <Book
            key={e.id}
            title={e.title}
            author={e.author}
            imageURL={e.imageURL}
            price={e.price}
          />
        )
      })}
    </GridContainer>
  )
}
