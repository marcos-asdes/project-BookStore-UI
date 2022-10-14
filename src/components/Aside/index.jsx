import React from 'react'

import { AsideContainer } from './style'

export default function Aside() {
  const typesBooks = [
		{ iconName: "time-outline", type: "Recently added" },
		{ iconName: "prism-outline", type: "Fiction" },
		{ iconName: "reader-outline", type: "Nonfiction" },
		{ iconName: "school-outline", type: "Education" },
	]

  return (
    <AsideContainer>
			{
				typesBooks.map((e) => {
					return (
						<div className='icon-container' key={e.type}>
							<ion-icon name={e.iconName}></ion-icon>
							<p>{e.type}</p>
						</div>
					);
				})
			}
    </AsideContainer>
  )
}
