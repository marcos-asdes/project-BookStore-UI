import React from 'react';
import styled from 'styled-components';

export default function Aside() {
  const typesBooks = [
		{ iconName: "time-outline", type: "Recently added" },
		{ iconName: "prism-outline", type: "Fiction" },
		{ iconName: "reader-outline", type: "Nonfiction" },
		{ iconName: "school-outline", type: "Education" },
	];
  return (
    <AsideContainer>
			{typesBooks.map((e) => {
				return (
					<div className='icon-container' key={e.type}>
						<ion-icon name={e.iconName}></ion-icon>
						<p>{e.type}</p>
					</div>
				);
			})}
    </AsideContainer>
  )
}

const AsideContainer = styled.aside`
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80px;
		width: 120px;
		margin-bottom: 15px;
		border-radius: 7px;
		font-family: "Inter";
		font-weight: 500;
		font-size: 14px;
		color: #209CEE;
    p {
      letter-spacing: .5px;
    }
		ion-icon {
			font-size: 28px;
			margin-bottom: 10px;
		}
	}
	.icon-container:hover {
		cursor: pointer;
		background-color: #d7d7d7;
		color: #57aae1;
	}
`;
