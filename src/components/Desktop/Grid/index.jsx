import React, { useState, useEffect } from 'react'

import Book from './Book'

import catalog from '../../../services/catalogApi'

import { GridContainer } from './style'

export default function Grid() {
  const [catalogData, setCatalogData] = useState([])
  const [loadingCatalog, setLoadingCatalog] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const response = await catalog()
      setCatalogData(response.data)
      setLoadingCatalog(false)
    })()
  }, [])

  console.log(catalogData)

  return (
    <GridContainer>
      {!loadingCatalog ? (
        catalogData.map(e => {
          return (
            <Book
              key={e.google_id}
              title={e.title}
              authors={e.authors}
              imageURL={e.image_link}
              price={e.amount}
            />
          )
        })
      ) : (
        <></>
      )}
    </GridContainer>
  )
}
