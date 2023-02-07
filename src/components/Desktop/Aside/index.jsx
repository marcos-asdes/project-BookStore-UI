import React from 'react'

import { AsideContainer, IconContainer } from './style'

export default function Aside() {
  const typesBooks = [
    { iconName: 'time-outline', type: 'Recently added' },
    { iconName: 'prism-outline', type: 'Fiction' },
    { iconName: 'reader-outline', type: 'Nonfiction' },
    { iconName: 'school-outline', type: 'Education' }
  ]

  return (
    <AsideContainer>
      {typesBooks.map(e => {
        return (
          <IconContainer key={e.type}>
            <ion-icon name={e.iconName}></ion-icon>
            <p>{e.type}</p>
          </IconContainer>
        )
      })}
    </AsideContainer>
  )
}

// adicionar mais typesBooks
