import React from 'react'

import styled from 'styled-components';

export default function PlaceAnAd() {

  return (
    <PlaceAnAdContainer>
      PlaceAnAd
    </PlaceAnAdContainer>
  )
}

const PlaceAnAdContainer = styled.button`
  width: 60%;
  height: 100%;
  box-shadow: 0 0 0 0;
  border: 1px solid #209CEE;
  background-color: #209CEE;
  color: white;
  outline: 0;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  letter-spacing: .1px;
  font-size: .8em;
  font-weight: 500;
`;